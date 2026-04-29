var ke, A, En, Y, en, Tn, Pn, Ie, he, ne, $n, De, Ee, Te, ge = {}, ve = [], bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, we = Array.isArray;
function W(n, t) {
  for (var a in t) n[a] = t[a];
  return n;
}
function Ve(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Nn(n, t, a) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ke.call(arguments, 2) : a), typeof n == "function" && n.defaultProps != null) for (i in n.defaultProps) s[i] === void 0 && (s[i] = n.defaultProps[i]);
  return fe(n, s, r, o, null);
}
function fe(n, t, a, r, o) {
  var i = { type: n, props: t, key: a, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++En, __i: -1, __u: 0 };
  return o == null && A.vnode != null && A.vnode(i), i;
}
function F(n) {
  return n.children;
}
function me(n, t) {
  this.props = n, this.context = t;
}
function G(n, t) {
  if (t == null) return n.__ ? G(n.__, n.__i + 1) : null;
  for (var a; t < n.__k.length; t++) if ((a = n.__k[t]) != null && a.__e != null) return a.__e;
  return typeof n.type == "function" ? G(n) : null;
}
function gt(n) {
  if (n.__P && n.__d) {
    var t = n.__v, a = t.__e, r = [], o = [], i = W({}, t);
    i.__v = t.__v + 1, A.vnode && A.vnode(i), Re(n.__P, i, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [a] : null, r, a ?? G(t), !!(32 & t.__u), o), i.__v = t.__v, i.__.__k[i.__i] = i, Vn(r, i, o), t.__e = t.__ = null, i.__e != a && Ln(i);
  }
}
function Ln(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Ln(n);
}
function nn(n) {
  (!n.__d && (n.__d = !0) && Y.push(n) && !xe.__r++ || en != A.debounceRendering) && ((en = A.debounceRendering) || Tn)(xe);
}
function xe() {
  try {
    for (var n, t = 1; Y.length; ) Y.length > t && Y.sort(Pn), n = Y.shift(), t = Y.length, gt(n);
  } finally {
    Y.length = xe.__r = 0;
  }
}
function On(n, t, a, r, o, i, s, c, p, d, m) {
  var l, f, u, v, x, _, h, b = r && r.__k || ve, I = t.length;
  for (p = vt(a, t, b, p, I), l = 0; l < I; l++) (u = a.__k[l]) != null && (f = u.__i != -1 && b[u.__i] || ge, u.__i = l, _ = Re(n, u, f, o, i, s, c, p, d, m), v = u.__e, u.ref && f.ref != u.ref && (f.ref && je(f.ref, null, u), m.push(u.ref, u.__c || v, u)), x == null && v != null && (x = v), (h = !!(4 & u.__u)) || f.__k === u.__k ? (p = Dn(u, p, n, h), h && f.__e && (f.__e = null)) : typeof u.type == "function" && _ !== void 0 ? p = _ : v && (p = v.nextSibling), u.__u &= -7);
  return a.__e = x, p;
}
function vt(n, t, a, r, o) {
  var i, s, c, p, d, m = a.length, l = m, f = 0;
  for (n.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[i] = fe(null, s, null, null, null) : we(s) ? s = n.__k[i] = fe(F, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[i] = fe(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[i] = s, p = i + f, s.__ = n, s.__b = n.__b + 1, c = null, (d = s.__i = xt(s, a, p, l)) != -1 && (l--, (c = a[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (o > m ? f-- : o < m && f++), typeof s.type != "function" && (s.__u |= 4)) : d != p && (d == p - 1 ? f-- : d == p + 1 ? f++ : (d > p ? f-- : f++, s.__u |= 4))) : n.__k[i] = null;
  if (l) for (i = 0; i < m; i++) (c = a[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = G(c)), jn(c, c));
  return r;
}
function Dn(n, t, a, r) {
  var o, i;
  if (typeof n.type == "function") {
    for (o = n.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = n, t = Dn(o[i], t, a, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = G(n)), a.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function xt(n, t, a, r) {
  var o, i, s, c = n.key, p = n.type, d = t[a], m = d != null && (2 & d.__u) == 0;
  if (d === null && c == null || m && c == d.key && p == d.type) return a;
  if (r > (m ? 1 : 0)) {
    for (o = a - 1, i = a + 1; o >= 0 || i < t.length; ) if ((d = t[s = o >= 0 ? o-- : i++]) != null && (2 & d.__u) == 0 && c == d.key && p == d.type) return s;
  }
  return -1;
}
function tn(n, t, a) {
  t[0] == "-" ? n.setProperty(t, a ?? "") : n[t] = a == null ? "" : typeof a != "number" || bt.test(t) ? a : a + "px";
}
function le(n, t, a, r, o) {
  var i, s;
  e: if (t == "style") if (typeof a == "string") n.style.cssText = a;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) a && t in a || tn(n.style, t, "");
    if (a) for (t in a) r && a[t] == r[t] || tn(n.style, t, a[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace($n, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + i] = a, a ? r ? a[ne] = r[ne] : (a[ne] = De, n.addEventListener(t, i ? Te : Ee, i)) : n.removeEventListener(t, i ? Te : Ee, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n) try {
      n[t] = a ?? "";
      break e;
    } catch {
    }
    typeof a == "function" || (a == null || a === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && a == 1 ? "" : a));
  }
}
function an(n) {
  return function(t) {
    if (this.l) {
      var a = this.l[t.type + n];
      if (t[he] == null) t[he] = De++;
      else if (t[he] < a[ne]) return;
      return a(A.event ? A.event(t) : t);
    }
  };
}
function Re(n, t, a, r, o, i, s, c, p, d) {
  var m, l, f, u, v, x, _, h, b, I, S, $, O, E, R, N = t.type;
  if (t.constructor !== void 0) return null;
  128 & a.__u && (p = !!(32 & a.__u), i = [c = t.__e = a.__e]), (m = A.__b) && m(t);
  e: if (typeof N == "function") try {
    if (h = t.props, b = N.prototype && N.prototype.render, I = (m = N.contextType) && r[m.__c], S = m ? I ? I.props.value : m.__ : r, a.__c ? _ = (l = t.__c = a.__c).__ = l.__E : (b ? t.__c = l = new N(h, S) : (t.__c = l = new me(h, S), l.constructor = N, l.render = kt), I && I.sub(l), l.state || (l.state = {}), l.__n = r, f = l.__d = !0, l.__h = [], l._sb = []), b && l.__s == null && (l.__s = l.state), b && N.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = W({}, l.__s)), W(l.__s, N.getDerivedStateFromProps(h, l.__s))), u = l.props, v = l.state, l.__v = t, f) b && N.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), b && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (b && N.getDerivedStateFromProps == null && h !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, S), t.__v == a.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, S) === !1) {
        t.__v != a.__v && (l.props = h, l.state = l.__s, l.__d = !1), t.__e = a.__e, t.__k = a.__k, t.__k.some(function(j) {
          j && (j.__ = t);
        }), ve.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && s.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, S), b && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(u, v, x);
      });
    }
    if (l.context = S, l.props = h, l.__P = n, l.__e = !1, $ = A.__r, O = 0, b) l.state = l.__s, l.__d = !1, $ && $(t), m = l.render(l.props, l.state, l.context), ve.push.apply(l.__h, l._sb), l._sb = [];
    else do
      l.__d = !1, $ && $(t), m = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++O < 25);
    l.state = l.__s, l.getChildContext != null && (r = W(W({}, r), l.getChildContext())), b && !f && l.getSnapshotBeforeUpdate != null && (x = l.getSnapshotBeforeUpdate(u, v)), E = m != null && m.type === F && m.key == null ? Rn(m.props.children) : m, c = On(n, we(E) ? E : [E], t, a, r, o, i, s, c, p, d), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), _ && (l.__E = l.__ = null);
  } catch (j) {
    if (t.__v = null, p || i != null) if (j.then) {
      for (t.__u |= p ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      i[i.indexOf(c)] = null, t.__e = c;
    } else {
      for (R = i.length; R--; ) Ve(i[R]);
      Pe(t);
    }
    else t.__e = a.__e, t.__k = a.__k, j.then || Pe(t);
    A.__e(j, t, a);
  }
  else i == null && t.__v == a.__v ? (t.__k = a.__k, t.__e = a.__e) : c = t.__e = yt(a.__e, t, a, r, o, i, s, p, d);
  return (m = A.diffed) && m(t), 128 & t.__u ? void 0 : c;
}
function Pe(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Pe));
}
function Vn(n, t, a) {
  for (var r = 0; r < a.length; r++) je(a[r], a[++r], a[++r]);
  A.__c && A.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      A.__e(i, o.__v);
    }
  });
}
function Rn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : we(n) ? n.map(Rn) : W({}, n);
}
function yt(n, t, a, r, o, i, s, c, p) {
  var d, m, l, f, u, v, x, _ = a.props || ge, h = t.props, b = t.type;
  if (b == "svg" ? o = "http://www.w3.org/2000/svg" : b == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((u = i[d]) && "setAttribute" in u == !!b && (b ? u.localName == b : u.nodeType == 3)) {
      n = u, i[d] = null;
      break;
    }
  }
  if (n == null) {
    if (b == null) return document.createTextNode(h);
    n = document.createElementNS(o, b, h.is && h), c && (A.__m && A.__m(t, i), c = !1), i = null;
  }
  if (b == null) _ === h || c && n.data == h || (n.data = h);
  else {
    if (i = i && ke.call(n.childNodes), !c && i != null) for (_ = {}, d = 0; d < n.attributes.length; d++) _[(u = n.attributes[d]).name] = u.value;
    for (d in _) u = _[d], d == "dangerouslySetInnerHTML" ? l = u : d == "children" || d in h || d == "value" && "defaultValue" in h || d == "checked" && "defaultChecked" in h || le(n, d, null, u, o);
    for (d in h) u = h[d], d == "children" ? f = u : d == "dangerouslySetInnerHTML" ? m = u : d == "value" ? v = u : d == "checked" ? x = u : c && typeof u != "function" || _[d] === u || le(n, d, u, _[d], o);
    if (m) c || l && (m.__html == l.__html || m.__html == n.innerHTML) || (n.innerHTML = m.__html), t.__k = [];
    else if (l && (n.innerHTML = ""), On(t.type == "template" ? n.content : n, we(f) ? f : [f], t, a, r, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : a.__k && G(a, 0), c, p), i != null) for (d = i.length; d--; ) Ve(i[d]);
    c || (d = "value", b == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || b == "progress" && !v || b == "option" && v != _[d]) && le(n, d, v, _[d], o), d = "checked", x != null && x != n[d] && le(n, d, x, _[d], o));
  }
  return n;
}
function je(n, t, a) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    A.__e(o, a);
  }
}
function jn(n, t, a) {
  var r, o;
  if (A.unmount && A.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || je(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      A.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && jn(r[o], t, a || typeof n.type != "function");
  a || Ve(n.__e), n.__c = n.__ = n.__e = void 0;
}
function kt(n, t, a) {
  return this.constructor(n, a);
}
function rn(n, t, a) {
  var r, o, i, s;
  t == document && (t = document.documentElement), A.__ && A.__(n, t), o = (r = !1) ? null : t.__k, i = [], s = [], Re(t, n = t.__k = Nn(F, null, [n]), o || ge, ge, t.namespaceURI, o ? null : t.firstChild ? ke.call(t.childNodes) : null, i, o ? o.__e : t.firstChild, r, s), Vn(i, n, s);
}
ke = ve.slice, A = { __e: function(n, t, a, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    n = c;
  }
  throw n;
} }, En = 0, me.prototype.setState = function(n, t) {
  var a;
  a = this.__s != null && this.__s != this.state ? this.__s : this.__s = W({}, this.state), typeof n == "function" && (n = n(W({}, a), this.props)), n && W(a, n), n != null && this.__v && (t && this._sb.push(t), nn(this));
}, me.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), nn(this));
}, me.prototype.render = F, Y = [], Tn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, xe.__r = 0, Ie = Math.random().toString(8), he = "__d" + Ie, ne = "__a" + Ie, $n = /(PointerCapture)$|Capture$/i, De = 0, Ee = an(!1), Te = an(!0);
var wt = 0;
function e(n, t, a, r, o, i) {
  t || (t = {});
  var s, c, p = t;
  if ("ref" in p) for (c in p = {}, t) c == "ref" ? s = t[c] : p[c] = t[c];
  var d = { type: n, props: p, key: a, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --wt, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof n == "function" && (s = n.defaultProps)) for (c in s) p[c] === void 0 && (p[c] = s[c]);
  return A.vnode && A.vnode(d), d;
}
var ae, P, Se, on, re = 0, Hn = [], L = A, sn = L.__b, cn = L.__r, ln = L.diffed, dn = L.__c, pn = L.unmount, _n = L.__;
function He(n, t) {
  L.__h && L.__h(P, n, re || t), re = 0;
  var a = P.__H || (P.__H = { __: [], __h: [] });
  return n >= a.__.length && a.__.push({}), a.__[n];
}
function w(n) {
  return re = 1, Mt(Un, n);
}
function Mt(n, t, a) {
  var r = He(ae++, 2);
  if (r.t = n, !r.__c && (r.__ = [Un(void 0, t), function(c) {
    var p = r.__N ? r.__N[0] : r.__[0], d = r.t(p, c);
    p !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = P, !P.__f)) {
    var o = function(c, p, d) {
      if (!r.__c.__H) return !0;
      var m = r.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (m.every(function(f) {
        return !f.__N;
      })) return !i || i.call(this, c, p, d);
      var l = r.__c.props !== c;
      return m.some(function(f) {
        if (f.__N) {
          var u = f.__[0];
          f.__ = f.__N, f.__N = void 0, u !== f.__[0] && (l = !0);
        }
      }), i && i.call(this, c, p, d) || l;
    };
    P.__f = !0;
    var i = P.shouldComponentUpdate, s = P.componentWillUpdate;
    P.componentWillUpdate = function(c, p, d) {
      if (this.__e) {
        var m = i;
        i = void 0, o(c, p, d), i = m;
      }
      s && s.call(this, c, p, d);
    }, P.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function oe(n, t) {
  var a = He(ae++, 3);
  !L.__s && Fn(a.__H, t) && (a.__ = n, a.u = t, P.__H.__h.push(a));
}
function J(n) {
  return re = 5, D(function() {
    return { current: n };
  }, []);
}
function D(n, t) {
  var a = He(ae++, 7);
  return Fn(a.__H, t) && (a.__ = n(), a.__H = t, a.__h = n), a.__;
}
function un(n, t) {
  return re = 8, D(function() {
    return n;
  }, t);
}
function It() {
  for (var n; n = Hn.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(be), t.__h.some($e), t.__h = [];
    } catch (a) {
      t.__h = [], L.__e(a, n.__v);
    }
  }
}
L.__b = function(n) {
  P = null, sn && sn(n);
}, L.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), _n && _n(n, t);
}, L.__r = function(n) {
  cn && cn(n), ae = 0;
  var t = (P = n.__c).__H;
  t && (Se === P ? (t.__h = [], P.__h = [], t.__.some(function(a) {
    a.__N && (a.__ = a.__N), a.u = a.__N = void 0;
  })) : (t.__h.some(be), t.__h.some($e), t.__h = [], ae = 0)), Se = P;
}, L.diffed = function(n) {
  ln && ln(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Hn.push(t) !== 1 && on === L.requestAnimationFrame || ((on = L.requestAnimationFrame) || St)(It)), t.__H.__.some(function(a) {
    a.u && (a.__H = a.u), a.u = void 0;
  })), Se = P = null;
}, L.__c = function(n, t) {
  t.some(function(a) {
    try {
      a.__h.some(be), a.__h = a.__h.filter(function(r) {
        return !r.__ || $e(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], L.__e(r, a.__v);
    }
  }), dn && dn(n, t);
}, L.unmount = function(n) {
  pn && pn(n);
  var t, a = n.__c;
  a && a.__H && (a.__H.__.some(function(r) {
    try {
      be(r);
    } catch (o) {
      t = o;
    }
  }), a.__H = void 0, t && L.__e(t, a.__v));
};
var hn = typeof requestAnimationFrame == "function";
function St(n) {
  var t, a = function() {
    clearTimeout(r), hn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(a, 35);
  hn && (t = requestAnimationFrame(a));
}
function be(n) {
  var t = P, a = n.__c;
  typeof a == "function" && (n.__c = void 0, a()), P = t;
}
function $e(n) {
  var t = P;
  n.__c = n.__(), P = t;
}
function Fn(n, t) {
  return !n || n.length !== t.length || t.some(function(a, r) {
    return a !== n[r];
  });
}
function Un(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function zt(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((a, r) => a.name.localeCompare(r.name, "fr"));
}
async function Ct(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function At(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function Et(n) {
  return n.split(".")[0] ?? "";
}
function Tt(n, t, a) {
  const r = new Map(a.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), i = [];
  for (const [s, c] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), m = p?.name ?? c.attributes.friendly_name ?? p?.original_name ?? s;
    i.push({
      entity_id: s,
      domain: Et(s),
      area_id: d,
      friendly_name: m,
      state: c
    });
  }
  return i;
}
function Pt(n) {
  const t = /* @__PURE__ */ new Map();
  for (const a of n) {
    const r = t.get(a.area_id) ?? [];
    r.push(a), t.set(a.area_id, r);
  }
  return t;
}
function Bn(n) {
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
      const a = n.state.attributes.current_position;
      return typeof a == "number" ? a > 0 : t === "open" || t === "opening" || t === "closing";
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
function Wn(n) {
  const t = {};
  for (const a of n) {
    if (a.domain !== "sensor") continue;
    const r = a.state.attributes.device_class, o = a.state.attributes.unit_of_measurement ?? "", i = a.state.state;
    i === "unavailable" || i === "unknown" || (r === "temperature" && !t.temperature ? t.temperature = { value: i, unit: o } : r === "humidity" && !t.humidity ? t.humidity = { value: i, unit: o } : r === "illuminance" && !t.illuminance && (t.illuminance = { value: i, unit: o }));
  }
  return t;
}
const V = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode"
}, Zn = ["terracotta", "miel", "sauge", "cosy"], $t = ["light", "dark"];
function U() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Nt() {
  const n = U();
  if (!n) return [];
  const t = n.getItem(V.favorites);
  if (!t) return [];
  try {
    const a = JSON.parse(t);
    return Array.isArray(a) ? a.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function Ne(n) {
  const t = U();
  t && t.setItem(V.favorites, JSON.stringify(n));
}
function Fe(n) {
  const t = U();
  if (!t) return [];
  const a = t.getItem(n);
  if (!a) return [];
  try {
    const r = JSON.parse(a);
    return Array.isArray(r) ? r.filter((o) => typeof o == "string") : [];
  } catch {
    return [];
  }
}
function Ue(n, t) {
  const a = U();
  a && a.setItem(n, JSON.stringify(t));
}
const Lt = () => Fe(V.exposed), fn = (n) => Ue(V.exposed, n), Ot = () => Fe(V.excludedUsers), mn = (n) => Ue(V.excludedUsers, n), Dt = () => Fe(V.roomsOrder), Vt = (n) => Ue(V.roomsOrder, n);
function Rt() {
  const n = U();
  if (!n) return {};
  const t = n.getItem(V.roomEntitiesOrder);
  if (!t) return {};
  try {
    const a = JSON.parse(t);
    if (typeof a != "object" || a === null) return {};
    const r = {};
    for (const [o, i] of Object.entries(a))
      Array.isArray(i) && (r[o] = i.filter((s) => typeof s == "string"));
    return r;
  } catch {
    return {};
  }
}
function jt(n) {
  const t = U();
  t && t.setItem(V.roomEntitiesOrder, JSON.stringify(n));
}
function bn() {
  return U()?.getItem(V.onboarded) === "1";
}
function gn(n) {
  const t = U();
  t && t.setItem(V.onboarded, "1");
}
function Yn() {
  const n = U(), t = n?.getItem(V.theme), a = n?.getItem(V.mode);
  return {
    theme: Zn.includes(t) ? t : "terracotta",
    mode: $t.includes(a) ? a : "light"
  };
}
function vn(n, t) {
  const a = U();
  a && (a.setItem(V.theme, n), a.setItem(V.mode, t));
}
const Ht = 6;
function Ft(n, t) {
  if (!(n instanceof Element)) return !1;
  let a = n;
  for (; a && a !== t; ) {
    const r = a.tagName;
    if (r === "INPUT" || r === "BUTTON" || r === "SELECT" || r === "TEXTAREA" || r === "A")
      return !0;
    const o = a.getAttribute("role");
    if (o === "switch" || o === "button" || o === "slider" || a.hasAttribute("data-no-drag")) return !0;
    a = a.parentElement;
  }
  return !1;
}
function qn(n, t, a) {
  if (t.length === 0) return n;
  const r = new Map(n.map((s) => [a(s), s])), o = /* @__PURE__ */ new Set(), i = [];
  for (const s of t) {
    const c = r.get(s);
    c && !o.has(s) && (i.push(c), o.add(s));
  }
  for (const s of n) {
    const c = a(s);
    o.has(c) || (i.push(s), o.add(c));
  }
  return i;
}
function Le(n, t, a) {
  const [r, o] = w({ draggingId: null, overId: null }), i = J(null), s = J(null), c = J(n);
  c.current = n;
  const p = J(a);
  p.current = a;
  const d = J(t);
  d.current = t;
  const m = un((f, u) => {
    const v = s.current;
    if (!v) return null;
    const x = v.querySelectorAll("[data-drag-id]");
    for (const _ of Array.from(x)) {
      const h = _.getBoundingClientRect();
      if (f >= h.left && f <= h.right && u >= h.top && u <= h.bottom)
        return _.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  oe(() => {
    const f = (v) => {
      const x = i.current;
      if (!x) return;
      if (!x.entered) {
        const h = v.clientX - x.x, b = v.clientY - x.y;
        if (Math.hypot(h, b) < Ht) return;
        x.entered = !0, o({ draggingId: x.id, overId: null });
      }
      const _ = m(v.clientX, v.clientY);
      o((h) => h.overId === _ ? h : { ...h, overId: _ });
    }, u = () => {
      const v = i.current;
      if (i.current = null, !v || !v.entered) return;
      const x = (_) => {
        _.preventDefault(), _.stopPropagation();
      };
      window.addEventListener("click", x, { capture: !0, once: !0 }), o((_) => {
        const { draggingId: h, overId: b } = _;
        if (h && b && h !== b) {
          const I = c.current, S = d.current, $ = I.findIndex((E) => S(E) === h), O = I.findIndex((E) => S(E) === b);
          if ($ >= 0 && O >= 0) {
            const E = [...I], [R] = E.splice($, 1);
            E.splice(O, 0, R), p.current(E);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", f), document.addEventListener("pointerup", u), document.addEventListener("pointercancel", u), () => {
      document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", u), document.removeEventListener("pointercancel", u);
    };
  }, [m]);
  const l = un(
    (f) => {
      const u = r.draggingId === f, v = r.draggingId !== null && r.draggingId !== f && r.overId === f;
      return {
        "data-drag-id": f,
        "data-dragging": u ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (x) => {
          if (x.button !== void 0 && x.button !== 0) return;
          const _ = x.currentTarget;
          Ft(x.target, _) || (i.current = { id: f, x: x.clientX, y: x.clientY, entered: !1 });
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
const g = ({ children: n, size: t = 24, stroke: a = 1.5, fill: r = "none", style: o }) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: r,
    stroke: "currentColor",
    "stroke-width": a,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    style: o,
    children: n
  }
), Be = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), Ut = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), Bt = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), We = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), Ze = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), xn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), yn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), Wt = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), te = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), q = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), Zt = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), Yt = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), ie = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), Ye = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), qt = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), qe = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), Jt = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), Gt = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), Xt = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Kt = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), X = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), Jn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), Gn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), de = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), Je = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), Xn = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), Kn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), kn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), ze = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Ce = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), Qt = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), wn = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), ea = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), na = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), Ge = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), ta = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), aa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), ra = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), ia = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), oa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), sa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), ca = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), ye = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), Xe = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), Ke = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), Mn = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), la = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), da = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), pa = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), _a = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), ua = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), ha = (n) => /* @__PURE__ */ e(g, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Qn = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), fa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ma = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), ba = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), ga = (n) => /* @__PURE__ */ e(g, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), va = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), xa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), ya = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), ka = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), wa = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Ma = (n) => /* @__PURE__ */ e(g, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] });
function Ia(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function et({
  hass: n,
  entity: t,
  hero: a = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const i = t.state.state === "on", s = t.state.state === "unavailable", [c, p] = w(!1), [d, m] = w(null), l = d ?? Ia(t.state), f = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, u = async (_) => {
    m(_);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: _
      });
    } finally {
      setTimeout(() => m(null), 50);
    }
  }, x = [
    "n-card",
    a ? i ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    i ? `breathe-${r}` : "",
    c ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: x, "data-hero": a ? "true" : "false", "data-on": i ? "true" : "false", children: [
    i && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Be, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": i,
          disabled: s || c,
          onClick: f,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${a ? "n-title--xl" : ""}`, children: t.friendly_name }),
    i && !s && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Intensité" }),
        /* @__PURE__ */ e("span", { class: `n-value ${a ? "n-value--xl" : ""}`, children: [
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
          onInput: (_) => u(Number(_.target.value))
        }
      )
    ] }),
    !i && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Sa(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function nt({ hass: n, entity: t, roomLabel: a }) {
  const r = t.state.state === "unavailable", [o, i] = w(null), s = o ?? Sa(t.state), c = s > 0, p = async (d) => {
    i(d);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: d
      });
    } finally {
      setTimeout(() => i(null), 50);
    }
  };
  return /* @__PURE__ */ e("div", { class: "n-card", "data-on": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(We, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": d / 6 * 100 < s ? "true" : "false"
        },
        d
      )) })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
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
          onInput: (d) => p(Number(d.target.value))
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function tt({
  hass: n,
  entity: t,
  roomLabel: a,
  breatheVariant: r = 2
}) {
  const o = t.state.state === "on", i = t.state.state === "unavailable", [s, c] = w(!1), p = t.state.attributes.current_power_w, d = async () => {
    if (!i) {
      c(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        c(!1);
      }
    }
  }, m = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: m, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ze, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: i || s,
          onClick: d,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    typeof p == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: o ? "n-power__value" : "n-power__value n-power__value--muted", children: Math.round(o ? p : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const za = {
  door: xn,
  garage_door: xn,
  window: Yt,
  smoke: yn,
  gas: yn,
  moisture: Wt,
  motion: te,
  occupancy: te,
  presence: te
}, Ca = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, Aa = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]);
function at({ entity: n, roomLabel: t }) {
  const a = n.state.attributes.device_class ?? "", r = n.state.state === "on", o = n.state.state === "unavailable", i = za[a] ?? ie, s = Ca[a] ?? { on: "Actif", off: "Inactif" }, c = Aa.has(a);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : r ? "on" : "off", "data-alert": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(i, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : r ? s.on : s.off })
  ] });
}
const Ea = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Ta = {
  heat: Jt,
  cool: Gt,
  heat_cool: q,
  auto: q,
  dry: q,
  fan_only: q
};
function rt({
  hass: n,
  entity: t,
  roomLabel: a,
  breatheVariant: r = 2
}) {
  const o = t.state.state === "unavailable", i = t.state.state, s = i !== "off" && !o, c = t.state.attributes.current_temperature, p = t.state.attributes.temperature, d = t.state.attributes.min_temp ?? 7, m = t.state.attributes.max_temp ?? 35, l = t.state.attributes.target_temp_step ?? 0.5, [f, u] = w(null), v = f ?? p ?? c ?? 20, x = async (b) => {
    const I = Math.min(m, Math.max(d, b));
    u(I);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: I
      });
    } finally {
      setTimeout(() => u(null), 50);
    }
  }, _ = Ta[i] ?? q, h = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(_, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Ea[i] ?? i })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(F, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(v * 10) / 10,
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
            onClick: () => x(v - l),
            disabled: v - l < d,
            children: /* @__PURE__ */ e(Xt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => x(v + l),
            disabled: v + l > m,
            children: /* @__PURE__ */ e(Kt, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function it({ hass: n, entity: t, roomLabel: a }) {
  const r = t.state.state, o = r === "unavailable", i = r === "locked", s = r === "jammed", c = r === "locking" || r === "unlocking", [p, d] = w(!1), m = async () => {
    if (!(o || c || p)) {
      d(!0);
      try {
        await n.callService("lock", i ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        d(!1);
      }
    }
  }, l = o ? "Indisponible" : s ? "Bloquée" : c ? r === "locking" ? "Verrouillage…" : "Déverrouillage…" : i ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": i ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(i ? Ye : qt, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": i,
              disabled: o || c || p,
              onClick: m,
              children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: l })
      ]
    }
  );
}
const Pa = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function ot({
  hass: n,
  entity: t,
  roomLabel: a,
  breatheVariant: r = 3
}) {
  const o = t.state.state, i = o === "unavailable", s = o === "cleaning" || o === "returning", c = o === "error", p = t.state.attributes.battery_level, [d, m] = w(!1), l = async (u) => {
    if (!(i || d)) {
      m(!0);
      try {
        await n.callService("vacuum", u, { entity_id: t.entity_id });
      } finally {
        m(!1);
      }
    }
  }, f = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: f,
      "data-on": s ? "true" : "false",
      "data-alert": c ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(qe, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(Gn, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Pa[o] ?? o }),
        !i && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || s,
              onClick: () => l("start"),
              children: [
                /* @__PURE__ */ e(X, { size: 14 }),
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
                /* @__PURE__ */ e(Jn, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const $a = {
  temperature: q,
  humidity: Zt,
  power: de,
  energy: de,
  current: de,
  voltage: de,
  illuminance: Je,
  pressure: ea,
  battery: Gn
};
function Na(n, t, a) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (a === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function st({ entity: n, roomLabel: t }) {
  const a = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = $a[a] ?? na, i = n.state.state === "unavailable", { value: s, unit: c } = Na(n.state.state, r, a);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }),
      c && /* @__PURE__ */ e("span", { class: "n-value__unit", children: c })
    ] })
  ] });
}
const La = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function ct({
  hass: n,
  entity: t,
  roomLabel: a,
  breatheVariant: r = 4
}) {
  const o = t.state.state, i = o === "unavailable", s = o === "playing", c = o === "off" || o === "standby", p = t.state.attributes.media_title, d = t.state.attributes.media_artist, m = t.state.attributes.volume_level, [l, f] = w(null), u = l ?? m ?? 0, v = async (h, b = {}) => {
    i || await n.callService("media_player", h, {
      entity_id: t.entity_id,
      ...b
    });
  }, x = async (h) => {
    f(h);
    try {
      await v("volume_set", { volume_level: h });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, _ = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ge, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: La[o] ?? o })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !c && !i && (p || d) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", children: d })
    ] }),
    !i && /* @__PURE__ */ e(F, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => v("media_previous_track"),
            children: /* @__PURE__ */ e(aa, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => v("media_play_pause"),
            children: s ? /* @__PURE__ */ e(ta, { size: 18 }) : /* @__PURE__ */ e(X, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => v("media_next_track"),
            children: /* @__PURE__ */ e(ra, { size: 16 })
          }
        )
      ] }),
      typeof m == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(ia, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: u,
            onInput: (h) => x(Number(h.target.value))
          }
        )
      ] })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Oa = {
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
}, Da = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: oa },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: sa },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: ca }
];
function lt({ hass: n, entity: t, roomLabel: a }) {
  const r = t.state.state, o = r === "unavailable", i = r === "triggered", s = r.startsWith("armed_"), c = r === "pending" || r === "arming" || r === "disarming", [p, d] = w(!1), m = async (l) => {
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
      "data-alert": i ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ie, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Oa[r] ?? r })
        ] }),
        a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Da.map(({ id: l, service: f, label: u, Icon: v }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": r === l ? "true" : "false",
              disabled: p || c,
              onClick: () => m(f),
              children: [
                /* @__PURE__ */ e(v, { size: 14 }),
                /* @__PURE__ */ e("span", { children: u })
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
              onClick: () => m("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const Va = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Ra(n, t) {
  const a = n.state.attributes.entity_picture;
  if (!a) return null;
  if (a.startsWith("http")) return a;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + a : a;
}
function dt({ hass: n, entity: t, roomLabel: a }) {
  const r = t.state.state, o = r === "unavailable", i = r === "recording" || r === "streaming", [s, c] = w(0), p = Ra(t, n), d = p ? `${p}${p.includes("?") ? "&" : "?"}t=${s}` : null;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": i ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-camera__frame", children: [
      d ? /* @__PURE__ */ e("img", { class: "n-camera__img", src: d, alt: t.friendly_name, loading: "lazy" }) : /* @__PURE__ */ e("div", { class: "n-camera__placeholder", "aria-hidden": "true", children: /* @__PURE__ */ e(ye, { size: 28 }) }),
      i && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ye, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !d,
          onClick: () => c(Date.now()),
          children: "Rafraîchir"
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: Va[r] ?? r })
  ] });
}
function pt({ hass: n, entity: t, roomLabel: a, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", i = t.state.state === "unavailable", s = t.state.attributes.percentage, c = typeof s == "number", [p, d] = w(!1), [m, l] = w(null), f = m ?? (c ? s : o ? 100 : 0), u = async () => {
    if (!i) {
      d(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  }, v = async (_) => {
    l(_);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: _
      });
    } finally {
      setTimeout(() => l(null), 50);
    }
  }, x = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: x, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(Xe, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: i || p,
          onClick: u,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && c && !i && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Vitesse" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
          f,
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
          value: f,
          onInput: (_) => v(Number(_.target.value))
        }
      )
    ] }),
    !o && !i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function _t({ hass: n, entity: t, roomLabel: a }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [i, s] = w(!1), [c, p] = w(!1), d = async () => {
    if (!(o || i)) {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(Ke, { size: 18 }) : /* @__PURE__ */ e(X, { size: 16 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: r ? "Scène" : "Script" })
        ] }),
        a && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: a }),
        /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-scene__activate",
            disabled: o || i,
            onClick: d,
            children: [
              /* @__PURE__ */ e(X, { size: 14 }),
              /* @__PURE__ */ e("span", { children: r ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const ja = {
  "clear-night": { label: "Nuit claire", Icon: Qn },
  cloudy: { label: "Nuageux", Icon: Xn },
  exceptional: { label: "Conditions extrêmes", Icon: Ce },
  fog: { label: "Brouillard", Icon: Qt },
  hail: { label: "Grêle", Icon: ze },
  lightning: { label: "Orage", Icon: Ce },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Ce },
  partlycloudy: { label: "Éclaircies", Icon: Kn },
  pouring: { label: "Pluie battante", Icon: kn },
  rainy: { label: "Pluvieux", Icon: kn },
  snowy: { label: "Neigeux", Icon: ze },
  "snowy-rainy": { label: "Neige et pluie", Icon: ze },
  sunny: { label: "Ensoleillé", Icon: Je },
  windy: { label: "Venteux", Icon: wn },
  "windy-variant": { label: "Venteux", Icon: wn }
};
function ut(n) {
  return ja[n] ?? { label: n || "—", Icon: Xn };
}
function ht(n, t) {
  if (n == null || n === "") return "—";
  const a = Number(n);
  return Number.isFinite(a) ? `${n}${t}` : "—";
}
function ft({ entity: n, roomLabel: t }) {
  const a = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = ut(n.state.state), i = n.state.attributes.temperature_unit ?? "°", s = ht(n.state.attributes.temperature, i), c = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": a ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof c == "number" && Number.isFinite(c) && /* @__PURE__ */ e(F, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(c),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ha({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: a } = ut(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = ht(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(a, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function mt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? xa : /(chambre|bedroom)/.test(t) ? ya : /(cuisine|kitchen)/.test(t) ? ka : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? wa : /(entrée|entree|hall|couloir)/.test(t) ? Ma : Jn;
}
const Fa = {
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
}, Ua = /* @__PURE__ */ new Set([
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
function Ba(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Wa(n, t) {
  const a = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(et, { ...a, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(nt, { ...a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(tt, { ...a, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(at, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(rt, { ...a, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(it, { ...a }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(ot, { ...a, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(st, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(ct, { ...a, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(lt, { ...a }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(dt, { ...a }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(pt, { ...a, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(_t, { ...a }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(ft, { entity: n, roomLabel: t.areaName }, n.entity_id);
    default:
      return null;
  }
}
function Za({ area: n, entities: t, accent: a = !1, onOpen: r, dragProps: o }) {
  const i = mt(n.name), s = t.filter(
    (d) => d.domain !== "sensor" && d.domain !== "binary_sensor"
  ).length, c = t.filter(Bn).length, p = Wn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${a ? "nido-room-card--accent" : ""}`,
      onClick: r,
      onKeyDown: (d) => {
        (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r());
      },
      ...o,
      children: [
        a && /* @__PURE__ */ e("svg", { class: "nido-room-card__deco", viewBox: "0 0 120 120", "aria-hidden": "true", children: [
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "48", fill: "none", stroke: "rgba(244,237,226,0.08)" }),
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "32", fill: "none", stroke: "rgba(244,237,226,0.08)" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-room-card__body", children: [
          /* @__PURE__ */ e("div", { class: "nido-room-card__head", children: [
            /* @__PURE__ */ e("span", { class: "nido-room-card__icon", children: /* @__PURE__ */ e(i, { size: 20 }) }),
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
              c > 0 && /* @__PURE__ */ e(F, { children: [
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
function Ya({
  hass: n,
  areas: t,
  entities: a,
  favorites: r,
  exposed: o,
  roomsOrder: i,
  onConfigure: s,
  onOpenRoom: c,
  onReorderFavorites: p,
  onReorderRooms: d
}) {
  const m = n.user?.name ?? "vous", l = /* @__PURE__ */ new Date(), f = l.getHours(), { greeting: u, sub: v } = Ba(f), x = `${String(f).padStart(2, "0")}:${String(l.getMinutes()).padStart(2, "0")}`, _ = l.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (y) => y.toUpperCase()), h = D(() => new Set(o), [o]), b = D(
    () => a.filter((y) => h.has(y.entity_id) && Ua.has(y.domain)),
    [a, h]
  ), I = D(
    () => b.find((y) => y.domain === "weather"),
    [b]
  ), S = D(() => Pt(b), [b]), $ = D(() => {
    const y = new Map(b.map((T) => [T.entity_id, T]));
    return r.map((T) => y.get(T)).filter((T) => !!T);
  }, [b, r]), O = D(() => {
    const y = t.filter((T) => (S.get(T.area_id) ?? []).length > 0);
    return qn(y, i, (T) => T.area_id);
  }, [t, S, i]), E = Le(
    $,
    (y) => y.entity_id,
    (y) => p(y.map((T) => T.entity_id))
  ), R = Le(
    O,
    (y) => y.area_id,
    (y) => d(y.map((T) => T.area_id))
  );
  let N = 0;
  const j = $.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${E.isDragging ? "is-dragging" : ""}`,
        ref: (y) => {
          E.containerRef.current = y;
        },
        children: $.map((y) => {
          N += 1;
          const T = (N - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...E.itemPropsFor(y.entity_id),
              children: Wa(y, {
                hass: n,
                areaName: t.find((Q) => Q.area_id === y.area_id)?.name ?? "",
                hero: N === 1 && y.domain === "light",
                variant: T
              })
            },
            y.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, K = b.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
    /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
      /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: "Nido" }),
      /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
        I && /* @__PURE__ */ e(Ha, { entity: I }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-pill-btn--ghost",
            onClick: s,
            children: [
              /* @__PURE__ */ e(Ut, { size: 14 }),
              /* @__PURE__ */ e("span", { children: "Personnaliser" })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { class: "nido-topbar__time", children: x })
      ] })
    ] }),
    /* @__PURE__ */ e("section", { class: "nido-hero", children: [
      /* @__PURE__ */ e("div", { class: "nido-hero__date", children: _ }),
      /* @__PURE__ */ e("h1", { children: [
        u,
        ", ",
        /* @__PURE__ */ e("em", { children: m })
      ] }),
      /* @__PURE__ */ e("p", { class: "nido-hero__sub", children: v })
    ] }),
    K ? /* @__PURE__ */ e(F, { children: [
      j,
      O.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
        /* @__PURE__ */ e(
          "div",
          {
            class: `nido-rooms-grid ${R.isDragging ? "is-dragging" : ""}`,
            ref: (y) => {
              R.containerRef.current = y;
            },
            children: O.map((y, T) => /* @__PURE__ */ e(
              Za,
              {
                area: y,
                entities: S.get(y.area_id) ?? [],
                accent: T === 0,
                onOpen: () => c(y.area_id),
                dragProps: R.itemPropsFor(y.area_id)
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
  ] }) });
}
function qa(n, t, a, r, o = !1) {
  const i = { hass: t, entity: n, roomLabel: a };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(et, { ...i, hero: o, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(nt, { ...i }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(tt, { ...i, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(at, { entity: n, roomLabel: a }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(rt, { ...i, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(it, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(ot, { ...i, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(st, { entity: n, roomLabel: a }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(ct, { ...i, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(lt, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(dt, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(pt, { ...i, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(_t, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(ft, { entity: n, roomLabel: a }, n.entity_id);
    default:
      return null;
  }
}
function Ja({
  hass: n,
  area: t,
  entities: a,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: i
}) {
  const s = mt(t.name), c = Wn(a), p = D(
    () => qn(a, r, (_) => _.entity_id),
    [a, r]
  ), d = D(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const h of p)
      _.set(h.domain, (_.get(h.domain) ?? 0) + 1);
    return Array.from(_.entries()).sort((h, b) => b[1] - h[1]);
  }, [p]), [m, l] = w("all"), f = D(
    () => m === "all" ? p : p.filter((_) => _.domain === m),
    [p, m]
  ), u = Le(
    f,
    (_) => _.entity_id,
    (_) => {
      const h = new Set(f.map((S) => S.entity_id)), b = [..._], I = p.map(
        (S) => h.has(S.entity_id) ? b.shift() : S
      );
      i(I.map((S) => S.entity_id));
    }
  ), v = p.filter(
    (_) => _.domain !== "sensor" && _.domain !== "binary_sensor"
  ).length, x = p.filter(Bn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(ga, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(va, { size: 18 }) }) })
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
            x > 0 && /* @__PURE__ */ e(F, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                x,
                " actif",
                x > 1 ? "s" : ""
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
            value: c.temperature.value,
            unit: c.temperature.unit || "°"
          }
        ),
        c.humidity && /* @__PURE__ */ e(In, {}),
        c.humidity && /* @__PURE__ */ e(
          Ae,
          {
            label: "Humidité",
            value: Math.round(parseFloat(c.humidity.value)).toString(),
            unit: c.humidity.unit || "%"
          }
        ),
        c.illuminance && /* @__PURE__ */ e(In, {}),
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
          class: `n-pill-btn ${m === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => l("all"),
          children: [
            "Tout · ",
            a.length
          ]
        }
      ),
      d.map(([_, h]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${m === _ ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => l(_),
          children: [
            Fa[_] ?? _,
            " · ",
            h
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${u.isDragging ? "is-dragging" : ""}`,
        ref: (_) => {
          u.containerRef.current = _;
        },
        children: f.map((_, h) => {
          const b = h % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...u.itemPropsFor(_.entity_id),
              children: qa(_, n, t.name, b, h === 0 && _.domain === "light")
            },
            _.entity_id
          );
        })
      }
    )
  ] }) });
}
function Ae({ label: n, value: t, unit: a }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: a })
    ] })
  ] });
}
function In() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const pe = 5, ee = {
  light: { label: "Lumières", Icon: Be },
  switch: { label: "Prises & switches", Icon: Ze },
  cover: { label: "Volets & stores", Icon: We },
  climate: { label: "Thermostats", Icon: q },
  lock: { label: "Serrures", Icon: Ye },
  vacuum: { label: "Aspirateurs", Icon: qe },
  binary_sensor: { label: "Détecteurs", Icon: ie },
  sensor: { label: "Capteurs", Icon: te },
  media_player: { label: "Lecteurs média", Icon: Ge },
  alarm_control_panel: { label: "Alarmes", Icon: ie },
  camera: { label: "Caméras", Icon: ye },
  fan: { label: "Ventilateurs", Icon: Xe },
  scene: { label: "Scènes", Icon: Ke },
  script: { label: "Scripts", Icon: X },
  weather: { label: "Météo", Icon: Kn }
}, Sn = Object.keys(ee), Oe = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Ga(n) {
  const {
    hass: t,
    entities: a,
    areas: r,
    initialTheme: o,
    initialMode: i,
    initialExposed: s,
    initialFavorites: c,
    initialExcludedUsers: p,
    isReturning: d,
    onApplyTheme: m,
    onClose: l,
    onDone: f
  } = n, [u, v] = w(0), [x, _] = w(o), [h, b] = w(i), [I, S] = w(new Set(s)), [$, O] = w(new Set(c)), [E, R] = w(
    new Set(p)
  ), [N, j] = w(null), [K, y] = w(null);
  oe(() => {
    let k = !1;
    return t.callWS({ type: "config/auth/list" }).then((M) => {
      k || j(
        (M ?? []).filter((C) => !C.system_generated).sort((C, H) => C.name.localeCompare(H.name))
      );
    }).catch((M) => {
      k || (y(M instanceof Error ? M.message : String(M)), t.user && j([t.user]));
    }), () => {
      k = !0;
    };
  }, [t]);
  const T = () => v((k) => Math.min(pe - 1, k + 1)), Q = () => v((k) => Math.max(0, k - 1)), Qe = (k, M) => {
    _(k), b(M), m(k, M);
  }, se = (k) => {
    S((M) => {
      const C = new Set(M);
      return C.has(k) ? (C.delete(k), O((H) => {
        if (!H.has(k)) return H;
        const ce = new Set(H);
        return ce.delete(k), ce;
      })) : C.add(k), C;
    });
  }, B = (k) => {
    O((M) => {
      const C = new Set(M);
      return C.has(k) ? C.delete(k) : (C.add(k), S((H) => H.has(k) ? H : new Set(H).add(k))), C;
    });
  }, Me = (k) => {
    R((M) => {
      const C = new Set(M);
      return C.has(k) ? C.delete(k) : C.add(k), C;
    });
  }, z = () => {
    const k = Array.from(I), M = Array.from($).filter((H) => I.has(H)), C = Array.from(E);
    vn(x, h), fn(k), Ne(M), mn(C), gn(), f({
      exposed: k,
      favorites: M,
      theme: x,
      mode: h,
      excludedUsers: C
    });
  }, Z = () => {
    vn(x, h), fn(Array.from(I)), Ne(Array.from($).filter((k) => I.has(k))), mn(Array.from(E)), gn(), l();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(ba, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: pe }, (k, M) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${M === u ? "is-active" : ""} ${M < u ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          u + 1,
          " / ",
          pe
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: Z, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      u === 0 && /* @__PURE__ */ e(
        Xa,
        {
          isReturning: d,
          exposedCount: I.size,
          favCount: $.size,
          themeLabel: Oe[x].name,
          modeLabel: h === "light" ? "Clair" : "Sombre",
          allowedUsersCount: N ? N.filter((k) => !E.has(k.id)).length : null
        }
      ),
      u === 1 && /* @__PURE__ */ e(Ka, { entitiesCount: a.length, areasCount: r.length }),
      u === 2 && /* @__PURE__ */ e(
        Qa,
        {
          entities: a,
          exposed: I,
          favs: $,
          onToggleExpose: se,
          onToggleFav: B
        }
      ),
      u === 3 && /* @__PURE__ */ e(
        er,
        {
          theme: x,
          mode: h,
          onPick: Qe,
          userName: t.user?.name ?? "vous"
        }
      ),
      u === 4 && /* @__PURE__ */ e(
        nr,
        {
          hass: t,
          users: N,
          error: K,
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
          onClick: Q,
          children: [
            /* @__PURE__ */ e(la, { size: 14 }),
            " Retour"
          ]
        }
      ),
      u < pe - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: T, children: [
        "Continuer ",
        /* @__PURE__ */ e(Mn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: z, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(Mn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const zn = [
  Be,
  We,
  Ze,
  q,
  Ye,
  qe,
  te,
  Ge,
  ie,
  ye,
  Xe,
  Ke,
  X
];
function _e({ offset: n, intervalMs: t }) {
  const [a, r] = w(n);
  oe(() => {
    const i = setInterval(() => r((s) => s + 1), t);
    return () => clearInterval(i);
  }, [t]);
  const o = zn[a % zn.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, a);
}
function Xa(n) {
  const { isReturning: t, exposedCount: a, favCount: r, themeLabel: o, modeLabel: i, allowedUsersCount: s } = n;
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
          /* @__PURE__ */ e(ue, { label: "Exposées", value: a }),
          /* @__PURE__ */ e(ue, { label: "Favoris", value: r, accent: !0 }),
          /* @__PURE__ */ e(ue, { label: "Ambiance", value: o, hint: i }),
          /* @__PURE__ */ e(
            ue,
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(_e, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(_e, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(_e, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(_e, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function ue(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Ka({ entitiesCount: n, areasCount: t }) {
  const [a, r] = w("scanning");
  return oe(() => {
    const o = setTimeout(() => r("found"), 1100), i = setTimeout(() => r("connected"), 2200);
    return () => {
      clearTimeout(o), clearTimeout(i);
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(fa, { size: 18 }) }),
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
            fill: a === "connected" ? "var(--positive)" : "var(--accent)",
            class: "breathe-2"
          }
        ),
        a === "connected" && /* @__PURE__ */ e(
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
        /* @__PURE__ */ e("span", { class: `n-ob-status-pill__dot is-${a}` }),
        /* @__PURE__ */ e("span", { class: "n-ob-status-pill__label", children: [
          a === "scanning" && "Recherche en cours…",
          a === "found" && "Home Assistant trouvé",
          a === "connected" && `Connecté · ${t} pièce${t > 1 ? "s" : ""} · ${n} entité${n > 1 ? "s" : ""}`
        ] })
      ] })
    ] })
  ] });
}
function Qa(n) {
  const { entities: t, exposed: a, favs: r, onToggleExpose: o, onToggleFav: i } = n, s = D(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const h of t)
      Sn.includes(h.domain) && (_.has(h.domain) || _.set(h.domain, []), _.get(h.domain).push(h));
    return Array.from(_.entries()).sort((h, b) => b[1].length - h[1].length);
  }, [t]), [c, p] = w(s[0]?.[0] ?? "light"), [d, m] = w(""), l = s.find(([_]) => _ === c) ?? s[0], f = a.size, u = t.filter((_) => Sn.includes(_.domain)).length, v = d.trim().toLowerCase(), x = l ? v ? l[1].filter(
    (_) => (_.friendly_name ?? "").toLowerCase().includes(v) || _.entity_id.toLowerCase().includes(v)
  ) : l[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: f }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          u
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: f === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${f > 1 ? "s" : ""} exposé${f > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([_, h]) => {
        const b = ee[_], I = b.Icon, S = h.filter((O) => a.has(O.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${_ === c ? "is-active" : ""}`,
            onClick: () => p(_),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(I, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: b.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                S,
                "/",
                h.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: l && /* @__PURE__ */ e(F, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            l[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: ee[l[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => x.forEach((_) => !a.has(_.entity_id) && o(_.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => x.forEach((_) => a.has(_.entity_id) && o(_.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(_a, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (_) => m(_.target.value),
            placeholder: `Rechercher dans ${ee[l[0]].label.toLowerCase()}…`,
            "aria-label": "Rechercher une entité"
          }
        ),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-ob-ent__search-clear",
            onClick: () => m(""),
            "aria-label": "Effacer la recherche",
            children: /* @__PURE__ */ e(ua, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: [
        x.length === 0 && /* @__PURE__ */ e("div", { class: "n-ob-ent__empty", children: [
          "Aucune entité ne correspond à « ",
          d,
          " »"
        ] }),
        x.map((_) => {
          const h = a.has(_.entity_id), b = r.has(_.entity_id), I = ee[_.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${h ? "is-exposed" : ""}`,
              onClick: () => o(_.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${h ? "is-on" : ""}`, children: /* @__PURE__ */ e(I, { size: 16 }) }),
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
                    onClick: (S) => {
                      S.stopPropagation(), i(_.entity_id);
                    },
                    children: b ? /* @__PURE__ */ e(ha, { size: 14 }) : /* @__PURE__ */ e(pa, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${h ? "is-on" : ""}`, children: h && /* @__PURE__ */ e(da, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function er(n) {
  const { theme: t, mode: a, userName: r, onPick: o } = n, i = Oe[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: Zn.map((s) => {
        const c = Oe[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, a),
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
            class: `n-ob-theme__mode ${a === "light" ? "is-active" : ""}`,
            onClick: () => o(t, "light"),
            children: [
              /* @__PURE__ */ e(Je, { size: 14 }),
              " Clair"
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__mode ${a === "dark" ? "is-active" : ""}`,
            onClick: () => o(t, "dark"),
            children: [
              /* @__PURE__ */ e(Qn, { size: 14 }),
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
        style: { background: a === "dark" ? "#1f1812" : i.swatches[0] },
        children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", style: { opacity: 0.6 }, children: "Aperçu" }),
          /* @__PURE__ */ e(
            "div",
            {
              class: "n-ob-preview__greet",
              style: { color: a === "dark" ? "#f4ede2" : "#1a1410" },
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
                style: { background: i.swatches[1] },
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
                    background: a === "dark" ? "#2a2018" : "#fbf6ec",
                    color: a === "dark" ? "#f4ede2" : "#1a1410"
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
                  style: { background: i.swatches[2], color: i.swatches[0] },
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
function nr(n) {
  const { hass: t, users: a, error: r, excluded: o, onToggleUser: i } = n;
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
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: a === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : a.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: a.map((s) => {
      const c = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${c ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(ma, { size: 18 }) }),
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
                onChange: () => !p && i(s.id),
                "aria-label": c ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const tr = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function ar({ hass: n, host: t }) {
  const [a, r] = w(null), [o, i] = w(null), [s, c] = w(null), [p, d] = w(null), m = D(() => Yn(), []), [l, f] = w(() => Nt()), [u, v] = w(() => Lt()), [x, _] = w(() => Ot()), [h, b] = w(() => Dt()), [I, S] = w(
    () => Rt()
  ), [$, O] = w(() => !bn()), [E, R] = w(
    { kind: "dashboard" }
  ), N = (z) => {
    f(z), Ne(z);
  }, j = (z) => {
    b(z), Vt(z);
  }, K = (z, Z) => {
    S((k) => {
      const M = { ...k, [z]: Z };
      return jt(M), M;
    });
  }, y = J(n);
  y.current = n, oe(() => {
    if (!n) return;
    let z = !1;
    const Z = [], k = async () => {
      const M = y.current;
      if (M)
        try {
          const [C, H, ce] = await Promise.all([
            zt(M),
            Ct(M),
            At(M)
          ]);
          if (z) return;
          r(C), i(H), c(ce);
        } catch (C) {
          if (z) return;
          d(C instanceof Error ? C.message : String(C));
        }
    };
    return k(), Promise.all(
      tr.map(
        (M) => n.connection.subscribeEvents(() => {
          z || k();
        }, M)
      )
    ).then((M) => {
      if (z) {
        M.forEach((C) => C());
        return;
      }
      Z.push(...M);
    }).catch((M) => console.warn("Nido: subscribeEvents failed", M)), () => {
      z = !0, Z.forEach((M) => M());
    };
  }, [n != null]);
  const T = D(() => !n || !o || !s ? [] : Tt(n, o, s), [n?.states, o, s]), Q = (z, Z) => {
    t?.applyTheme?.(z, Z);
  };
  if (!n)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Connexion à Home Assistant…" });
  if (p)
    return /* @__PURE__ */ e("div", { class: "nido-loading nido-loading--error", children: [
      "Erreur : ",
      p
    ] });
  if (!a || !o || !s)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Chargement des pièces et entités…" });
  if (!!n.user && x.includes(n.user.id))
    return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-denied", children: [
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Nido n'est pas pour ",
        /* @__PURE__ */ e("em", { children: "vous" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Votre compte n'a pas accès à ce tableau de bord. Vous pouvez continuer à utiliser Home Assistant normalement." })
    ] }) });
  const se = D(() => new Set(u), [u]), B = E.kind === "room" ? a.find((z) => z.area_id === E.areaId) ?? null : null, Me = D(
    () => B ? T.filter(
      (z) => z.area_id === B.area_id && se.has(z.entity_id)
    ) : [],
    [T, B, se]
  );
  return /* @__PURE__ */ e(F, { children: [
    E.kind === "dashboard" || !B ? /* @__PURE__ */ e(
      Ya,
      {
        hass: n,
        areas: a,
        entities: T,
        favorites: l,
        exposed: u,
        roomsOrder: h,
        onConfigure: () => O(!0),
        onOpenRoom: (z) => R({ kind: "room", areaId: z }),
        onReorderFavorites: N,
        onReorderRooms: j
      }
    ) : /* @__PURE__ */ e(
      Ja,
      {
        hass: n,
        area: B,
        entities: Me,
        entitiesOrder: I[B.area_id] ?? [],
        onBack: () => R({ kind: "dashboard" }),
        onReorderEntities: (z) => K(B.area_id, z)
      }
    ),
    $ && /* @__PURE__ */ e(
      Ga,
      {
        hass: n,
        entities: T,
        areas: a,
        initialTheme: m.theme,
        initialMode: m.mode,
        initialExposed: u,
        initialFavorites: l,
        initialExcludedUsers: x,
        isReturning: bn(),
        onApplyTheme: Q,
        onClose: () => O(!1),
        onDone: (z) => {
          v(z.exposed), f(z.favorites), _(z.excludedUsers), O(!1);
        }
      }
    )
  ] });
}
const rr = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', ir = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__time{font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;color:var(--ink-3)}.nido-topbar__brand{font-family:var(--font-display);font-weight:600;font-size:18px;letter-spacing:-.02em}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true]{min-height:200px;padding:24px}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:var(--bg-inset);outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:#fff3}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}', Cn = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let An = !1;
function or() {
  if (An || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Cn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Cn, document.head.appendChild(t);
  }
  An = !0;
}
class sr extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, or();
    const t = this.attachShadow({ mode: "open" }), a = document.createElement("style");
    a.textContent = `${rr}
${ir}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(a, this._mountPoint);
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
    const { theme: t, mode: a } = Yn();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", a), this._render();
  }
  disconnectedCallback() {
    rn(null, this._mountPoint);
  }
  applyTheme(t, a) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", a);
  }
  _render() {
    rn(Nn(ar, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", sr);
console.info(
  "%c NIDO %c v0.1.2 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
