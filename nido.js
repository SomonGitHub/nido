var De, N, Yn, ie, gn, Jn, Gn, Fe, Me, ue, Xn, Qe, Ze, qe, Ce = {}, Ae = [], Bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $e = Array.isArray;
function ee(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function en(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Kn(n, t, i) {
  var r, o, a, s = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? De.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return ze(n, s, r, o, null);
}
function ze(n, t, i, r, o) {
  var a = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Yn, __i: -1, __u: 0 };
  return o == null && N.vnode != null && N.vnode(a), a;
}
function G(n) {
  return n.children;
}
function Ie(n, t) {
  this.props = n, this.context = t;
}
function le(n, t) {
  if (t == null) return n.__ ? le(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? le(n) : null;
}
function Ut(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, r = [], o = [], a = ee({}, t);
    a.__v = t.__v + 1, N.vnode && N.vnode(a), nn(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, r, i ?? le(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, tt(r, a, o), t.__e = t.__ = null, a.__e != i && Qn(a);
  }
}
function Qn(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Qn(n);
}
function mn(n) {
  (!n.__d && (n.__d = !0) && ie.push(n) && !Ee.__r++ || gn != N.debounceRendering) && ((gn = N.debounceRendering) || Jn)(Ee);
}
function Ee() {
  try {
    for (var n, t = 1; ie.length; ) ie.length > t && ie.sort(Gn), n = ie.shift(), t = ie.length, Ut(n);
  } finally {
    ie.length = Ee.__r = 0;
  }
}
function et(n, t, i, r, o, a, s, l, p, d, u) {
  var c, _, m, v, b, g, f, h = r && r.__k || Ae, w = t.length;
  for (p = Zt(i, t, h, p, w), c = 0; c < w; c++) (m = i.__k[c]) != null && (_ = m.__i != -1 && h[m.__i] || Ce, m.__i = c, g = nn(n, m, _, o, a, s, l, p, d, u), v = m.__e, m.ref && _.ref != m.ref && (_.ref && tn(_.ref, null, m), u.push(m.ref, m.__c || v, m)), b == null && v != null && (b = v), (f = !!(4 & m.__u)) || _.__k === m.__k ? (p = nt(m, p, n, f), f && _.__e && (_.__e = null)) : typeof m.type == "function" && g !== void 0 ? p = g : v && (p = v.nextSibling), m.__u &= -7);
  return i.__e = b, p;
}
function Zt(n, t, i, r, o) {
  var a, s, l, p, d, u = i.length, c = u, _ = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = ze(null, s, null, null, null) : $e(s) ? s = n.__k[a] = ze(G, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = ze(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + _, s.__ = n, s.__b = n.__b + 1, l = null, (d = s.__i = qt(s, i, p, c)) != -1 && (c--, (l = i[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (o > u ? _-- : o < u && _++), typeof s.type != "function" && (s.__u |= 4)) : d != p && (d == p - 1 ? _-- : d == p + 1 ? _++ : (d > p ? _-- : _++, s.__u |= 4))) : n.__k[a] = null;
  if (c) for (a = 0; a < u; a++) (l = i[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = le(l)), at(l, l));
  return r;
}
function nt(n, t, i, r) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = nt(o[a], t, i, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = le(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function qt(n, t, i, r) {
  var o, a, s, l = n.key, p = n.type, d = t[i], u = d != null && (2 & d.__u) == 0;
  if (d === null && l == null || u && l == d.key && p == d.type) return i;
  if (r > (u ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < t.length; ) if ((d = t[s = o >= 0 ? o-- : a++]) != null && (2 & d.__u) == 0 && l == d.key && p == d.type) return s;
  }
  return -1;
}
function bn(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || Bt.test(t) ? i : i + "px";
}
function ve(n, t, i, r, o) {
  var a, s;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) i && t in i || bn(n.style, t, "");
    if (i) for (t in i) r && i[t] == r[t] || bn(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Xn, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = i, i ? r ? i[ue] = r[ue] : (i[ue] = Qe, n.addEventListener(t, a ? qe : Ze, a)) : n.removeEventListener(t, a ? qe : Ze, a);
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
function vn(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[Me] == null) t[Me] = Qe++;
      else if (t[Me] < i[ue]) return;
      return i(N.event ? N.event(t) : t);
    }
  };
}
function nn(n, t, i, r, o, a, s, l, p, d) {
  var u, c, _, m, v, b, g, f, h, w, C, S, T, O, V, j = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), a = [l = t.__e = i.__e]), (u = N.__b) && u(t);
  e: if (typeof j == "function") try {
    if (f = t.props, h = j.prototype && j.prototype.render, w = (u = j.contextType) && r[u.__c], C = u ? w ? w.props.value : u.__ : r, i.__c ? g = (c = t.__c = i.__c).__ = c.__E : (h ? t.__c = c = new j(f, C) : (t.__c = c = new Ie(f, C), c.constructor = j, c.render = Jt), w && w.sub(c), c.state || (c.state = {}), c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), h && c.__s == null && (c.__s = c.state), h && j.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ee({}, c.__s)), ee(c.__s, j.getDerivedStateFromProps(f, c.__s))), m = c.props, v = c.state, c.__v = t, _) h && j.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), h && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (h && j.getDerivedStateFromProps == null && f !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(f, C), t.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(f, c.__s, C) === !1) {
        t.__v != i.__v && (c.props = f, c.state = c.__s, c.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(q) {
          q && (q.__ = t);
        }), Ae.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(f, c.__s, C), h && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(m, v, b);
      });
    }
    if (c.context = C, c.props = f, c.__P = n, c.__e = !1, S = N.__r, T = 0, h) c.state = c.__s, c.__d = !1, S && S(t), u = c.render(c.props, c.state, c.context), Ae.push.apply(c.__h, c._sb), c._sb = [];
    else do
      c.__d = !1, S && S(t), u = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++T < 25);
    c.state = c.__s, c.getChildContext != null && (r = ee(ee({}, r), c.getChildContext())), h && !_ && c.getSnapshotBeforeUpdate != null && (b = c.getSnapshotBeforeUpdate(m, v)), O = u != null && u.type === G && u.key == null ? it(u.props.children) : u, l = et(n, $e(O) ? O : [O], t, i, r, o, a, s, l, p, d), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), g && (c.__E = c.__ = null);
  } catch (q) {
    if (t.__v = null, p || a != null) if (q.then) {
      for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      a[a.indexOf(l)] = null, t.__e = l;
    } else {
      for (V = a.length; V--; ) en(a[V]);
      Ye(t);
    }
    else t.__e = i.__e, t.__k = i.__k, q.then || Ye(t);
    N.__e(q, t, i);
  }
  else a == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : l = t.__e = Yt(i.__e, t, i, r, o, a, s, p, d);
  return (u = N.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Ye(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Ye));
}
function tt(n, t, i) {
  for (var r = 0; r < i.length; r++) tn(i[r], i[++r], i[++r]);
  N.__c && N.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      N.__e(a, o.__v);
    }
  });
}
function it(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : $e(n) ? n.map(it) : ee({}, n);
}
function Yt(n, t, i, r, o, a, s, l, p) {
  var d, u, c, _, m, v, b, g = i.props || Ce, f = t.props, h = t.type;
  if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((m = a[d]) && "setAttribute" in m == !!h && (h ? m.localName == h : m.nodeType == 3)) {
      n = m, a[d] = null;
      break;
    }
  }
  if (n == null) {
    if (h == null) return document.createTextNode(f);
    n = document.createElementNS(o, h, f.is && f), l && (N.__m && N.__m(t, a), l = !1), a = null;
  }
  if (h == null) g === f || l && n.data == f || (n.data = f);
  else {
    if (a = a && De.call(n.childNodes), !l && a != null) for (g = {}, d = 0; d < n.attributes.length; d++) g[(m = n.attributes[d]).name] = m.value;
    for (d in g) m = g[d], d == "dangerouslySetInnerHTML" ? c = m : d == "children" || d in f || d == "value" && "defaultValue" in f || d == "checked" && "defaultChecked" in f || ve(n, d, null, m, o);
    for (d in f) m = f[d], d == "children" ? _ = m : d == "dangerouslySetInnerHTML" ? u = m : d == "value" ? v = m : d == "checked" ? b = m : l && typeof m != "function" || g[d] === m || ve(n, d, m, g[d], o);
    if (u) l || c && (u.__html == c.__html || u.__html == n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (c && (n.innerHTML = ""), et(t.type == "template" ? n.content : n, $e(_) ? _ : [_], t, i, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : i.__k && le(i, 0), l, p), a != null) for (d = a.length; d--; ) en(a[d]);
    l || (d = "value", h == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || h == "progress" && !v || h == "option" && v != g[d]) && ve(n, d, v, g[d], o), d = "checked", b != null && b != n[d] && ve(n, d, b, g[d], o));
  }
  return n;
}
function tn(n, t, i) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    N.__e(o, i);
  }
}
function at(n, t, i) {
  var r, o;
  if (N.unmount && N.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || tn(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      N.__e(a, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && at(r[o], t, i || typeof n.type != "function");
  i || en(n.__e), n.__c = n.__ = n.__e = void 0;
}
function Jt(n, t, i) {
  return this.constructor(n, i);
}
function xn(n, t, i) {
  var r, o, a, s;
  t == document && (t = document.documentElement), N.__ && N.__(n, t), o = (r = !1) ? null : t.__k, a = [], s = [], nn(t, n = t.__k = Kn(G, null, [n]), o || Ce, Ce, t.namespaceURI, o ? null : t.firstChild ? De.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, r, s), tt(a, n, s);
}
De = Ae.slice, N = { __e: function(n, t, i, r) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    n = l;
  }
  throw n;
} }, Yn = 0, Ie.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = ee({}, this.state), typeof n == "function" && (n = n(ee({}, i), this.props)), n && ee(i, n), n != null && this.__v && (t && this._sb.push(t), mn(this));
}, Ie.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), mn(this));
}, Ie.prototype.render = G, ie = [], Jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Gn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Ee.__r = 0, Fe = Math.random().toString(8), Me = "__d" + Fe, ue = "__a" + Fe, Xn = /(PointerCapture)$|Capture$/i, Qe = 0, Ze = vn(!1), qe = vn(!0);
var Gt = 0;
function e(n, t, i, r, o, a) {
  t || (t = {});
  var s, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? s = t[l] : p[l] = t[l];
  var d = { type: n, props: p, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Gt, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (l in s) p[l] === void 0 && (p[l] = s[l]);
  return N.vnode && N.vnode(d), d;
}
var fe, H, Ve, yn, ge = 0, rt = [], W = N, wn = W.__b, kn = W.__r, Mn = W.diffed, zn = W.__c, In = W.unmount, Sn = W.__;
function an(n, t) {
  W.__h && W.__h(H, n, ge || t), ge = 0;
  var i = H.__H || (H.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function I(n) {
  return ge = 1, Xt(st, n);
}
function Xt(n, t, i) {
  var r = an(fe++, 2);
  if (r.t = n, !r.__c && (r.__ = [st(void 0, t), function(l) {
    var p = r.__N ? r.__N[0] : r.__[0], d = r.t(p, l);
    p !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = H, !H.__f)) {
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
    H.__f = !0;
    var a = H.shouldComponentUpdate, s = H.componentWillUpdate;
    H.componentWillUpdate = function(l, p, d) {
      if (this.__e) {
        var u = a;
        a = void 0, o(l, p, d), a = u;
      }
      s && s.call(this, l, p, d);
    }, H.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function J(n, t) {
  var i = an(fe++, 3);
  !W.__s && ot(i.__H, t) && (i.__ = n, i.u = t, H.__H.__h.push(i));
}
function B(n) {
  return ge = 5, L(function() {
    return { current: n };
  }, []);
}
function L(n, t) {
  var i = an(fe++, 7);
  return ot(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function Y(n, t) {
  return ge = 8, L(function() {
    return n;
  }, t);
}
function Kt() {
  for (var n; n = rt.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(Se), t.__h.some(Je), t.__h = [];
    } catch (i) {
      t.__h = [], W.__e(i, n.__v);
    }
  }
}
W.__b = function(n) {
  H = null, wn && wn(n);
}, W.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), Sn && Sn(n, t);
}, W.__r = function(n) {
  kn && kn(n), fe = 0;
  var t = (H = n.__c).__H;
  t && (Ve === H ? (t.__h = [], H.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(Se), t.__h.some(Je), t.__h = [], fe = 0)), Ve = H;
}, W.diffed = function(n) {
  Mn && Mn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (rt.push(t) !== 1 && yn === W.requestAnimationFrame || ((yn = W.requestAnimationFrame) || Qt)(Kt)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), Ve = H = null;
}, W.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(Se), i.__h = i.__h.filter(function(r) {
        return !r.__ || Je(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], W.__e(r, i.__v);
    }
  }), zn && zn(n, t);
}, W.unmount = function(n) {
  In && In(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(r) {
    try {
      Se(r);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && W.__e(t, i.__v));
};
var Cn = typeof requestAnimationFrame == "function";
function Qt(n) {
  var t, i = function() {
    clearTimeout(r), Cn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(i, 35);
  Cn && (t = requestAnimationFrame(i));
}
function Se(n) {
  var t = H, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), H = t;
}
function Je(n) {
  var t = H;
  n.__c = n.__(), H = t;
}
function ot(n, t) {
  return !n || n.length !== t.length || t.some(function(i, r) {
    return i !== n[r];
  });
}
function st(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function ei(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, r) => i.name.localeCompare(r.name, "fr"));
}
async function ni(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function ti(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function ii(n) {
  return n.split(".")[0] ?? "";
}
function ai(n, t, i) {
  const r = new Map(i.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, l] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), u = p?.name ?? l.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: ii(s),
      area_id: d,
      friendly_name: u,
      state: l
    });
  }
  return a;
}
function ri(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const r = t.get(i.area_id) ?? [];
    r.push(i), t.set(i.area_id, r);
  }
  return t;
}
function rn(n) {
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
function lt(n) {
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
}, ct = ["terracotta", "miel", "sauge", "cosy"], oi = ["light", "dark"];
function X() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function si() {
  const n = X();
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
function Ge(n) {
  const t = X();
  t && t.setItem(U.favorites, JSON.stringify(n));
}
function on(n) {
  const t = X();
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
function sn(n, t) {
  const i = X();
  i && i.setItem(n, JSON.stringify(t));
}
const li = () => on(U.exposed), An = (n) => sn(U.exposed, n), ci = () => on(U.excludedUsers), En = (n) => sn(U.excludedUsers, n), di = () => on(U.roomsOrder), pi = (n) => sn(U.roomsOrder, n);
function ui() {
  const n = X();
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
function hi(n) {
  const t = X();
  t && t.setItem(U.roomEntitiesOrder, JSON.stringify(n));
}
function Pn() {
  return X()?.getItem(U.onboarded) === "1";
}
function Tn(n) {
  const t = X();
  t && t.setItem(U.onboarded, "1");
}
function dt() {
  const n = X(), t = n?.getItem(U.theme), i = n?.getItem(U.mode);
  return {
    theme: ct.includes(t) ? t : "terracotta",
    mode: oi.includes(i) ? i : "light"
  };
}
function Dn(n, t) {
  const i = X();
  i && (i.setItem(U.theme, n), i.setItem(U.mode, t));
}
function _i() {
  return X()?.getItem(U.lastNotificationRead) ?? null;
}
function fi(n) {
  X()?.setItem(U.lastNotificationRead, n);
}
const gi = 6, mi = 20;
function bi(n, t) {
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
function pt(n, t, i) {
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
function Xe(n, t, i) {
  const [r, o] = I({ draggingId: null, overId: null }), a = B(null), s = B(null), l = B(n);
  l.current = n;
  const p = B(i);
  p.current = i;
  const d = B(t);
  d.current = t;
  const u = Y((_, m) => {
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
      const h = f.clientX - g.x, w = f.clientY - g.y;
      Math.hypot(h, w) <= mi ? b.preventDefault() : (g.timerId && clearTimeout(g.timerId), a.current = null);
    }, m = (b) => {
      const g = a.current;
      if (!g) return;
      if (g.pointerType === "touch") {
        if (!g.entered)
          return;
      } else if (!g.entered) {
        const h = b.clientX - g.x, w = b.clientY - g.y;
        if (Math.hypot(h, w) < gi) return;
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
        const { draggingId: h, overId: w } = f;
        if (h && w && h !== w) {
          const C = l.current, S = d.current, T = C.findIndex((V) => S(V) === h), O = C.findIndex((V) => S(V) === w);
          if (T >= 0 && O >= 0) {
            const V = [...C], [j] = V.splice(T, 1);
            V.splice(O, 0, j), p.current(V);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", m), document.addEventListener("pointerup", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", _, { passive: !1 }), () => {
      document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", _);
    };
  }, [u]);
  const c = Y(
    (_) => {
      const m = r.draggingId === _, v = r.draggingId !== null && r.draggingId !== _ && r.overId === _;
      return {
        "data-drag-id": _,
        "data-dragging": m ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const g = b.currentTarget;
          if (!bi(b.target, g))
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
), be = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), ut = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), vi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), xi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), ln = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), cn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), $n = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Nn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), yi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), he = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), ae = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), wi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), ki = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), me = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), dn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), Mi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), pn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), zi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), Ii = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), Si = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Ci = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), ce = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), ht = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), _t = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), xe = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), un = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), ft = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), gt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), On = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), He = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), We = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), Ai = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), jn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), Ei = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), Pi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), hn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), Ti = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), Di = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), $i = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), Ni = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), Oi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ji = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), Ri = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Pe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), _n = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), fn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), Rn = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Li = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), Fi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), Vi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Hi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), oe = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), Wi = (n) => /* @__PURE__ */ e(x, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), mt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), Bi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Ui = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), Zi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), qi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), Yi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), Ji = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), Gi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), Xi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), Ki = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Qi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), bt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), ea = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), na = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), ta = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), ia = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), vt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] }), aa = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
  /* @__PURE__ */ e("line", { x1: "12", y1: "2", x2: "12", y2: "12" })
] }), ra = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("path", { d: "M9 7h6M9 11h6M9 15h4" }),
  /* @__PURE__ */ e("path", { d: "M5 7h2M5 11h2M5 15h2" })
] });
function oa(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function xt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = I(!1), [d, u] = I(null), c = d ?? oa(t.state), _ = async () => {
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
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(be, { size: 20 }) }),
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
function sa(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function yt({ hass: n, entity: t, roomLabel: i, hero: r = !1 }) {
  const o = t.state.state === "unavailable", [a, s] = I(null), l = a ?? sa(t.state), p = l > 0, d = async (_) => {
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
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ln, { size: 20 }) }),
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
function wt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = I(!1), d = t.state.attributes.current_power_w, u = async () => {
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
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(cn, { size: 18 }) }),
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
const la = {
  door: $n,
  garage_door: $n,
  window: ki,
  smoke: Nn,
  gas: Nn,
  moisture: yi,
  motion: he,
  occupancy: he,
  presence: he
}, ca = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, da = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), pa = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function kt({ entity: n, roomLabel: t, hero: i = !1 }) {
  const r = n.state.attributes.device_class ?? "", o = n.state.state === "on", a = n.state.state === "unavailable", s = la[r] ?? me, l = ca[r] ?? { on: "Actif", off: "Inactif" }, p = da.has(r), d = pa.has(r), u = a ? "indisponible" : o ? "on" : "off", _ = ["n-card", i ? o ? "n-card--accent" : "n-card--accent-muted" : "n-card--compact"].filter(Boolean).join(" "), m = /* @__PURE__ */ e("div", { class: _, "data-hero": i ? "true" : "false", "data-status": u, "data-alert": p ? "true" : "false", children: [
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
const ua = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, ha = {
  heat: zi,
  cool: Ii,
  heat_cool: ae,
  auto: ae,
  dry: ae,
  fan_only: ae
};
function Mt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "unavailable", s = t.state.state, l = s !== "off" && !a, p = t.state.attributes.current_temperature, d = t.state.attributes.temperature, u = t.state.attributes.min_temp ?? 7, c = t.state.attributes.max_temp ?? 35, _ = t.state.attributes.target_temp_step ?? 0.5, [m, v] = I(null), b = m ?? d ?? p ?? 20, g = async (C) => {
    const S = Math.min(c, Math.max(u, C));
    v(S);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: S
      });
    } finally {
      setTimeout(() => v(null), 50);
    }
  }, f = ha[s] ?? ae, w = ["n-card", o ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: w, "data-hero": o ? "true" : "false", "data-on": l ? "true" : "false", children: [
    l && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(f, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ua[s] ?? s })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${o ? "n-title--xl" : ""}`, children: t.friendly_name }),
    !a && /* @__PURE__ */ e(G, { children: [
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
            children: /* @__PURE__ */ e(Si, { size: 16 })
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
            children: /* @__PURE__ */ e(Ci, { size: 16 })
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function zt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "locked", s = r === "jammed", l = r === "locking" || r === "unlocking", [p, d] = I(!1), u = async () => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? dn : Mi, { size: 20 }) }),
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
const _a = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function It({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", l = o === "error", p = t.state.attributes.battery_level, [d, u] = I(!1), c = async (m) => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(pn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(_t, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: _a[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || s,
              onClick: () => c("start"),
              children: [
                /* @__PURE__ */ e(ce, { size: 14 }),
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
                /* @__PURE__ */ e(ht, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const fa = {
  temperature: ae,
  humidity: wi,
  power: xe,
  energy: xe,
  current: xe,
  voltage: xe,
  illuminance: un,
  pressure: Ei,
  battery: _t
};
function ga(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function St({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = fa[i] ?? Pi, a = n.state.state === "unavailable", { value: s, unit: l } = ga(n.state.state, r, i);
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
const ma = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function Ct({
  hass: n,
  entity: t,
  roomLabel: i,
  hero: r = !1,
  breatheVariant: o = 4
}) {
  const a = t.state.state, s = a === "unavailable", l = a === "playing", p = a === "off" || a === "standby", d = t.state.attributes.media_title, u = t.state.attributes.media_artist, c = t.state.attributes.app_name, _ = t.state.attributes.volume_level, m = t.state.attributes.entity_picture, [v, b] = I(null), g = v ?? _ ?? 0, f = async (S, T = {}) => {
    s || await n.callService("media_player", S, {
      entity_id: t.entity_id,
      ...T
    });
  }, h = async (S) => {
    b(S);
    try {
      await f("volume_set", { volume_level: S });
    } finally {
      setTimeout(() => b(null), 50);
    }
  }, C = ["n-card", r ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${o}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: C, "data-hero": r ? "true" : "false", "data-on": l ? "true" : "false", children: [
    m && /* @__PURE__ */ e("div", { class: "n-media__bg", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("img", { src: m, alt: "" }),
      /* @__PURE__ */ e("div", { class: "n-media__bg-overlay" })
    ] }),
    l && r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", style: { alignItems: "center" }, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(hn, { size: 20 }) }),
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ma[a] ?? a })
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
          children: /* @__PURE__ */ e(aa, { size: 18 })
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
    !s && /* @__PURE__ */ e(G, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => f("media_previous_track"),
            children: /* @__PURE__ */ e(Di, { size: r ? 20 : 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": l ? "Pause" : "Lecture",
            onClick: () => f("media_play_pause"),
            children: l ? /* @__PURE__ */ e(Ti, { size: r ? 24 : 18 }) : /* @__PURE__ */ e(ce, { size: r ? 24 : 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => f("media_next_track"),
            children: /* @__PURE__ */ e($i, { size: r ? 20 : 16 })
          }
        )
      ] }),
      typeof _ == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(Ni, { size: 14 }),
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
            onInput: (S) => h(Number(S.target.value))
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const ba = {
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
}, va = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: Oi },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: ji },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: Ri }
];
function At({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "triggered", s = r.startsWith("armed_"), l = r === "pending" || r === "arming" || r === "disarming", [p, d] = I(!1), u = async (c) => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(me, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ba[r] ?? r })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          va.map(({ id: c, service: _, label: m, Icon: v }) => /* @__PURE__ */ e(
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
const xa = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function ya(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + i : i;
}
function Et({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "recording" || r === "streaming", [s, l] = I(0), [p, d] = I(!1), u = ya(t, n), c = u ? `${u}${u.includes("?") ? "&" : "?"}t=${s}` : null;
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
        /* @__PURE__ */ e(Pe, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Pe, { size: 18 }) }),
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
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: xa[r] ?? r })
  ] });
}
function Pt({ hass: n, entity: t, roomLabel: i, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, l = typeof s == "number", [p, d] = I(!1), [u, c] = I(null), _ = u ?? (l ? s : o ? 100 : 0), m = async () => {
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
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(_n, { size: 20 }) }),
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
function Tt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = I(!1), [l, p] = I(!1), d = async () => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(fn, { size: 18 }) : /* @__PURE__ */ e(ce, { size: 16 }) }),
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
              /* @__PURE__ */ e(ce, { size: 14 }),
              /* @__PURE__ */ e("span", { children: r ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const wa = {
  "clear-night": { label: "Nuit claire", Icon: mt },
  cloudy: { label: "Nuageux", Icon: ft },
  exceptional: { label: "Conditions extrêmes", Icon: We },
  fog: { label: "Brouillard", Icon: Ai },
  hail: { label: "Grêle", Icon: He },
  lightning: { label: "Orage", Icon: We },
  "lightning-rainy": { label: "Orage pluvieux", Icon: We },
  partlycloudy: { label: "Éclaircies", Icon: gt },
  pouring: { label: "Pluie battante", Icon: On },
  rainy: { label: "Pluvieux", Icon: On },
  snowy: { label: "Neigeux", Icon: He },
  "snowy-rainy": { label: "Neige et pluie", Icon: He },
  sunny: { label: "Ensoleillé", Icon: un },
  windy: { label: "Venteux", Icon: jn },
  "windy-variant": { label: "Venteux", Icon: jn }
};
function _e(n) {
  return wa[n] ?? { label: n || "—", Icon: ft };
}
function Dt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function $t({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = _e(n.state.state), a = n.state.attributes.temperature_unit ?? "°", s = Dt(n.state.attributes.temperature, a), l = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof l == "number" && Number.isFinite(l) && /* @__PURE__ */ e(G, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(l),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ln({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = _e(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = Dt(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function ka(n, t) {
  const i = t.split(".")[1] || "", r = Object.values(n.states).filter((l) => l.entity_id.startsWith("sensor."));
  let o, a, s;
  for (const l of r)
    l.entity_id.endsWith("_next_rain") && (l.entity_id.includes(i) || !o) && (o = l), l.entity_id.endsWith("_weather_alert") && (l.entity_id.includes(i) || !a) && (a = l), l.entity_id.endsWith("_uv") && (l.entity_id.includes(i) || !s) && (s = l);
  return { nextRain: o, weatherAlert: a, uvIndex: s };
}
function Ma({ hass: n, weatherEntityId: t, onClose: i }) {
  const [r, o] = I([]), [a, s] = I([]), l = n.states[t], { nextRain: p, weatherAlert: d, uvIndex: u } = ka(n, t);
  if (J(() => {
    let f = !1;
    async function h() {
      try {
        const w = async (T) => {
          try {
            const O = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: T },
              target: { entity_id: t },
              return_response: !0
            });
            return O?.response?.[t]?.forecast || O?.[t]?.forecast || [];
          } catch (O) {
            return console.warn(`Failed to fetch ${T} forecast:`, O), [];
          }
        }, [C, S] = await Promise.all([
          w("daily"),
          w("hourly")
        ]);
        if (f) return;
        o(C), s(S);
      } catch (w) {
        console.error("Failed to fetch weather forecasts", w);
      }
    }
    return l?.attributes.forecast ? o(l.attributes.forecast) : h(), () => {
      f = !0;
    };
  }, [n, t]), !l) return null;
  const c = _e(l.state), _ = l.attributes.temperature_unit || "°C", m = d?.state, v = m === "Rouge" ? "#ff4d4f" : m === "Orange" ? "#faad14" : m === "Jaune" ? "#fadb14" : null, b = d?.attributes ? Object.entries(d.attributes).filter(([f, h]) => h === m && f !== "friendly_name" && f !== "icon").map(([f]) => f).join(", ") : "", g = b ? `Vigilance ${m} : ${b}` : `Vigilance ${m}`;
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
          /* @__PURE__ */ e(bt, { size: 20 }),
          /* @__PURE__ */ e("span", { children: g })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(ea, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          u && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(na, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: u.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((f, h) => {
            const w = _e(f.condition), C = new Date(f.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                C.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
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
            const w = _e(f.condition), C = new Date(f.datetime), S = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(C);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: h === 0 ? "Aujourd'hui" : S }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
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
function Nt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? Ji : /(chambre|bedroom)/.test(t) ? Gi : /(cuisine|kitchen)/.test(t) ? Xi : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? Ki : /(entrée|entree|hall|couloir)/.test(t) ? Qi : ht;
}
const za = {
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
let de = null;
function Ia() {
  if (typeof window > "u") return null;
  const n = window.AudioContext ?? window.webkitAudioContext;
  return n ? (de || (de = new n()), de.state === "suspended" && de.resume().catch(() => {
  }), de) : null;
}
function Sa() {
  const n = Ia();
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
function Ca({ hass: n, notifications: t, onClose: i }) {
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
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(ut, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((a) => {
        const s = a.type === "warning" ? bt : a.type === "success" ? ia : ta, l = `nido-notification-item--${a.type}`, d = new Date(a.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
function Aa(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function Ea({ hass: n, entity: t, roomName: i }) {
  const [r, o] = I(!1), a = Aa(t), s = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${r ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(be, { size: 18 }) }),
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
function Pa({ hass: n, lights: t, areas: i, onClose: r }) {
  const [o, a] = I(!1), s = new Map(i.map((p) => [p.area_id, p.name])), l = async () => {
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
        Ea,
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
const Be = "nido.shoppingColor", Fn = "nido.shoppingSize", Ta = 600;
function Vn(n, t, i) {
  if (t.length < 2) return;
  n.lineWidth = i, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length - 1; o++) {
    const a = (t[o][0] + t[o + 1][0]) / 2, s = (t[o][1] + t[o + 1][1]) / 2;
    n.quadraticCurveTo(t[o][0], t[o][1], a, s);
  }
  const r = t[t.length - 1];
  n.lineTo(r[0], r[1]), n.stroke();
}
function Da({ hass: n, onClose: t, topicBase: i = "shopping" }) {
  const r = B(null), o = B(null), a = B([]), s = B(null), l = B(null), p = B({ w: 0, h: 0 }), d = B(null), u = B("nido-" + Math.random().toString(36).slice(2, 8)), [c, _] = I(() => localStorage.getItem(Be) || "#1a1410"), [m, v] = I(() => parseInt(localStorage.getItem(Fn) || "4", 10));
  J(() => {
    if (localStorage.getItem(Be)) return;
    const k = o.current;
    if (!k) return;
    const z = getComputedStyle(k).getPropertyValue("--ink-1").trim();
    if (!z) return;
    const P = document.createElement("div");
    P.style.color = z, document.body.appendChild(P);
    const R = getComputedStyle(P).color;
    document.body.removeChild(P);
    const M = R.match(/\d+/g);
    if (M && M.length >= 3) {
      const F = "#" + [+M[0], +M[1], +M[2]].map((A) => A.toString(16).padStart(2, "0")).join("");
      _(F);
    }
  }, []);
  const b = B(c), g = B(m);
  J(() => {
    b.current = c, localStorage.setItem(Be, c);
  }, [c]), J(() => {
    g.current = m, localStorage.setItem(Fn, String(m));
  }, [m]);
  const f = Y((k) => [k[0] * p.current.w, k[1] * p.current.h], []), h = Y(() => {
    const k = r.current;
    if (!k) return;
    const z = k.getContext("2d");
    if (!z) return;
    const P = p.current.w / Ta;
    z.clearRect(0, 0, p.current.w, p.current.h);
    for (const R of a.current)
      z.strokeStyle = R.color, Vn(z, R.points.map(f), R.size * P);
    s.current && (z.strokeStyle = s.current.color, Vn(z, s.current.points.map(f), s.current.size * P));
  }, [f]), w = Y(() => {
    const k = r.current, z = o.current;
    if (!k || !z) return;
    const P = z.getBoundingClientRect();
    if (P.width === 0 || P.height === 0) return;
    const R = window.devicePixelRatio || 1;
    k.width = Math.round(P.width * R), k.height = Math.round(P.height * R);
    const M = k.getContext("2d");
    M && M.setTransform(R, 0, 0, R, 0, 0), p.current = { w: P.width, h: P.height }, h();
  }, [h]);
  J(() => {
    w();
    const k = new ResizeObserver(w);
    return o.current && k.observe(o.current), () => k.disconnect();
  }, [w]), J(() => {
    let k = !1;
    return (async () => {
      if ("wakeLock" in navigator)
        try {
          const z = await navigator.wakeLock.request("screen");
          k ? z.release() : d.current = z;
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
  const C = Y((k) => `${i}/${k}`, [i]), S = Y(async () => {
    const k = JSON.stringify({
      strokes: a.current,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: u.current
    });
    if (!(k.length > 2e5))
      try {
        await n.callService("mqtt", "publish", {
          topic: C("state"),
          payload: k,
          qos: 0,
          retain: !0
        });
      } catch (z) {
        console.warn("[shopping] state publish failed", z);
      }
  }, [n, C]), T = Y(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: C("strokes/add"),
        payload: JSON.stringify(k),
        qos: 0,
        retain: !1
      });
    } catch (z) {
      console.warn("[shopping] add publish failed", z);
    }
    S();
  }, [n, C, S]), O = Y(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: C("strokes/undo"),
        payload: JSON.stringify({ id: k, by: u.current }),
        qos: 0,
        retain: !1
      });
    } catch (z) {
      console.warn("[shopping] undo publish failed", z);
    }
    S();
  }, [n, C, S]), V = Y(async () => {
    try {
      await n.callService("mqtt", "publish", {
        topic: C("clear"),
        payload: JSON.stringify({ by: u.current, ts: Date.now() }),
        qos: 0,
        retain: !1
      });
    } catch (k) {
      console.warn("[shopping] clear publish failed", k);
    }
    S();
  }, [n, C, S]);
  J(() => {
    let k = null, z = !1;
    const P = (R) => {
      try {
        const M = R.topic, F = R.payload ? JSON.parse(R.payload) : null;
        if (!F) return;
        if (M.endsWith("/state"))
          Array.isArray(F.strokes) && F.updatedBy !== u.current && (a.current = F.strokes, h());
        else if (M.endsWith("/strokes/add")) {
          if (F.by === u.current) return;
          F.points && F.points.length >= 2 && (a.current.push(F), h());
        } else if (M.endsWith("/strokes/undo")) {
          if (F.by === u.current) return;
          const A = a.current.findIndex((E) => E.id === F.id);
          A >= 0 && (a.current.splice(A, 1), h());
        } else if (M.endsWith("/clear")) {
          if (F.by === u.current) return;
          a.current = [], h();
        }
      } catch (M) {
        console.warn("[shopping] parse error", M);
      }
    };
    return (async () => {
      const R = n.connection;
      if (!(!R || typeof R.subscribeMessage != "function"))
        try {
          const M = await R.subscribeMessage(P, {
            type: "mqtt/subscribe",
            topic: `${i}/#`
          });
          if (z)
            try {
              M();
            } catch {
            }
          else
            k = M;
        } catch (M) {
          console.warn("[shopping] mqtt subscribe failed", M);
        }
    })(), () => {
      if (z = !0, k)
        try {
          k();
        } catch {
        }
    };
  }, [n, i, h]);
  const j = Y((k) => {
    const P = r.current.getBoundingClientRect();
    return [(k.clientX - P.left) / P.width, (k.clientY - P.top) / P.height];
  }, []), q = Y((k) => {
    k.pointerType === "touch" && (k.width > 40 || k.height > 40) || l.current === null && (l.current = k.pointerId, r.current?.setPointerCapture(k.pointerId), s.current = {
      id: u.current + "-" + Date.now(),
      by: u.current,
      color: b.current,
      size: g.current,
      points: [j(k)],
      t: Date.now()
    }, h(), k.preventDefault());
  }, [j, h]), ne = Y((k) => {
    if (k.pointerId !== l.current) return;
    const z = s.current;
    z && (z.points.push(j(k)), h());
  }, [j, h]), Q = Y((k) => {
    if (k.pointerId !== l.current) return;
    l.current = null;
    const z = s.current;
    if (s.current = null, !z || z.points.length < 2) {
      h();
      return;
    }
    a.current.push(z), T(z), h();
  }, [h, T]), K = Y(() => {
    for (let k = a.current.length - 1; k >= 0; k--)
      if (a.current[k].by === u.current) {
        const z = a.current.splice(k, 1)[0];
        O(z.id), h();
        return;
      }
  }, [O, h]), re = Y(() => {
    confirm("Effacer le bloc note ?") && (a.current = [], h(), V());
  }, [h, V]);
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
            children: /* @__PURE__ */ e(oe, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-shopping-panel__board", children: [
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__sheet", ref: o, children: /* @__PURE__ */ e(
          "canvas",
          {
            ref: r,
            class: "nido-shopping-panel__canvas",
            onPointerDown: q,
            onPointerMove: ne,
            onPointerUp: Q,
            onPointerCancel: Q,
            onPointerLeave: Q
          }
        ) }),
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__toolbar", "data-no-drag": "true", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool",
              onClick: K,
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
const Hn = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5"
];
function Ot(n) {
  return Hn[n % Hn.length];
}
function Te(n) {
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function jt(n) {
  if (n.includes("T") || n.includes(" ") && n.includes(":"))
    return { date: new Date(n.replace(" ", "T")), allDay: !1 };
  const [t, i, r] = n.split("-").map(Number);
  return { date: new Date(t, i - 1, r), allDay: !0 };
}
function $a(n, t) {
  const i = Te(t), r = [], o = Array.isArray(n) ? { unknown: n } : n;
  for (const [a, s] of Object.entries(o)) {
    if (!Array.isArray(s)) {
      console.warn(`[parseHassEvents] Expected array for ${a}, got:`, typeof s);
      continue;
    }
    for (const l of s) {
      let p = "";
      if (typeof l.start == "string" ? p = l.start : l.start && (p = l.start.dateTime ?? l.start.date ?? ""), !p) continue;
      const { date: d, allDay: u } = jt(p), c = Math.round(
        (Te(d).getTime() - i.getTime()) / 864e5
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
function Na(n, t) {
  const i = n.message, r = n.start_time;
  if (!i || !r) return null;
  const { date: o, allDay: a } = jt(r), s = Math.round(
    (Te(o).getTime() - Te(t).getTime()) / 864e5
  );
  return {
    title: i,
    allDay: a,
    dayOffset: s,
    time: a ? void 0 : `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`
  };
}
const Oa = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function ja({ hass: n, calendarEntities: t, onClose: i }) {
  const [r, o] = I(null), a = /* @__PURE__ */ new Date(), s = new Map(
    [...t].sort((d, u) => d.entity_id.localeCompare(u.entity_id)).map((d, u) => [d.entity_id, Ot(u)])
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
      const g = $a(b, a);
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
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: Oa[d.getDay()] }),
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
const Ra = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function La(n, t) {
  return n === 0 ? "Aujourd'hui" : n === 1 ? "Demain" : `${Ra[t.getDay()]} ${t.getDate()}`;
}
function Rt({ hass: n, entity: t, roomLabel: i, hero: r = !1, calendarEntities: o }) {
  const [a, s] = I(!1), p = [...o].sort((v, b) => v.entity_id.localeCompare(b.entity_id)).map((v) => v.entity_id).indexOf(t.entity_id), d = Ot(p >= 0 ? p : 0), u = /* @__PURE__ */ new Date(), c = Na(t.state.attributes, u), _ = c ? (() => {
    const v = new Date(u);
    return v.setDate(u.getDate() + c.dayOffset), v;
  })() : null, m = ["n-card", r ? "n-card--accent-muted" : "n-card--default", "nido-cal-widget"].join(" ");
  return /* @__PURE__ */ e(G, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: m,
        "data-hero": r ? "true" : "false",
        "data-on": "false",
        onClick: () => s(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": d }, children: /* @__PURE__ */ e(vt, { size: r ? 22 : 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: i || t.friendly_name })
          ] }),
          c && _ ? /* @__PURE__ */ e(G, { children: [
            /* @__PURE__ */ e("div", { class: r ? "nido-cal-widget__title n-title--xl" : "nido-cal-widget__title", children: c.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: La(c.dayOffset, _) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: c.allDay ? "Journée" : c.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    a && /* @__PURE__ */ e(
      ja,
      {
        hass: n,
        calendarEntities: o,
        onClose: () => s(!1)
      }
    )
  ] });
}
const Fa = /* @__PURE__ */ new Set([
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
function Va(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Ha(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(xt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(yt, { ...i, hero: t.hero }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(wt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(kt, { entity: n, roomLabel: t.areaName, hero: t.hero }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Mt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(zt, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(It, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(St, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Ct, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(At, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Et, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Pt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Tt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e($t, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Rt, { hass: t.hass, entity: n, roomLabel: t.areaName, hero: t.hero, calendarEntities: t.calendarEntities }, n.entity_id);
    default:
      return null;
  }
}
function Wa(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function Ba(n, t) {
  const i = new Map(t.map((o) => [Wa(o.name), o.area_id])), r = /* @__PURE__ */ new Map();
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
function Ua({ area: n, entities: t, accent: i = !1, onOpen: r, dragProps: o, presence: a }) {
  const s = Nt(n.name), l = t.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, p = t.filter(rn).length, d = lt(t);
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
              /* @__PURE__ */ e(xi, { size: 16 })
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
              p > 0 && /* @__PURE__ */ e(G, { children: [
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
function Za({
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
  const u = n.user?.name ?? "vous", c = /* @__PURE__ */ new Date(), _ = c.getHours(), { greeting: m, sub: v } = Va(_), b = `${String(_).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`, g = c.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (y) => y.toUpperCase()), f = L(() => new Set(o), [o]), h = L(
    () => i.filter((y) => f.has(y.entity_id) && Fa.has(y.domain)),
    [i, f]
  ), w = L(
    () => h.find((y) => y.domain === "weather"),
    [h]
  ), C = L(
    () => h.filter((y) => y.domain === "light" && rn(y)),
    [h]
  ), S = C.length, T = L(
    () => h.filter((y) => y.domain === "calendar"),
    [h]
  ), O = L(() => w ? Object.keys(n.states).some(
    ($) => $.startsWith("sensor.") && ($.endsWith("_next_rain") || $.endsWith("_weather_alert") || $.endsWith("_uv"))
  ) : !1, [n.states, w]), [V, j] = I(!1), [q, ne] = I(!1), [Q, K] = I(!1), [re, k] = I(!1), z = L(() => {
    const y = n.states["sensor.nido_notifications"];
    return !y || !y.attributes.notifications ? [] : y.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), P = B(new Set(z.map((y) => y.id))), R = B(!0);
  J(() => {
    const y = P.current;
    if (R.current) {
      R.current = !1, P.current = new Set(z.map((te) => te.id));
      return;
    }
    z.some((te) => !y.has(te.id)) && Sa(), P.current = new Set(z.map((te) => te.id));
  }, [z]);
  const M = L(() => _i(), [q]), F = L(() => {
    if (z.length === 0) return !1;
    if (!M) return !0;
    const y = z[z.length - 1];
    return new Date(y.timestamp) > new Date(M);
  }, [z, M]), A = () => {
    ne(!0), fi((/* @__PURE__ */ new Date()).toISOString());
  }, E = L(() => Object.values(n.states).filter(
    (y) => y.entity_id.startsWith("person.") && y.state === "home" && y.attributes.entity_picture
  ), [n.states]), D = (y) => {
    if (!y) return null;
    if (y.startsWith("http")) return y;
    const $ = n.hassUrl?.("");
    return $ ? $.replace(/\/$/, "") + y : y;
  }, Z = L(() => ri(h), [h]), se = L(() => Ba(n, t), [n.states, t]), Ne = L(() => {
    const y = new Map(h.map(($) => [$.entity_id, $]));
    return r.map(($) => y.get($)).filter(($) => !!$);
  }, [h, r]), Oe = L(() => {
    const y = t.filter(($) => (Z.get($.area_id) ?? []).length > 0);
    return pt(y, a, ($) => $.area_id);
  }, [t, Z, a]), je = Xe(
    Ne,
    (y) => y.entity_id,
    (y) => p(y.map(($) => $.entity_id))
  ), Re = Xe(
    Oe,
    (y) => y.area_id,
    (y) => d(y.map(($) => $.area_id))
  ), Lt = Ne.some(
    (y) => !(y.domain === "binary_sensor" && y.state.state === "off")
  );
  let Le = 0;
  const Ft = Lt ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${je.isDragging ? "is-dragging" : ""}`,
        ref: (y) => {
          je.containerRef.current = y;
        },
        children: Ne.map((y) => {
          if (y.domain === "binary_sensor" && y.state.state === "off") return null;
          Le += 1;
          const te = Le === 1, Ht = (Le - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": te ? "true" : "false",
              ...je.itemPropsFor(y.entity_id),
              children: Ha(y, {
                hass: n,
                areaName: t.find((Wt) => Wt.area_id === y.area_id)?.name ?? "",
                hero: te,
                variant: Ht,
                calendarEntities: T
              })
            },
            y.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, Vt = h.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: b }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          w && (O ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => j(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Ln, { entity: w })
            }
          ) : /* @__PURE__ */ e(Ln, { entity: w })),
          S > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => K(!0),
              "aria-label": `${S} lumière${S > 1 ? "s" : ""} allumée${S > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(be, { size: 16 }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__count", children: S }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__label", children: S === 1 ? "lumière" : "lumières" })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: () => k(!0),
              "aria-label": "Bloc note",
              title: "Bloc note",
              children: /* @__PURE__ */ e(ra, { size: 20 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: A,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(ut, { size: 20 }),
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
              children: /* @__PURE__ */ e(vi, { size: 16 })
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
          E.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: E.map((y) => {
              const $ = D(y.attributes.entity_picture);
              return $ ? /* @__PURE__ */ e(
                "img",
                {
                  src: $,
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
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: v })
      ] }),
      Vt ? /* @__PURE__ */ e(G, { children: [
        Ft,
        Oe.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${Re.isDragging ? "is-dragging" : ""}`,
              ref: (y) => {
                Re.containerRef.current = y;
              },
              children: Oe.map((y, $) => /* @__PURE__ */ e(
                Ua,
                {
                  area: y,
                  entities: Z.get(y.area_id) ?? [],
                  accent: $ === 0,
                  onOpen: () => l(y.area_id),
                  dragProps: Re.itemPropsFor(y.area_id),
                  presence: se.get(y.area_id)
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
    V && w && /* @__PURE__ */ e(
      Ma,
      {
        hass: n,
        weatherEntityId: w.entity_id,
        onClose: () => j(!1)
      }
    ),
    q && /* @__PURE__ */ e(
      Ca,
      {
        hass: n,
        notifications: z,
        onClose: () => ne(!1)
      }
    ),
    Q && /* @__PURE__ */ e(
      Pa,
      {
        hass: n,
        lights: C,
        areas: t,
        onClose: () => K(!1)
      }
    ),
    re && /* @__PURE__ */ e(
      Da,
      {
        hass: n,
        onClose: () => k(!1)
      }
    )
  ] });
}
function qa(n, t, i, r, o, a = !1) {
  const s = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(xt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(yt, { ...s, hero: a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(wt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(kt, { entity: n, roomLabel: i, hero: a }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Mt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(zt, { ...s }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(It, { ...s, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(St, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Ct, { ...s, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(At, { ...s }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Et, { ...s }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Pt, { ...s, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Tt, { ...s }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e($t, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Rt, { hass: t, entity: n, roomLabel: i, calendarEntities: o }, n.entity_id);
    default:
      return null;
  }
}
function Ya({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: a
}) {
  const s = Nt(t.name), l = lt(i), p = L(
    () => pt(i, r, (h) => h.entity_id),
    [i, r]
  ), d = L(
    () => p.filter((h) => {
      if (h.domain !== "sensor") return !0;
      const w = h.state.attributes.device_class;
      return w !== "temperature" && w !== "humidity";
    }),
    [p]
  ), u = L(
    () => d.filter((h) => h.domain === "calendar"),
    [d]
  ), c = L(() => {
    const h = /* @__PURE__ */ new Map();
    for (const w of d)
      h.set(w.domain, (h.get(w.domain) ?? 0) + 1);
    return Array.from(h.entries()).sort((w, C) => C[1] - w[1]);
  }, [d]), [_, m] = I("all"), v = L(
    () => _ === "all" ? d : d.filter((h) => h.domain === _),
    [d, _]
  ), b = Xe(
    v,
    (h) => h.entity_id,
    (h) => {
      const w = new Set(v.map((T) => T.entity_id)), C = [...h], S = p.map(
        (T) => w.has(T.entity_id) ? C.shift() : T
      );
      a(S.map((T) => T.entity_id));
    }
  ), g = d.filter(
    (h) => h.domain !== "sensor" && h.domain !== "binary_sensor"
  ).length, f = d.filter(rn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(qi, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(Yi, { size: 18 }) }) })
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
            f > 0 && /* @__PURE__ */ e(G, { children: [
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
          Ue,
          {
            label: "Température",
            value: l.temperature.value,
            unit: l.temperature.unit || "°"
          }
        ),
        l.humidity && /* @__PURE__ */ e(Wn, {}),
        l.humidity && /* @__PURE__ */ e(
          Ue,
          {
            label: "Humidité",
            value: Math.round(parseFloat(l.humidity.value)).toString(),
            unit: l.humidity.unit || "%"
          }
        ),
        l.illuminance && /* @__PURE__ */ e(Wn, {}),
        l.illuminance && /* @__PURE__ */ e(
          Ue,
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
      c.map(([h, w]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${_ === h ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => m(h),
          children: [
            za[h] ?? h,
            " · ",
            w
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
        children: v.map((h, w) => {
          const C = w % 4 + 1, S = w === 0;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": S ? "true" : "false",
              ...b.itemPropsFor(h.entity_id),
              children: qa(h, n, t.name, C, u, S)
            },
            h.entity_id
          );
        })
      }
    )
  ] }) });
}
function Ue({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function Wn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const ye = 5, pe = {
  light: { label: "Lumières", Icon: be },
  switch: { label: "Prises & switches", Icon: cn },
  cover: { label: "Volets & stores", Icon: ln },
  climate: { label: "Thermostats", Icon: ae },
  lock: { label: "Serrures", Icon: dn },
  vacuum: { label: "Aspirateurs", Icon: pn },
  binary_sensor: { label: "Détecteurs", Icon: me },
  sensor: { label: "Capteurs", Icon: he },
  media_player: { label: "Lecteurs média", Icon: hn },
  alarm_control_panel: { label: "Alarmes", Icon: me },
  camera: { label: "Caméras", Icon: Pe },
  fan: { label: "Ventilateurs", Icon: _n },
  scene: { label: "Scènes", Icon: fn },
  script: { label: "Scripts", Icon: ce },
  weather: { label: "Météo", Icon: gt },
  calendar: { label: "Calendriers", Icon: vt }
}, Bn = Object.keys(pe), Ke = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Ja(n) {
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
  } = n, [m, v] = I(0), [b, g] = I(o), [f, h] = I(a), [w, C] = I(new Set(s)), [S, T] = I(new Set(l)), [O, V] = I(
    new Set(p)
  ), [j, q] = I(null), [ne, Q] = I(null);
  J(() => {
    let A = !1;
    return t.callWS({ type: "config/auth/list" }).then((E) => {
      A || q(
        (E ?? []).filter((D) => !D.system_generated).sort((D, Z) => D.name.localeCompare(Z.name))
      );
    }).catch((E) => {
      A || (Q(E instanceof Error ? E.message : String(E)), t.user && q([t.user]));
    }), () => {
      A = !0;
    };
  }, [t]);
  const K = () => v((A) => Math.min(ye - 1, A + 1)), re = () => v((A) => Math.max(0, A - 1)), k = (A, E) => {
    g(A), h(E), u(A, E);
  }, z = (A) => {
    C((E) => {
      const D = new Set(E);
      return D.has(A) ? (D.delete(A), T((Z) => {
        if (!Z.has(A)) return Z;
        const se = new Set(Z);
        return se.delete(A), se;
      })) : D.add(A), D;
    });
  }, P = (A) => {
    T((E) => {
      const D = new Set(E);
      return D.has(A) ? D.delete(A) : (D.add(A), C((Z) => Z.has(A) ? Z : new Set(Z).add(A))), D;
    });
  }, R = (A) => {
    V((E) => {
      const D = new Set(E);
      return D.has(A) ? D.delete(A) : D.add(A), D;
    });
  }, M = () => {
    const A = Array.from(w), E = Array.from(S).filter((Z) => w.has(Z)), D = Array.from(O);
    Dn(b, f), An(A), Ge(E), En(D), Tn(), _({
      exposed: A,
      favorites: E,
      theme: b,
      mode: f,
      excludedUsers: D
    });
  }, F = () => {
    Dn(b, f), An(Array.from(w)), Ge(Array.from(S).filter((A) => w.has(A))), En(Array.from(O)), Tn(), c();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(Zi, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: ye }, (A, E) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${E === m ? "is-active" : ""} ${E < m ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          m + 1,
          " / ",
          ye
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: F, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      m === 0 && /* @__PURE__ */ e(
        Ga,
        {
          isReturning: d,
          exposedCount: w.size,
          favCount: S.size,
          themeLabel: Ke[b].name,
          modeLabel: f === "light" ? "Clair" : "Sombre",
          allowedUsersCount: j ? j.filter((A) => !O.has(A.id)).length : null
        }
      ),
      m === 1 && /* @__PURE__ */ e(Xa, { entitiesCount: i.length, areasCount: r.length }),
      m === 2 && /* @__PURE__ */ e(
        Ka,
        {
          entities: i,
          exposed: w,
          favs: S,
          onToggleExpose: z,
          onToggleFav: P
        }
      ),
      m === 3 && /* @__PURE__ */ e(
        Qa,
        {
          theme: b,
          mode: f,
          onPick: k,
          userName: t.user?.name ?? "vous"
        }
      ),
      m === 4 && /* @__PURE__ */ e(
        er,
        {
          hass: t,
          users: j,
          error: ne,
          excluded: O,
          onToggleUser: R
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
            /* @__PURE__ */ e(Li, { size: 14 }),
            " Retour"
          ]
        }
      ),
      m < ye - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: K, children: [
        "Continuer ",
        /* @__PURE__ */ e(Rn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: M, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(Rn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const Un = [
  be,
  ln,
  cn,
  ae,
  dn,
  pn,
  he,
  hn,
  me,
  Pe,
  _n,
  fn,
  ce
];
function we({ offset: n, intervalMs: t }) {
  const [i, r] = I(n);
  J(() => {
    const a = setInterval(() => r((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = Un[i % Un.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function Ga(n) {
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
          /* @__PURE__ */ e(ke, { label: "Exposées", value: i }),
          /* @__PURE__ */ e(ke, { label: "Favoris", value: r, accent: !0 }),
          /* @__PURE__ */ e(ke, { label: "Ambiance", value: o, hint: a }),
          /* @__PURE__ */ e(
            ke,
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(we, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(we, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(we, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(we, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function ke(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Xa({ entitiesCount: n, areasCount: t }) {
  const [i, r] = I("scanning");
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(Bi, { size: 18 }) }),
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
function Ka(n) {
  const { entities: t, exposed: i, favs: r, onToggleExpose: o, onToggleFav: a } = n, s = L(() => {
    const g = /* @__PURE__ */ new Map();
    for (const f of t)
      Bn.includes(f.domain) && (g.has(f.domain) || g.set(f.domain, []), g.get(f.domain).push(f));
    return Array.from(g.entries()).sort((f, h) => h[1].length - f[1].length);
  }, [t]), [l, p] = I(s[0]?.[0] ?? "light"), [d, u] = I(""), c = s.find(([g]) => g === l) ?? s[0], _ = i.size, m = t.filter((g) => Bn.includes(g.domain)).length, v = d.trim().toLowerCase(), b = c ? v ? c[1].filter(
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
        const h = pe[g], w = h.Icon, C = f.filter((T) => i.has(T.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${g === l ? "is-active" : ""}`,
            onClick: () => p(g),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(w, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: h.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                C,
                "/",
                f.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: c && /* @__PURE__ */ e(G, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            c[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: pe[c[0]].label })
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
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(Hi, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (g) => u(g.target.value),
            placeholder: `Rechercher dans ${pe[c[0]].label.toLowerCase()}…`,
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
          const f = i.has(g.entity_id), h = r.has(g.entity_id), w = pe[g.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${f ? "is-exposed" : ""}`,
              onClick: () => o(g.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${f ? "is-on" : ""}`, children: /* @__PURE__ */ e(w, { size: 16 }) }),
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
                    onClick: (C) => {
                      C.stopPropagation(), a(g.entity_id);
                    },
                    children: h ? /* @__PURE__ */ e(Wi, { size: 14 }) : /* @__PURE__ */ e(Vi, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${f ? "is-on" : ""}`, children: f && /* @__PURE__ */ e(Fi, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function Qa(n) {
  const { theme: t, mode: i, userName: r, onPick: o } = n, a = Ke[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: ct.map((s) => {
        const l = Ke[s];
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
              /* @__PURE__ */ e(un, { size: 14 }),
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
              /* @__PURE__ */ e(mt, { size: 14 }),
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
function er(n) {
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
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(Ui, { size: 18 }) }),
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
const nr = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function tr({ hass: n, host: t }) {
  const [i, r] = I(null), [o, a] = I(null), [s, l] = I(null), [p, d] = I(null), u = L(() => dt(), []), [c, _] = I(() => si()), [m, v] = I(() => li()), [b, g] = I(() => ci()), [f, h] = I(() => di()), [w, C] = I(
    () => ui()
  ), [S, T] = I(() => !Pn()), [O, V] = I(
    { kind: "dashboard" }
  ), j = (M) => {
    _(M), Ge(M);
  }, q = (M) => {
    h(M), pi(M);
  }, ne = (M, F) => {
    C((A) => {
      const E = { ...A, [M]: F };
      return hi(E), E;
    });
  }, Q = B(n);
  Q.current = n, J(() => {
    if (!n) return;
    let M = !1;
    const F = [], A = async () => {
      const E = Q.current;
      if (E)
        try {
          const [D, Z, se] = await Promise.all([
            ei(E),
            ni(E),
            ti(E)
          ]);
          if (M) return;
          r(D), a(Z), l(se);
        } catch (D) {
          if (M) return;
          d(D instanceof Error ? D.message : String(D));
        }
    };
    return A(), Promise.all(
      nr.map(
        (E) => n.connection.subscribeEvents(() => {
          M || A();
        }, E)
      )
    ).then((E) => {
      if (M) {
        E.forEach((D) => D());
        return;
      }
      F.push(...E);
    }).catch((E) => console.warn("Nido: subscribeEvents failed", E)), () => {
      M = !0, F.forEach((E) => E());
    };
  }, [n != null]);
  const K = L(() => !n || !o || !s ? [] : ai(n, o, s), [n?.states, o, s]), re = (M, F) => {
    t?.applyTheme?.(M, F);
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
  const z = L(() => new Set(m), [m]), P = O.kind === "room" ? i.find((M) => M.area_id === O.areaId) ?? null : null, R = L(
    () => P ? K.filter(
      (M) => M.area_id === P.area_id && z.has(M.entity_id)
    ) : [],
    [K, P, z]
  );
  return /* @__PURE__ */ e(G, { children: [
    O.kind === "dashboard" || !P ? /* @__PURE__ */ e(
      Za,
      {
        hass: n,
        areas: i,
        entities: K,
        favorites: c,
        exposed: m,
        roomsOrder: f,
        onConfigure: () => T(!0),
        onOpenRoom: (M) => V({ kind: "room", areaId: M }),
        onReorderFavorites: j,
        onReorderRooms: q
      }
    ) : /* @__PURE__ */ e(
      Ya,
      {
        hass: n,
        area: P,
        entities: R,
        entitiesOrder: w[P.area_id] ?? [],
        onBack: () => V({ kind: "dashboard" }),
        onReorderEntities: (M) => ne(P.area_id, M)
      }
    ),
    S && /* @__PURE__ */ e(
      Ja,
      {
        hass: n,
        entities: K,
        areas: i,
        initialTheme: u.theme,
        initialMode: u.mode,
        initialExposed: m,
        initialFavorites: c,
        initialExcludedUsers: b,
        isReturning: Pn(),
        onApplyTheme: re,
        onClose: () => T(!1),
        onDone: (M) => {
          v(M.exposed), _(M.favorites), g(M.excludedUsers), T(!1);
        }
      }
    )
  ] });
}
const ir = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', ar = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px var(--accent);box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,var(--accent) 45%,var(--accent) 55%,transparent 65%,transparent 100%);background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;position:relative;z-index:1}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle,.n-toggle[aria-checked=true]{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb,.n-toggle[aria-checked=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{position:relative;z-index:1}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor;position:relative;z-index:1}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px;position:relative;z-index:1}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;position:relative;z-index:1}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3);position:relative;z-index:1}.n-media__volume .n-slider{flex:1}.n-media__bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.n-media__bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1);opacity:.25;transition:opacity .5s var(--ease-out)}.n-media__bg-overlay{position:absolute;inset:0;background:var(--accent);opacity:.15;mix-blend-mode:overlay}.n-card[data-on=true] .n-media__bg img{opacity:.35}.n-card[data-hero=true] .n-media__track{margin-top:8px}.n-card[data-hero=true] .n-media__title{font-size:18px}.n-card[data-hero=true] .n-media__controls{gap:20px;margin-top:12px}.n-card[data-hero=true] .n-media__controls .n-icon-btn--primary{width:52px;height:52px}.n-card[data-hero=true] .nido-cal-widget__title{font-size:24px;margin-top:8px}.n-card[data-hero=true] .nido-cal-widget__when{margin-top:6px;font-size:14px}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__title-group{display:flex;align-items:baseline;gap:16px}.nido-notification-panel__clear-all{font-family:var(--font-mono);font-size:12px;color:var(--ink-3);background:none;border:none;padding:0;cursor:pointer;text-decoration:underline;transition:color .2s}.nido-notification-panel__clear-all:hover{color:var(--danger)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}.nido-topbar__actions>.nido-bell-btn,.nido-topbar__actions>.n-pill-btn--ghost{flex:0 0 auto;width:44px;height:32px;min-width:44px;padding:0;display:inline-flex;align-items:center;justify-content:center}@media(max-width:768px){.nido-topbar__actions{flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:8px}.nido-weather-pill-btn,.nido-topbar__actions>.nido-weather-pill,.nido-lights-pill-btn{flex:0 0 100%;display:flex;justify-content:flex-end}}.nido-shopping-panel{position:fixed;inset:0;z-index:2000;display:flex;align-items:stretch;justify-content:center}.nido-shopping-panel__backdrop{position:absolute;inset:0;background:#00000059;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.nido-shopping-panel__content{position:relative;width:100%;height:100%;background:var(--bg-shell);display:flex;flex-direction:column;animation:nido-shopping-fade .25s var(--ease-out)}@keyframes nido-shopping-fade{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}.nido-shopping-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4);flex:0 0 auto}.nido-shopping-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-shopping-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-shopping-panel__close:hover{background:var(--ink-4)}.nido-shopping-panel__board{position:relative;flex:1 1 auto;min-height:0;background:var(--bg-shell);background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:24px 24px;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:24px}.nido-shopping-panel__sheet{position:relative;aspect-ratio:3 / 4;height:100%;max-height:100%;max-width:100%;background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-md);box-shadow:var(--shadow-lg);overflow:hidden}.nido-shopping-panel__canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;cursor:crosshair;display:block}.nido-shopping-panel__toolbar{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:var(--s-3);background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-pill);padding:8px 12px;box-shadow:var(--shadow-lg);z-index:2}.nido-shopping-panel__tool{border:none;background:transparent;font-size:20px;line-height:1;width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink-2);transition:background .2s,color .2s}.nido-shopping-panel__tool:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-shopping-panel__tool--danger:hover{background:color-mix(in srgb,var(--danger) 12%,transparent);color:var(--danger)}.nido-shopping-panel__color{width:36px;height:36px;border:1px solid var(--ink-4);border-radius:50%;background:transparent;padding:0;cursor:pointer;overflow:hidden}.nido-shopping-panel__color::-webkit-color-swatch-wrapper{padding:0}.nido-shopping-panel__color::-webkit-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__color::-moz-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__size{width:100px;cursor:pointer;accent-color:var(--accent)}@media(max-width:768px){.nido-shopping-panel__header{padding:16px 20px}.nido-shopping-panel__toolbar{bottom:12px;gap:6px;padding:6px 8px}.nido-shopping-panel__size{width:70px}}@media(prefers-reduced-motion:reduce){.nido-shopping-panel__content{animation:none}}', Zn = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let qn = !1;
function rr() {
  if (qn || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Zn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Zn, document.head.appendChild(t);
  }
  qn = !0;
}
class or extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, rr();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${ir}
${ar}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = dt();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    xn(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    xn(Kn(tr, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", or);
console.info(
  "%c NIDO %c v0.3.1 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
