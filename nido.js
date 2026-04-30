var ze, E, Nn, Y, tn, $n, Dn, Ce, be, oe, jn, Ve, Ne, $e, ye = {}, we = [], wt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Se = Array.isArray;
function Z(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function Fe(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function On(n, t, i) {
  var r, o, a, s = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ze.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return ge(n, s, r, o, null);
}
function ge(n, t, i, r, o) {
  var a = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Nn, __i: -1, __u: 0 };
  return o == null && E.vnode != null && E.vnode(a), a;
}
function U(n) {
  return n.children;
}
function ve(n, t) {
  this.props = n, this.context = t;
}
function ne(n, t) {
  if (t == null) return n.__ ? ne(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? ne(n) : null;
}
function kt(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, r = [], o = [], a = Z({}, t);
    a.__v = t.__v + 1, E.vnode && E.vnode(a), He(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, r, i ?? ne(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, Fn(r, a, o), t.__e = t.__ = null, a.__e != i && Ln(a);
  }
}
function Ln(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Ln(n);
}
function an(n) {
  (!n.__d && (n.__d = !0) && Y.push(n) && !ke.__r++ || tn != E.debounceRendering) && ((tn = E.debounceRendering) || $n)(ke);
}
function ke() {
  try {
    for (var n, t = 1; Y.length; ) Y.length > t && Y.sort(Dn), n = Y.shift(), t = Y.length, kt(n);
  } finally {
    Y.length = ke.__r = 0;
  }
}
function Rn(n, t, i, r, o, a, s, c, p, d, h) {
  var l, b, f, y, g, u, _, m = r && r.__k || we, w = t.length;
  for (p = Mt(i, t, m, p, w), l = 0; l < w; l++) (f = i.__k[l]) != null && (b = f.__i != -1 && m[f.__i] || ye, f.__i = l, u = He(n, f, b, o, a, s, c, p, d, h), y = f.__e, f.ref && b.ref != f.ref && (b.ref && Ue(b.ref, null, f), h.push(f.ref, f.__c || y, f)), g == null && y != null && (g = y), (_ = !!(4 & f.__u)) || b.__k === f.__k ? (p = Vn(f, p, n, _), _ && b.__e && (b.__e = null)) : typeof f.type == "function" && u !== void 0 ? p = u : y && (p = y.nextSibling), f.__u &= -7);
  return i.__e = g, p;
}
function Mt(n, t, i, r, o) {
  var a, s, c, p, d, h = i.length, l = h, b = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = ge(null, s, null, null, null) : Se(s) ? s = n.__k[a] = ge(U, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = ge(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + b, s.__ = n, s.__b = n.__b + 1, c = null, (d = s.__i = It(s, i, p, l)) != -1 && (l--, (c = i[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (o > h ? b-- : o < h && b++), typeof s.type != "function" && (s.__u |= 4)) : d != p && (d == p - 1 ? b-- : d == p + 1 ? b++ : (d > p ? b-- : b++, s.__u |= 4))) : n.__k[a] = null;
  if (l) for (a = 0; a < h; a++) (c = i[a]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = ne(c)), Un(c, c));
  return r;
}
function Vn(n, t, i, r) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = Vn(o[a], t, i, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = ne(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function It(n, t, i, r) {
  var o, a, s, c = n.key, p = n.type, d = t[i], h = d != null && (2 & d.__u) == 0;
  if (d === null && c == null || h && c == d.key && p == d.type) return i;
  if (r > (h ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < t.length; ) if ((d = t[s = o >= 0 ? o-- : a++]) != null && (2 & d.__u) == 0 && c == d.key && p == d.type) return s;
  }
  return -1;
}
function rn(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || wt.test(t) ? i : i + "px";
}
function ue(n, t, i, r, o) {
  var a, s;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) i && t in i || rn(n.style, t, "");
    if (i) for (t in i) r && i[t] == r[t] || rn(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(jn, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = i, i ? r ? i[oe] = r[oe] : (i[oe] = Ve, n.addEventListener(t, a ? $e : Ne, a)) : n.removeEventListener(t, a ? $e : Ne, a);
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
function on(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[be] == null) t[be] = Ve++;
      else if (t[be] < i[oe]) return;
      return i(E.event ? E.event(t) : t);
    }
  };
}
function He(n, t, i, r, o, a, s, c, p, d) {
  var h, l, b, f, y, g, u, _, m, w, z, N, j, T, L, P = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), a = [c = t.__e = i.__e]), (h = E.__b) && h(t);
  e: if (typeof P == "function") try {
    if (_ = t.props, m = P.prototype && P.prototype.render, w = (h = P.contextType) && r[h.__c], z = h ? w ? w.props.value : h.__ : r, i.__c ? u = (l = t.__c = i.__c).__ = l.__E : (m ? t.__c = l = new P(_, z) : (t.__c = l = new ve(_, z), l.constructor = P, l.render = St), w && w.sub(l), l.state || (l.state = {}), l.__n = r, b = l.__d = !0, l.__h = [], l._sb = []), m && l.__s == null && (l.__s = l.state), m && P.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, P.getDerivedStateFromProps(_, l.__s))), f = l.props, y = l.state, l.__v = t, b) m && P.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), m && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (m && P.getDerivedStateFromProps == null && _ !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, z), t.__v == i.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, z) === !1) {
        t.__v != i.__v && (l.props = _, l.state = l.__s, l.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(V) {
          V && (V.__ = t);
        }), we.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && s.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, z), m && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(f, y, g);
      });
    }
    if (l.context = z, l.props = _, l.__P = n, l.__e = !1, N = E.__r, j = 0, m) l.state = l.__s, l.__d = !1, N && N(t), h = l.render(l.props, l.state, l.context), we.push.apply(l.__h, l._sb), l._sb = [];
    else do
      l.__d = !1, N && N(t), h = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++j < 25);
    l.state = l.__s, l.getChildContext != null && (r = Z(Z({}, r), l.getChildContext())), m && !b && l.getSnapshotBeforeUpdate != null && (g = l.getSnapshotBeforeUpdate(f, y)), T = h != null && h.type === U && h.key == null ? Hn(h.props.children) : h, c = Rn(n, Se(T) ? T : [T], t, i, r, o, a, s, c, p, d), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), u && (l.__E = l.__ = null);
  } catch (V) {
    if (t.__v = null, p || a != null) if (V.then) {
      for (t.__u |= p ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      a[a.indexOf(c)] = null, t.__e = c;
    } else {
      for (L = a.length; L--; ) Fe(a[L]);
      De(t);
    }
    else t.__e = i.__e, t.__k = i.__k, V.then || De(t);
    E.__e(V, t, i);
  }
  else a == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : c = t.__e = zt(i.__e, t, i, r, o, a, s, p, d);
  return (h = E.diffed) && h(t), 128 & t.__u ? void 0 : c;
}
function De(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(De));
}
function Fn(n, t, i) {
  for (var r = 0; r < i.length; r++) Ue(i[r], i[++r], i[++r]);
  E.__c && E.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      E.__e(a, o.__v);
    }
  });
}
function Hn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : Se(n) ? n.map(Hn) : Z({}, n);
}
function zt(n, t, i, r, o, a, s, c, p) {
  var d, h, l, b, f, y, g, u = i.props || ye, _ = t.props, m = t.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((f = a[d]) && "setAttribute" in f == !!m && (m ? f.localName == m : f.nodeType == 3)) {
      n = f, a[d] = null;
      break;
    }
  }
  if (n == null) {
    if (m == null) return document.createTextNode(_);
    n = document.createElementNS(o, m, _.is && _), c && (E.__m && E.__m(t, a), c = !1), a = null;
  }
  if (m == null) u === _ || c && n.data == _ || (n.data = _);
  else {
    if (a = a && ze.call(n.childNodes), !c && a != null) for (u = {}, d = 0; d < n.attributes.length; d++) u[(f = n.attributes[d]).name] = f.value;
    for (d in u) f = u[d], d == "dangerouslySetInnerHTML" ? l = f : d == "children" || d in _ || d == "value" && "defaultValue" in _ || d == "checked" && "defaultChecked" in _ || ue(n, d, null, f, o);
    for (d in _) f = _[d], d == "children" ? b = f : d == "dangerouslySetInnerHTML" ? h = f : d == "value" ? y = f : d == "checked" ? g = f : c && typeof f != "function" || u[d] === f || ue(n, d, f, u[d], o);
    if (h) c || l && (h.__html == l.__html || h.__html == n.innerHTML) || (n.innerHTML = h.__html), t.__k = [];
    else if (l && (n.innerHTML = ""), Rn(t.type == "template" ? n.content : n, Se(b) ? b : [b], t, i, r, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : i.__k && ne(i, 0), c, p), a != null) for (d = a.length; d--; ) Fe(a[d]);
    c || (d = "value", m == "progress" && y == null ? n.removeAttribute("value") : y != null && (y !== n[d] || m == "progress" && !y || m == "option" && y != u[d]) && ue(n, d, y, u[d], o), d = "checked", g != null && g != n[d] && ue(n, d, g, u[d], o));
  }
  return n;
}
function Ue(n, t, i) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    E.__e(o, i);
  }
}
function Un(n, t, i) {
  var r, o;
  if (E.unmount && E.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || Ue(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      E.__e(a, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && Un(r[o], t, i || typeof n.type != "function");
  i || Fe(n.__e), n.__c = n.__ = n.__e = void 0;
}
function St(n, t, i) {
  return this.constructor(n, i);
}
function sn(n, t, i) {
  var r, o, a, s;
  t == document && (t = document.documentElement), E.__ && E.__(n, t), o = (r = !1) ? null : t.__k, a = [], s = [], He(t, n = t.__k = On(U, null, [n]), o || ye, ye, t.namespaceURI, o ? null : t.firstChild ? ze.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, r, s), Fn(a, n, s);
}
ze = we.slice, E = { __e: function(n, t, i, r) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    n = c;
  }
  throw n;
} }, Nn = 0, ve.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof n == "function" && (n = n(Z({}, i), this.props)), n && Z(i, n), n != null && this.__v && (t && this._sb.push(t), an(this));
}, ve.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), an(this));
}, ve.prototype.render = U, Y = [], $n = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Dn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, ke.__r = 0, Ce = Math.random().toString(8), be = "__d" + Ce, oe = "__a" + Ce, jn = /(PointerCapture)$|Capture$/i, Ve = 0, Ne = on(!1), $e = on(!0);
var Ct = 0;
function e(n, t, i, r, o, a) {
  t || (t = {});
  var s, c, p = t;
  if ("ref" in p) for (c in p = {}, t) c == "ref" ? s = t[c] : p[c] = t[c];
  var d = { type: n, props: p, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ct, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (c in s) p[c] === void 0 && (p[c] = s[c]);
  return E.vnode && E.vnode(d), d;
}
var le, D, Ae, cn, de = 0, Wn = [], O = E, ln = O.__b, dn = O.__r, pn = O.diffed, un = O.__c, hn = O.unmount, _n = O.__;
function We(n, t) {
  O.__h && O.__h(D, n, de || t), de = 0;
  var i = D.__H || (D.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function k(n) {
  return de = 1, At(Zn, n);
}
function At(n, t, i) {
  var r = We(le++, 2);
  if (r.t = n, !r.__c && (r.__ = [Zn(void 0, t), function(c) {
    var p = r.__N ? r.__N[0] : r.__[0], d = r.t(p, c);
    p !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = D, !D.__f)) {
    var o = function(c, p, d) {
      if (!r.__c.__H) return !0;
      var h = r.__c.__H.__.filter(function(b) {
        return b.__c;
      });
      if (h.every(function(b) {
        return !b.__N;
      })) return !a || a.call(this, c, p, d);
      var l = r.__c.props !== c;
      return h.some(function(b) {
        if (b.__N) {
          var f = b.__[0];
          b.__ = b.__N, b.__N = void 0, f !== b.__[0] && (l = !0);
        }
      }), a && a.call(this, c, p, d) || l;
    };
    D.__f = !0;
    var a = D.shouldComponentUpdate, s = D.componentWillUpdate;
    D.componentWillUpdate = function(c, p, d) {
      if (this.__e) {
        var h = a;
        a = void 0, o(c, p, d), a = h;
      }
      s && s.call(this, c, p, d);
    }, D.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function X(n, t) {
  var i = We(le++, 3);
  !O.__s && Bn(i.__H, t) && (i.__ = n, i.u = t, D.__H.__h.push(i));
}
function ee(n) {
  return de = 5, $(function() {
    return { current: n };
  }, []);
}
function $(n, t) {
  var i = We(le++, 7);
  return Bn(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function fn(n, t) {
  return de = 8, $(function() {
    return n;
  }, t);
}
function Et() {
  for (var n; n = Wn.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(xe), t.__h.some(je), t.__h = [];
    } catch (i) {
      t.__h = [], O.__e(i, n.__v);
    }
  }
}
O.__b = function(n) {
  D = null, ln && ln(n);
}, O.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), _n && _n(n, t);
}, O.__r = function(n) {
  dn && dn(n), le = 0;
  var t = (D = n.__c).__H;
  t && (Ae === D ? (t.__h = [], D.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(xe), t.__h.some(je), t.__h = [], le = 0)), Ae = D;
}, O.diffed = function(n) {
  pn && pn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Wn.push(t) !== 1 && cn === O.requestAnimationFrame || ((cn = O.requestAnimationFrame) || Tt)(Et)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), Ae = D = null;
}, O.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(xe), i.__h = i.__h.filter(function(r) {
        return !r.__ || je(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], O.__e(r, i.__v);
    }
  }), un && un(n, t);
}, O.unmount = function(n) {
  hn && hn(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(r) {
    try {
      xe(r);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && O.__e(t, i.__v));
};
var mn = typeof requestAnimationFrame == "function";
function Tt(n) {
  var t, i = function() {
    clearTimeout(r), mn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(i, 35);
  mn && (t = requestAnimationFrame(i));
}
function xe(n) {
  var t = D, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), D = t;
}
function je(n) {
  var t = D;
  n.__c = n.__(), D = t;
}
function Bn(n, t) {
  return !n || n.length !== t.length || t.some(function(i, r) {
    return i !== n[r];
  });
}
function Zn(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function Pt(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, r) => i.name.localeCompare(r.name, "fr"));
}
async function Nt(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function $t(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function Dt(n) {
  return n.split(".")[0] ?? "";
}
function jt(n, t, i) {
  const r = new Map(i.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, c] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), h = p?.name ?? c.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: Dt(s),
      area_id: d,
      friendly_name: h,
      state: c
    });
  }
  return a;
}
function Ot(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const r = t.get(i.area_id) ?? [];
    r.push(i), t.set(i.area_id, r);
  }
  return t;
}
function Yn(n) {
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
function qn(n) {
  const t = {};
  for (const i of n) {
    if (i.domain !== "sensor") continue;
    const r = i.state.attributes.device_class, o = i.state.attributes.unit_of_measurement ?? "", a = i.state.state;
    a === "unavailable" || a === "unknown" || (r === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : r === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : r === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
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
}, Jn = ["terracotta", "miel", "sauge", "cosy"], Lt = ["light", "dark"];
function W() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Rt() {
  const n = W();
  if (!n) return [];
  const t = n.getItem(R.favorites);
  if (!t) return [];
  try {
    const i = JSON.parse(t);
    return Array.isArray(i) ? i.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function Oe(n) {
  const t = W();
  t && t.setItem(R.favorites, JSON.stringify(n));
}
function Be(n) {
  const t = W();
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
function Ze(n, t) {
  const i = W();
  i && i.setItem(n, JSON.stringify(t));
}
const Vt = () => Be(R.exposed), bn = (n) => Ze(R.exposed, n), Ft = () => Be(R.excludedUsers), gn = (n) => Ze(R.excludedUsers, n), Ht = () => Be(R.roomsOrder), Ut = (n) => Ze(R.roomsOrder, n);
function Wt() {
  const n = W();
  if (!n) return {};
  const t = n.getItem(R.roomEntitiesOrder);
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
function Bt(n) {
  const t = W();
  t && t.setItem(R.roomEntitiesOrder, JSON.stringify(n));
}
function vn() {
  return W()?.getItem(R.onboarded) === "1";
}
function xn(n) {
  const t = W();
  t && t.setItem(R.onboarded, "1");
}
function Xn() {
  const n = W(), t = n?.getItem(R.theme), i = n?.getItem(R.mode);
  return {
    theme: Jn.includes(t) ? t : "terracotta",
    mode: Lt.includes(i) ? i : "light"
  };
}
function yn(n, t) {
  const i = W();
  i && (i.setItem(R.theme, n), i.setItem(R.mode, t));
}
function Zt() {
  return W()?.getItem(R.lastNotificationRead) ?? null;
}
function Yt(n) {
  W()?.setItem(R.lastNotificationRead, n);
}
const qt = 6, Jt = 20;
function Xt(n, t) {
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
function Gn(n, t, i) {
  if (t.length === 0) return n;
  const r = new Map(n.map((s) => [i(s), s])), o = /* @__PURE__ */ new Set(), a = [];
  for (const s of t) {
    const c = r.get(s);
    c && !o.has(s) && (a.push(c), o.add(s));
  }
  for (const s of n) {
    const c = i(s);
    o.has(c) || (a.push(s), o.add(c));
  }
  return a;
}
function Le(n, t, i) {
  const [r, o] = k({ draggingId: null, overId: null }), a = ee(null), s = ee(null), c = ee(n);
  c.current = n;
  const p = ee(i);
  p.current = i;
  const d = ee(t);
  d.current = t;
  const h = fn((b, f) => {
    const y = s.current;
    if (!y) return null;
    const g = y.querySelectorAll("[data-drag-id]");
    for (const u of Array.from(g)) {
      const _ = u.getBoundingClientRect();
      if (b >= _.left && b <= _.right && f >= _.top && f <= _.bottom)
        return u.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  X(() => {
    const b = (g) => {
      const u = a.current;
      if (!u || u.pointerType !== "touch") return;
      if (u.entered) {
        g.preventDefault();
        return;
      }
      const _ = g.touches[0];
      if (!_) return;
      const m = _.clientX - u.x, w = _.clientY - u.y;
      Math.hypot(m, w) <= Jt ? g.preventDefault() : (u.timerId && clearTimeout(u.timerId), a.current = null);
    }, f = (g) => {
      const u = a.current;
      if (!u) return;
      if (u.pointerType === "touch") {
        if (!u.entered)
          return;
      } else if (!u.entered) {
        const m = g.clientX - u.x, w = g.clientY - u.y;
        if (Math.hypot(m, w) < qt) return;
        u.entered = !0, o({ draggingId: u.id, overId: null });
      }
      const _ = h(g.clientX, g.clientY);
      o((m) => m.overId === _ ? m : { ...m, overId: _ });
    }, y = () => {
      const g = a.current;
      if (g?.timerId && clearTimeout(g.timerId), a.current = null, !g || !g.entered) return;
      const u = (_) => {
        _.preventDefault(), _.stopPropagation();
      };
      window.addEventListener("click", u, { capture: !0, once: !0 }), o((_) => {
        const { draggingId: m, overId: w } = _;
        if (m && w && m !== w) {
          const z = c.current, N = d.current, j = z.findIndex((L) => N(L) === m), T = z.findIndex((L) => N(L) === w);
          if (j >= 0 && T >= 0) {
            const L = [...z], [P] = L.splice(j, 1);
            L.splice(T, 0, P), p.current(L);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", f), document.addEventListener("pointerup", y), document.addEventListener("pointercancel", y), document.addEventListener("touchmove", b, { passive: !1 }), () => {
      document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", y), document.removeEventListener("pointercancel", y), document.removeEventListener("touchmove", b);
    };
  }, [h]);
  const l = fn(
    (b) => {
      const f = r.draggingId === b, y = r.draggingId !== null && r.draggingId !== b && r.overId === b;
      return {
        "data-drag-id": b,
        "data-dragging": f ? "true" : void 0,
        "data-drag-over": y ? "true" : void 0,
        onPointerDown: (g) => {
          if (g.button !== void 0 && g.button !== 0) return;
          const u = g.currentTarget;
          if (!Xt(g.target, u))
            if (g.pointerType === "touch") {
              const _ = window.setTimeout(() => {
                const m = a.current;
                m && m.id === b && !m.entered && (m.entered = !0, o({ draggingId: b, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              a.current = { id: b, x: g.clientX, y: g.clientY, entered: !1, pointerType: "touch", timerId: _ };
            } else
              a.current = { id: b, x: g.clientX, y: g.clientY, entered: !1, pointerType: g.pointerType };
        }
      };
    },
    [r.draggingId, r.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: l,
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
), Ye = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), Kn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), Gt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), Kt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), qe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), Je = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), wn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), kn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), Qt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), se = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), q = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), ei = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), ni = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), pe = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), Xe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), ti = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), Ge = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), ii = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), ai = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), ri = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), oi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), te = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), Qn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), et = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), he = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), Ke = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), nt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), tt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), Mn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Ee = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Te = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), si = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), In = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), ci = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), li = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), Qe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), di = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), pi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), ui = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), hi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), _i = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), fi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), mi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Me = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), en = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), nn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), zn = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), bi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), gi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), vi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), xi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), Ie = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), yi = (n) => /* @__PURE__ */ e(x, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), it = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), wi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ki = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), Mi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Ii = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), zi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), Si = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), Ci = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), Ai = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), Ei = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Ti = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), at = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), Pi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), Ni = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), $i = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), Di = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] });
function ji(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function rt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [c, p] = k(!1), [d, h] = k(null), l = d ?? ji(t.state), b = async () => {
    if (!s) {
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
  }, g = [
    "n-card",
    i ? a ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    a ? `breathe-${r}` : "",
    c ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: g, "data-hero": i ? "true" : "false", "data-on": a ? "true" : "false", children: [
    a && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ye, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || c,
          onClick: b,
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
          l,
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
          value: l,
          style: { "--val": `${(l - 1) / 99 * 100}%` },
          onInput: (u) => f(Number(u.target.value))
        }
      )
    ] }),
    !a && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Oi(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function ot({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state === "unavailable", [o, a] = k(null), s = o ?? Oi(t.state), c = s > 0, p = async (d) => {
    a(d);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: d
      });
    } finally {
      setTimeout(() => a(null), 50);
    }
  };
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": c ? "true" : "false", children: /* @__PURE__ */ e("div", { class: "n-card", "data-on": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(qe, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": d / 6 * 100 < s ? "true" : "false"
        },
        d
      )) })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !r && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          onInput: (d) => p(Number(d.target.value))
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
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function st({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2
}) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", [s, c] = k(!1), p = t.state.attributes.current_power_w, d = async () => {
    if (!a) {
      c(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        c(!1);
      }
    }
  }, h = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Je, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || s,
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
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Li = {
  door: wn,
  garage_door: wn,
  window: ni,
  smoke: kn,
  gas: kn,
  moisture: Qt,
  motion: se,
  occupancy: se,
  presence: se
}, Ri = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, Vi = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), Fi = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function ct({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.state === "on", o = n.state.state === "unavailable", a = Li[i] ?? pe, s = Ri[i] ?? { on: "Actif", off: "Inactif" }, c = Vi.has(i), p = Fi.has(i), h = /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : r ? "on" : "off", "data-alert": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : r ? s.on : s.off })
  ] });
  return p ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": r ? "true" : "false", children: h }) : h;
}
const Hi = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Ui = {
  heat: ii,
  cool: ai,
  heat_cool: q,
  auto: q,
  dry: q,
  fan_only: q
};
function lt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2
}) {
  const o = t.state.state === "unavailable", a = t.state.state, s = a !== "off" && !o, c = t.state.attributes.current_temperature, p = t.state.attributes.temperature, d = t.state.attributes.min_temp ?? 7, h = t.state.attributes.max_temp ?? 35, l = t.state.attributes.target_temp_step ?? 0.5, [b, f] = k(null), y = b ?? p ?? c ?? 20, g = async (m) => {
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
  }, u = Ui[a] ?? q, _ = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(u, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Hi[a] ?? a })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(U, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(y * 10) / 10,
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
            onClick: () => g(y - l),
            disabled: y - l < d,
            children: /* @__PURE__ */ e(ri, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => g(y + l),
            disabled: y + l > h,
            children: /* @__PURE__ */ e(oi, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function dt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "locked", s = r === "jammed", c = r === "locking" || r === "unlocking", [p, d] = k(!1), h = async () => {
    if (!(o || c || p)) {
      d(!0);
      try {
        await n.callService("lock", a ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        d(!1);
      }
    }
  }, l = o ? "Indisponible" : s ? "Bloquée" : c ? r === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? Xe : ti, { size: 20 }) }),
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
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: l })
      ]
    }
  );
}
const Wi = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function pt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", c = o === "error", p = t.state.attributes.battery_level, [d, h] = k(!1), l = async (f) => {
    if (!(a || d)) {
      h(!0);
      try {
        await n.callService("vacuum", f, { entity_id: t.entity_id });
      } finally {
        h(!1);
      }
    }
  }, b = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: b,
      "data-on": s ? "true" : "false",
      "data-alert": c ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ge, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(et, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Wi[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || s,
              onClick: () => l("start"),
              children: [
                /* @__PURE__ */ e(te, { size: 14 }),
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
              onClick: () => l("return_to_base"),
              children: [
                /* @__PURE__ */ e(Qn, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Bi = {
  temperature: q,
  humidity: ei,
  power: he,
  energy: he,
  current: he,
  voltage: he,
  illuminance: Ke,
  pressure: ci,
  battery: et
};
function Zi(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function ut({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = Bi[i] ?? li, a = n.state.state === "unavailable", { value: s, unit: c } = Zi(n.state.state, r, i);
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
const Yi = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function ht({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 4
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "playing", c = o === "off" || o === "standby", p = t.state.attributes.media_title, d = t.state.attributes.media_artist, h = t.state.attributes.app_name, l = t.state.attributes.volume_level, [b, f] = k(null), y = b ?? l ?? 0, g = async (m, w = {}) => {
    a || await n.callService("media_player", m, {
      entity_id: t.entity_id,
      ...w
    });
  }, u = async (m) => {
    f(m);
    try {
      await g("volume_set", { volume_level: m });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, _ = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Qe, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Yi[o] ?? o })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !c && !a && (p || d || h) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", children: d }),
      h && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: p || d ? "4px" : "0" }, children: h })
    ] }),
    !a && /* @__PURE__ */ e(U, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => g("media_previous_track"),
            children: /* @__PURE__ */ e(pi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => g("media_play_pause"),
            children: s ? /* @__PURE__ */ e(di, { size: 18 }) : /* @__PURE__ */ e(te, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => g("media_next_track"),
            children: /* @__PURE__ */ e(ui, { size: 16 })
          }
        )
      ] }),
      typeof l == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(hi, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: y,
            style: { "--val": `${y * 100}%` },
            onInput: (m) => u(Number(m.target.value))
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const qi = {
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
}, Ji = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: _i },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: fi },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: mi }
];
function _t({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "triggered", s = r.startsWith("armed_"), c = r === "pending" || r === "arming" || r === "disarming", [p, d] = k(!1), h = async (l) => {
    if (!(o || p)) {
      d(!0);
      try {
        await n.callService("alarm_control_panel", l, { entity_id: t.entity_id });
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(pe, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: qi[r] ?? r })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Ji.map(({ id: l, service: b, label: f, Icon: y }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": r === l ? "true" : "false",
              disabled: p || c,
              onClick: () => h(b),
              children: [
                /* @__PURE__ */ e(y, { size: 14 }),
                /* @__PURE__ */ e("span", { children: f })
              ]
            },
            l
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || c || r === "disarmed",
              onClick: () => h("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const Xi = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Gi(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + i : i;
}
function ft({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "recording" || r === "streaming", [s, c] = k(0), [p, d] = k(!1), h = Gi(t, n), l = h ? `${h}${h.includes("?") ? "&" : "?"}t=${s}` : null;
  return X(() => {
    d(!1);
  }, [h]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-camera__frame", children: [
      l && !p ? /* @__PURE__ */ e(
        "img",
        {
          class: "n-camera__img",
          src: l,
          alt: t.friendly_name,
          loading: "lazy",
          onError: () => d(!0)
        }
      ) : /* @__PURE__ */ e("div", { class: "n-camera__placeholder", "aria-hidden": "true", style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ e(Me, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Me, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !l,
          onClick: () => {
            c(Date.now()), d(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: Xi[r] ?? r })
  ] });
}
function mt({ hass: n, entity: t, roomLabel: i, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, c = typeof s == "number", [p, d] = k(!1), [h, l] = k(null), b = h ?? (c ? s : o ? 100 : 0), f = async () => {
    if (!a) {
      d(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  }, y = async (u) => {
    l(u);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: u
      });
    } finally {
      setTimeout(() => l(null), 50);
    }
  }, g = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: g, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(en, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || p,
          onClick: f,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && c && !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Vitesse" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
          b,
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
          value: b,
          style: { "--val": `${b}%` },
          onInput: (u) => y(Number(u.target.value))
        }
      )
    ] }),
    !o && !a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function bt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = k(!1), [c, p] = k(!1), d = async () => {
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
      class: `n-card n-card--compact${c ? " is-flashing" : ""}`,
      "data-on": c ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(nn, { size: 18 }) : /* @__PURE__ */ e(te, { size: 16 }) }),
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
              /* @__PURE__ */ e(te, { size: 14 }),
              /* @__PURE__ */ e("span", { children: r ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const Ki = {
  "clear-night": { label: "Nuit claire", Icon: it },
  cloudy: { label: "Nuageux", Icon: nt },
  exceptional: { label: "Conditions extrêmes", Icon: Te },
  fog: { label: "Brouillard", Icon: si },
  hail: { label: "Grêle", Icon: Ee },
  lightning: { label: "Orage", Icon: Te },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Te },
  partlycloudy: { label: "Éclaircies", Icon: tt },
  pouring: { label: "Pluie battante", Icon: Mn },
  rainy: { label: "Pluvieux", Icon: Mn },
  snowy: { label: "Neigeux", Icon: Ee },
  "snowy-rainy": { label: "Neige et pluie", Icon: Ee },
  sunny: { label: "Ensoleillé", Icon: Ke },
  windy: { label: "Venteux", Icon: In },
  "windy-variant": { label: "Venteux", Icon: In }
};
function ce(n) {
  return Ki[n] ?? { label: n || "—", Icon: nt };
}
function gt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function vt({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = ce(n.state.state), a = n.state.attributes.temperature_unit ?? "°", s = gt(n.state.attributes.temperature, a), c = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof c == "number" && Number.isFinite(c) && /* @__PURE__ */ e(U, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(c),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Sn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = ce(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = gt(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function Qi(n, t) {
  const i = t.split(".")[1] || "", r = Object.values(n.states).filter((c) => c.entity_id.startsWith("sensor."));
  let o, a, s;
  for (const c of r)
    c.entity_id.endsWith("_next_rain") && (c.entity_id.includes(i) || !o) && (o = c), c.entity_id.endsWith("_weather_alert") && (c.entity_id.includes(i) || !a) && (a = c), c.entity_id.endsWith("_uv") && (c.entity_id.includes(i) || !s) && (s = c);
  return { nextRain: o, weatherAlert: a, uvIndex: s };
}
function ea({ hass: n, weatherEntityId: t, onClose: i }) {
  const [r, o] = k([]), [a, s] = k([]), c = n.states[t], { nextRain: p, weatherAlert: d, uvIndex: h } = Qi(n, t);
  if (X(() => {
    let _ = !1;
    async function m() {
      try {
        const w = async (j) => {
          try {
            const T = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: j },
              target: { entity_id: t },
              return_response: !0
            });
            return T?.response?.[t]?.forecast || T?.[t]?.forecast || [];
          } catch (T) {
            return console.warn(`Failed to fetch ${j} forecast:`, T), [];
          }
        }, [z, N] = await Promise.all([
          w("daily"),
          w("hourly")
        ]);
        if (_) return;
        o(z), s(N);
      } catch (w) {
        console.error("Failed to fetch weather forecasts", w);
      }
    }
    return c?.attributes.forecast ? o(c.attributes.forecast) : m(), () => {
      _ = !0;
    };
  }, [n, t]), !c) return null;
  const l = ce(c.state), b = c.attributes.temperature_unit || "°C", f = d?.state, y = f === "Rouge" ? "#ff4d4f" : f === "Orange" ? "#faad14" : f === "Jaune" ? "#fadb14" : null, g = d?.attributes ? Object.entries(d.attributes).filter(([_, m]) => m === f && _ !== "friendly_name" && _ !== "icon").map(([_]) => _).join(", ") : "", u = g ? `Vigilance ${f} : ${g}` : `Vigilance ${f}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }),
        /* @__PURE__ */ e("button", { type: "button", class: "nido-weather-panel__close", onClick: i, "aria-label": "Fermer", children: /* @__PURE__ */ e(Ie, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(l.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              c.attributes.temperature,
              b
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: l.label })
          ] })
        ] }),
        y && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${y}22`, color: y, border: `1px solid ${y}55` }, children: [
          /* @__PURE__ */ e(at, { size: 20 }),
          /* @__PURE__ */ e("span", { children: u })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Pi, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          h && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Ni, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: h.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((_, m) => {
            const w = ce(_.condition), z = new Date(_.datetime);
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
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: r.slice(0, 5).map((_, m) => {
            const w = ce(_.condition), z = new Date(_.datetime), N = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(z);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: m === 0 ? "Aujourd'hui" : N }),
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
function xt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? Si : /(chambre|bedroom)/.test(t) ? Ci : /(cuisine|kitchen)/.test(t) ? Ai : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? Ei : /(entrée|entree|hall|couloir)/.test(t) ? Ti : Qn;
}
const na = {
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
  weather: "Météo"
};
function ta({ hass: n, notifications: t, onClose: i }) {
  const r = async (o) => {
    try {
      await n.callService("script", "nido_dismiss_notification", { id: o });
    } catch (a) {
      console.warn("Failed to dismiss notification", a);
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
            children: /* @__PURE__ */ e(Ie, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: t.length === 0 ? /* @__PURE__ */ e("div", { class: "nido-notification-empty", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(Kn, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((o) => {
        const a = o.type === "warning" ? at : o.type === "success" ? Di : $i, s = `nido-notification-item--${o.type}`, p = new Date(o.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${s}`, children: [
          /* @__PURE__ */ e("div", { class: "nido-notification-item__icon", children: /* @__PURE__ */ e(a, { size: 20 }) }),
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
              onClick: () => r(o.id),
              "aria-label": "Supprimer",
              children: /* @__PURE__ */ e(Ie, { size: 14 })
            }
          )
        ] }, o.id);
      }) }) })
    ] })
  ] });
}
const ia = /* @__PURE__ */ new Set([
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
  "weather"
]);
function aa(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function ra(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(rt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(ot, { ...i }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(st, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ct, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(lt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(dt, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(pt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(ut, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(ht, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(_t, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(ft, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(mt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(bt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(vt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    default:
      return null;
  }
}
function oa(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function sa(n, t) {
  const i = new Map(t.map((o) => [oa(o.name), o.area_id])), r = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const a = o.state.toLowerCase(), s = i.get(a);
    if (!s) continue;
    const c = o.entity_id.slice(7), p = c.slice(c.lastIndexOf("_") + 1);
    if (!p) continue;
    const h = n.states[`person.${p}`]?.attributes.entity_picture, l = r.get(s) ?? /* @__PURE__ */ new Map();
    l.has(p) || l.set(p, { name: p, picture: h }), r.set(s, l);
  }
  return new Map(
    Array.from(r.entries()).map(([o, a]) => [o, Array.from(a.values())])
  );
}
function ca({ area: n, entities: t, accent: i = !1, onOpen: r, dragProps: o, presence: a }) {
  const s = xt(n.name), c = t.filter(
    (h) => h.domain !== "sensor" && h.domain !== "binary_sensor"
  ).length, p = t.filter(Yn).length, d = qn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${i ? "nido-room-card--accent" : ""}`,
      onClick: r,
      onKeyDown: (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), r());
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
              /* @__PURE__ */ e(Kt, { size: 16 })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-room-card__foot", children: [
            /* @__PURE__ */ e("div", { class: "nido-room-card__name", children: n.name }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__meta", children: [
              /* @__PURE__ */ e("span", { children: [
                c,
                " appareil",
                c > 1 ? "s" : ""
              ] }),
              p > 0 && /* @__PURE__ */ e(U, { children: [
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
function la({
  hass: n,
  areas: t,
  entities: i,
  favorites: r,
  exposed: o,
  roomsOrder: a,
  onConfigure: s,
  onOpenRoom: c,
  onReorderFavorites: p,
  onReorderRooms: d
}) {
  const h = n.user?.name ?? "vous", l = /* @__PURE__ */ new Date(), b = l.getHours(), { greeting: f, sub: y } = aa(b), g = `${String(b).padStart(2, "0")}:${String(l.getMinutes()).padStart(2, "0")}`, u = l.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (v) => v.toUpperCase()), _ = $(() => new Set(o), [o]), m = $(
    () => i.filter((v) => _.has(v.entity_id) && ia.has(v.domain)),
    [i, _]
  ), w = $(
    () => m.find((v) => v.domain === "weather"),
    [m]
  ), z = $(() => w ? Object.keys(n.states).some(
    (C) => C.startsWith("sensor.") && (C.endsWith("_next_rain") || C.endsWith("_weather_alert") || C.endsWith("_uv"))
  ) : !1, [n.states, w]), [N, j] = k(!1), [T, L] = k(!1), P = $(() => {
    const v = n.states["sensor.nido_notifications"];
    return !v || !v.attributes.notifications ? [] : v.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), V = $(() => Zt(), [T]), ie = $(() => {
    if (P.length === 0) return !1;
    if (!V) return !0;
    const v = P[P.length - 1];
    return new Date(v.timestamp) > new Date(V);
  }, [P, V]), G = () => {
    L(!0), Yt((/* @__PURE__ */ new Date()).toISOString());
  }, B = $(() => Object.values(n.states).filter(
    (v) => v.entity_id.startsWith("person.") && v.state === "home" && v.attributes.entity_picture
  ), [n.states]), ae = (v) => {
    if (!v) return null;
    if (v.startsWith("http")) return v;
    const C = n.hassUrl?.("");
    return C ? C.replace(/\/$/, "") + v : v;
  }, K = $(() => Ot(m), [m]), Q = $(() => sa(n, t), [n.states, t]), F = $(() => {
    const v = new Map(m.map((C) => [C.entity_id, C]));
    return r.map((C) => v.get(C)).filter((C) => !!C);
  }, [m, r]), J = $(() => {
    const v = t.filter((C) => (K.get(C.area_id) ?? []).length > 0);
    return Gn(v, a, (C) => C.area_id);
  }, [t, K, a]), S = Le(
    F,
    (v) => v.entity_id,
    (v) => p(v.map((C) => C.entity_id))
  ), H = Le(
    J,
    (v) => v.area_id,
    (v) => d(v.map((C) => C.area_id))
  );
  let M = 0;
  const I = F.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${S.isDragging ? "is-dragging" : ""}`,
        ref: (v) => {
          S.containerRef.current = v;
        },
        children: F.map((v) => {
          M += 1;
          const C = (M - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...S.itemPropsFor(v.entity_id),
              children: ra(v, {
                hass: n,
                areaName: t.find((yt) => yt.area_id === v.area_id)?.name ?? "",
                hero: M === 1 && v.domain === "light",
                variant: C
              })
            },
            v.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, A = m.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("span", { class: "nido-topbar__brand", children: "nido" }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          w && (z ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => j(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Sn, { entity: w })
            }
          ) : /* @__PURE__ */ e(Sn, { entity: w })),
          /* @__PURE__ */ e("div", { class: "nido-topbar__time", children: g }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: G,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(Kn, { size: 20 }),
                ie && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: s,
              children: /* @__PURE__ */ e(Gt, { size: 16 })
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
          B.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: B.map((v) => {
              const C = ae(v.attributes.entity_picture);
              return C ? /* @__PURE__ */ e(
                "img",
                {
                  src: C,
                  alt: v.attributes.friendly_name,
                  title: v.attributes.friendly_name,
                  class: "nido-home-pill__avatar"
                },
                v.entity_id
              ) : null;
            }) }),
            /* @__PURE__ */ e("span", { class: "nido-home-pill__text", children: "À la maison" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: y })
      ] }),
      A ? /* @__PURE__ */ e(U, { children: [
        I,
        J.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${H.isDragging ? "is-dragging" : ""}`,
              ref: (v) => {
                H.containerRef.current = v;
              },
              children: J.map((v, C) => /* @__PURE__ */ e(
                ca,
                {
                  area: v,
                  entities: K.get(v.area_id) ?? [],
                  accent: C === 0,
                  onOpen: () => c(v.area_id),
                  dragProps: H.itemPropsFor(v.area_id),
                  presence: Q.get(v.area_id)
                },
                v.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: s, children: "Personnaliser Nido" })
      ] })
    ] }),
    N && w && /* @__PURE__ */ e(
      ea,
      {
        hass: n,
        weatherEntityId: w.entity_id,
        onClose: () => j(!1)
      }
    ),
    T && /* @__PURE__ */ e(
      ta,
      {
        hass: n,
        notifications: P,
        onClose: () => L(!1)
      }
    )
  ] });
}
function da(n, t, i, r, o = !1) {
  const a = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(rt, { ...a, hero: o, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(ot, { ...a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(st, { ...a, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ct, { entity: n, roomLabel: i }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(lt, { ...a, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(dt, { ...a }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(pt, { ...a, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(ut, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(ht, { ...a, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(_t, { ...a }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(ft, { ...a }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(mt, { ...a, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(bt, { ...a }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(vt, { entity: n, roomLabel: i }, n.entity_id);
    default:
      return null;
  }
}
function pa({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: a
}) {
  const s = xt(t.name), c = qn(i), p = $(
    () => Gn(i, r, (u) => u.entity_id),
    [i, r]
  ), d = $(() => {
    const u = /* @__PURE__ */ new Map();
    for (const _ of p)
      u.set(_.domain, (u.get(_.domain) ?? 0) + 1);
    return Array.from(u.entries()).sort((_, m) => m[1] - _[1]);
  }, [p]), [h, l] = k("all"), b = $(
    () => h === "all" ? p : p.filter((u) => u.domain === h),
    [p, h]
  ), f = Le(
    b,
    (u) => u.entity_id,
    (u) => {
      const _ = new Set(b.map((z) => z.entity_id)), m = [...u], w = p.map(
        (z) => _.has(z.entity_id) ? m.shift() : z
      );
      a(w.map((z) => z.entity_id));
    }
  ), y = p.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, g = p.filter(Yn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Ii, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(zi, { size: 18 }) }) })
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
              y,
              " appareil",
              y > 1 ? "s" : ""
            ] }),
            g > 0 && /* @__PURE__ */ e(U, { children: [
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
          Pe,
          {
            label: "Température",
            value: c.temperature.value,
            unit: c.temperature.unit || "°"
          }
        ),
        c.humidity && /* @__PURE__ */ e(Cn, {}),
        c.humidity && /* @__PURE__ */ e(
          Pe,
          {
            label: "Humidité",
            value: Math.round(parseFloat(c.humidity.value)).toString(),
            unit: c.humidity.unit || "%"
          }
        ),
        c.illuminance && /* @__PURE__ */ e(Cn, {}),
        c.illuminance && /* @__PURE__ */ e(
          Pe,
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
          onClick: () => l("all"),
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
          onClick: () => l(u),
          children: [
            na[u] ?? u,
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
        children: b.map((u, _) => {
          const m = _ % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...f.itemPropsFor(u.entity_id),
              children: da(u, n, t.name, m, _ === 0 && u.domain === "light")
            },
            u.entity_id
          );
        })
      }
    )
  ] }) });
}
function Pe({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function Cn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const _e = 5, re = {
  light: { label: "Lumières", Icon: Ye },
  switch: { label: "Prises & switches", Icon: Je },
  cover: { label: "Volets & stores", Icon: qe },
  climate: { label: "Thermostats", Icon: q },
  lock: { label: "Serrures", Icon: Xe },
  vacuum: { label: "Aspirateurs", Icon: Ge },
  binary_sensor: { label: "Détecteurs", Icon: pe },
  sensor: { label: "Capteurs", Icon: se },
  media_player: { label: "Lecteurs média", Icon: Qe },
  alarm_control_panel: { label: "Alarmes", Icon: pe },
  camera: { label: "Caméras", Icon: Me },
  fan: { label: "Ventilateurs", Icon: en },
  scene: { label: "Scènes", Icon: nn },
  script: { label: "Scripts", Icon: te },
  weather: { label: "Météo", Icon: tt }
}, An = Object.keys(re), Re = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function ua(n) {
  const {
    hass: t,
    entities: i,
    areas: r,
    initialTheme: o,
    initialMode: a,
    initialExposed: s,
    initialFavorites: c,
    initialExcludedUsers: p,
    isReturning: d,
    onApplyTheme: h,
    onClose: l,
    onDone: b
  } = n, [f, y] = k(0), [g, u] = k(o), [_, m] = k(a), [w, z] = k(new Set(s)), [N, j] = k(new Set(c)), [T, L] = k(
    new Set(p)
  ), [P, V] = k(null), [ie, G] = k(null);
  X(() => {
    let M = !1;
    return t.callWS({ type: "config/auth/list" }).then((I) => {
      M || V(
        (I ?? []).filter((A) => !A.system_generated).sort((A, v) => A.name.localeCompare(v.name))
      );
    }).catch((I) => {
      M || (G(I instanceof Error ? I.message : String(I)), t.user && V([t.user]));
    }), () => {
      M = !0;
    };
  }, [t]);
  const B = () => y((M) => Math.min(_e - 1, M + 1)), ae = () => y((M) => Math.max(0, M - 1)), K = (M, I) => {
    u(M), m(I), h(M, I);
  }, Q = (M) => {
    z((I) => {
      const A = new Set(I);
      return A.has(M) ? (A.delete(M), j((v) => {
        if (!v.has(M)) return v;
        const C = new Set(v);
        return C.delete(M), C;
      })) : A.add(M), A;
    });
  }, F = (M) => {
    j((I) => {
      const A = new Set(I);
      return A.has(M) ? A.delete(M) : (A.add(M), z((v) => v.has(M) ? v : new Set(v).add(M))), A;
    });
  }, J = (M) => {
    L((I) => {
      const A = new Set(I);
      return A.has(M) ? A.delete(M) : A.add(M), A;
    });
  }, S = () => {
    const M = Array.from(w), I = Array.from(N).filter((v) => w.has(v)), A = Array.from(T);
    yn(g, _), bn(M), Oe(I), gn(A), xn(), b({
      exposed: M,
      favorites: I,
      theme: g,
      mode: _,
      excludedUsers: A
    });
  }, H = () => {
    yn(g, _), bn(Array.from(w)), Oe(Array.from(N).filter((M) => w.has(M))), gn(Array.from(T)), xn(), l();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(Mi, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: _e }, (M, I) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${I === f ? "is-active" : ""} ${I < f ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          f + 1,
          " / ",
          _e
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: H, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      f === 0 && /* @__PURE__ */ e(
        ha,
        {
          isReturning: d,
          exposedCount: w.size,
          favCount: N.size,
          themeLabel: Re[g].name,
          modeLabel: _ === "light" ? "Clair" : "Sombre",
          allowedUsersCount: P ? P.filter((M) => !T.has(M.id)).length : null
        }
      ),
      f === 1 && /* @__PURE__ */ e(_a, { entitiesCount: i.length, areasCount: r.length }),
      f === 2 && /* @__PURE__ */ e(
        fa,
        {
          entities: i,
          exposed: w,
          favs: N,
          onToggleExpose: Q,
          onToggleFav: F
        }
      ),
      f === 3 && /* @__PURE__ */ e(
        ma,
        {
          theme: g,
          mode: _,
          onPick: K,
          userName: t.user?.name ?? "vous"
        }
      ),
      f === 4 && /* @__PURE__ */ e(
        ba,
        {
          hass: t,
          users: P,
          error: ie,
          excluded: T,
          onToggleUser: J
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
          onClick: ae,
          children: [
            /* @__PURE__ */ e(bi, { size: 14 }),
            " Retour"
          ]
        }
      ),
      f < _e - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: B, children: [
        "Continuer ",
        /* @__PURE__ */ e(zn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: S, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(zn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const En = [
  Ye,
  qe,
  Je,
  q,
  Xe,
  Ge,
  se,
  Qe,
  pe,
  Me,
  en,
  nn,
  te
];
function fe({ offset: n, intervalMs: t }) {
  const [i, r] = k(n);
  X(() => {
    const a = setInterval(() => r((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = En[i % En.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function ha(n) {
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
          /* @__PURE__ */ e(me, { label: "Exposées", value: i }),
          /* @__PURE__ */ e(me, { label: "Favoris", value: r, accent: !0 }),
          /* @__PURE__ */ e(me, { label: "Ambiance", value: o, hint: a }),
          /* @__PURE__ */ e(
            me,
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(fe, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(fe, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(fe, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(fe, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function me(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function _a({ entitiesCount: n, areasCount: t }) {
  const [i, r] = k("scanning");
  return X(() => {
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(wi, { size: 18 }) }),
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
function fa(n) {
  const { entities: t, exposed: i, favs: r, onToggleExpose: o, onToggleFav: a } = n, s = $(() => {
    const u = /* @__PURE__ */ new Map();
    for (const _ of t)
      An.includes(_.domain) && (u.has(_.domain) || u.set(_.domain, []), u.get(_.domain).push(_));
    return Array.from(u.entries()).sort((_, m) => m[1].length - _[1].length);
  }, [t]), [c, p] = k(s[0]?.[0] ?? "light"), [d, h] = k(""), l = s.find(([u]) => u === c) ?? s[0], b = i.size, f = t.filter((u) => An.includes(u.domain)).length, y = d.trim().toLowerCase(), g = l ? y ? l[1].filter(
    (u) => (u.friendly_name ?? "").toLowerCase().includes(y) || u.entity_id.toLowerCase().includes(y)
  ) : l[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: b }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          f
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: b === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${b > 1 ? "s" : ""} exposé${b > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([u, _]) => {
        const m = re[u], w = m.Icon, z = _.filter((j) => i.has(j.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${u === c ? "is-active" : ""}`,
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
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: l && /* @__PURE__ */ e(U, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            l[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: re[l[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => g.forEach((u) => !i.has(u.entity_id) && o(u.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => g.forEach((u) => i.has(u.entity_id) && o(u.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(xi, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (u) => h(u.target.value),
            placeholder: `Rechercher dans ${re[l[0]].label.toLowerCase()}…`,
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
            children: /* @__PURE__ */ e(Ie, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: [
        g.length === 0 && /* @__PURE__ */ e("div", { class: "n-ob-ent__empty", children: [
          "Aucune entité ne correspond à « ",
          d,
          " »"
        ] }),
        g.map((u) => {
          const _ = i.has(u.entity_id), m = r.has(u.entity_id), w = re[u.domain].Icon;
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
                      z.stopPropagation(), a(u.entity_id);
                    },
                    children: m ? /* @__PURE__ */ e(yi, { size: 14 }) : /* @__PURE__ */ e(vi, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${_ ? "is-on" : ""}`, children: _ && /* @__PURE__ */ e(gi, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function ma(n) {
  const { theme: t, mode: i, userName: r, onPick: o } = n, a = Re[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: Jn.map((s) => {
        const c = Re[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, i),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: c.swatches.map((p, d) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: d === 0 ? "8px 0 0 8px" : d === 2 ? "0 8px 8px 0" : "0"
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
            class: `n-ob-theme__mode ${i === "light" ? "is-active" : ""}`,
            onClick: () => o(t, "light"),
            children: [
              /* @__PURE__ */ e(Ke, { size: 14 }),
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
              /* @__PURE__ */ e(it, { size: 14 }),
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
function ba(n) {
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
      const c = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${c ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(ki, { size: 18 }) }),
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
const ga = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function va({ hass: n, host: t }) {
  const [i, r] = k(null), [o, a] = k(null), [s, c] = k(null), [p, d] = k(null), h = $(() => Xn(), []), [l, b] = k(() => Rt()), [f, y] = k(() => Vt()), [g, u] = k(() => Ft()), [_, m] = k(() => Ht()), [w, z] = k(
    () => Wt()
  ), [N, j] = k(() => !vn()), [T, L] = k(
    { kind: "dashboard" }
  ), P = (S) => {
    b(S), Oe(S);
  }, V = (S) => {
    m(S), Ut(S);
  }, ie = (S, H) => {
    z((M) => {
      const I = { ...M, [S]: H };
      return Bt(I), I;
    });
  }, G = ee(n);
  G.current = n, X(() => {
    if (!n) return;
    let S = !1;
    const H = [], M = async () => {
      const I = G.current;
      if (I)
        try {
          const [A, v, C] = await Promise.all([
            Pt(I),
            Nt(I),
            $t(I)
          ]);
          if (S) return;
          r(A), a(v), c(C);
        } catch (A) {
          if (S) return;
          d(A instanceof Error ? A.message : String(A));
        }
    };
    return M(), Promise.all(
      ga.map(
        (I) => n.connection.subscribeEvents(() => {
          S || M();
        }, I)
      )
    ).then((I) => {
      if (S) {
        I.forEach((A) => A());
        return;
      }
      H.push(...I);
    }).catch((I) => console.warn("Nido: subscribeEvents failed", I)), () => {
      S = !0, H.forEach((I) => I());
    };
  }, [n != null]);
  const B = $(() => !n || !o || !s ? [] : jt(n, o, s), [n?.states, o, s]), ae = (S, H) => {
    t?.applyTheme?.(S, H);
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
  if (!!n.user && g.includes(n.user.id))
    return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-denied", children: [
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Nido n'est pas pour ",
        /* @__PURE__ */ e("em", { children: "vous" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Votre compte n'a pas accès à ce tableau de bord. Vous pouvez continuer à utiliser Home Assistant normalement." })
    ] }) });
  const Q = $(() => new Set(f), [f]), F = T.kind === "room" ? i.find((S) => S.area_id === T.areaId) ?? null : null, J = $(
    () => F ? B.filter(
      (S) => S.area_id === F.area_id && Q.has(S.entity_id)
    ) : [],
    [B, F, Q]
  );
  return /* @__PURE__ */ e(U, { children: [
    T.kind === "dashboard" || !F ? /* @__PURE__ */ e(
      la,
      {
        hass: n,
        areas: i,
        entities: B,
        favorites: l,
        exposed: f,
        roomsOrder: _,
        onConfigure: () => j(!0),
        onOpenRoom: (S) => L({ kind: "room", areaId: S }),
        onReorderFavorites: P,
        onReorderRooms: V
      }
    ) : /* @__PURE__ */ e(
      pa,
      {
        hass: n,
        area: F,
        entities: J,
        entitiesOrder: w[F.area_id] ?? [],
        onBack: () => L({ kind: "dashboard" }),
        onReorderEntities: (S) => ie(F.area_id, S)
      }
    ),
    N && /* @__PURE__ */ e(
      ua,
      {
        hass: n,
        entities: B,
        areas: i,
        initialTheme: h.theme,
        initialMode: h.mode,
        initialExposed: f,
        initialFavorites: l,
        initialExcludedUsers: g,
        isReturning: vn(),
        onApplyTheme: ae,
        onClose: () => j(!1),
        onDone: (S) => {
          y(S.exposed), b(S.favorites), u(S.excludedUsers), j(!1);
        }
      }
    )
  ] });
}
const xa = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', ya = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__time{font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;color:var(--ink-3)}.nido-topbar__brand{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:22px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true]{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;width:44px;height:44px;border-radius:50%;border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:10px;right:10px;width:10px;height:10px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card)}', Tn = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let Pn = !1;
function wa() {
  if (Pn || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Tn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Tn, document.head.appendChild(t);
  }
  Pn = !0;
}
class ka extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, wa();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${xa}
${ya}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = Xn();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    sn(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    sn(On(va, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", ka);
console.info(
  "%c NIDO %c v0.1.5 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
