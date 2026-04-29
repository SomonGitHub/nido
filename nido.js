var Ie, T, $n, q, nn, Nn, Dn, Se, be, ae, On, Ve, Pe, $e, ye = {}, we = [], vt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ze = Array.isArray;
function B(n, t) {
  for (var r in t) n[r] = t[r];
  return n;
}
function Re(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Ln(n, t, r) {
  var i, o, a, s = {};
  for (a in t) a == "key" ? i = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ie.call(arguments, 2) : r), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return ge(n, s, i, o, null);
}
function ge(n, t, r, i, o) {
  var a = { type: n, props: t, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++$n, __i: -1, __u: 0 };
  return o == null && T.vnode != null && T.vnode(a), a;
}
function H(n) {
  return n.children;
}
function ve(n, t) {
  this.props = n, this.context = t;
}
function ne(n, t) {
  if (t == null) return n.__ ? ne(n.__, n.__i + 1) : null;
  for (var r; t < n.__k.length; t++) if ((r = n.__k[t]) != null && r.__e != null) return r.__e;
  return typeof n.type == "function" ? ne(n) : null;
}
function xt(n) {
  if (n.__P && n.__d) {
    var t = n.__v, r = t.__e, i = [], o = [], a = B({}, t);
    a.__v = t.__v + 1, T.vnode && T.vnode(a), Fe(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [r] : null, i, r ?? ne(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, Fn(i, a, o), t.__e = t.__ = null, a.__e != r && jn(a);
  }
}
function jn(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), jn(n);
}
function tn(n) {
  (!n.__d && (n.__d = !0) && q.push(n) && !ke.__r++ || nn != T.debounceRendering) && ((nn = T.debounceRendering) || Nn)(ke);
}
function ke() {
  try {
    for (var n, t = 1; q.length; ) q.length > t && q.sort(Dn), n = q.shift(), t = q.length, xt(n);
  } finally {
    q.length = ke.__r = 0;
  }
}
function Vn(n, t, r, i, o, a, s, l, p, d, f) {
  var c, m, _, v, g, u, h, b = i && i.__k || we, w = t.length;
  for (p = yt(r, t, b, p, w), c = 0; c < w; c++) (_ = r.__k[c]) != null && (m = _.__i != -1 && b[_.__i] || ye, _.__i = c, u = Fe(n, _, m, o, a, s, l, p, d, f), v = _.__e, _.ref && m.ref != _.ref && (m.ref && He(m.ref, null, _), f.push(_.ref, _.__c || v, _)), g == null && v != null && (g = v), (h = !!(4 & _.__u)) || m.__k === _.__k ? (p = Rn(_, p, n, h), h && m.__e && (m.__e = null)) : typeof _.type == "function" && u !== void 0 ? p = u : v && (p = v.nextSibling), _.__u &= -7);
  return r.__e = g, p;
}
function yt(n, t, r, i, o) {
  var a, s, l, p, d, f = r.length, c = f, m = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = ge(null, s, null, null, null) : ze(s) ? s = n.__k[a] = ge(H, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = ge(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + m, s.__ = n, s.__b = n.__b + 1, l = null, (d = s.__i = wt(s, r, p, c)) != -1 && (c--, (l = r[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (o > f ? m-- : o < f && m++), typeof s.type != "function" && (s.__u |= 4)) : d != p && (d == p - 1 ? m-- : d == p + 1 ? m++ : (d > p ? m-- : m++, s.__u |= 4))) : n.__k[a] = null;
  if (c) for (a = 0; a < f; a++) (l = r[a]) != null && (2 & l.__u) == 0 && (l.__e == i && (i = ne(l)), Un(l, l));
  return i;
}
function Rn(n, t, r, i) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = Rn(o[a], t, r, i));
    return t;
  }
  n.__e != t && (i && (t && n.type && !t.parentNode && (t = ne(n)), r.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function wt(n, t, r, i) {
  var o, a, s, l = n.key, p = n.type, d = t[r], f = d != null && (2 & d.__u) == 0;
  if (d === null && l == null || f && l == d.key && p == d.type) return r;
  if (i > (f ? 1 : 0)) {
    for (o = r - 1, a = r + 1; o >= 0 || a < t.length; ) if ((d = t[s = o >= 0 ? o-- : a++]) != null && (2 & d.__u) == 0 && l == d.key && p == d.type) return s;
  }
  return -1;
}
function rn(n, t, r) {
  t[0] == "-" ? n.setProperty(t, r ?? "") : n[t] = r == null ? "" : typeof r != "number" || vt.test(t) ? r : r + "px";
}
function ue(n, t, r, i, o) {
  var a, s;
  e: if (t == "style") if (typeof r == "string") n.style.cssText = r;
  else {
    if (typeof i == "string" && (n.style.cssText = i = ""), i) for (t in i) r && t in r || rn(n.style, t, "");
    if (r) for (t in r) i && r[t] == i[t] || rn(n.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(On, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = r, r ? i ? r[ae] = i[ae] : (r[ae] = Ve, n.addEventListener(t, a ? $e : Pe, a)) : n.removeEventListener(t, a ? $e : Pe, a);
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
function an(n) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + n];
      if (t[be] == null) t[be] = Ve++;
      else if (t[be] < r[ae]) return;
      return r(T.event ? T.event(t) : t);
    }
  };
}
function Fe(n, t, r, i, o, a, s, l, p, d) {
  var f, c, m, _, v, g, u, h, b, w, z, P, N, A, F, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (p = !!(32 & r.__u), a = [l = t.__e = r.__e]), (f = T.__b) && f(t);
  e: if (typeof D == "function") try {
    if (h = t.props, b = D.prototype && D.prototype.render, w = (f = D.contextType) && i[f.__c], z = f ? w ? w.props.value : f.__ : i, r.__c ? u = (c = t.__c = r.__c).__ = c.__E : (b ? t.__c = c = new D(h, z) : (t.__c = c = new ve(h, z), c.constructor = D, c.render = Mt), w && w.sub(c), c.state || (c.state = {}), c.__n = i, m = c.__d = !0, c.__h = [], c._sb = []), b && c.__s == null && (c.__s = c.state), b && D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = B({}, c.__s)), B(c.__s, D.getDerivedStateFromProps(h, c.__s))), _ = c.props, v = c.state, c.__v = t, m) b && D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), b && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (b && D.getDerivedStateFromProps == null && h !== _ && c.componentWillReceiveProps != null && c.componentWillReceiveProps(h, z), t.__v == r.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(h, c.__s, z) === !1) {
        t.__v != r.__v && (c.props = h, c.state = c.__s, c.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(V) {
          V && (V.__ = t);
        }), we.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(h, c.__s, z), b && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(_, v, g);
      });
    }
    if (c.context = z, c.props = h, c.__P = n, c.__e = !1, P = T.__r, N = 0, b) c.state = c.__s, c.__d = !1, P && P(t), f = c.render(c.props, c.state, c.context), we.push.apply(c.__h, c._sb), c._sb = [];
    else do
      c.__d = !1, P && P(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++N < 25);
    c.state = c.__s, c.getChildContext != null && (i = B(B({}, i), c.getChildContext())), b && !m && c.getSnapshotBeforeUpdate != null && (g = c.getSnapshotBeforeUpdate(_, v)), A = f != null && f.type === H && f.key == null ? Hn(f.props.children) : f, l = Vn(n, ze(A) ? A : [A], t, r, i, o, a, s, l, p, d), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), u && (c.__E = c.__ = null);
  } catch (V) {
    if (t.__v = null, p || a != null) if (V.then) {
      for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      a[a.indexOf(l)] = null, t.__e = l;
    } else {
      for (F = a.length; F--; ) Re(a[F]);
      Ne(t);
    }
    else t.__e = r.__e, t.__k = r.__k, V.then || Ne(t);
    T.__e(V, t, r);
  }
  else a == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : l = t.__e = kt(r.__e, t, r, i, o, a, s, p, d);
  return (f = T.diffed) && f(t), 128 & t.__u ? void 0 : l;
}
function Ne(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Ne));
}
function Fn(n, t, r) {
  for (var i = 0; i < r.length; i++) He(r[i], r[++i], r[++i]);
  T.__c && T.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      T.__e(a, o.__v);
    }
  });
}
function Hn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : ze(n) ? n.map(Hn) : B({}, n);
}
function kt(n, t, r, i, o, a, s, l, p) {
  var d, f, c, m, _, v, g, u = r.props || ye, h = t.props, b = t.type;
  if (b == "svg" ? o = "http://www.w3.org/2000/svg" : b == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((_ = a[d]) && "setAttribute" in _ == !!b && (b ? _.localName == b : _.nodeType == 3)) {
      n = _, a[d] = null;
      break;
    }
  }
  if (n == null) {
    if (b == null) return document.createTextNode(h);
    n = document.createElementNS(o, b, h.is && h), l && (T.__m && T.__m(t, a), l = !1), a = null;
  }
  if (b == null) u === h || l && n.data == h || (n.data = h);
  else {
    if (a = a && Ie.call(n.childNodes), !l && a != null) for (u = {}, d = 0; d < n.attributes.length; d++) u[(_ = n.attributes[d]).name] = _.value;
    for (d in u) _ = u[d], d == "dangerouslySetInnerHTML" ? c = _ : d == "children" || d in h || d == "value" && "defaultValue" in h || d == "checked" && "defaultChecked" in h || ue(n, d, null, _, o);
    for (d in h) _ = h[d], d == "children" ? m = _ : d == "dangerouslySetInnerHTML" ? f = _ : d == "value" ? v = _ : d == "checked" ? g = _ : l && typeof _ != "function" || u[d] === _ || ue(n, d, _, u[d], o);
    if (f) l || c && (f.__html == c.__html || f.__html == n.innerHTML) || (n.innerHTML = f.__html), t.__k = [];
    else if (c && (n.innerHTML = ""), Vn(t.type == "template" ? n.content : n, ze(m) ? m : [m], t, r, i, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : r.__k && ne(r, 0), l, p), a != null) for (d = a.length; d--; ) Re(a[d]);
    l || (d = "value", b == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || b == "progress" && !v || b == "option" && v != u[d]) && ue(n, d, v, u[d], o), d = "checked", g != null && g != n[d] && ue(n, d, g, u[d], o));
  }
  return n;
}
function He(n, t, r) {
  try {
    if (typeof n == "function") {
      var i = typeof n.__u == "function";
      i && n.__u(), i && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    T.__e(o, r);
  }
}
function Un(n, t, r) {
  var i, o;
  if (T.unmount && T.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || He(i, null, t)), (i = n.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (a) {
      T.__e(a, t);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && Un(i[o], t, r || typeof n.type != "function");
  r || Re(n.__e), n.__c = n.__ = n.__e = void 0;
}
function Mt(n, t, r) {
  return this.constructor(n, r);
}
function on(n, t, r) {
  var i, o, a, s;
  t == document && (t = document.documentElement), T.__ && T.__(n, t), o = (i = !1) ? null : t.__k, a = [], s = [], Fe(t, n = t.__k = Ln(H, null, [n]), o || ye, ye, t.namespaceURI, o ? null : t.firstChild ? Ie.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, i, s), Fn(a, n, s);
}
Ie = we.slice, T = { __e: function(n, t, r, i) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, i || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    n = l;
  }
  throw n;
} }, $n = 0, ve.prototype.setState = function(n, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = B({}, this.state), typeof n == "function" && (n = n(B({}, r), this.props)), n && B(r, n), n != null && this.__v && (t && this._sb.push(t), tn(this));
}, ve.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), tn(this));
}, ve.prototype.render = H, q = [], Nn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Dn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, ke.__r = 0, Se = Math.random().toString(8), be = "__d" + Se, ae = "__a" + Se, On = /(PointerCapture)$|Capture$/i, Ve = 0, Pe = an(!1), $e = an(!0);
var It = 0;
function e(n, t, r, i, o, a) {
  t || (t = {});
  var s, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? s = t[l] : p[l] = t[l];
  var d = { type: n, props: p, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --It, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (l in s) p[l] === void 0 && (p[l] = s[l]);
  return T.vnode && T.vnode(d), d;
}
var se, $, Ce, sn, le = 0, Wn = [], O = T, ln = O.__b, cn = O.__r, dn = O.diffed, pn = O.__c, un = O.unmount, hn = O.__;
function Ue(n, t) {
  O.__h && O.__h($, n, le || t), le = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return n >= r.__.length && r.__.push({}), r.__[n];
}
function k(n) {
  return le = 1, zt(Zn, n);
}
function zt(n, t, r) {
  var i = Ue(se++, 2);
  if (i.t = n, !i.__c && (i.__ = [Zn(void 0, t), function(l) {
    var p = i.__N ? i.__N[0] : i.__[0], d = i.t(p, l);
    p !== d && (i.__N = [d, i.__[1]], i.__c.setState({}));
  }], i.__c = $, !$.__f)) {
    var o = function(l, p, d) {
      if (!i.__c.__H) return !0;
      var f = i.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      })) return !a || a.call(this, l, p, d);
      var c = i.__c.props !== l;
      return f.some(function(m) {
        if (m.__N) {
          var _ = m.__[0];
          m.__ = m.__N, m.__N = void 0, _ !== m.__[0] && (c = !0);
        }
      }), a && a.call(this, l, p, d) || c;
    };
    $.__f = !0;
    var a = $.shouldComponentUpdate, s = $.componentWillUpdate;
    $.componentWillUpdate = function(l, p, d) {
      if (this.__e) {
        var f = a;
        a = void 0, o(l, p, d), a = f;
      }
      s && s.call(this, l, p, d);
    }, $.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function K(n, t) {
  var r = Ue(se++, 3);
  !O.__s && Bn(r.__H, t) && (r.__ = n, r.u = t, $.__H.__h.push(r));
}
function ee(n) {
  return le = 5, L(function() {
    return { current: n };
  }, []);
}
function L(n, t) {
  var r = Ue(se++, 7);
  return Bn(r.__H, t) && (r.__ = n(), r.__H = t, r.__h = n), r.__;
}
function _n(n, t) {
  return le = 8, L(function() {
    return n;
  }, t);
}
function St() {
  for (var n; n = Wn.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(xe), t.__h.some(De), t.__h = [];
    } catch (r) {
      t.__h = [], O.__e(r, n.__v);
    }
  }
}
O.__b = function(n) {
  $ = null, ln && ln(n);
}, O.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), hn && hn(n, t);
}, O.__r = function(n) {
  cn && cn(n), se = 0;
  var t = ($ = n.__c).__H;
  t && (Ce === $ ? (t.__h = [], $.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(xe), t.__h.some(De), t.__h = [], se = 0)), Ce = $;
}, O.diffed = function(n) {
  dn && dn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Wn.push(t) !== 1 && sn === O.requestAnimationFrame || ((sn = O.requestAnimationFrame) || Ct)(St)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Ce = $ = null;
}, O.__c = function(n, t) {
  t.some(function(r) {
    try {
      r.__h.some(xe), r.__h = r.__h.filter(function(i) {
        return !i.__ || De(i);
      });
    } catch (i) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], O.__e(i, r.__v);
    }
  }), pn && pn(n, t);
}, O.unmount = function(n) {
  un && un(n);
  var t, r = n.__c;
  r && r.__H && (r.__H.__.some(function(i) {
    try {
      xe(i);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && O.__e(t, r.__v));
};
var fn = typeof requestAnimationFrame == "function";
function Ct(n) {
  var t, r = function() {
    clearTimeout(i), fn && cancelAnimationFrame(t), setTimeout(n);
  }, i = setTimeout(r, 35);
  fn && (t = requestAnimationFrame(r));
}
function xe(n) {
  var t = $, r = n.__c;
  typeof r == "function" && (n.__c = void 0, r()), $ = t;
}
function De(n) {
  var t = $;
  n.__c = n.__(), $ = t;
}
function Bn(n, t) {
  return !n || n.length !== t.length || t.some(function(r, i) {
    return r !== n[i];
  });
}
function Zn(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function At(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((r, i) => r.name.localeCompare(i.name, "fr"));
}
async function Et(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function Tt(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function Pt(n) {
  return n.split(".")[0] ?? "";
}
function $t(n, t, r) {
  const i = new Map(r.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, l] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? i.get(p.device_id) ?? null : null), f = p?.name ?? l.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: Pt(s),
      area_id: d,
      friendly_name: f,
      state: l
    });
  }
  return a;
}
function Nt(n) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) {
    const i = t.get(r.area_id) ?? [];
    i.push(r), t.set(r.area_id, i);
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
function qn(n) {
  const t = {};
  for (const r of n) {
    if (r.domain !== "sensor") continue;
    const i = r.state.attributes.device_class, o = r.state.attributes.unit_of_measurement ?? "", a = r.state.state;
    a === "unavailable" || a === "unknown" || (i === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : i === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : i === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
  }
  return t;
}
const j = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode"
}, Jn = ["terracotta", "miel", "sauge", "cosy"], Dt = ["light", "dark"];
function W() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Ot() {
  const n = W();
  if (!n) return [];
  const t = n.getItem(j.favorites);
  if (!t) return [];
  try {
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((i) => typeof i == "string") : [];
  } catch {
    return [];
  }
}
function Oe(n) {
  const t = W();
  t && t.setItem(j.favorites, JSON.stringify(n));
}
function We(n) {
  const t = W();
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
function Be(n, t) {
  const r = W();
  r && r.setItem(n, JSON.stringify(t));
}
const Lt = () => We(j.exposed), mn = (n) => Be(j.exposed, n), jt = () => We(j.excludedUsers), bn = (n) => Be(j.excludedUsers, n), Vt = () => We(j.roomsOrder), Rt = (n) => Be(j.roomsOrder, n);
function Ft() {
  const n = W();
  if (!n) return {};
  const t = n.getItem(j.roomEntitiesOrder);
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
function Ht(n) {
  const t = W();
  t && t.setItem(j.roomEntitiesOrder, JSON.stringify(n));
}
function gn() {
  return W()?.getItem(j.onboarded) === "1";
}
function vn(n) {
  const t = W();
  t && t.setItem(j.onboarded, "1");
}
function Xn() {
  const n = W(), t = n?.getItem(j.theme), r = n?.getItem(j.mode);
  return {
    theme: Jn.includes(t) ? t : "terracotta",
    mode: Dt.includes(r) ? r : "light"
  };
}
function xn(n, t) {
  const r = W();
  r && (r.setItem(j.theme, n), r.setItem(j.mode, t));
}
const yn = 6;
function Ut(n, t) {
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
function Gn(n, t, r) {
  if (t.length === 0) return n;
  const i = new Map(n.map((s) => [r(s), s])), o = /* @__PURE__ */ new Set(), a = [];
  for (const s of t) {
    const l = i.get(s);
    l && !o.has(s) && (a.push(l), o.add(s));
  }
  for (const s of n) {
    const l = r(s);
    o.has(l) || (a.push(s), o.add(l));
  }
  return a;
}
function Le(n, t, r) {
  const [i, o] = k({ draggingId: null, overId: null }), a = ee(null), s = ee(null), l = ee(n);
  l.current = n;
  const p = ee(r);
  p.current = r;
  const d = ee(t);
  d.current = t;
  const f = _n((m, _) => {
    const v = s.current;
    if (!v) return null;
    const g = v.querySelectorAll("[data-drag-id]");
    for (const u of Array.from(g)) {
      const h = u.getBoundingClientRect();
      if (m >= h.left && m <= h.right && _ >= h.top && _ <= h.bottom)
        return u.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  K(() => {
    const m = (v) => {
      const g = a.current;
      if (!g) return;
      if (g.pointerType === "touch") {
        if (!g.entered) {
          const h = v.clientX - g.x, b = v.clientY - g.y;
          Math.hypot(h, b) > yn && (g.timerId && clearTimeout(g.timerId), a.current = null);
          return;
        }
      } else if (!g.entered) {
        const h = v.clientX - g.x, b = v.clientY - g.y;
        if (Math.hypot(h, b) < yn) return;
        g.entered = !0, o({ draggingId: g.id, overId: null });
      }
      const u = f(v.clientX, v.clientY);
      o((h) => h.overId === u ? h : { ...h, overId: u });
    }, _ = () => {
      const v = a.current;
      if (v?.timerId && clearTimeout(v.timerId), a.current = null, !v || !v.entered) return;
      const g = (u) => {
        u.preventDefault(), u.stopPropagation();
      };
      window.addEventListener("click", g, { capture: !0, once: !0 }), o((u) => {
        const { draggingId: h, overId: b } = u;
        if (h && b && h !== b) {
          const w = l.current, z = d.current, P = w.findIndex((A) => z(A) === h), N = w.findIndex((A) => z(A) === b);
          if (P >= 0 && N >= 0) {
            const A = [...w], [F] = A.splice(P, 1);
            A.splice(N, 0, F), p.current(A);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", m), document.addEventListener("pointerup", _), document.addEventListener("pointercancel", _), () => {
      document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", _), document.removeEventListener("pointercancel", _);
    };
  }, [f]);
  const c = _n(
    (m) => {
      const _ = i.draggingId === m, v = i.draggingId !== null && i.draggingId !== m && i.overId === m;
      return {
        "data-drag-id": m,
        "data-dragging": _ ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (g) => {
          if (g.button !== void 0 && g.button !== 0) return;
          const u = g.currentTarget;
          if (!Ut(g.target, u))
            if (g.pointerType === "touch") {
              const h = window.setTimeout(() => {
                const b = a.current;
                b && b.id === m && !b.entered && (b.entered = !0, o({ draggingId: m, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 2e3);
              a.current = { id: m, x: g.clientX, y: g.clientY, entered: !1, pointerType: "touch", timerId: h };
            } else
              a.current = { id: m, x: g.clientX, y: g.clientY, entered: !1, pointerType: g.pointerType };
        }
      };
    },
    [i.draggingId, i.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: c,
    isDragging: i.draggingId !== null
  };
}
const x = ({ children: n, size: t = 24, stroke: r = 1.5, fill: i = "none", style: o }) => /* @__PURE__ */ e(
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
), Ze = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), Wt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), Bt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), Ye = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), qe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
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
] }), Zt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), ie = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), J = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), Yt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), qt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), ce = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), Je = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), Jt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), Xe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), Xt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), Gt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), Kt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Qt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), te = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), Kn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), Qn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), he = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), Ge = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), et = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), nt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), Mn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Ae = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Ee = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), er = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), In = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), nr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), tr = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), Ke = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), rr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), ar = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), ir = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), or = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), sr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), lr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), cr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Me = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), Qe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), en = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), zn = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), dr = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), pr = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), ur = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), hr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), _r = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), fr = (n) => /* @__PURE__ */ e(x, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), tt = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), mr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), br = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), gr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), vr = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), xr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), yr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), wr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), kr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), Mr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Ir = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), zr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), Sr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), Cr = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] });
function Ar(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function rt({
  hass: n,
  entity: t,
  hero: r = !1,
  breatheVariant: i = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = k(!1), [d, f] = k(null), c = d ?? Ar(t.state), m = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, _ = async (u) => {
    f(u);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: u
      });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, g = [
    "n-card",
    r ? a ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    a ? `breathe-${i}` : "",
    l ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: g, "data-hero": r ? "true" : "false", "data-on": a ? "true" : "false", children: [
    a && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ze, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || l,
          onClick: m,
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
          onInput: (u) => _(Number(u.target.value))
        }
      )
    ] }),
    !a && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Er(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function at({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state === "unavailable", [o, a] = k(null), s = o ?? Er(t.state), l = s > 0, p = async (d) => {
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
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": l ? "true" : "false", children: /* @__PURE__ */ e("div", { class: "n-card", "data-on": l ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ye, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": d / 6 * 100 < s ? "true" : "false"
        },
        d
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
    i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function it({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 2
}) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", [s, l] = k(!1), p = t.state.attributes.current_power_w, d = async () => {
    if (!a) {
      l(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        l(!1);
      }
    }
  }, f = ["n-card", o ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: f, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(qe, { size: 18 }) }),
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
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    typeof p == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: o ? "n-power__value" : "n-power__value n-power__value--muted", children: Math.round(o ? p : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Tr = {
  door: wn,
  garage_door: wn,
  window: qt,
  smoke: kn,
  gas: kn,
  moisture: Zt,
  motion: ie,
  occupancy: ie,
  presence: ie
}, Pr = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, $r = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]);
function ot({ entity: n, roomLabel: t }) {
  const r = n.state.attributes.device_class ?? "", i = n.state.state === "on", o = n.state.state === "unavailable", a = Tr[r] ?? ce, s = Pr[r] ?? { on: "Actif", off: "Inactif" }, l = $r.has(r);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : i ? "on" : "off", "data-alert": l ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : i ? s.on : s.off })
  ] });
}
const Nr = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Dr = {
  heat: Xt,
  cool: Gt,
  heat_cool: J,
  auto: J,
  dry: J,
  fan_only: J
};
function st({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 2
}) {
  const o = t.state.state === "unavailable", a = t.state.state, s = a !== "off" && !o, l = t.state.attributes.current_temperature, p = t.state.attributes.temperature, d = t.state.attributes.min_temp ?? 7, f = t.state.attributes.max_temp ?? 35, c = t.state.attributes.target_temp_step ?? 0.5, [m, _] = k(null), v = m ?? p ?? l ?? 20, g = async (b) => {
    const w = Math.min(f, Math.max(d, b));
    _(w);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: w
      });
    } finally {
      setTimeout(() => _(null), 50);
    }
  }, u = Dr[a] ?? J, h = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(u, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Nr[a] ?? a })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(v * 10) / 10,
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
            onClick: () => g(v - c),
            disabled: v - c < d,
            children: /* @__PURE__ */ e(Kt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => g(v + c),
            disabled: v + c > f,
            children: /* @__PURE__ */ e(Qt, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function lt({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "locked", s = i === "jammed", l = i === "locking" || i === "unlocking", [p, d] = k(!1), f = async () => {
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
  }, c = o ? "Indisponible" : s ? "Bloquée" : l ? i === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? Je : Jt, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": a,
              disabled: o || l || p,
              onClick: f,
              children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
            }
          )
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: c })
      ]
    }
  );
}
const Or = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function ct({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", l = o === "error", p = t.state.attributes.battery_level, [d, f] = k(!1), c = async (_) => {
    if (!(a || d)) {
      f(!0);
      try {
        await n.callService("vacuum", _, { entity_id: t.entity_id });
      } finally {
        f(!1);
      }
    }
  }, m = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: m,
      "data-on": s ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Xe, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(Qn, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Or[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || s,
              onClick: () => c("start"),
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
              onClick: () => c("return_to_base"),
              children: [
                /* @__PURE__ */ e(Kn, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Lr = {
  temperature: J,
  humidity: Yt,
  power: he,
  energy: he,
  current: he,
  voltage: he,
  illuminance: Ge,
  pressure: nr,
  battery: Qn
};
function jr(n, t, r) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (r === "temperature") return { value: n, unit: t ?? "" };
  const i = Number(n);
  return Number.isFinite(i) ? { value: Math.abs(i) >= 100 ? Math.round(i).toString() : (Math.round(i * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function dt({ entity: n, roomLabel: t }) {
  const r = n.state.attributes.device_class ?? "", i = n.state.attributes.unit_of_measurement, o = Lr[r] ?? tr, a = n.state.state === "unavailable", { value: s, unit: l } = jr(n.state.state, i, r);
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
const Vr = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function pt({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 4
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "playing", l = o === "off" || o === "standby", p = t.state.attributes.media_title, d = t.state.attributes.media_artist, f = t.state.attributes.app_name, c = t.state.attributes.volume_level, [m, _] = k(null), v = m ?? c ?? 0, g = async (b, w = {}) => {
    a || await n.callService("media_player", b, {
      entity_id: t.entity_id,
      ...w
    });
  }, u = async (b) => {
    _(b);
    try {
      await g("volume_set", { volume_level: b });
    } finally {
      setTimeout(() => _(null), 50);
    }
  }, h = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ke, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Vr[o] ?? o })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !l && !a && (p || d || f) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", children: d }),
      f && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: p || d ? "4px" : "0" }, children: f })
    ] }),
    !a && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => g("media_previous_track"),
            children: /* @__PURE__ */ e(ar, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => g("media_play_pause"),
            children: s ? /* @__PURE__ */ e(rr, { size: 18 }) : /* @__PURE__ */ e(te, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => g("media_next_track"),
            children: /* @__PURE__ */ e(ir, { size: 16 })
          }
        )
      ] }),
      typeof c == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(or, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: v,
            style: { "--val": `${v * 100}%` },
            onInput: (b) => u(Number(b.target.value))
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Rr = {
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
}, Fr = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: sr },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: lr },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: cr }
];
function ut({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "triggered", s = i.startsWith("armed_"), l = i === "pending" || i === "arming" || i === "disarming", [p, d] = k(!1), f = async (c) => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ce, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Rr[i] ?? i })
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Fr.map(({ id: c, service: m, label: _, Icon: v }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": i === c ? "true" : "false",
              disabled: p || l,
              onClick: () => f(m),
              children: [
                /* @__PURE__ */ e(v, { size: 14 }),
                /* @__PURE__ */ e("span", { children: _ })
              ]
            },
            c
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || l || i === "disarmed",
              onClick: () => f("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const Hr = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Ur(n, t) {
  const r = n.state.attributes.entity_picture;
  if (!r) return null;
  if (r.startsWith("http")) return r;
  const i = t.hassUrl?.("");
  return i ? i.replace(/\/$/, "") + r : r;
}
function ht({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "recording" || i === "streaming", [s, l] = k(0), [p, d] = k(!1), f = Ur(t, n), c = f ? `${f}${f.includes("?") ? "&" : "?"}t=${s}` : null;
  return K(() => {
    d(!1);
  }, [f]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": a ? "true" : "false", children: [
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
          disabled: o || !c,
          onClick: () => {
            l(Date.now()), d(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: Hr[i] ?? i })
  ] });
}
function _t({ hass: n, entity: t, roomLabel: r, breatheVariant: i = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, l = typeof s == "number", [p, d] = k(!1), [f, c] = k(null), m = f ?? (l ? s : o ? 100 : 0), _ = async () => {
    if (!a) {
      d(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  }, v = async (u) => {
    c(u);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: u
      });
    } finally {
      setTimeout(() => c(null), 50);
    }
  }, g = ["n-card", o ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: g, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(Qe, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || p,
          onClick: _,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && l && !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Vitesse" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
          m,
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
          value: m,
          style: { "--val": `${m}%` },
          onInput: (u) => v(Number(u.target.value))
        }
      )
    ] }),
    !o && !a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function ft({ hass: n, entity: t, roomLabel: r }) {
  const i = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = k(!1), [l, p] = k(!1), d = async () => {
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
      class: `n-card n-card--compact${l ? " is-flashing" : ""}`,
      "data-on": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: i ? /* @__PURE__ */ e(en, { size: 18 }) : /* @__PURE__ */ e(te, { size: 16 }) }),
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
            onClick: d,
            children: [
              /* @__PURE__ */ e(te, { size: 14 }),
              /* @__PURE__ */ e("span", { children: i ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const Wr = {
  "clear-night": { label: "Nuit claire", Icon: tt },
  cloudy: { label: "Nuageux", Icon: et },
  exceptional: { label: "Conditions extrêmes", Icon: Ee },
  fog: { label: "Brouillard", Icon: er },
  hail: { label: "Grêle", Icon: Ae },
  lightning: { label: "Orage", Icon: Ee },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Ee },
  partlycloudy: { label: "Éclaircies", Icon: nt },
  pouring: { label: "Pluie battante", Icon: Mn },
  rainy: { label: "Pluvieux", Icon: Mn },
  snowy: { label: "Neigeux", Icon: Ae },
  "snowy-rainy": { label: "Neige et pluie", Icon: Ae },
  sunny: { label: "Ensoleillé", Icon: Ge },
  windy: { label: "Venteux", Icon: In },
  "windy-variant": { label: "Venteux", Icon: In }
};
function oe(n) {
  return Wr[n] ?? { label: n || "—", Icon: et };
}
function mt(n, t) {
  if (n == null || n === "") return "—";
  const r = Number(n);
  return Number.isFinite(r) ? `${n}${t}` : "—";
}
function bt({ entity: n, roomLabel: t }) {
  const r = n.state.state === "unavailable" || n.state.state === "unknown", { label: i, Icon: o } = oe(n.state.state), a = n.state.attributes.temperature_unit ?? "°", s = mt(n.state.attributes.temperature, a), l = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": r ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: i }),
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
function Sn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: r } = oe(n.state.state), i = n.state.attributes.temperature_unit ?? "°", o = mt(n.state.attributes.temperature, i);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(r, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function Br(n, t) {
  const r = t.split(".")[1] || "", i = Object.values(n.states).filter((l) => l.entity_id.startsWith("sensor."));
  let o, a, s;
  for (const l of i)
    l.entity_id.endsWith("_next_rain") && (l.entity_id.includes(r) || !o) && (o = l), l.entity_id.endsWith("_weather_alert") && (l.entity_id.includes(r) || !a) && (a = l), l.entity_id.endsWith("_uv") && (l.entity_id.includes(r) || !s) && (s = l);
  return { nextRain: o, weatherAlert: a, uvIndex: s };
}
function Zr({ hass: n, weatherEntityId: t, onClose: r }) {
  const [i, o] = k([]), [a, s] = k([]), l = n.states[t], { nextRain: p, weatherAlert: d, uvIndex: f } = Br(n, t);
  if (K(() => {
    let h = !1;
    async function b() {
      try {
        const w = async (N) => {
          try {
            const A = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: N },
              target: { entity_id: t },
              return_response: !0
            });
            return A?.response?.[t]?.forecast || A?.[t]?.forecast || [];
          } catch (A) {
            return console.warn(`Failed to fetch ${N} forecast:`, A), [];
          }
        }, [z, P] = await Promise.all([
          w("daily"),
          w("hourly")
        ]);
        if (h) return;
        o(z), s(P);
      } catch (w) {
        console.error("Failed to fetch weather forecasts", w);
      }
    }
    return l?.attributes.forecast ? o(l.attributes.forecast) : b(), () => {
      h = !0;
    };
  }, [n, t]), !l) return null;
  const c = oe(l.state), m = l.attributes.temperature_unit || "°C", _ = d?.state, v = _ === "Rouge" ? "#ff4d4f" : _ === "Orange" ? "#faad14" : _ === "Jaune" ? "#fadb14" : null, g = d?.attributes ? Object.entries(d.attributes).filter(([h, b]) => b === _ && h !== "friendly_name" && h !== "icon").map(([h]) => h).join(", ") : "", u = g ? `Vigilance ${_} : ${g}` : `Vigilance ${_}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: r }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }) }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(c.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              l.attributes.temperature,
              m
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: c.label })
          ] })
        ] }),
        v && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${v}22`, color: v, border: `1px solid ${v}55` }, children: [
          /* @__PURE__ */ e(zr, { size: 20 }),
          /* @__PURE__ */ e("span", { children: u })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Sr, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          f && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Cr, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: f.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((h, b) => {
            const w = oe(h.condition), z = new Date(h.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                z.getHours(),
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
            ] }, b);
          }) })
        ] }),
        i.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: i.slice(0, 5).map((h, b) => {
            const w = oe(h.condition), z = new Date(h.datetime), P = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(z);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: b === 0 ? "Aujourd'hui" : P }),
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
            ] }, b);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function gt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? yr : /(chambre|bedroom)/.test(t) ? wr : /(cuisine|kitchen)/.test(t) ? kr : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? Mr : /(entrée|entree|hall|couloir)/.test(t) ? Ir : Kn;
}
const Yr = {
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
}, qr = /* @__PURE__ */ new Set([
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
function Jr(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Xr(n, t) {
  const r = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(rt, { ...r, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(at, { ...r }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(it, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ot, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(st, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(lt, { ...r }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(ct, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(dt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(pt, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(ut, { ...r }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(ht, { ...r }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(_t, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(ft, { ...r }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(bt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    default:
      return null;
  }
}
function Gr({ area: n, entities: t, accent: r = !1, onOpen: i, dragProps: o }) {
  const a = gt(n.name), s = t.filter(
    (d) => d.domain !== "sensor" && d.domain !== "binary_sensor"
  ).length, l = t.filter(Yn).length, p = qn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${r ? "nido-room-card--accent" : ""}`,
      onClick: i,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && (d.preventDefault(), i());
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
            /* @__PURE__ */ e(Bt, { size: 16 })
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-room-card__foot", children: [
            /* @__PURE__ */ e("div", { class: "nido-room-card__name", children: n.name }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__meta", children: [
              /* @__PURE__ */ e("span", { children: [
                s,
                " appareil",
                s > 1 ? "s" : ""
              ] }),
              l > 0 && /* @__PURE__ */ e(H, { children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
                /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                  /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                  l,
                  " actif",
                  l > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            (p.temperature || p.humidity) && /* @__PURE__ */ e("div", { class: "nido-room-card__stats", children: [
              p.temperature && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                p.temperature.value,
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
function Kr({
  hass: n,
  areas: t,
  entities: r,
  favorites: i,
  exposed: o,
  roomsOrder: a,
  onConfigure: s,
  onOpenRoom: l,
  onReorderFavorites: p,
  onReorderRooms: d
}) {
  const f = n.user?.name ?? "vous", c = /* @__PURE__ */ new Date(), m = c.getHours(), { greeting: _, sub: v } = Jr(m), g = `${String(m).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`, u = c.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (y) => y.toUpperCase()), h = L(() => new Set(o), [o]), b = L(
    () => r.filter((y) => h.has(y.entity_id) && qr.has(y.domain)),
    [r, h]
  ), w = L(
    () => b.find((y) => y.domain === "weather"),
    [b]
  ), z = L(() => w ? Object.keys(n.states).some(
    (S) => S.startsWith("sensor.") && (S.endsWith("_next_rain") || S.endsWith("_weather_alert") || S.endsWith("_uv"))
  ) : !1, [n.states, w]), [P, N] = k(!1), A = L(() => Object.values(n.states).filter(
    (y) => y.entity_id.startsWith("person.") && y.state === "home" && y.attributes.entity_picture
  ), [n.states]), F = (y) => {
    if (!y) return null;
    if (y.startsWith("http")) return y;
    const S = n.hassUrl?.("");
    return S ? S.replace(/\/$/, "") + y : y;
  }, D = L(() => Nt(b), [b]), V = L(() => {
    const y = new Map(b.map((S) => [S.entity_id, S]));
    return i.map((S) => y.get(S)).filter((S) => !!S);
  }, [b, i]), X = L(() => {
    const y = t.filter((S) => (D.get(S.area_id) ?? []).length > 0);
    return Gn(y, a, (S) => S.area_id);
  }, [t, D, a]), Z = Le(
    V,
    (y) => y.entity_id,
    (y) => p(y.map((S) => S.entity_id))
  ), U = Le(
    X,
    (y) => y.area_id,
    (y) => d(y.map((S) => S.area_id))
  );
  let G = 0;
  const de = V.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${Z.isDragging ? "is-dragging" : ""}`,
        ref: (y) => {
          Z.containerRef.current = y;
        },
        children: V.map((y) => {
          G += 1;
          const S = (G - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...Z.itemPropsFor(y.entity_id),
              children: Xr(y, {
                hass: n,
                areaName: t.find((C) => C.area_id === y.area_id)?.name ?? "",
                hero: G === 1 && y.domain === "light",
                variant: S
              })
            },
            y.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, Q = b.length > 0;
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
              onClick: () => N(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Sn, { entity: w })
            }
          ) : /* @__PURE__ */ e(Sn, { entity: w })),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: s,
              children: [
                /* @__PURE__ */ e(Wt, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Personnaliser" })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { class: "nido-topbar__time", children: g })
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: u }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            _,
            ", ",
            /* @__PURE__ */ e("em", { children: f })
          ] }),
          A.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: A.map((y) => {
              const S = F(y.attributes.entity_picture);
              return S ? /* @__PURE__ */ e(
                "img",
                {
                  src: S,
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
      Q ? /* @__PURE__ */ e(H, { children: [
        de,
        X.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${U.isDragging ? "is-dragging" : ""}`,
              ref: (y) => {
                U.containerRef.current = y;
              },
              children: X.map((y, S) => /* @__PURE__ */ e(
                Gr,
                {
                  area: y,
                  entities: D.get(y.area_id) ?? [],
                  accent: S === 0,
                  onOpen: () => l(y.area_id),
                  dragProps: U.itemPropsFor(y.area_id)
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
    P && w && /* @__PURE__ */ e(
      Zr,
      {
        hass: n,
        weatherEntityId: w.entity_id,
        onClose: () => N(!1)
      }
    )
  ] });
}
function Qr(n, t, r, i, o = !1) {
  const a = { hass: t, entity: n, roomLabel: r };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(rt, { ...a, hero: o, breatheVariant: i }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(at, { ...a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(it, { ...a, breatheVariant: i }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ot, { entity: n, roomLabel: r }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(st, { ...a, breatheVariant: i }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(lt, { ...a }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(ct, { ...a, breatheVariant: i }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(dt, { entity: n, roomLabel: r }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(pt, { ...a, breatheVariant: i }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(ut, { ...a }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(ht, { ...a }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(_t, { ...a, breatheVariant: i }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(ft, { ...a }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(bt, { entity: n, roomLabel: r }, n.entity_id);
    default:
      return null;
  }
}
function ea({
  hass: n,
  area: t,
  entities: r,
  entitiesOrder: i,
  onBack: o,
  onReorderEntities: a
}) {
  const s = gt(t.name), l = qn(r), p = L(
    () => Gn(r, i, (u) => u.entity_id),
    [r, i]
  ), d = L(() => {
    const u = /* @__PURE__ */ new Map();
    for (const h of p)
      u.set(h.domain, (u.get(h.domain) ?? 0) + 1);
    return Array.from(u.entries()).sort((h, b) => b[1] - h[1]);
  }, [p]), [f, c] = k("all"), m = L(
    () => f === "all" ? p : p.filter((u) => u.domain === f),
    [p, f]
  ), _ = Le(
    m,
    (u) => u.entity_id,
    (u) => {
      const h = new Set(m.map((z) => z.entity_id)), b = [...u], w = p.map(
        (z) => h.has(z.entity_id) ? b.shift() : z
      );
      a(w.map((z) => z.entity_id));
    }
  ), v = p.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, g = p.filter(Yn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(vr, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(xr, { size: 18 }) }) })
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
              v,
              " appareil",
              v > 1 ? "s" : ""
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
      (l.temperature || l.humidity || l.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        l.temperature && /* @__PURE__ */ e(
          Te,
          {
            label: "Température",
            value: l.temperature.value,
            unit: l.temperature.unit || "°"
          }
        ),
        l.humidity && /* @__PURE__ */ e(Cn, {}),
        l.humidity && /* @__PURE__ */ e(
          Te,
          {
            label: "Humidité",
            value: Math.round(parseFloat(l.humidity.value)).toString(),
            unit: l.humidity.unit || "%"
          }
        ),
        l.illuminance && /* @__PURE__ */ e(Cn, {}),
        l.illuminance && /* @__PURE__ */ e(
          Te,
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
          class: `n-pill-btn ${f === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => c("all"),
          children: [
            "Tout · ",
            r.length
          ]
        }
      ),
      d.map(([u, h]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${f === u ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => c(u),
          children: [
            Yr[u] ?? u,
            " · ",
            h
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${_.isDragging ? "is-dragging" : ""}`,
        ref: (u) => {
          _.containerRef.current = u;
        },
        children: m.map((u, h) => {
          const b = h % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ..._.itemPropsFor(u.entity_id),
              children: Qr(u, n, t.name, b, h === 0 && u.domain === "light")
            },
            u.entity_id
          );
        })
      }
    )
  ] }) });
}
function Te({ label: n, value: t, unit: r }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: r })
    ] })
  ] });
}
function Cn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const _e = 5, re = {
  light: { label: "Lumières", Icon: Ze },
  switch: { label: "Prises & switches", Icon: qe },
  cover: { label: "Volets & stores", Icon: Ye },
  climate: { label: "Thermostats", Icon: J },
  lock: { label: "Serrures", Icon: Je },
  vacuum: { label: "Aspirateurs", Icon: Xe },
  binary_sensor: { label: "Détecteurs", Icon: ce },
  sensor: { label: "Capteurs", Icon: ie },
  media_player: { label: "Lecteurs média", Icon: Ke },
  alarm_control_panel: { label: "Alarmes", Icon: ce },
  camera: { label: "Caméras", Icon: Me },
  fan: { label: "Ventilateurs", Icon: Qe },
  scene: { label: "Scènes", Icon: en },
  script: { label: "Scripts", Icon: te },
  weather: { label: "Météo", Icon: nt }
}, An = Object.keys(re), je = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function na(n) {
  const {
    hass: t,
    entities: r,
    areas: i,
    initialTheme: o,
    initialMode: a,
    initialExposed: s,
    initialFavorites: l,
    initialExcludedUsers: p,
    isReturning: d,
    onApplyTheme: f,
    onClose: c,
    onDone: m
  } = n, [_, v] = k(0), [g, u] = k(o), [h, b] = k(a), [w, z] = k(new Set(s)), [P, N] = k(new Set(l)), [A, F] = k(
    new Set(p)
  ), [D, V] = k(null), [X, Z] = k(null);
  K(() => {
    let M = !1;
    return t.callWS({ type: "config/auth/list" }).then((I) => {
      M || V(
        (I ?? []).filter((E) => !E.system_generated).sort((E, R) => E.name.localeCompare(R.name))
      );
    }).catch((I) => {
      M || (Z(I instanceof Error ? I.message : String(I)), t.user && V([t.user]));
    }), () => {
      M = !0;
    };
  }, [t]);
  const U = () => v((M) => Math.min(_e - 1, M + 1)), G = () => v((M) => Math.max(0, M - 1)), de = (M, I) => {
    u(M), b(I), f(M, I);
  }, Q = (M) => {
    z((I) => {
      const E = new Set(I);
      return E.has(M) ? (E.delete(M), N((R) => {
        if (!R.has(M)) return R;
        const pe = new Set(R);
        return pe.delete(M), pe;
      })) : E.add(M), E;
    });
  }, y = (M) => {
    N((I) => {
      const E = new Set(I);
      return E.has(M) ? E.delete(M) : (E.add(M), z((R) => R.has(M) ? R : new Set(R).add(M))), E;
    });
  }, S = (M) => {
    F((I) => {
      const E = new Set(I);
      return E.has(M) ? E.delete(M) : E.add(M), E;
    });
  }, C = () => {
    const M = Array.from(w), I = Array.from(P).filter((R) => w.has(R)), E = Array.from(A);
    xn(g, h), mn(M), Oe(I), bn(E), vn(), m({
      exposed: M,
      favorites: I,
      theme: g,
      mode: h,
      excludedUsers: E
    });
  }, Y = () => {
    xn(g, h), mn(Array.from(w)), Oe(Array.from(P).filter((M) => w.has(M))), bn(Array.from(A)), vn(), c();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(gr, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: _e }, (M, I) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${I === _ ? "is-active" : ""} ${I < _ ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          _ + 1,
          " / ",
          _e
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: Y, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      _ === 0 && /* @__PURE__ */ e(
        ta,
        {
          isReturning: d,
          exposedCount: w.size,
          favCount: P.size,
          themeLabel: je[g].name,
          modeLabel: h === "light" ? "Clair" : "Sombre",
          allowedUsersCount: D ? D.filter((M) => !A.has(M.id)).length : null
        }
      ),
      _ === 1 && /* @__PURE__ */ e(ra, { entitiesCount: r.length, areasCount: i.length }),
      _ === 2 && /* @__PURE__ */ e(
        aa,
        {
          entities: r,
          exposed: w,
          favs: P,
          onToggleExpose: Q,
          onToggleFav: y
        }
      ),
      _ === 3 && /* @__PURE__ */ e(
        ia,
        {
          theme: g,
          mode: h,
          onPick: de,
          userName: t.user?.name ?? "vous"
        }
      ),
      _ === 4 && /* @__PURE__ */ e(
        oa,
        {
          hass: t,
          users: D,
          error: X,
          excluded: A,
          onToggleUser: S
        }
      )
    ] }, _),
    /* @__PURE__ */ e("footer", { class: "n-ob__footer", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-ob__back",
          disabled: _ === 0,
          onClick: G,
          children: [
            /* @__PURE__ */ e(dr, { size: 14 }),
            " Retour"
          ]
        }
      ),
      _ < _e - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: U, children: [
        "Continuer ",
        /* @__PURE__ */ e(zn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: C, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(zn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const En = [
  Ze,
  Ye,
  qe,
  J,
  Je,
  Xe,
  ie,
  Ke,
  ce,
  Me,
  Qe,
  en,
  te
];
function fe({ offset: n, intervalMs: t }) {
  const [r, i] = k(n);
  K(() => {
    const a = setInterval(() => i((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = En[r % En.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, r);
}
function ta(n) {
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
          /* @__PURE__ */ e(me, { label: "Exposées", value: r }),
          /* @__PURE__ */ e(me, { label: "Favoris", value: i, accent: !0 }),
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
function ra({ entitiesCount: n, areasCount: t }) {
  const [r, i] = k("scanning");
  return K(() => {
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(mr, { size: 18 }) }),
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
function aa(n) {
  const { entities: t, exposed: r, favs: i, onToggleExpose: o, onToggleFav: a } = n, s = L(() => {
    const u = /* @__PURE__ */ new Map();
    for (const h of t)
      An.includes(h.domain) && (u.has(h.domain) || u.set(h.domain, []), u.get(h.domain).push(h));
    return Array.from(u.entries()).sort((h, b) => b[1].length - h[1].length);
  }, [t]), [l, p] = k(s[0]?.[0] ?? "light"), [d, f] = k(""), c = s.find(([u]) => u === l) ?? s[0], m = r.size, _ = t.filter((u) => An.includes(u.domain)).length, v = d.trim().toLowerCase(), g = c ? v ? c[1].filter(
    (u) => (u.friendly_name ?? "").toLowerCase().includes(v) || u.entity_id.toLowerCase().includes(v)
  ) : c[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: m }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          _
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: m === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${m > 1 ? "s" : ""} exposé${m > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([u, h]) => {
        const b = re[u], w = b.Icon, z = h.filter((N) => r.has(N.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${u === l ? "is-active" : ""}`,
            onClick: () => p(u),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(w, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: b.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                z,
                "/",
                h.length
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
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: re[c[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => g.forEach((u) => !r.has(u.entity_id) && o(u.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => g.forEach((u) => r.has(u.entity_id) && o(u.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(hr, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (u) => f(u.target.value),
            placeholder: `Rechercher dans ${re[c[0]].label.toLowerCase()}…`,
            "aria-label": "Rechercher une entité"
          }
        ),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-ob-ent__search-clear",
            onClick: () => f(""),
            "aria-label": "Effacer la recherche",
            children: /* @__PURE__ */ e(_r, { size: 12 })
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
          const h = r.has(u.entity_id), b = i.has(u.entity_id), w = re[u.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${h ? "is-exposed" : ""}`,
              onClick: () => o(u.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${h ? "is-on" : ""}`, children: /* @__PURE__ */ e(w, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: u.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: u.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${b ? "is-fav" : ""}`,
                    "aria-label": b ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (z) => {
                      z.stopPropagation(), a(u.entity_id);
                    },
                    children: b ? /* @__PURE__ */ e(fr, { size: 14 }) : /* @__PURE__ */ e(ur, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${h ? "is-on" : ""}`, children: h && /* @__PURE__ */ e(pr, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function ia(n) {
  const { theme: t, mode: r, userName: i, onPick: o } = n, a = je[t];
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
        const l = je[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, r),
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
            class: `n-ob-theme__mode ${r === "light" ? "is-active" : ""}`,
            onClick: () => o(t, "light"),
            children: [
              /* @__PURE__ */ e(Ge, { size: 14 }),
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
              /* @__PURE__ */ e(tt, { size: 14 }),
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
function oa(n) {
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
      const l = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${l ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(br, { size: 18 }) }),
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
const sa = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function la({ hass: n, host: t }) {
  const [r, i] = k(null), [o, a] = k(null), [s, l] = k(null), [p, d] = k(null), f = L(() => Xn(), []), [c, m] = k(() => Ot()), [_, v] = k(() => Lt()), [g, u] = k(() => jt()), [h, b] = k(() => Vt()), [w, z] = k(
    () => Ft()
  ), [P, N] = k(() => !gn()), [A, F] = k(
    { kind: "dashboard" }
  ), D = (C) => {
    m(C), Oe(C);
  }, V = (C) => {
    b(C), Rt(C);
  }, X = (C, Y) => {
    z((M) => {
      const I = { ...M, [C]: Y };
      return Ht(I), I;
    });
  }, Z = ee(n);
  Z.current = n, K(() => {
    if (!n) return;
    let C = !1;
    const Y = [], M = async () => {
      const I = Z.current;
      if (I)
        try {
          const [E, R, pe] = await Promise.all([
            At(I),
            Et(I),
            Tt(I)
          ]);
          if (C) return;
          i(E), a(R), l(pe);
        } catch (E) {
          if (C) return;
          d(E instanceof Error ? E.message : String(E));
        }
    };
    return M(), Promise.all(
      sa.map(
        (I) => n.connection.subscribeEvents(() => {
          C || M();
        }, I)
      )
    ).then((I) => {
      if (C) {
        I.forEach((E) => E());
        return;
      }
      Y.push(...I);
    }).catch((I) => console.warn("Nido: subscribeEvents failed", I)), () => {
      C = !0, Y.forEach((I) => I());
    };
  }, [n != null]);
  const U = L(() => !n || !o || !s ? [] : $t(n, o, s), [n?.states, o, s]), G = (C, Y) => {
    t?.applyTheme?.(C, Y);
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
  const Q = L(() => new Set(_), [_]), y = A.kind === "room" ? r.find((C) => C.area_id === A.areaId) ?? null : null, S = L(
    () => y ? U.filter(
      (C) => C.area_id === y.area_id && Q.has(C.entity_id)
    ) : [],
    [U, y, Q]
  );
  return /* @__PURE__ */ e(H, { children: [
    A.kind === "dashboard" || !y ? /* @__PURE__ */ e(
      Kr,
      {
        hass: n,
        areas: r,
        entities: U,
        favorites: c,
        exposed: _,
        roomsOrder: h,
        onConfigure: () => N(!0),
        onOpenRoom: (C) => F({ kind: "room", areaId: C }),
        onReorderFavorites: D,
        onReorderRooms: V
      }
    ) : /* @__PURE__ */ e(
      ea,
      {
        hass: n,
        area: y,
        entities: S,
        entitiesOrder: w[y.area_id] ?? [],
        onBack: () => F({ kind: "dashboard" }),
        onReorderEntities: (C) => X(y.area_id, C)
      }
    ),
    P && /* @__PURE__ */ e(
      na,
      {
        hass: n,
        entities: U,
        areas: r,
        initialTheme: f.theme,
        initialMode: f.mode,
        initialExposed: _,
        initialFavorites: c,
        initialExcludedUsers: g,
        isReturning: gn(),
        onApplyTheme: G,
        onClose: () => N(!1),
        onDone: (C) => {
          v(C.exposed), m(C.favorites), u(C.excludedUsers), N(!1);
        }
      }
    )
  ] });
}
const ca = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', da = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__time{font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;color:var(--ink-3)}.nido-topbar__brand{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:22px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true]{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}', Tn = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let Pn = !1;
function pa() {
  if (Pn || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Tn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Tn, document.head.appendChild(t);
  }
  Pn = !0;
}
class ua extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, pa();
    const t = this.attachShadow({ mode: "open" }), r = document.createElement("style");
    r.textContent = `${ca}
${da}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(r, this._mountPoint);
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
    const { theme: t, mode: r } = Xn();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", r), this._render();
  }
  disconnectedCallback() {
    on(null, this._mountPoint);
  }
  applyTheme(t, r) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", r);
  }
  _render() {
    on(Ln(la, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", ua);
console.info(
  "%c NIDO %c v0.1.5 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
