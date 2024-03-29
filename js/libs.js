! function(t, e) { "function" == typeof define && define.amd ? define([], function() { return t.svg4everybody = e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.svg4everybody = e() }(this, function() {
    function t(t, e, n) {
        if (n) {
            var o = document.createDocumentFragment(),
                i = !e.hasAttribute("viewBox") && n.getAttribute("viewBox");
            i && e.setAttribute("viewBox", i);
            for (var a = n.cloneNode(!0); a.childNodes.length;) o.appendChild(a.firstChild);
            t.appendChild(o)
        }
    }

    function e(e) {
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var n = e._cachedDocument;
                n || ((n = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(o) {
                    var i = e._cachedTarget[o.id];
                    i || (i = e._cachedTarget[o.id] = n.getElementById(o.id)), t(o.parent, o.svg, i)
                })
            }
        }, e.onreadystatechange()
    }

    function n(t) {
        for (var e = t;
            "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
        return e
    }
    return function(o) {
        var i, a = Object(o),
            r = window.top !== window.self;
        i = "polyfill" in a ? a.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && r;
        var s = {},
            l = window.requestAnimationFrame || setTimeout,
            d = document.getElementsByTagName("use"),
            c = 0;
        i && function o() {
            for (var r = 0; r < d.length;) {
                var u = d[r],
                    f = u.parentNode,
                    h = n(f),
                    m = u.getAttribute("xlink:href") || u.getAttribute("href");
                if (!m && a.attributeName && (m = u.getAttribute(a.attributeName)), h && m) {
                    if (i)
                        if (!a.validate || a.validate(m, h, u)) {
                            f.removeChild(u);
                            var p = m.split("#"),
                                v = p.shift(),
                                y = p.join("#");
                            if (v.length) {
                                var g = s[v];
                                g || ((g = s[v] = new XMLHttpRequest).open("GET", v), g.send(), g._embeds = []), g._embeds.push({ parent: f, svg: h, id: y }), e(g)
                            } else t(f, h, document.getElementById(y))
                        } else ++r, ++c
                } else ++r
            }(!d.length || d.length - c > 0) && l(o, 67)
        }()
    }
});
var tns = function() {
    Object.keys || (Object.keys = function(t) { var e = []; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e }), "remove" in Element.prototype || (Element.prototype.remove = function() { this.parentNode && this.parentNode.removeChild(this) });
    var t = window,
        e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) { return setTimeout(t, 16) },
        n = window,
        o = n.cancelAnimationFrame || n.mozCancelAnimationFrame || function(t) { clearTimeout(t) };

    function i() {
        for (var t, e, n, o = arguments[0] || {}, i = 1, a = arguments.length; i < a; i++)
            if (null !== (t = arguments[i]))
                for (e in t) o !== (n = t[e]) && void 0 !== n && (o[e] = n);
        return o
    }

    function a(t) { return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t }

    function r(t, e, n, o) {
        if (o) try { t.setItem(e, n) } catch (t) {}
        return n
    }

    function s() {
        var t = document,
            e = t.body;
        return e || ((e = t.createElement("body")).fake = !0), e
    }
    var l = document.documentElement;

    function d(t) { var e = ""; return t.fake && (e = l.style.overflow, t.style.background = "", t.style.overflow = l.style.overflow = "hidden", l.appendChild(t)), e }

    function c(t, e) { t.fake && (t.remove(), l.style.overflow = e, l.offsetHeight) }

    function u(t, e, n, o) { "insertRule" in t ? t.insertRule(e + "{" + n + "}", o) : t.addRule(e, n, o) }

    function f(t) { return ("insertRule" in t ? t.cssRules : t.rules).length }

    function h(t, e, n) { for (var o = 0, i = t.length; o < i; o++) e.call(n, t[o], o) }
    var m = "classList" in document.createElement("_"),
        p = m ? function(t, e) { return t.classList.contains(e) } : function(t, e) { return 0 <= t.className.indexOf(e) },
        v = m ? function(t, e) { p(t, e) || t.classList.add(e) } : function(t, e) { p(t, e) || (t.className += " " + e) },
        y = m ? function(t, e) { p(t, e) && t.classList.remove(e) } : function(t, e) { p(t, e) && (t.className = t.className.replace(e, "")) };

    function g(t, e) { return t.hasAttribute(e) }

    function x(t, e) { return t.getAttribute(e) }

    function b(t) { return void 0 !== t.item }

    function C(t, e) {
        if (t = b(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var o in e) t[n].setAttribute(o, e[o])
    }

    function w(t, e) {
        t = b(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, o = t.length; o--;)
            for (var i = n; i--;) t[o].removeAttribute(e[i])
    }

    function B(t) { for (var e = [], n = 0, o = t.length; n < o; n++) e.push(t[n]); return e }

    function L(t, e) { "none" !== t.style.display && (t.style.display = "none") }

    function E(t, e) { "none" === t.style.display && (t.style.display = "") }

    function T(t) { return "none" !== window.getComputedStyle(t).display }

    function M(t) {
        if ("string" == typeof t) {
            var e = [t],
                n = t.charAt(0).toUpperCase() + t.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function(o) { "ms" === o && "transform" !== t || e.push(o + n) }), t = e
        }
        for (var o = document.createElement("fakeelement"), i = (t.length, 0); i < t.length; i++) { var a = t[i]; if (void 0 !== o.style[a]) return a }
        return !1
    }

    function O(t, e) { var n = !1; return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n }
    var k = !1;
    try {
        var N = Object.defineProperty({}, "passive", { get: function() { k = !0 } });
        window.addEventListener("test", null, N)
    } catch (t) {}
    var A = !!k && { passive: !0 };

    function S(t, e, n) {
        for (var o in e) {
            var i = 0 <= ["touchstart", "touchmove"].indexOf(o) && !n && A;
            t.addEventListener(o, e[o], i)
        }
    }

    function F(t, e) {
        for (var n in e) {
            var o = 0 <= ["touchstart", "touchmove"].indexOf(n) && A;
            t.removeEventListener(n, e[n], o)
        }
    }
    var H = function(t) {
        t = i({ container: ".slider", mode: "carousel", axis: "horizontal", items: 1, gutter: 0, edgePadding: 0, fixedWidth: !1, autoWidth: !1, viewportMax: !1, slideBy: 1, center: !1, controls: !0, controlsPosition: "top", controlsText: ["prev", "next"], controlsContainer: !1, prevButton: !1, nextButton: !1, nav: !0, navPosition: "top", navContainer: !1, navAsThumbnails: !1, arrowKeys: !1, speed: 300, autoplay: !1, autoplayPosition: "top", autoplayTimeout: 5e3, autoplayDirection: "forward", autoplayText: ["start", "stop"], autoplayHoverPause: !1, autoplayButton: !1, autoplayButtonOutput: !0, autoplayResetOnVisibility: !0, animateIn: "tns-fadeIn", animateOut: "tns-fadeOut", animateNormal: "tns-normal", animateDelay: !1, loop: !0, rewind: !1, autoHeight: !1, responsive: !1, lazyload: !1, lazyloadSelector: ".tns-lazy-img", touch: !0, mouseDrag: !1, swipeAngle: 15, nested: !1, preventActionWhenRunning: !1, preventScrollOnTouch: !1, freezable: !0, onInit: !1, useLocalStorage: !0 }, t || {});
        var n = document,
            l = window,
            m = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            b = {},
            k = t.useLocalStorage;
        if (k) {
            var N = navigator.userAgent,
                A = new Date;
            try {
                (b = l.localStorage) ? (b.setItem(A, A), k = b.getItem(A) == A, b.removeItem(A)) : k = !1, k || (b = {})
            } catch (N) { k = !1 }
            k && (b.tnsApp && b.tnsApp !== N && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) { b.removeItem(t) }), localStorage.tnsApp = N)
        }
        var D, _, I, P, R, z, W, j = b.tC ? a(b.tC) : r(b, "tC", function() {
                var t = document,
                    e = s(),
                    n = d(e),
                    o = t.createElement("div"),
                    i = !1;
                e.appendChild(o);
                try {
                    for (var a, r = "(10px * 10)", l = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r], u = 0; u < 3; u++)
                        if (a = l[u], o.style.width = a, 100 === o.offsetWidth) { i = a.replace(r, ""); break }
                } catch (t) {}
                return e.fake ? c(e, n) : o.remove(), i
            }(), k),
            q = b.tPL ? a(b.tPL) : r(b, "tPL", function() {
                var t, e = document,
                    n = s(),
                    o = d(n),
                    i = e.createElement("div"),
                    a = e.createElement("div"),
                    r = "";
                i.className = "tns-t-subp2", a.className = "tns-t-ct";
                for (var l = 0; l < 70; l++) r += "<div></div>";
                return a.innerHTML = r, i.appendChild(a), n.appendChild(i), t = Math.abs(i.getBoundingClientRect().left - a.children[67].getBoundingClientRect().left) < 2, n.fake ? c(n, o) : i.remove(), t
            }(), k),
            V = b.tMQ ? a(b.tMQ) : r(b, "tMQ", (_ = document, P = d(I = s()), R = _.createElement("div"), W = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", (z = _.createElement("style")).type = "text/css", R.className = "tns-mq-test", I.appendChild(z), I.appendChild(R), z.styleSheet ? z.styleSheet.cssText = W : z.appendChild(_.createTextNode(W)), D = window.getComputedStyle ? window.getComputedStyle(R).position : R.currentStyle.position, I.fake ? c(I, P) : R.remove(), "absolute" === D), k),
            X = b.tTf ? a(b.tTf) : r(b, "tTf", M("transform"), k),
            G = b.t3D ? a(b.t3D) : r(b, "t3D", function(t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e, n = document,
                    o = s(),
                    i = d(o),
                    a = n.createElement("p"),
                    r = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                return r += "transform", o.insertBefore(a, null), a.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(a).getPropertyValue(r), o.fake ? c(o, i) : a.remove(), void 0 !== e && 0 < e.length && "none" !== e
            }(X), k),
            Y = b.tTDu ? a(b.tTDu) : r(b, "tTDu", M("transitionDuration"), k),
            K = b.tTDe ? a(b.tTDe) : r(b, "tTDe", M("transitionDelay"), k),
            Q = b.tADu ? a(b.tADu) : r(b, "tADu", M("animationDuration"), k),
            J = b.tADe ? a(b.tADe) : r(b, "tADe", M("animationDelay"), k),
            U = b.tTE ? a(b.tTE) : r(b, "tTE", O(Y, "Transition"), k),
            Z = b.tAE ? a(b.tAE) : r(b, "tAE", O(Q, "Animation"), k),
            $ = l.console && "function" == typeof l.console.warn,
            tt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
            et = {};
        if (tt.forEach(function(e) {
                if ("string" == typeof t[e]) {
                    var o = t[e],
                        i = n.querySelector(o);
                    if (et[e] = o, !i || !i.nodeName) return void($ && console.warn("Can't find", t[e]));
                    t[e] = i
                }
            }), !(t.container.children.length < 1)) {
            var nt = t.responsive,
                ot = t.nested,
                it = "carousel" === t.mode;
            if (nt) {
                0 in nt && (t = i(t, nt[0]), delete nt[0]);
                var at = {};
                for (var rt in nt) {
                    var st = nt[rt];
                    st = "number" == typeof st ? { items: st } : st, at[rt] = st
                }
                nt = at, at = null
            }
            if (it || function t(e) { for (var n in e) it || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]) }(t), !it) {
                t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
                var lt = t.animateIn,
                    dt = t.animateOut,
                    ct = t.animateDelay,
                    ut = t.animateNormal
            }
            var ft, ht, mt = "horizontal" === t.axis,
                pt = n.createElement("div"),
                vt = n.createElement("div"),
                yt = t.container,
                gt = yt.parentNode,
                xt = yt.outerHTML,
                bt = yt.children,
                Ct = bt.length,
                wt = Dn(),
                Bt = !1;
            nt && eo(), it && (yt.className += " tns-vpfix");
            var Lt, Et, Tt, Mt, Ot, kt, Nt, At = t.autoWidth,
                St = Rn("fixedWidth"),
                Ft = Rn("edgePadding"),
                Ht = Rn("gutter"),
                Dt = In(),
                _t = Rn("center"),
                It = At ? 1 : Math.floor(Rn("items")),
                Pt = Rn("slideBy"),
                Rt = t.viewportMax || t.fixedWidthViewportWidth,
                zt = Rn("arrowKeys"),
                Wt = Rn("speed"),
                jt = t.rewind,
                qt = !jt && t.loop,
                Vt = Rn("autoHeight"),
                Xt = Rn("controls"),
                Gt = Rn("controlsText"),
                Yt = Rn("nav"),
                Kt = Rn("touch"),
                Qt = Rn("mouseDrag"),
                Jt = Rn("autoplay"),
                Ut = Rn("autoplayTimeout"),
                Zt = Rn("autoplayText"),
                $t = Rn("autoplayHoverPause"),
                te = Rn("autoplayResetOnVisibility"),
                ee = (Nt = document.createElement("style"), document.querySelector("head").appendChild(Nt), Nt.sheet ? Nt.sheet : Nt.styleSheet),
                ne = t.lazyload,
                oe = (t.lazyloadSelector, []),
                ie = qt ? (Ot = function() {
                    if (At || St && !Rt) return Ct - 1;
                    var e = St ? "fixedWidth" : "items",
                        n = [];
                    if ((St || t[e] < Ct) && n.push(t[e]), nt)
                        for (var o in nt) {
                            var i = nt[o][e];
                            i && (St || i < Ct) && n.push(i)
                        }
                    return n.length || n.push(0), Math.ceil(St ? Rt / Math.min.apply(null, n) : Math.max.apply(null, n))
                }(), kt = it ? Math.ceil((5 * Ot - Ct) / 2) : 4 * Ot - Ct, kt = Math.max(Ot, kt), Pn("edgePadding") ? kt + 1 : kt) : 0,
                ae = it ? Ct + 2 * ie : Ct + ie,
                re = !(!St && !At || qt),
                se = St ? ko() : null,
                le = !it || !qt,
                de = mt ? "left" : "top",
                ce = "",
                ue = "",
                fe = St ? function() { return _t && !qt ? Ct - 1 : Math.ceil(-se / (St + Ht)) } : At ? function() {
                    for (var t = ae; t--;)
                        if (Lt[t] >= -se) return t
                } : function() { return _t && it && !qt ? Ct - 1 : qt || it ? Math.max(0, ae - Math.ceil(It)) : ae - 1 },
                he = Sn(Rn("startIndex")),
                me = he,
                pe = (An(), 0),
                ve = At ? null : fe(),
                ye = t.preventActionWhenRunning,
                ge = t.swipeAngle,
                xe = !ge || "?",
                be = !1,
                Ce = t.onInit,
                we = new function() {
                    return {
                        topics: {},
                        on: function(t, e) { this.topics[t] = this.topics[t] || [], this.topics[t].push(e) },
                        off: function(t, e) {
                            if (this.topics[t])
                                for (var n = 0; n < this.topics[t].length; n++)
                                    if (this.topics[t][n] === e) { this.topics[t].splice(n, 1); break }
                        },
                        emit: function(t, e) { e.type = t, this.topics[t] && this.topics[t].forEach(function(n) { n(e, t) }) }
                    }
                },
                Be = " tns-slider tns-" + t.mode,
                Le = yt.id || (Mt = window.tnsId, window.tnsId = Mt ? Mt + 1 : 1, "tns" + window.tnsId),
                Ee = Rn("disable"),
                Te = !1,
                Me = t.freezable,
                Oe = !(!Me || At) && to(),
                ke = !1,
                Ne = {
                    click: Po,
                    keydown: function(t) {
                        t = Go(t);
                        var e = [m.LEFT, m.RIGHT].indexOf(t.keyCode);
                        0 <= e && (0 === e ? Ue.disabled || Po(t, -1) : Ze.disabled || Po(t, 1))
                    }
                },
                Ae = {
                    click: function(t) {
                        if (be) {
                            if (ye) return;
                            _o()
                        }
                        for (var e = Yo(t = Go(t)); e !== nn && !g(e, "data-nav");) e = e.parentNode;
                        if (g(e, "data-nav")) {
                            var n = sn = Number(x(e, "data-nav")),
                                o = St || At ? n * Ct / an : n * It;
                            Io(Re ? n : Math.min(Math.ceil(o), Ct - 1), t), ln === n && (mn && qo(), sn = -1)
                        }
                    },
                    keydown: function(t) {
                        t = Go(t);
                        var e = n.activeElement;
                        if (g(e, "data-nav")) {
                            var o = [m.LEFT, m.RIGHT, m.ENTER, m.SPACE].indexOf(t.keyCode),
                                i = Number(x(e, "data-nav"));
                            0 <= o && (0 === o ? 0 < i && Xo(en[i - 1]) : 1 === o ? i < an - 1 && Xo(en[i + 1]) : Io(sn = i, t))
                        }
                    }
                },
                Se = { mouseover: function() { mn && (zo(), pn = !0) }, mouseout: function() { pn && (Ro(), pn = !1) } },
                Fe = { visibilitychange: function() { n.hidden ? mn && (zo(), yn = !0) : yn && (Ro(), yn = !1) } },
                He = {
                    keydown: function(t) {
                        t = Go(t);
                        var e = [m.LEFT, m.RIGHT].indexOf(t.keyCode);
                        0 <= e && Po(t, 0 === e ? -1 : 1)
                    }
                },
                De = { touchstart: Uo, touchmove: Zo, touchend: $o, touchcancel: $o },
                _e = { mousedown: Uo, mousemove: Zo, mouseup: $o, mouseleave: $o },
                Ie = Pn("controls"),
                Pe = Pn("nav"),
                Re = !!At || t.navAsThumbnails,
                ze = Pn("autoplay"),
                We = Pn("touch"),
                je = Pn("mouseDrag"),
                qe = "tns-slide-active",
                Ve = "tns-complete",
                Xe = {
                    load: function(t) { uo(Yo(t)) },
                    error: function(t) {
                        var e;
                        e = Yo(t), v(e, "failed"), fo(e)
                    }
                },
                Ge = "force" === t.preventScrollOnTouch;
            if (Ie) var Ye, Ke, Qe = t.controlsContainer,
                Je = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                Ue = t.prevButton,
                Ze = t.nextButton,
                $e = t.prevButton ? t.prevButton.outerHTML : "",
                tn = t.nextButton ? t.nextButton.outerHTML : "";
            if (Pe) var en, nn = t.navContainer,
                on = t.navContainer ? t.navContainer.outerHTML : "",
                an = At ? Ct : ei(),
                rn = 0,
                sn = -1,
                ln = Hn(),
                dn = ln,
                cn = "tns-nav-active",
                un = "Carousel Page ",
                fn = " (Current Slide)";
            if (ze) var hn, mn, pn, vn, yn, gn = "forward" === t.autoplayDirection ? 1 : -1,
                xn = t.autoplayButton,
                bn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                Cn = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (We || je) var wn, Bn, Ln = {},
                En = {},
                Tn = !1,
                Mn = mt ? function(t, e) { return t.x - e.x } : function(t, e) { return t.y - e.y };
            At || Nn(Ee || Oe), X && (de = X, ce = "translate", G ? (ce += mt ? "3d(" : "3d(0px, ", ue = mt ? ", 0px, 0px)" : ", 0px)") : (ce += mt ? "X(" : "Y(", ue = ")")), it && (yt.className = yt.className.replace("tns-vpfix", "")),
                function() {
                    (Pn("gutter"), pt.className = "tns-outer", vt.className = "tns-inner", pt.id = Le + "-ow", vt.id = Le + "-iw", "" === yt.id && (yt.id = Le), Be += q || At ? " tns-subpixel" : " tns-no-subpixel", Be += j ? " tns-calc" : " tns-no-calc", At && (Be += " tns-autowidth"), Be += " tns-" + t.axis, yt.className += Be, it ? ((ft = n.createElement("div")).id = Le + "-mw", ft.className = "tns-ovh", pt.appendChild(ft), ft.appendChild(vt)) : pt.appendChild(vt), Vt) && ((ft || vt).className += " tns-ah");
                    if (gt.insertBefore(pt, yt), vt.appendChild(yt), h(bt, function(t, e) { v(t, "tns-item"), t.id || (t.id = Le + "-item" + e), !it && ut && v(t, ut), C(t, { "aria-hidden": "true", tabindex: "-1" }) }), ie) {
                        for (var e = n.createDocumentFragment(), o = n.createDocumentFragment(), i = ie; i--;) {
                            var a = i % Ct,
                                r = bt[a].cloneNode(!0);
                            if (w(r, "id"), o.insertBefore(r, o.firstChild), it) {
                                var s = bt[Ct - 1 - a].cloneNode(!0);
                                w(s, "id"), e.appendChild(s)
                            }
                        }
                        yt.insertBefore(e, yt.firstChild), yt.appendChild(o), bt = yt.children
                    }
                }(),
                function() {
                    if (!it)
                        for (var e = he, n = he + Math.min(Ct, It); e < n; e++) {
                            var o = bt[e];
                            o.style.left = 100 * (e - he) / It + "%", v(o, lt), y(o, ut)
                        }
                    if (mt && (q || At ? (u(ee, "#" + Le + " > .tns-item", "font-size:" + l.getComputedStyle(bt[0]).fontSize + ";", f(ee)), u(ee, "#" + Le, "font-size:0;", f(ee))) : it && h(bt, function(t, e) {
                            var n;
                            t.style.marginLeft = (n = e, j ? j + "(" + 100 * n + "% / " + ae + ")" : 100 * n / ae + "%")
                        })), V) {
                        if (Y) {
                            var i = ft && t.autoHeight ? Xn(t.speed) : "";
                            u(ee, "#" + Le + "-mw", i, f(ee))
                        }
                        i = zn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), u(ee, "#" + Le + "-iw", i, f(ee)), it && (i = mt && !At ? "width:" + Wn(t.fixedWidth, t.gutter, t.items) + ";" : "", Y && (i += Xn(Wt)), u(ee, "#" + Le, i, f(ee))), i = mt && !At ? jn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (i += qn(t.gutter)), it || (Y && (i += Xn(Wt)), Q && (i += Gn(Wt))), i && u(ee, "#" + Le + " > .tns-item", i, f(ee))
                    } else {
                        yo(), vt.style.cssText = zn(Ft, Ht, St, Vt), it && mt && !At && (yt.style.width = Wn(St, Ht, It));
                        i = mt && !At ? jn(St, Ht, It) : "";
                        Ht && (i += qn(Ht)), i && u(ee, "#" + Le + " > .tns-item", i, f(ee))
                    }
                    if (nt && V)
                        for (var a in nt) {
                            a = parseInt(a);
                            var r = nt[a],
                                s = (i = "", ""),
                                d = "",
                                c = "",
                                m = "",
                                p = At ? null : Rn("items", a),
                                g = Rn("fixedWidth", a),
                                x = Rn("speed", a),
                                b = Rn("edgePadding", a),
                                C = Rn("autoHeight", a),
                                w = Rn("gutter", a);
                            Y && ft && Rn("autoHeight", a) && "speed" in r && (s = "#" + Le + "-mw{" + Xn(x) + "}"), ("edgePadding" in r || "gutter" in r) && (d = "#" + Le + "-iw{" + zn(b, w, g, x, C) + "}"), it && mt && !At && ("fixedWidth" in r || "items" in r || St && "gutter" in r) && (c = "width:" + Wn(g, w, p) + ";"), Y && "speed" in r && (c += Xn(x)), c && (c = "#" + Le + "{" + c + "}"), ("fixedWidth" in r || St && "gutter" in r || !it && "items" in r) && (m += jn(g, w, p)), "gutter" in r && (m += qn(w)), !it && "speed" in r && (Y && (m += Xn(x)), Q && (m += Gn(x))), m && (m = "#" + Le + " > .tns-item{" + m + "}"), (i = s + d + c + m) && ee.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", ee.cssRules.length)
                        }
                }(), Yn();
            var On = qt ? it ? function() {
                    var t = pe,
                        e = ve;
                    t += Pt, e -= Pt, Ft ? (t += 1, e -= 1) : St && (Dt + Ht) % (St + Ht) && (e -= 1), ie && (e < he ? he -= Ct : he < t && (he += Ct))
                } : function() {
                    if (ve < he)
                        for (; pe + Ct <= he;) he -= Ct;
                    else if (he < pe)
                        for (; he <= ve - Ct;) he += Ct
                } : function() { he = Math.max(pe, Math.min(ve, he)) },
                kn = it ? function() {
                    var t, e, n, o, i, a, r, s, l, d, c;
                    Mo(yt, ""), Y || !Wt ? (So(), Wt && T(yt) || _o()) : (t = yt, e = de, n = ce, o = ue, i = No(), a = Wt, r = _o, s = Math.min(a, 10), l = 0 <= i.indexOf("%") ? "%" : "px", i = i.replace(l, ""), d = Number(t.style[e].replace(n, "").replace(o, "").replace(l, "")), c = (i - d) / a * s, setTimeout(function i() { a -= s, d += c, t.style[e] = n + d + l + o, 0 < a ? setTimeout(i, s) : r() }, s)), mt || ti()
                } : function() {
                    oe = [];
                    var t = {};
                    t[U] = t[Z] = _o, F(bt[me], t), S(bt[he], t), Fo(me, lt, dt, !0), Fo(he, ut, lt), U && Z && Wt && T(yt) || _o()
                };
            return {
                version: "2.9.1",
                getInfo: oi,
                events: we,
                goTo: Io,
                play: function() { Jt && !mn && (jo(), vn = !1) },
                pause: function() { mn && (qo(), vn = !0) },
                isOn: Bt,
                updateSliderHeight: xo,
                refresh: Yn,
                destroy: function() {
                    if (ee.disabled = !0, ee.ownerNode && ee.ownerNode.remove(), F(l, { resize: Zn }), zt && F(n, He), Qe && F(Qe, Ne), nn && F(nn, Ae), F(yt, Se), F(yt, Fe), xn && F(xn, { click: Vo }), Jt && clearInterval(hn), it && U) {
                        var e = {};
                        e[U] = _o, F(yt, e)
                    }
                    Kt && F(yt, De), Qt && F(yt, _e);
                    var o = [xt, Je, $e, tn, on, bn];
                    for (var i in tt.forEach(function(e, n) {
                            var i = "container" === e ? pt : t[e];
                            if ("object" == typeof i) {
                                var a = !!i.previousElementSibling && i.previousElementSibling,
                                    r = i.parentNode;
                                i.outerHTML = o[n], t[e] = a ? a.nextElementSibling : r.firstElementChild
                            }
                        }), tt = lt = dt = ct = ut = mt = pt = vt = yt = gt = xt = bt = Ct = ht = wt = At = St = Ft = Ht = Dt = It = Pt = Rt = zt = Wt = jt = qt = Vt = ee = ne = Lt = oe = ie = ae = re = se = le = de = ce = ue = fe = he = me = pe = ve = ge = xe = be = Ce = we = Be = Le = Ee = Te = Me = Oe = ke = Ne = Ae = Se = Fe = He = De = _e = Ie = Pe = Re = ze = We = je = qe = Ve = Xe = Et = Xt = Gt = Qe = Je = Ue = Ze = Ye = Ke = Yt = nn = on = en = an = rn = sn = ln = dn = cn = un = fn = Jt = Ut = gn = Zt = $t = xn = bn = te = Cn = hn = mn = pn = vn = yn = Ln = En = wn = Tn = Bn = Mn = Kt = Qt = null, this) "rebuild" !== i && (this[i] = null);
                    Bt = !1
                },
                rebuild: function() { return H(i(t, et)) }
            }
        }

        function Nn(t) { t && (Xt = Yt = Kt = Qt = zt = Jt = $t = te = !1) }

        function An() { for (var t = it ? he - ie : he; t < 0;) t += Ct; return t % Ct + 1 }

        function Sn(t) { return t = t ? Math.max(0, Math.min(qt ? Ct - 1 : Ct - It, t)) : 0, it ? t + ie : t }

        function Fn(t) { for (null == t && (t = he), it && (t -= ie); t < 0;) t += Ct; return Math.floor(t % Ct) }

        function Hn() { var t, e = Fn(); return t = Re ? e : St || At ? Math.ceil((e + 1) * an / Ct - 1) : Math.floor(e / It), !qt && it && he === ve && (t = an - 1), t }

        function Dn() { return l.innerWidth || n.documentElement.clientWidth || n.body.clientWidth }

        function _n(t) { return "top" === t ? "afterbegin" : "beforeend" }

        function In() { var t = Ft ? 2 * Ft - Ht : 0; return function t(e) { var o, i, a = n.createElement("div"); return e.appendChild(a), i = (o = a.getBoundingClientRect()).right - o.left, a.remove(), i || t(e.parentNode) }(gt) - t }

        function Pn(e) {
            if (t[e]) return !0;
            if (nt)
                for (var n in nt)
                    if (nt[n][e]) return !0;
            return !1
        }

        function Rn(e, n) {
            if (null == n && (n = wt), "items" === e && St) return Math.floor((Dt + Ht) / (St + Ht)) || 1;
            var o = t[e];
            if (nt)
                for (var i in nt) n >= parseInt(i) && e in nt[i] && (o = nt[i][e]);
            return "slideBy" === e && "page" === o && (o = Rn("items")), it || "slideBy" !== e && "items" !== e || (o = Math.floor(o)), o
        }

        function zn(t, e, n, o, i) {
            var a = "";
            if (void 0 !== t) {
                var r = t;
                e && (r -= e), a = mt ? "margin: 0 " + r + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + r + "px 0;"
            } else if (e && !n) {
                var s = "-" + e + "px";
                a = "margin: 0 " + (mt ? s + " 0 0" : "0 " + s + " 0") + ";"
            }
            return !it && i && Y && o && (a += Xn(o)), a
        }

        function Wn(t, e, n) { return t ? (t + e) * ae + "px" : j ? j + "(" + 100 * ae + "% / " + n + ")" : 100 * ae / n + "%" }

        function jn(t, e, n) {
            var o;
            if (t) o = t + e + "px";
            else {
                it || (n = Math.floor(n));
                var i = it ? ae : n;
                o = j ? j + "(100% / " + i + ")" : 100 / i + "%"
            }
            return o = "width:" + o, "inner" !== ot ? o + ";" : o + " !important;"
        }

        function qn(t) { var e = ""; return !1 !== t && (e = (mt ? "padding-" : "margin-") + (mt ? "right" : "bottom") + ": " + t + "px;"), e }

        function Vn(t, e) { var n = t.substring(0, t.length - e).toLowerCase(); return n && (n = "-" + n + "-"), n }

        function Xn(t) { return Vn(Y, 18) + "transition-duration:" + t / 1e3 + "s;" }

        function Gn(t) { return Vn(Q, 17) + "animation-duration:" + t / 1e3 + "s;" }

        function Yn() {
            if (Pn("autoHeight") || At || !mt) {
                var t = yt.querySelectorAll("img");
                h(t, function(t) {
                    var e = t.src;
                    e && e.indexOf("data:image") < 0 ? (S(t, Xe), t.src = "", t.src = e, v(t, "loading")) : ne || uo(t)
                }), e(function() { po(B(t), function() { Et = !0 }) }), !At && mt && (t = ho(he, Math.min(he + It - 1, ae - 1))), ne ? Kn() : e(function() { po(B(t), Kn) })
            } else it && Ao(), Jn(), Un()
        }

        function Kn() { if (At) { var t = qt ? he : Ct - 1;! function e() { bt[t - 1].getBoundingClientRect().right.toFixed(2) === bt[t].getBoundingClientRect().left.toFixed(2) ? Qn() : setTimeout(function() { e() }, 16) }() } else Qn() }

        function Qn() { mt && !At || (bo(), At ? (se = ko(), Me && (Oe = to()), ve = fe(), Nn(Ee || Oe)) : ti()), it && Ao(), Jn(), Un() }

        function Jn() {
            if (Co(), pt.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + so() + "</span>  of " + Ct + "</div>"), Tt = pt.querySelector(".tns-liveregion .current"), ze) {
                var e = Jt ? "stop" : "start";
                xn ? C(xn, { "data-action": e }) : t.autoplayButtonOutput && (pt.insertAdjacentHTML(_n(t.autoplayPosition), '<button data-action="' + e + '">' + Cn[0] + e + Cn[1] + Zt[0] + "</button>"), xn = pt.querySelector("[data-action]")), xn && S(xn, { click: Vo }), Jt && (jo(), $t && S(yt, Se), te && S(yt, Fe))
            }
            if (Pe) {
                if (nn) C(nn, { "aria-label": "Carousel Pagination" }), h(en = nn.children, function(t, e) { C(t, { "data-nav": e, tabindex: "-1", "aria-label": un + (e + 1), "aria-controls": Le }) });
                else {
                    for (var n = "", o = Re ? "" : 'style="display:none"', i = 0; i < Ct; i++) n += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + Le + '" ' + o + ' aria-label="' + un + (i + 1) + '"></button>';
                    n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", pt.insertAdjacentHTML(_n(t.navPosition), n), nn = pt.querySelector(".tns-nav"), en = nn.children
                }
                if (ni(), Y) {
                    var a = Y.substring(0, Y.length - 18).toLowerCase(),
                        r = "transition: all " + Wt / 1e3 + "s";
                    a && (r = "-" + a + "-" + r), u(ee, "[aria-controls^=" + Le + "-item]", r, f(ee))
                }
                C(en[ln], { "aria-label": un + (ln + 1) + fn }), w(en[ln], "tabindex"), v(en[ln], cn), S(nn, Ae)
            }
            Ie && (Qe || Ue && Ze || (pt.insertAdjacentHTML(_n(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Le + '">' + Gt[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Le + '">' + Gt[1] + "</button></div>"), Qe = pt.querySelector(".tns-controls")), Ue && Ze || (Ue = Qe.children[0], Ze = Qe.children[1]), t.controlsContainer && C(Qe, { "aria-label": "Carousel Navigation", tabindex: "0" }), (t.controlsContainer || t.prevButton && t.nextButton) && C([Ue, Ze], { "aria-controls": Le, tabindex: "-1" }), (t.controlsContainer || t.prevButton && t.nextButton) && (C(Ue, { "data-controls": "prev" }), C(Ze, { "data-controls": "next" })), Ye = Bo(Ue), Ke = Bo(Ze), To(), Qe ? S(Qe, Ne) : (S(Ue, Ne), S(Ze, Ne))), no()
        }

        function Un() {
            if (it && U) {
                var e = {};
                e[U] = _o, S(yt, e)
            }
            Kt && S(yt, De, t.preventScrollOnTouch), Qt && S(yt, _e), zt && S(n, He), "inner" === ot ? we.on("outerResized", function() { $n(), we.emit("innerLoaded", oi()) }) : (nt || St || At || Vt || !mt) && S(l, { resize: Zn }), Vt && ("outer" === ot ? we.on("innerLoaded", mo) : Ee || mo()), co(), Ee ? ao() : Oe && io(), we.on("indexChanged", vo), "inner" === ot && we.emit("innerLoaded", oi()), "function" == typeof Ce && Ce(oi()), Bt = !0
        }

        function Zn(t) { e(function() { $n(Go(t)) }) }

        function $n(e) {
            if (Bt) {
                "outer" === ot && we.emit("outerResized", oi(e)), wt = Dn();
                var o, i = ht,
                    a = !1;
                nt && (eo(), (o = i !== ht) && we.emit("newBreakpointStart", oi(e)));
                var r, s, l, d, c = It,
                    m = Ee,
                    p = Oe,
                    g = zt,
                    x = Xt,
                    b = Yt,
                    C = Kt,
                    w = Qt,
                    B = Jt,
                    T = $t,
                    M = te,
                    O = he;
                if (o) {
                    var k = St,
                        N = Vt,
                        A = Gt,
                        H = _t,
                        D = Zt;
                    if (!V) var _ = Ht,
                        I = Ft
                }
                if (zt = Rn("arrowKeys"), Xt = Rn("controls"), Yt = Rn("nav"), Kt = Rn("touch"), _t = Rn("center"), Qt = Rn("mouseDrag"), Jt = Rn("autoplay"), $t = Rn("autoplayHoverPause"), te = Rn("autoplayResetOnVisibility"), o && (Ee = Rn("disable"), St = Rn("fixedWidth"), Wt = Rn("speed"), Vt = Rn("autoHeight"), Gt = Rn("controlsText"), Zt = Rn("autoplayText"), Ut = Rn("autoplayTimeout"), V || (Ft = Rn("edgePadding"), Ht = Rn("gutter"))), Nn(Ee), Dt = In(), mt && !At || Ee || (bo(), mt || (ti(), a = !0)), (St || At) && (se = ko(), ve = fe()), (o || St) && (It = Rn("items"), Pt = Rn("slideBy"), (s = It !== c) && (St || At || (ve = fe()), On())), o && Ee !== m && (Ee ? ao() : function() {
                        if (Te) {
                            if (ee.disabled = !1, yt.className += Be, Ao(), qt)
                                for (var t = ie; t--;) it && E(bt[t]), E(bt[ae - t - 1]);
                            if (!it)
                                for (var e = he, n = he + Ct; e < n; e++) {
                                    var o = bt[e],
                                        i = e < he + It ? lt : ut;
                                    o.style.left = 100 * (e - he) / It + "%", v(o, i)
                                }
                            oo(), Te = !1
                        }
                    }()), Me && (o || St || At) && (Oe = to()) !== p && (Oe ? (So(No(Sn(0))), io()) : (function() {
                        if (ke) {
                            if (Ft && V && (vt.style.margin = ""), ie)
                                for (var t = "tns-transparent", e = ie; e--;) it && y(bt[e], t), y(bt[ae - e - 1], t);
                            oo(), ke = !1
                        }
                    }(), a = !0)), Nn(Ee || Oe), Jt || ($t = te = !1), zt !== g && (zt ? S(n, He) : F(n, He)), Xt !== x && (Xt ? Qe ? E(Qe) : (Ue && E(Ue), Ze && E(Ze)) : Qe ? L(Qe) : (Ue && L(Ue), Ze && L(Ze))), Yt !== b && (Yt ? E(nn) : L(nn)), Kt !== C && (Kt ? S(yt, De, t.preventScrollOnTouch) : F(yt, De)), Qt !== w && (Qt ? S(yt, _e) : F(yt, _e)), Jt !== B && (Jt ? (xn && E(xn), mn || vn || jo()) : (xn && L(xn), mn && qo())), $t !== T && ($t ? S(yt, Se) : F(yt, Se)), te !== M && (te ? S(n, Fe) : F(n, Fe)), o) {
                    if (St === k && _t === H || (a = !0), Vt !== N && (Vt || (vt.style.height = "")), Xt && Gt !== A && (Ue.innerHTML = Gt[0], Ze.innerHTML = Gt[1]), xn && Zt !== D) {
                        var P = Jt ? 1 : 0,
                            R = xn.innerHTML,
                            z = R.length - D[P].length;
                        R.substring(z) === D[P] && (xn.innerHTML = R.substring(0, z) + Zt[P])
                    }
                } else _t && (St || At) && (a = !0);
                if ((s || St && !At) && (an = ei(), ni()), (r = he !== O) ? (we.emit("indexChanged", oi()), a = !0) : s ? r || vo() : (St || At) && (co(), Co(), ro()), !s && it || function() {
                        for (var t = he + Math.min(Ct, It), e = ae; e--;) {
                            var n = bt[e];
                            he <= e && e < t ? (v(n, "tns-moving"), n.style.left = 100 * (e - he) / It + "%", v(n, lt), y(n, ut)) : n.style.left && (n.style.left = "", v(n, ut), y(n, lt)), y(n, dt)
                        }
                        setTimeout(function() { h(bt, function(t) { y(t, "tns-moving") }) }, 300)
                    }(), !Ee && !Oe) {
                    if (o && !V && (Vt === autoheightTem && Wt === speedTem || yo(), Ft === I && Ht === _ || (vt.style.cssText = zn(Ft, Ht, St, Wt, Vt)), mt)) {
                        it && (yt.style.width = Wn(St, Ht, It));
                        var W = jn(St, Ht, It) + qn(Ht);
                        d = f(l = ee) - 1, "deleteRule" in l ? l.deleteRule(d) : l.removeRule(d), u(ee, "#" + Le + " > .tns-item", W, f(ee))
                    }
                    Vt && mo(), a && (Ao(), me = he)
                }
                o && we.emit("newBreakpointEnd", oi(e))
            }
        }

        function to() {
            if (!St && !At) return Ct <= (_t ? It - (It - 1) / 2 : It);
            var t = St ? (St + Ht) * Ct : Lt[Ct],
                e = Ft ? Dt + 2 * Ft : Dt + Ht;
            return _t && (e -= St ? (Dt - St) / 2 : (Dt - (Lt[he + 1] - Lt[he] - Ht)) / 2), t <= e
        }

        function eo() { for (var t in ht = 0, nt)(t = parseInt(t)) <= wt && (ht = t) }

        function no() {!Jt && xn && L(xn), !Yt && nn && L(nn), Xt || (Qe ? L(Qe) : (Ue && L(Ue), Ze && L(Ze))) }

        function oo() { Jt && xn && E(xn), Yt && nn && E(nn), Xt && (Qe ? E(Qe) : (Ue && E(Ue), Ze && E(Ze))) }

        function io() {
            if (!ke) {
                if (Ft && (vt.style.margin = "0px"), ie)
                    for (var t = "tns-transparent", e = ie; e--;) it && v(bt[e], t), v(bt[ae - e - 1], t);
                no(), ke = !0
            }
        }

        function ao() {
            if (!Te) {
                if (ee.disabled = !0, yt.className = yt.className.replace(Be.substring(1), ""), w(yt, ["style"]), qt)
                    for (var t = ie; t--;) it && L(bt[t]), L(bt[ae - t - 1]);
                if (mt && it || w(vt, ["style"]), !it)
                    for (var e = he, n = he + Ct; e < n; e++) {
                        var o = bt[e];
                        w(o, ["style"]), y(o, lt), y(o, ut)
                    }
                no(), Te = !0
            }
        }

        function ro() {
            var t = so();
            Tt.innerHTML !== t && (Tt.innerHTML = t)
        }

        function so() {
            var t = lo(),
                e = t[0] + 1,
                n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }

        function lo(t) {
            null == t && (t = No());
            var e, n, o, i = he;
            if (_t || Ft ? (At || St) && (n = -(parseFloat(t) + Ft), o = n + Dt + 2 * Ft) : At && (n = Lt[he], o = n + Dt), At) Lt.forEach(function(t, a) { a < ae && ((_t || Ft) && t <= n + .5 && (i = a), .5 <= o - t && (e = a)) });
            else {
                if (St) {
                    var a = St + Ht;
                    _t || Ft ? (i = Math.floor(n / a), e = Math.ceil(o / a - 1)) : e = i + Math.ceil(Dt / a) - 1
                } else if (_t || Ft) {
                    var r = It - 1;
                    if (_t ? (i -= r / 2, e = he + r / 2) : e = he + r, Ft) {
                        var s = Ft * It / Dt;
                        i -= s, e += s
                    }
                    i = Math.floor(i), e = Math.ceil(e)
                } else e = i + It - 1;
                i = Math.max(i, 0), e = Math.min(e, ae - 1)
            }
            return [i, e]
        }

        function co() {
            ne && !Ee && ho.apply(null, lo()).forEach(function(t) {
                if (!p(t, Ve)) {
                    var e = {};
                    e[U] = function(t) { t.stopPropagation() }, S(t, e), S(t, Xe), t.src = x(t, "data-src");
                    var n = x(t, "data-srcset");
                    n && (t.srcset = n), v(t, "loading")
                }
            })
        }

        function uo(t) { v(t, "loaded"), fo(t) }

        function fo(t) { v(t, "tns-complete"), y(t, "loading"), F(t, Xe) }

        function ho(t, e) { for (var n = []; t <= e;) h(bt[t].querySelectorAll("img"), function(t) { n.push(t) }), t++; return n }

        function mo() {
            var t = ho.apply(null, lo());
            e(function() { po(t, xo) })
        }

        function po(t, n) { return Et ? n() : (t.forEach(function(e, n) { p(e, Ve) && t.splice(n, 1) }), t.length ? void e(function() { po(t, n) }) : n()) }

        function vo() {
            co(), Co(), ro(), To(),
                function() {
                    if (Yt && (ln = 0 <= sn ? sn : Hn(), sn = -1, ln !== dn)) {
                        var t = en[dn],
                            e = en[ln];
                        C(t, { tabindex: "-1", "aria-label": un + (dn + 1) }), y(t, cn), C(e, { "aria-label": un + (ln + 1) + fn }), w(e, "tabindex"), v(e, cn), dn = ln
                    }
                }()
        }

        function yo() { it && Vt && (ft.style[Y] = Wt / 1e3 + "s") }

        function go(t, e) { for (var n = [], o = t, i = Math.min(t + e, ae); o < i; o++) n.push(bt[o].offsetHeight); return Math.max.apply(null, n) }

        function xo() {
            var t = Vt ? go(he, It) : go(ie, Ct),
                e = ft || vt;
            e.style.height !== t && (e.style.height = t + "px")
        }

        function bo() {
            Lt = [0];
            var t = mt ? "left" : "top",
                e = mt ? "right" : "bottom",
                n = bt[0].getBoundingClientRect()[t];
            h(bt, function(o, i) { i && Lt.push(o.getBoundingClientRect()[t] - n), i === ae - 1 && Lt.push(o.getBoundingClientRect()[e] - n) })
        }

        function Co() {
            var t = lo(),
                e = t[0],
                n = t[1];
            h(bt, function(t, o) { e <= o && o <= n ? g(t, "aria-hidden") && (w(t, ["aria-hidden", "tabindex"]), v(t, qe)) : g(t, "aria-hidden") || (C(t, { "aria-hidden": "true", tabindex: "-1" }), y(t, qe)) })
        }

        function wo(t) { return t.nodeName.toLowerCase() }

        function Bo(t) { return "button" === wo(t) }

        function Lo(t) { return "true" === t.getAttribute("aria-disabled") }

        function Eo(t, e, n) { t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString()) }

        function To() {
            if (Xt && !jt && !qt) {
                var t = Ye ? Ue.disabled : Lo(Ue),
                    e = Ke ? Ze.disabled : Lo(Ze),
                    n = he <= pe,
                    o = !jt && ve <= he;
                n && !t && Eo(Ye, Ue, !0), !n && t && Eo(Ye, Ue, !1), o && !e && Eo(Ke, Ze, !0), !o && e && Eo(Ke, Ze, !1)
            }
        }

        function Mo(t, e) { Y && (t.style[Y] = e) }

        function Oo(t) { return null == t && (t = he), At ? (Dt - (Ft ? Ht : 0) - (Lt[t + 1] - Lt[t] - Ht)) / 2 : St ? (Dt - St) / 2 : (It - 1) / 2 }

        function ko() { var t = Dt + (Ft ? Ht : 0) - (St ? (St + Ht) * ae : Lt[ae]); return _t && !qt && (t = St ? -(St + Ht) * (ae - 1) - Oo() : Oo(ae - 1) - Lt[ae - 1]), 0 < t && (t = 0), t }

        function No(t) {
            var e;
            if (null == t && (t = he), mt && !At)
                if (St) e = -(St + Ht) * t, _t && (e += Oo());
                else {
                    var n = X ? ae : It;
                    _t && (t -= Oo()), e = 100 * -t / n
                }
            else e = -Lt[t], _t && At && (e += Oo());
            return re && (e = Math.max(e, se)), e + (!mt || At || St ? "px" : "%")
        }

        function Ao(t) { Mo(yt, "0s"), So(t) }

        function So(t) { null == t && (t = No()), yt.style[de] = ce + t + ue }

        function Fo(t, e, n, o) {
            var i = t + It;
            qt || (i = Math.min(i, ae));
            for (var a = t; a < i; a++) {
                var r = bt[a];
                o || (r.style.left = 100 * (a - he) / It + "%"), ct && K && (r.style[K] = r.style[J] = ct * (a - t) / 1e3 + "s"), y(r, e), v(r, n), o && oe.push(r)
            }
        }

        function Ho(t, e) { le && On(), (he !== me || e) && (we.emit("indexChanged", oi()), we.emit("transitionStart", oi()), Vt && mo(), mn && t && 0 <= ["click", "keydown"].indexOf(t.type) && qo(), be = !0, kn()) }

        function Do(t) { return t.toLowerCase().replace(/-/g, "") }

        function _o(t) {
            if (it || be) {
                if (we.emit("transitionEnd", oi(t)), !it && 0 < oe.length)
                    for (var e = 0; e < oe.length; e++) {
                        var n = oe[e];
                        n.style.left = "", J && K && (n.style[J] = "", n.style[K] = ""), y(n, dt), v(n, ut)
                    }
                if (!t || !it && t.target.parentNode === yt || t.target === yt && Do(t.propertyName) === Do(de)) {
                    if (!le) {
                        var o = he;
                        On(), he !== o && (we.emit("indexChanged", oi()), Ao())
                    }
                    "inner" === ot && we.emit("innerLoaded", oi()), be = !1, me = he
                }
            }
        }

        function Io(t, e) {
            if (!Oe)
                if ("prev" === t) Po(e, -1);
                else if ("next" === t) Po(e, 1);
            else {
                if (be) {
                    if (ye) return;
                    _o()
                }
                var n = Fn(),
                    o = 0;
                if ("first" === t ? o = -n : "last" === t ? o = it ? Ct - It - n : Ct - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(Ct - 1, t))), o = t - n)), !it && o && Math.abs(o) < It) {
                    var i = 0 < o ? 1 : -1;
                    o += pe <= he + o - Ct ? Ct * i : 2 * Ct * i * -1
                }
                he += o, it && qt && (he < pe && (he += Ct), ve < he && (he -= Ct)), Fn(he) !== Fn(me) && Ho(e)
            }
        }

        function Po(t, e) {
            if (be) {
                if (ye) return;
                _o()
            }
            var n;
            if (!e) {
                for (var o = Yo(t = Go(t)); o !== Qe && [Ue, Ze].indexOf(o) < 0;) o = o.parentNode;
                var i = [Ue, Ze].indexOf(o);
                0 <= i && (n = !0, e = 0 === i ? -1 : 1)
            }
            if (jt) { if (he === pe && -1 === e) return void Io("last", t); if (he === ve && 1 === e) return void Io("first", t) }
            e && (he += Pt * e, At && (he = Math.floor(he)), Ho(n || t && "keydown" === t.type ? t : null))
        }

        function Ro() { hn = setInterval(function() { Po(null, gn) }, Ut), mn = !0 }

        function zo() { clearInterval(hn), mn = !1 }

        function Wo(t, e) { C(xn, { "data-action": t }), xn.innerHTML = Cn[0] + t + Cn[1] + e }

        function jo() { Ro(), xn && Wo("stop", Zt[1]) }

        function qo() { zo(), xn && Wo("start", Zt[0]) }

        function Vo() { mn ? (qo(), vn = !0) : (jo(), vn = !1) }

        function Xo(t) { t.focus() }

        function Go(t) { return Ko(t = t || l.event) ? t.changedTouches[0] : t }

        function Yo(t) { return t.target || l.event.srcElement }

        function Ko(t) { return 0 <= t.type.indexOf("touch") }

        function Qo(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1 }

        function Jo() { return a = En.y - Ln.y, r = En.x - Ln.x, e = Math.atan2(a, r) * (180 / Math.PI), o = !1, 90 - (n = ge) <= (i = Math.abs(90 - Math.abs(e))) ? o = "horizontal" : i <= n && (o = "vertical"), o === t.axis; var e, n, o, i, a, r }

        function Uo(t) {
            if (be) {
                if (ye) return;
                _o()
            }
            Jt && mn && zo(), Tn = !0, Bn && (o(Bn), Bn = null);
            var e = Go(t);
            we.emit(Ko(t) ? "touchStart" : "dragStart", oi(t)), !Ko(t) && 0 <= ["img", "a"].indexOf(wo(Yo(t))) && Qo(t), En.x = Ln.x = e.clientX, En.y = Ln.y = e.clientY, it && (wn = parseFloat(yt.style[de].replace(ce, "")), Mo(yt, "0s"))
        }

        function Zo(t) {
            if (Tn) {
                var n = Go(t);
                En.x = n.clientX, En.y = n.clientY, it ? Bn || (Bn = e(function() {
                    ! function t(n) {
                        if (xe) {
                            if (o(Bn), Tn && (Bn = e(function() { t(n) })), "?" === xe && (xe = Jo()), xe) {
                                !Ge && Ko(n) && (Ge = !0);
                                try { n.type && we.emit(Ko(n) ? "touchMove" : "dragMove", oi(n)) } catch (t) {}
                                var i = wn,
                                    a = Mn(En, Ln);
                                if (!mt || St || At) i += a, i += "px";
                                else i += X ? a * It * 100 / ((Dt + Ht) * ae) : 100 * a / (Dt + Ht), i += "%";
                                yt.style[de] = ce + i + ue
                            }
                        } else Tn = !1
                    }(t)
                })) : ("?" === xe && (xe = Jo()), xe && (Ge = !0)), Ge && t.preventDefault()
            }
        }

        function $o(n) {
            if (Tn) {
                Bn && (o(Bn), Bn = null), it && Mo(yt, ""), Tn = !1;
                var i = Go(n);
                En.x = i.clientX, En.y = i.clientY;
                var a = Mn(En, Ln);
                if (Math.abs(a)) {
                    if (!Ko(n)) {
                        var r = Yo(n);
                        S(r, { click: function t(e) { Qo(e), F(r, { click: t }) } })
                    }
                    it ? Bn = e(function() {
                        if (mt && !At) {
                            var t = -a * It / (Dt + Ht);
                            t = 0 < a ? Math.floor(t) : Math.ceil(t), he += t
                        } else {
                            var e = -(wn + a);
                            if (e <= 0) he = pe;
                            else if (e >= Lt[ae - 1]) he = ve;
                            else
                                for (var o = 0; o < ae && e >= Lt[o];) e > Lt[he = o] && a < 0 && (he += 1), o++
                        }
                        Ho(n, a), we.emit(Ko(n) ? "touchEnd" : "dragEnd", oi(n))
                    }) : xe && Po(n, 0 < a ? -1 : 1)
                }
            }
            "auto" === t.preventScrollOnTouch && (Ge = !1), ge && (xe = "?"), Jt && !mn && Ro()
        }

        function ti() {
            (ft || vt).style.height = Lt[he + It] - Lt[he] + "px"
        }

        function ei() { var t = St ? (St + Ht) * Ct / Dt : Ct / It; return Math.min(Math.ceil(t), Ct) }

        function ni() {
            if (Yt && !Re && an !== rn) {
                var t = rn,
                    e = an,
                    n = E;
                for (an < rn && (t = an, e = rn, n = L); t < e;) n(en[t]), t++;
                rn = an
            }
        }

        function oi(t) { return { container: yt, slideItems: bt, navContainer: nn, navItems: en, controlsContainer: Qe, hasControls: Ie, prevButton: Ue, nextButton: Ze, items: It, slideBy: Pt, cloneCount: ie, slideCount: Ct, slideCountNew: ae, index: he, indexCached: me, displayIndex: An(), navCurrentIndex: ln, navCurrentIndexCached: dn, pages: an, pagesCached: rn, sheet: ee, isOn: Bt, event: t || {} } }
        $ && console.warn("No slides found in", t.container)
    };
    return H
}();
! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.tingle = e() }(this, function() {
    function t(t) {
        this.opts = function() {
            for (var t = 1; t < arguments.length; t++)
                for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
            return arguments[0]
        }({}, { onClose: null, onOpen: null, beforeOpen: null, beforeClose: null, stickyFooter: !1, footer: !1, cssClass: [], closeLabel: "Close", closeMethods: ["overlay", "button", "escape"] }, t), this.init()
    }

    function e() { this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px") }

    function n() {
        this._events = {
            clickCloseBtn: this.close.bind(this),
            clickOverlay: function(t) {
                -1 !== this.opts.closeMethods.indexOf("overlay") && ! function(t, e) {
                    for (;
                        (t = t.parentElement) && !t.classList.contains(e););
                    return t
                }(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth && this.close()
            }.bind(this),
            resize: this.checkOverflow.bind(this),
            keyboardNav: function(t) {-1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close() }.bind(this)
        }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn), this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav)
    }
    var o = function() {
            var t, e = document.createElement("tingle-test-transition"),
                n = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
            for (t in n)
                if (void 0 !== e.style[t]) return n[t]
        }(),
        i = !1;
    return t.prototype.init = function() { if (!this.modal) return function() { this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose"), this.modal.style.display = "none", this.opts.cssClass.forEach(function(t) { "string" == typeof t && this.modal.classList.add(t) }, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.type = "button", this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = "×", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(this.modalBox) }.call(this), n.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter(), this }, t.prototype._busy = function(t) { i = t }, t.prototype._isBusy = function() { return i }, t.prototype.destroy = function() { null !== this.modal && (this.isOpen() && this.close(!0), function() {-1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn), this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav) }.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null) }, t.prototype.isOpen = function() { return !!this.modal.classList.contains("tingle-modal--visible") }, t.prototype.open = function() { if (!this._isBusy()) { this._busy(!0); var t = this; return "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), this._scrollPosition = window.pageYOffset, document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), o ? this.modal.addEventListener(o, function e() { "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t.modal.removeEventListener(o, e, !1), t._busy(!1) }, !1) : ("function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t._busy(!1)), this.checkOverflow(), this } }, t.prototype.close = function(t) {
        if (!this._isBusy()) {
            if (this._busy(!0), t = t || !1, "function" == typeof this.opts.beforeClose && !this.opts.beforeClose.call(this)) return;
            document.body.classList.remove("tingle-enabled"), window.scrollTo(0, this._scrollPosition), document.body.style.top = null, this.modal.classList.remove("tingle-modal--visible");
            var e = this;
            t ? (e.modal.style.display = "none", "function" == typeof e.opts.onClose && e.opts.onClose.call(this), e._busy(!1)) : o ? this.modal.addEventListener(o, function t() { e.modal.removeEventListener(o, t, !1), e.modal.style.display = "none", "function" == typeof e.opts.onClose && e.opts.onClose.call(this), e._busy(!1) }, !1) : (e.modal.style.display = "none", "function" == typeof e.opts.onClose && e.opts.onClose.call(this), e._busy(!1))
        }
    }, t.prototype.setContent = function(t) { return "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t)), this.isOpen() && this.checkOverflow(), this }, t.prototype.getContent = function() { return this.modalBoxContent }, t.prototype.addFooter = function() { return function() { this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter) }.call(this), this }, t.prototype.setFooterContent = function(t) { return this.modalBoxFooter.innerHTML = t, this }, t.prototype.getFooterContent = function() { return this.modalBoxFooter }, t.prototype.setStickyFooter = function(t) { return this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), e.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))), this }, t.prototype.addFooterBtn = function(t, e, n) { var o = document.createElement("button"); return o.innerHTML = t, o.addEventListener("click", n), "string" == typeof e && e.length && e.split(" ").forEach(function(t) { o.classList.add(t) }), this.modalBoxFooter.appendChild(o), o }, t.prototype.resize = function() { console.warn("Resize is deprecated and will be removed in version 1.0") }, t.prototype.isOverflow = function() { var t = window.innerHeight; return this.modalBox.clientHeight >= t }, t.prototype.checkOverflow = function() { this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (e.call(this), this.setStickyFooter(!0))) }, { modal: t }
});
var CustomSelect = function(t) {
    var e = "string" == typeof t.elem ? document.getElementById(t.elem) : t.elem,
        n = "js-Dropdown-title",
        o = "is-selected",
        i = "is-open",
        a = e.getElementsByTagName("optgroup"),
        r = e.options,
        s = r.length,
        l = 0,
        d = document.createElement("div");
    d.className = "js-Dropdown", e.id && (d.id = "custom-" + e.id);
    var c = document.createElement("button");
    c.className = n, c.textContent = r[0].textContent;
    var u = document.createElement("ul");
    if (u.className = "js-Dropdown-list", a.length)
        for (var f = 0; f < a.length; f++) {
            var h = document.createElement("div");
            h.innerText = a[f].label, h.classList.add("js-Dropdown-optgroup"), u.appendChild(h), m(a[f].getElementsByTagName("option"))
        } else m(r);

    function m(t) {
        for (var n = 0; n < t.length; n++) {
            var i = document.createElement("li");
            i.innerText = t[n].textContent, i.setAttribute("data-value", t[n].value), i.setAttribute("data-index", l++), r[e.selectedIndex].textContent === t[n].textContent && (i.classList.add(o), c.textContent = t[n].textContent), u.appendChild(i)
        }
    }

    function p() { u.classList.toggle(i) }

    function v() { u.classList.remove(i) }
    return d.appendChild(c), d.appendChild(u), d.addEventListener("click", function(t) {
        t.preventDefault();
        var i = t.target;
        if (i.className === n && p(), "LI" === i.tagName) {
            d.querySelector("." + n).innerText = i.innerText, e.options.selectedIndex = i.getAttribute("data-index");
            var a = new CustomEvent("change");
            e.dispatchEvent(a);
            for (var r = 0; r < s; r++) u.querySelectorAll("li")[r].classList.remove(o);
            i.classList.add(o), v()
        }
    }), e.parentNode.insertBefore(d, e), e.style.display = "none", document.addEventListener("click", function(t) { d.contains(t.target) || v() }), { toggle: p, close: v, open: function() { u.classList.add(i) } }
};