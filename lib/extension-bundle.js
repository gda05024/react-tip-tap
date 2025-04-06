import { a as yt, I as kt, U as vt, S as Ct, C as Nt, f as ce, N as le, b as At, c as Tt, R as He, F as Lt, H as St, T as Et, E as N, d as Ht, e as Mt, g as zt, h as pe, O as Rt, i as Pt, j as It, k as Bt, L as jt, l as Dt, m as we, n as Ot, o as $t, D as Ft, P as Ut, p as qt, q as Kt, G as Vt, r as Wt, s as Gt, t as Zt, u as Jt, v as Qt, w as Yt, x as nt, y as it, z as at, A as Me, J as Xt, K as en, M as tn, Q as nn, V as an } from "./tiptap-BV9BUpUC.js";
import { P as te, b as Z, $ as de, a0 as he, al as R, am as on, T as ot, A as rn, a4 as sn, an as cn, ao as ln } from "./vendor-DyAqAGVt.js";
import { jsxs as m, jsx as r, Fragment as ye } from "react/jsx-runtime";
import * as J from "react";
import dn, { useMemo as P, useState as v, useRef as G, useCallback as F, Fragment as ze, forwardRef as Re, useImperativeHandle as Pe, useEffect as M } from "react";
import { ChevronDown as Ie, Check as hn, ChevronUp as un, Copy as mn, CopyCheck as fn, SearchIcon as _n, LoaderIcon as gn, LucideTableProperties as bn, LucideSheet as xn, LucideImage as pn, LucideFile as wn, LucideVideo as yn, LucideAudioLines as kn } from "lucide-react";
import { i as Be, T as ke, a as ve, B as V, b as Ce, g as je, A as x, D as Q, c as Y, d as X, e as vn, f as S, u as De, h as Cn, I as z, j as ne, k as rt, l as Se, m as Nn, n as Oe, P as ie, o as ae, p as oe, q as $e, C as An, H as Tn, L as Ln, r as Sn, M as En, s as Hn, t as Ke, v as me, w as K, E as D, x as Mn, y as zn, V as Rn, z as Ve, F as Ne, G as We, S as Pn, J as In, K as Bn, N as j, O as jn, Q as Dn, U as On, W as $n, X as Fn, Y as st } from "./RichTextEditor-aaUynZc2.js";
import { a3 as Vo, $ as Wo, Z as Go, a0 as Zo, _ as Jo, a1 as Qo, a2 as Yo } from "./RichTextEditor-aaUynZc2.js";
import { M as Un, D as ct, u as B, f as qn, g as Kn, h as Ge, i as A, j as lt, k as Vn, T as fe, m as _e, n as ge } from "./index-8id9bPv5.js";
import { bundledThemes as dt, bundledLanguages as ht, createHighlighter as Wn } from "shiki";
import * as C from "@radix-ui/react-select";
import { Slot as Gn } from "@radix-ui/react-slot";
import Fe from "tippy.js";
import Ue from "scroll-into-view-if-needed";
import { EmojiPicker as W } from "frimousse";
import { Packer as Zn, WidthType as Jn } from "docx";
import { DocxSerializer as Qn, defaultNodes as U, defaultMarks as Yn } from "prosemirror-docx";
const qe = dn.forwardRef(
  ({ asChild: e, ...t }, i) => {
    var o;
    const n = Be[t.icon];
    return /* @__PURE__ */ m(ke, { children: [
      /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
        e ? Gn : V,
        {
          className: "richtext-h-[32px] richtext-min-w-24 richtext-overflow-hidden richtext-px-[5px]  richtext-py-0",
          disabled: t == null ? void 0 : t.disabled,
          ref: i,
          variant: "ghost",
          ...t,
          children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-h-full richtext-items-center richtext-font-normal", children: [
            (t == null ? void 0 : t.title) && /* @__PURE__ */ r("div", { className: "richtext-grow richtext-truncate richtext-text-left richtext-text-sm", children: t == null ? void 0 : t.title }),
            n && /* @__PURE__ */ r(n, { className: "richtext-ml-1 richtext-size-3 richtext-shrink-0 richtext-text-zinc-500" })
          ] })
        }
      ) }),
      /* @__PURE__ */ r(Ce, { children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        (t == null ? void 0 : t.tooltip) && /* @__PURE__ */ r("div", { children: t == null ? void 0 : t.tooltip }),
        /* @__PURE__ */ r("div", { className: "richtext-flex", children: !!((o = t == null ? void 0 : t.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: je(t == null ? void 0 : t.shortcutKeys) }) })
      ] }) })
    ] });
  }
), co = yt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBold(),
          isActive: () => t.isActive("bold") || !1,
          disabled: !t.can().toggleBold(),
          icon: "Bold",
          shortcutKeys: ["mod", "B"],
          tooltip: i("editor.bold.tooltip")
        }
      })
    };
  }
}), lo = kt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: x,
          componentProps: {
            action: () => t.commands.toggleItalic(),
            isActive: () => t.isActive("italic") || !1,
            disabled: !t.can().toggleItalic(),
            shortcutKeys: ["mod", "I"],
            icon: "Italic",
            tooltip: i("editor.italic.tooltip")
          }
        };
      }
    };
  }
}), ho = vt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i }) {
        return {
          component: x,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !t.can().toggleUnderline(),
            icon: "Underline",
            shortcutKeys: ["mod", "U"],
            tooltip: i("editor.underline.tooltip")
          }
        };
      }
    };
  }
}), uo = Ct.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleStrike(),
          isActive: () => t.isActive("strike") || !1,
          disabled: !t.can().toggleStrike(),
          icon: "Strikethrough",
          shortcutKeys: ["shift", "mod", "S"],
          tooltip: i("editor.strike.tooltip")
        }
      })
    };
  }
}), mo = Nt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleCode(),
          isActive: () => t.isActive("code") || !1,
          disabled: !t.can().toggleCode(),
          icon: "Code",
          shortcutKeys: ["mod", "E"],
          tooltip: i("editor.code.tooltip")
        }
      })
    };
  }
});
let I, re;
const Ae = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set();
function Xn() {
  return I;
}
function ei(e) {
  if (!I && !re) {
    const t = e.themes.filter(
      (n) => !!n && n in dt
    ), i = e.languages.filter(
      (n) => !!n && n in ht
    );
    return re = Wn({ themes: t, langs: i }).then((n) => {
      I = n;
    }), re;
  }
  if (re)
    return re;
}
async function ut(e) {
  return I && !I.getLoadedThemes().includes(e) && !Te.has(e) && e in dt ? (Te.add(e), await I.loadTheme(e), Te.delete(e), !0) : !1;
}
async function mt(e) {
  return I && !I.getLoadedLanguages().includes(e) && !Ae.has(e) && e in ht ? (Ae.add(e), await I.loadLanguage(e), Ae.delete(e), !0) : !1;
}
async function ti({
  doc: e,
  name: t,
  defaultTheme: i,
  defaultLanguage: n
}) {
  const a = ce(e, (c) => c.type.name === t), o = [
    ...a.map((c) => c.node.attrs.theme),
    i
  ], s = [
    ...a.map((c) => c.node.attrs.language),
    n
  ];
  I ? await Promise.all([
    ...o.flatMap((c) => ut(c)),
    ...s.flatMap((c) => !!c && mt(c))
  ]) : await ei({ languages: s, themes: o });
}
function Ze({
  doc: e,
  name: t,
  defaultTheme: i,
  defaultLanguage: n
}) {
  const a = [];
  return ce(e, (s) => s.type.name === t).forEach((s) => {
    let c = s.pos + 1, h = s.node.attrs.language || n;
    const d = s.node.attrs.theme || i, l = Xn();
    if (!l)
      return;
    l.getLoadedLanguages().includes(h) || (h = "plaintext");
    const u = l.getLoadedThemes().includes(d) ? d : l.getLoadedThemes()[0], f = l.codeToTokensBase(s.node.textContent, {
      lang: h,
      theme: u
    });
    for (const _ of f) {
      for (const p of _) {
        const w = c + p.content.length, T = he.inline(c, w, {
          style: `color: ${p.color}`
        });
        a.push(T), c = w;
      }
      c += 1;
    }
  }), de.create(e, a);
}
function ni({
  name: e,
  defaultLanguage: t,
  defaultTheme: i
}) {
  const n = new te({
    key: new Z("shiki"),
    view(a) {
      class o {
        constructor() {
          this.initDecorations();
        }
        update() {
          this.checkUndecoratedBlocks();
        }
        destroy() {
        }
        // Initialize shiki async, and then highlight initial document
        async initDecorations() {
          const c = a.state.doc;
          await ti({ doc: c, name: e, defaultLanguage: t, defaultTheme: i });
          const h = a.state.tr.setMeta("shikiPluginForceDecoration", !0);
          a.dispatch(h);
        }
        // When new codeblocks were added and they have missing themes or
        // languages, load those and then add code decorations once again.
        async checkUndecoratedBlocks() {
          const c = ce(
            a.state.doc,
            (l) => l.type.name === e
          );
          if ((await Promise.all(
            c.flatMap((l) => [
              ut(l.node.attrs.theme),
              mt(l.node.attrs.language)
            ])
          )).includes(!0)) {
            const l = a.state.tr.setMeta("shikiPluginForceDecoration", !0);
            a.dispatch(l);
          }
        }
      }
      return new o();
    },
    state: {
      init: (a, { doc: o }) => Ze({
        doc: o,
        name: e,
        defaultLanguage: t,
        defaultTheme: i
      }),
      apply: (a, o, s, c) => {
        const h = s.selection.$head.parent.type.name, d = c.selection.$head.parent.type.name, l = ce(
          s.doc,
          (_) => _.type.name === e
        ), u = ce(
          c.doc,
          (_) => _.type.name === e
        ), f = a.docChanged && ([h, d].includes(e) || u.length !== l.length || a.steps.some((_) => _.from !== void 0 && _.to !== void 0 && l.some((p) => p.pos >= _.from && p.pos + p.node.nodeSize <= _.to)));
        return a.getMeta("shikiPluginForceDecoration") || f ? Ze({
          doc: a.doc,
          name: e,
          defaultLanguage: t,
          defaultTheme: i
        }) : o.map(a.mapping, a.doc);
      }
    },
    props: {
      //@ts-expect-error
      decorations(a) {
        return n.getState(a);
      }
    }
  });
  return n;
}
function ii({ action: e, languages: t, ...i }) {
  const n = (o) => {
    e(o);
  }, a = P(() => t == null ? void 0 : t.map((o) => ({
    title: Un[o] || o,
    // icon: language.icon,
    language: o
  })), [t]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(Y, { disabled: i == null ? void 0 : i.disabled, asChild: !0, children: /* @__PURE__ */ r(
      x,
      {
        tooltip: i == null ? void 0 : i.tooltip,
        disabled: i == null ? void 0 : i.disabled,
        icon: i == null ? void 0 : i.icon
      }
    ) }),
    /* @__PURE__ */ r(X, { className: "richtext-w-full !richtext-max-h-[180px] !richtext-overflow-y-scroll", children: a == null ? void 0 : a.map((o) => /* @__PURE__ */ r(vn, { onClick: () => n(o.language), children: /* @__PURE__ */ r("div", { className: "richtext-h-full richtext-ml-1", children: o.title }) }, `codeblock-${o.title}`)) })
  ] });
}
const ai = C.Root, oi = C.Value, ft = J.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  C.Trigger,
  {
    ref: n,
    className: S(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-2 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      e
    ),
    ...i,
    children: [
      t,
      /* @__PURE__ */ r(C.Icon, { asChild: !0, children: /* @__PURE__ */ r(Ie, { className: "richtext-h-4 richtext-w-4 richtext-opacity-50" }) })
    ]
  }
));
ft.displayName = C.Trigger.displayName;
const _t = J.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  C.ScrollUpButton,
  {
    ref: i,
    className: S(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(un, { className: "richtext-h-4 richtext-w-4" })
  }
));
_t.displayName = C.ScrollUpButton.displayName;
const gt = J.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  C.ScrollDownButton,
  {
    ref: i,
    className: S(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Ie, { className: "richtext-h-4 richtext-w-4" })
  }
));
gt.displayName = C.ScrollDownButton.displayName;
const bt = J.forwardRef(({ className: e, children: t, position: i = "popper", ...n }, a) => /* @__PURE__ */ r(C.Portal, { children: /* @__PURE__ */ m(
  C.Content,
  {
    ref: a,
    className: S(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-overflow-y-auto richtext-min-w-[8rem] richtext-overflow-hidden richtext-rounded-md richtext-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      i === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      e
    ),
    position: i,
    ...n,
    children: [
      /* @__PURE__ */ r(_t, {}),
      /* @__PURE__ */ r(
        C.Viewport,
        {
          className: S(
            "richtext-p-1",
            i === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(gt, {})
    ]
  }
) }));
bt.displayName = C.Content.displayName;
const ri = J.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  C.Label,
  {
    ref: i,
    className: S("richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold", e),
    ...t
  }
));
ri.displayName = C.Label.displayName;
const Ee = J.forwardRef(({ className: e, children: t, ...i }, n) => /* @__PURE__ */ m(
  C.Item,
  {
    ref: n,
    className: S(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      e
    ),
    ...i,
    children: [
      /* @__PURE__ */ r("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-h-3.5 richtext-w-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ r(C.ItemIndicator, { children: /* @__PURE__ */ r(hn, { className: "richtext-h-4 richtext-w-4" }) }) }),
      /* @__PURE__ */ r(C.ItemText, { children: t })
    ]
  }
));
Ee.displayName = C.Item.displayName;
const si = J.forwardRef(({ className: e, ...t }, i) => /* @__PURE__ */ r(
  C.Separator,
  {
    ref: i,
    className: S("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", e),
    ...t
  }
));
si.displayName = C.Separator.displayName;
function ci() {
  const [e, t] = v(!1);
  return { isCopied: e, copyToClipboard: async (n) => {
    try {
      await navigator.clipboard.writeText(n), t(!0), setTimeout(() => t(!1), 2e3);
    } catch (a) {
      console.error("Failed to copy text: ", a), t(!1);
    }
  } };
}
const li = "_wrap_134f4_1", di = "_maxHeight_134f4_10", hi = "_btnCopy_134f4_13", ui = "_btnDelete_134f4_14", mi = "_blockInfo_134f4_18", fi = "_blockInfoEditable_134f4_28", _i = "_selectLang_134f4_32", gi = "_copied_134f4_58", $ = {
  wrap: li,
  maxHeight: di,
  btnCopy: hi,
  btnDelete: ui,
  blockInfo: mi,
  blockInfoEditable: fi,
  selectLang: _i,
  copied: gi
};
function bi({ editor: e, node: { attrs: t }, updateAttributes: i, extension: n }) {
  var f, _;
  const { isCopied: a, copyToClipboard: o } = ci(), s = P(() => {
    var p;
    return (p = n.options.languages) != null && p.length ? n.options.languages : ct;
  }, [n.options.languages]), c = De(), h = (_ = (f = e == null ? void 0 : e.options) == null ? void 0 : f.editorProps) == null ? void 0 : _.print, { language: d } = t, l = G(null), u = F(() => Cn(xi.name, e), [e]);
  return /* @__PURE__ */ m(le, { className: R($.wrap, !h && $.maxHeight, "render-wrapper"), children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: R($.blockInfo, {
          [$.blockInfoEditable]: !c
        }),
        children: [
          /* @__PURE__ */ r(
            "span",
            {
              className: R($.btnCopy, a && $.copied),
              onClick: () => o(l.current.innerText),
              children: a ? /* @__PURE__ */ r(fn, { size: 16 }) : /* @__PURE__ */ r(mn, { size: 16 })
            }
          ),
          /* @__PURE__ */ r(
            "span",
            {
              className: $.btnDelete,
              onClick: u,
              children: /* @__PURE__ */ r(
                z,
                {
                  name: "Trash2"
                }
              )
            }
          ),
          /* @__PURE__ */ r("div", { className: $.selectLang, children: /* @__PURE__ */ m(
            ai,
            {
              defaultValue: d || "auto",
              disabled: !c,
              onValueChange: (p) => i({ language: p }),
              children: [
                /* @__PURE__ */ r(ft, { children: /* @__PURE__ */ r(oi, { placeholder: "Language" }) }),
                /* @__PURE__ */ m(bt, { className: "richtext-max-h-60 richtext-overflow-y-auto", children: [
                  /* @__PURE__ */ r(Ee, { value: "auto", children: "Auto" }),
                  s.map((p, w) => /* @__PURE__ */ r(
                    Ee,
                    {
                      value: p,
                      children: p.charAt(0).toUpperCase() + p.slice(1)
                    },
                    `code-lang-${w}`
                  ))
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ r("pre", { ref: l, children: /* @__PURE__ */ r(At, { as: "code" }) })
  ] });
}
const xi = Tt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      languages: [],
      button: ({ editor: t, t: i, extension: n }) => {
        var o, s, c;
        const a = (s = (o = n == null ? void 0 : n.options) == null ? void 0 : o.languages) != null && s.length ? (c = n == null ? void 0 : n.options) == null ? void 0 : c.languages : ct;
        return {
          component: ii,
          componentProps: {
            action: (h = "js") => t.commands.setCodeBlock({
              language: h
            }),
            isActive: () => t.isActive("codeBlock") || !1,
            disabled: !t.can().toggleCodeBlock(),
            icon: "Code2",
            tooltip: i("editor.codeblock.tooltip"),
            languages: a
          }
        };
      }
    };
  },
  addNodeView() {
    return He(bi);
  },
  addProseMirrorPlugins() {
    var e;
    return [
      ...((e = this.parent) == null ? void 0 : e.call(this)) || [],
      ni({
        name: this.name,
        defaultLanguage: null,
        defaultTheme: this.options.defaultTheme
      })
    ];
  }
});
function pi(e) {
  var a, o, s;
  const { t, lang: i } = B(), n = P(() => {
    var d;
    const c = (d = e == null ? void 0 : e.items) == null ? void 0 : d.find((l) => l.isActive());
    return c && !c.default ? {
      ...c
    } : {
      title: e.tooltip,
      font: t("editor.fontFamily.default.tooltip"),
      isActive: () => !1,
      disabled: !1,
      action: () => e.editor.chain().focus().unsetFontFamily().run()
    };
  }, [t, i, e]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(
      Y,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          qe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: ((a = n == null ? void 0 : n.font) == null ? void 0 : a.length) > 7 ? `${(o = n == null ? void 0 : n.font) == null ? void 0 : o.slice(0, 6)}...` : n == null ? void 0 : n.font,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ r(X, { className: "richtext-w-full", children: (s = e == null ? void 0 : e.items) == null ? void 0 : s.map((c, h) => {
      const d = c.font === t("editor.fontFamily.default.tooltip") ? {} : { fontFamily: c.font };
      return /* @__PURE__ */ m(ze, { children: [
        /* @__PURE__ */ r(
          ne,
          {
            checked: (n == null ? void 0 : n.font) === c.font,
            onClick: c.action,
            children: /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-ml-1 richtext-h-full",
                style: d,
                children: c.font
              }
            )
          }
        ),
        c.font === t("editor.fontFamily.default.tooltip") && /* @__PURE__ */ r(rt, {})
      ] }, `font-family-${h}`);
    }) })
  ] });
}
const fo = Lt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilyList: qn,
      button({ editor: t, extension: i, t: n }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = Se(((d = i == null ? void 0 : i.options) == null ? void 0 : d.fontFamilyList) || []), s = a.find(
          (l) => l.name === "base-kit"
        ), c = o.map((l) => ({
          action: () => {
            t.chain().focus().setFontFamily(l.value).run();
          },
          isActive: () => t.isActive("textStyle", { fontFamily: l.value }) || !1,
          disabled: !t.can().setFontFamily(l.value),
          title: l.name,
          font: l.value
        }));
        s && s.options.textStyle !== !1 && c.unshift({
          action: () => t.chain().focus().unsetFontFamily().run(),
          isActive: () => !1,
          disabled: !1,
          font: n("editor.fontFamily.default.tooltip"),
          title: n("editor.fontFamily.tooltip")
        });
        const h = c.filter((l) => l.disabled).length === c.length;
        return {
          component: pi,
          componentProps: {
            tooltip: n("editor.fontFamily.tooltip"),
            disabled: h,
            items: c,
            editor: t
          }
        };
      }
    };
  }
});
function wi(e) {
  var i;
  const t = P(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: e.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(
      Y,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          qe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: t == null ? void 0 : t.title,
            tooltip: e == null ? void 0 : e.tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ r(X, { className: "richtext-w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
      var o, s;
      return /* @__PURE__ */ m(ze, { children: [
        /* @__PURE__ */ m(
          ne,
          {
            checked: (t == null ? void 0 : t.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ r("div", { className: `heading- richtext-ml-1 richtext-h-full${n.level}`, children: n.title }),
              !!((o = n == null ? void 0 : n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r(Nn, { className: "richtext-pl-4", children: (s = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : s.map((c) => Oe(c)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ r(rt, {})
      ] }, `heading-k-${a}`);
    }) })
  ] });
}
const _o = St.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: t, extension: i, t: n }) {
        var d;
        const { extensions: a = [] } = t.extensionManager ?? [], o = ((d = i.options) == null ? void 0 : d.levels) || [], s = a.find(
          (l) => l.name === "base-kit"
        ), c = o.map((l) => ({
          action: () => t.commands.toggleHeading({ level: l }),
          isActive: () => t.isActive("heading", { level: l }) || !1,
          disabled: !t.can().toggleHeading({ level: l }),
          title: n(`editor.heading.h${l}.tooltip`),
          level: l,
          shortcutKeys: ["alt", "mod", `${l}`]
        }));
        s && s.options.paragraph !== !1 && c.unshift({
          action: () => t.commands.setParagraph(),
          isActive: () => t.isActive("paragraph") || !1,
          disabled: !t.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ["alt", "mod", "0"]
        });
        const h = c.filter((l) => l.disabled).length === c.length;
        return {
          component: wi,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: h,
            items: c,
            editor: t
          }
        };
      }
    };
  }
});
function yi(e) {
  var i;
  const t = P(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(ie, { modal: !0, children: [
    /* @__PURE__ */ r(
      ae,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              z,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      oe,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, s;
          return /* @__PURE__ */ m(ke, { children: [
            /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
              $e,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === n.title ? "on" : "off",
                onClick: n == null ? void 0 : n.action,
                pressed: t.title === n.title,
                size: "sm",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(z, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(Ce, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (s = n.shortcutKeys) == null ? void 0 : s.map((c) => Oe(c)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const go = Et.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: t,
        extension: i,
        t: n
      }) {
        var d;
        const a = ((d = i.options) == null ? void 0 : d.alignments) || [], o = {
          left: ["mod", "Shift", "L"],
          center: ["mod", "Shift", "E"],
          right: ["mod", "Shift", "R"],
          justify: ["mod", "Shift", "J"]
        }, s = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, c = a.map((l) => {
          var u, f, _;
          return {
            title: n(`editor.textalign.${l}.tooltip`),
            icon: s[l],
            shortcutKeys: o[l],
            isActive: () => t.isActive({ textAlign: l }) || !1,
            action: () => {
              var p, w;
              return (w = (p = t.commands) == null ? void 0 : p.setTextAlign) == null ? void 0 : w.call(p, l);
            },
            disabled: !((_ = (f = (u = t == null ? void 0 : t.can) == null ? void 0 : u.call(t)) == null ? void 0 : f.setTextAlign) != null && _.call(f, l))
          };
        }), h = c.filter((l) => l.disabled).length === c.length;
        return {
          component: yi,
          componentProps: {
            icon: "AlignJustify",
            tooltip: n("editor.textalign.tooltip"),
            disabled: h,
            items: c
          }
        };
      }
    };
  }
});
function ki(e) {
  var n;
  const { t } = B(), i = P(() => {
    const a = (e.items || []).find((s) => s.isActive());
    return a || {
      title: t("editor.fontSize.default.tooltip"),
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(
      Y,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          qe,
          {
            disabled: e == null ? void 0 : e.disabled,
            icon: "MenuDown",
            title: i == null ? void 0 : i.title,
            tooltip: `${e == null ? void 0 : e.tooltip}`
          }
        )
      }
    ),
    /* @__PURE__ */ r(X, { className: "richtext-max-h-96 richtext-w-32 richtext-overflow-y-auto", children: (n = e == null ? void 0 : e.items) == null ? void 0 : n.map((a, o) => /* @__PURE__ */ r(
      ne,
      {
        checked: i.title === a.title,
        onClick: a.action,
        children: /* @__PURE__ */ r("div", { className: "richtext-ml-1 richtext-h-full", children: a.title })
      },
      `font-size-${o}`
    )) })
  ] });
}
const bo = N.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...Kn],
      button({ editor: t, extension: i, t: n }) {
        var h;
        const a = Se(((h = i.options) == null ? void 0 : h.fontSizes) || Ge), o = Se([Ge])[0], s = a.map((d) => ({
          title: d.value === o.value ? n("editor.fontSize.default.tooltip") : String(d.name),
          isActive: () => {
            const { fontSize: l } = t.getAttributes("textStyle");
            return d.value === o.value && l === void 0 ? !0 : t.isActive({ fontSize: String(d.value) }) || !1;
          },
          action: () => {
            if (d.value === o.value) {
              t.commands.unsetFontSize();
              return;
            }
            t.commands.setFontSize(String(d.value));
          },
          disabled: !t.can().setFontSize(String(d.value)),
          divider: d.value === o.value || !1,
          default: d.value === o.value || !1
        })), c = s.filter((d) => d.disabled).length === s.length;
        return {
          component: ki,
          componentProps: {
            editor: t,
            tooltip: n("editor.fontSize.tooltip"),
            disabled: c,
            items: s,
            maxHeight: 280
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => e.style.fontSize.replaceAll(/["']+/g, ""),
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${e.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
});
function vi({ fill: e }) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "18px",
      height: "18px",
      viewBox: "0 0 240 240",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ r("g", { stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ r("g", { transform: "translate(0.000000, 0.500000)", children: /* @__PURE__ */ m("g", { transform: "translate(39.000000, 17.353553)", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: "M11,201.146447 L167,201.146447 C173.075132,201.146447 178,206.071314 178,212.146447 C178,218.221579 173.075132,223.146447 167,223.146447 L11,223.146447 C4.92486775,223.146447 7.43989126e-16,218.221579 0,212.146447 C-7.43989126e-16,206.071314 4.92486775,201.146447 11,201.146447 Z",
            id: "矩形",
            fill: e || "#DF2A3F",
            fillRule: "evenodd"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M72.3425855,16.8295583 C75.799482,7.50883712 86.1577877,2.75526801 95.4785089,6.21216449 C100.284516,7.99463061 104.096358,11.7387855 105.968745,16.4968188 L106.112518,16.8745422 L159.385152,161.694068 C161.291848,166.877345 158.635655,172.624903 153.452378,174.531599 C148.358469,176.405421 142.719567,173.872338 140.716873,168.864661 L140.614848,168.598825 L89.211,28.86 L37.3759214,168.623816 C35.4885354,173.712715 29.8981043,176.351047 24.7909589,174.617647 L24.5226307,174.522368 C19.4337312,172.634982 16.7953993,167.044551 18.5287999,161.937406 L18.6240786,161.669077 L72.3425855,16.8295583 Z",
            id: "路径-21",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ r(
          "path",
          {
            d: "M121,103.146447 C126.522847,103.146447 131,107.623599 131,113.146447 C131,118.575687 126.673329,122.994378 121.279905,123.142605 L121,123.146447 L55,123.146447 C49.4771525,123.146447 45,118.669294 45,113.146447 C45,107.717207 49.3266708,103.298515 54.7200952,103.150288 L55,103.146447 L121,103.146447 Z",
            id: "路径-22",
            fill: "currentColor",
            fillRule: "nonzero"
          }
        )
      ] }) }) })
    }
  );
}
function Ci(e) {
  const [t, i] = v(void 0);
  function n(s) {
    var c;
    (c = e.action) == null || c.call(e, s);
  }
  function a() {
    var s;
    (s = e.action) == null || s.call(e, t);
  }
  const o = F(
    on((s) => {
      i(s);
    }, 350),
    []
  );
  return /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-h-[32px]", children: [
    /* @__PURE__ */ r(x, { tooltip: e == null ? void 0 : e.tooltip, disabled: e == null ? void 0 : e.disabled, action: a, children: /* @__PURE__ */ r("span", { className: "richtext-flex richtext-items-center richtext-justify-center richtext-text-sm", children: /* @__PURE__ */ r(vi, { fill: t }) }) }),
    /* @__PURE__ */ r(
      An,
      {
        selectedColor: t,
        setSelectedColor: o,
        onChange: n,
        disabled: e == null ? void 0 : e.disabled,
        colors: e == null ? void 0 : e.colors,
        defaultColor: e == null ? void 0 : e.defaultColor,
        children: /* @__PURE__ */ r(V, { variant: "ghost", size: "icon", className: "r!ichtext-h-[32px] !richtext-w-3", disabled: e == null ? void 0 : e.disabled, children: /* @__PURE__ */ r(z, { className: "!richtext-w-3 !richtext-h-3 richtext-text-zinc-500", name: "MenuDown" }) })
      }
    )
  ] });
}
const xo = Ht.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: i, extension: n }) {
        return {
          component: Ci,
          componentProps: {
            colors: n.options.colors,
            defaultColor: n.options.defaultColor,
            action: (a) => {
              a === void 0 && t.chain().focus().unsetColor().run(), typeof a == "string" && t.chain().focus().setColor(a).run();
            },
            isActive: () => {
              const { color: a } = t.getAttributes("textStyle");
              return a && t.isActive({ color: a }) || !1;
            },
            editor: t,
            disabled: !t.can().setColor(""),
            tooltip: i("editor.color.tooltip")
          }
        };
      }
    };
  }
}), po = Mt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: i }) => ({
        component: Tn,
        componentProps: {
          action: (n) => {
            typeof n == "string" && t.chain().focus().setHighlight({ color: n }).run(), n === void 0 && t.chain().focus().unsetHighlight().run();
          },
          editor: t,
          isActive: () => t.isActive("highlight") || !1,
          disabled: !t.can().setHighlight(),
          shortcutKeys: ["⇧", "mod", "H"],
          tooltip: i("editor.highlight.tooltip")
        }
      })
    };
  }
}), wo = zt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBulletList(),
          isActive: () => t.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: ["shift", "mod", "8"],
          icon: "List",
          tooltip: i("editor.bulletlist.tooltip")
        }
      })
    };
  }
}), yo = pe.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.chain().focus().clearNodes().unsetAllMarks().run(),
          disabled: !t.can().chain().focus().clearNodes().unsetAllMarks().run(),
          icon: "Eraser",
          tooltip: i("editor.clear.tooltip")
        }
      })
    };
  }
}), ko = Rt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleOrderedList(),
          isActive: () => t.isActive("orderedList") || !1,
          disabled: !1,
          icon: "ListOrdered",
          shortcutKeys: ["mod", "shift", "7"],
          tooltip: i("editor.orderedlist.tooltip")
        }
      })
    };
  }
}), vo = Pt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleTaskList(),
          isActive: () => t.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: ["shift", "mod", "9"],
          tooltip: i("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [It.configure(this.options.taskItem)];
  }
}), Co = Bt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.toggleBlockquote(),
          isActive: () => t.isActive("blockquote") || !1,
          disabled: !t.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: ["shift", "mod", "B"],
          tooltip: i("editor.blockquote.tooltip")
        }
      })
    };
  }
});
function Ni(e) {
  const [t, i] = v(!1);
  function n(a, o, s) {
    e.action && (e.action({ link: a, text: o, openInNewTab: s }), i(!1));
  }
  return /* @__PURE__ */ m(ie, { modal: !0, open: t, onOpenChange: i, children: [
    /* @__PURE__ */ r(ae, { disabled: e == null ? void 0 : e.disabled, asChild: !0, children: /* @__PURE__ */ r(
      x,
      {
        tooltip: e == null ? void 0 : e.tooltip,
        isActive: e == null ? void 0 : e.isActive,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(z, { name: e == null ? void 0 : e.icon })
      }
    ) }),
    /* @__PURE__ */ r(oe, { hideWhenDetached: !0, className: "richtext-w-full", align: "start", side: "bottom", children: /* @__PURE__ */ r(Ln, { editor: e.editor, onSetLink: n }) })
  ] });
}
const No = jt.extend({
  inclusive: !1,
  parseHTML() {
    return [
      {
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "a",
      we(this.options.HTMLAttributes, e, {
        class: "link"
      }),
      0
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !0,
      button: ({ editor: t, t: i }) => ({
        component: Ni,
        componentProps: {
          editor: t,
          action: (n) => {
            const { link: a, text: o, openInNewTab: s } = n;
            t.chain().extendMarkRange("link").insertContent({
              type: "text",
              text: o,
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: a,
                    target: s ? "_blank" : ""
                  }
                }
              ]
            }).setLink({ href: a }).focus().run();
          },
          id: "linkk",
          isActive: () => t.isActive("link") || !1,
          disabled: !t.can().setLink({ href: "" }),
          icon: "Link",
          tooltip: i("editor.link.tooltip")
        }
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      new te({
        props: {
          handleClick: (e, t) => {
            const { schema: i, doc: n, tr: a } = e.state, o = Dt(n.resolve(t), i.marks.link);
            if (!o)
              return !1;
            const s = n.resolve(o.from), c = n.resolve(o.to), h = a.setSelection(new ot(s, c));
            e.dispatch(h);
          }
        }
      })
    ];
  }
}), Ao = Ot.extend({
  renderHTML() {
    return [
      "div",
      we(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.commands.setHorizontalRule(),
          disabled: !t.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: ["mod", "alt", "S"],
          tooltip: i("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
function Ai(e) {
  var d;
  const {
    icon: t = void 0,
    // title = undefined,
    tooltip: i = void 0,
    // disabled = false,
    customClass: n = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: a = {},
    action: o = void 0,
    isActive: s = void 0,
    children: c
  } = e, h = Be[t];
  return /* @__PURE__ */ m(ke, { children: [
    /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ m(
      $e,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${n}`,
        disabled: s == null ? void 0 : s(),
        onClick: o,
        children: [
          h && /* @__PURE__ */ r(h, { className: "richtext-w-4 richtext-h-4" }),
          c && /* @__PURE__ */ r(ye, { children: c })
        ]
      }
    ) }),
    i && /* @__PURE__ */ r(Ce, { ...a, children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ r("div", { children: i }),
      !!((d = e == null ? void 0 : e.shortcutKeys) != null && d.length) && /* @__PURE__ */ r("span", { children: je(e == null ? void 0 : e.shortcutKeys) })
    ] }) })
  ] });
}
const Ti = ["undo", "redo"], To = $t.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: t, t: i }) => Ti.map((n) => ({
        component: Ai,
        componentProps: {
          action: () => {
            n === "undo" && t.chain().focus().undo().run(), n === "redo" && t.chain().focus().redo().run();
          },
          shortcutKeys: n === "undo" ? ["mod", "Z"] : ["shift", "mod", "Z"],
          disabled: n === "undo" ? !t.can().undo() : !t.can().redo(),
          isActive: () => n === "undo" ? !t.can().undo() : !t.can().redo(),
          icon: n === "undo" ? "Undo2" : "Redo2",
          tooltip: i(`editor.${n}.tooltip`)
        }
      }))
    };
  }
}), Li = Ft.extend({
  content: "(block|columns)+"
  // echo editor is a block editor
}), Lo = N.create({
  name: "columnActionButton",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => {
            t.chain().focus().insertColumns({ cols: 2 }).run();
          },
          icon: "Columns",
          tooltip: i("editor.columns.tooltip")
        }
      })
    };
  }
}), Si = N.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor: e } = this;
    return [
      new te({
        key: new Z("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || e.isFocused === !0 ? null : de.create(t.doc, [
              he.inline(t.selection.from, t.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});
function Ei(e) {
  const { t } = B(), i = P(() => [
    {
      name: "paragraph",
      label: t("editor.paragraph.tooltip"),
      iconName: "Heading1",
      isActive: () => e.editor.isActive("paragraph") && !e.editor.isActive("orderedList") && !e.editor.isActive("bulletList") && !e.editor.isActive("taskList"),
      action: () => e.editor.chain().focus().clearNodes().run()
    },
    {
      name: "heading1",
      label: t("editor.heading.h1.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 1 }),
      iconName: "Heading1",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run()
    },
    {
      name: "heading2",
      label: t("editor.heading.h2.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 2 }),
      iconName: "Heading2",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run()
    },
    {
      name: "heading3",
      label: t("editor.heading.h3.tooltip"),
      isActive: () => e.editor.isActive("heading", { level: 3 }),
      iconName: "Heading3",
      action: () => e.editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run()
    },
    {
      name: "bulletList",
      label: t("editor.bulletlist.tooltip"),
      isActive: () => e.editor.isActive("bulletList"),
      iconName: "List",
      action: () => e.editor.chain().focus().clearNodes().toggleBulletList().run()
    },
    {
      name: "numberedList",
      label: t("editor.orderedlist.tooltip"),
      isActive: () => e.editor.isActive("orderedList"),
      iconName: "ListOrdered",
      action: () => e.editor.chain().focus().clearNodes().toggleOrderedList().run()
    },
    {
      name: "taskList",
      label: t("editor.tasklist.tooltip"),
      isActive: () => e.editor.isActive("taskList"),
      iconName: "ListTodo",
      action: () => e.editor.chain().focus().clearNodes().toggleTaskList().run()
    },
    {
      name: "blockquote",
      label: t("editor.blockquote.tooltip"),
      isActive: () => e.editor.isActive("blockquote"),
      iconName: "TextQuote",
      action: () => e.editor.chain().focus().clearNodes().toggleBlockquote().run()
    },
    {
      name: "codeBlock",
      label: t("editor.codeblock.tooltip"),
      isActive: () => e.editor.isActive("codeBlock"),
      iconName: "Code2",
      action: () => e.editor.chain().focus().clearNodes().toggleCodeBlock().run()
    }
  ], [e.editor, t]), n = P(() => i.findLast((a) => a.isActive()) ?? {
    label: "Empty"
  }, [i]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(Y, { asChild: !0, children: /* @__PURE__ */ m(
      V,
      {
        className: "richtext-flex richtext-h-[32px] richtext-gap-1 richtext-px-1.5",
        variant: "ghost",
        children: [
          /* @__PURE__ */ m("span", { className: "richtext-whitespace-nowrap richtext-text-sm richtext-font-normal", children: [
            " ",
            n == null ? void 0 : n.label
          ] }),
          /* @__PURE__ */ r(Ie, { className: "richtext-size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ r(
      X,
      {
        align: "start",
        className: "richtext-w-full richtext-p-1",
        hideWhenDetached: !0,
        sideOffset: 5,
        children: i.map((a, o) => {
          var c;
          const s = Be[a.iconName];
          return /* @__PURE__ */ r(
            ne,
            {
              checked: ((c = a.isActive) == null ? void 0 : c.call(a)) || !1,
              className: "richtext-cursor-pointer",
              onClick: () => a.action(),
              children: /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-px-2", children: [
                /* @__PURE__ */ r(s, { className: "richtext-h3 richtext-w-3" }),
                /* @__PURE__ */ m("span", { children: [
                  " ",
                  a.label
                ] })
              ] })
            },
            `text-bubble-${o}`
          );
        })
      }
    )
  ] });
}
const Hi = N.create({
  name: "text-bubble",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      toolbar: !1,
      button: () => ({
        component: Ei,
        componentProps: {}
      })
    };
  }
});
function Je({ types: e, node: t }) {
  return Array.isArray(e) && e.includes(t.type) || t.type === e;
}
const Mi = N.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const e = new Z(this.name), t = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter((i) => this.options.notAfter.includes(i.name));
    return [
      new te({
        key: e,
        appendTransaction: (i, n, a) => {
          const { doc: o, tr: s, schema: c } = a, h = e.getState(a), d = o.content.size, l = c.nodes[this.options.node];
          if (h)
            return s.insert(d, l.create());
        },
        state: {
          init: (i, n) => {
            const a = n.tr.doc.lastChild;
            return !Je({ node: a, types: t });
          },
          apply: (i, n) => {
            if (!i.docChanged)
              return n;
            const a = i.doc.lastChild;
            return !Je({ node: a, types: t });
          }
        }
      })
    ];
  }
}), So = N.create({
  name: "base-kit",
  addExtensions() {
    const e = [];
    return this.options.document !== !1 && e.push(Li.configure()), this.options.placeholder !== !1 && e.push(
      Ut.configure({
        placeholder: ({ node: t, pos: i, editor: n }) => {
          var a, o, s, c, h;
          return ((a = t == null ? void 0 : t.type) == null ? void 0 : a.name) === "columns" || ((o = t == null ? void 0 : t.content) == null ? void 0 : o.size) !== 0 ? "" : ((s = t == null ? void 0 : t.type) == null ? void 0 : s.name) === "heading" ? `${A.t(`editor.heading.h${t.attrs.level}.tooltip`)}` : ((c = t == null ? void 0 : t.type) == null ? void 0 : c.name) === "codeBlock" || ((h = t == null ? void 0 : t.type) == null ? void 0 : h.name) === "table" ? "" : n.extensionManager.extensions.some((d) => d.name === "slashCommand") ? A.t("editor.slash") : i === 0 ? A.t("editor.content") : A.t("editor.content");
        },
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      qt.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.text !== !1 && e.push(Kt.configure()), this.options.textBubble !== !1 && e.push(Hi.configure()), this.options.gapcursor !== !1 && e.push(Vt.configure()), this.options.dropcursor !== !1 && e.push(
      Wt.configure({
        ...this.options.dropcursor,
        width: 2,
        class: "ProseMirror-dropcursor border-black"
      })
    ), this.options.characterCount !== !1 && e.push(Gt.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(Zt.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(Jt.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(Qt.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(Yt.configure(this.options.textStyle)), this.options.trailingNode !== !1 && e.push(Mi.configure(this.options.trailingNode)), this.options.selection !== !1 && e.push(Si), this.options.multiColumn !== !1 && e.push(Sn, En), e;
  }
}), Eo = N.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: i, t: n }) => {
        const a = i.options.subscript, o = i.options.superscript, s = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSubscript(),
            isActive: () => t.isActive("subscript") || !1,
            disabled: !t.can().toggleSubscript(),
            icon: "Subscript",
            tooltip: n("editor.subscript.tooltip")
          }
        }, c = {
          component: x,
          componentProps: {
            action: () => t.commands.toggleSuperscript(),
            isActive: () => t.isActive("superscript") || !1,
            disabled: !t.can().toggleSuperscript(),
            icon: "Superscript",
            tooltip: n("editor.superscript.tooltip")
          }
        }, h = [];
        return a !== !1 && h.push(s), o !== !1 && h.push(c), h;
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(nt.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(it.configure(this.options.superscript)), e;
  }
});
function zi(e) {
  var i;
  const t = P(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return n && !n.default ? {
      ...n,
      icon: n != null && n.icon ? n == null ? void 0 : n.icon : e == null ? void 0 : e.icon
    } : {
      title: e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(
      Y,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(Hn, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ r(X, { className: "w-full", children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => /* @__PURE__ */ m(
      ne,
      {
        checked: t.title === n.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: n.action,
        children: [
          /* @__PURE__ */ r(z, { name: n == null ? void 0 : n.icon }),
          /* @__PURE__ */ r("span", { className: "richtext-ml-1", children: n.title }),
          !!(n != null && n.shortcutKeys) && /* @__PURE__ */ r("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: je(n.shortcutKeys) })
        ]
      },
      `more-mark-${a}`
    )) })
  ] });
}
const Ho = N.create({
  name: "moreMark",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, extension: i, t: n }) {
        const a = i.options.subscript, o = i.options.superscript, s = {
          action: () => t.commands.toggleSubscript(),
          isActive: () => t.isActive("subscript") || !1,
          disabled: !t.can().toggleSubscript(),
          icon: "Subscript",
          title: n("editor.subscript.tooltip"),
          shortcutKeys: ["mod", "."]
        }, c = {
          action: () => t.commands.toggleSuperscript(),
          isActive: () => t.isActive("superscript") || !1,
          disabled: !t.can().toggleSuperscript(),
          icon: "Superscript",
          title: n("editor.superscript.tooltip"),
          shortcutKeys: ["mod", ","]
        }, h = [];
        return a !== !1 && h.push(s), o !== !1 && h.push(c), {
          component: zi,
          componentProps: {
            icon: "Type",
            tooltip: n("editor.moremark"),
            disabled: !t.isEditable,
            items: h
          }
        };
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(nt.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(it.configure(this.options.superscript)), e;
  }
}), Mo = N.create({
  name: "indent",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: me.min,
      maxIndent: me.max,
      button({ editor: t, t: i }) {
        return [
          {
            component: x,
            componentProps: {
              action: () => {
                t.commands.indent();
              },
              shortcutKeys: ["Tab"],
              icon: "IndentIncrease",
              tooltip: i("editor.indent.tooltip")
            }
          },
          {
            component: x,
            componentProps: {
              action: () => {
                t.commands.outdent();
              },
              shortcutKeys: ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: i("editor.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (e) => {
              const t = e.dataset.indent;
              return (t ? Number.parseInt(t, 10) : 0) || 0;
            },
            renderHTML: (e) => e.indent ? { "data-indent": e.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => Ke({
        delta: me.more,
        types: this.options.types
      }),
      outdent: () => Ke({
        delta: me.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
});
function Ri(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function Pi(e) {
  const { t } = B(), [i, n] = v("default");
  function a(s) {
    s === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(s), n(s);
  }
  const o = P(() => {
    const h = e.editor.extensionManager.extensions.find(
      (d) => d.name === "lineHeight"
    ).options.lineHeights.map((d) => ({
      label: Ri(d),
      value: d
    }));
    return h.unshift({
      label: t("editor.default"),
      value: "default"
    }), h;
  }, [e]);
  return /* @__PURE__ */ m(Q, { children: [
    /* @__PURE__ */ r(
      Y,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              z,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(X, { className: "richtext-min-w-24", children: o == null ? void 0 : o.map((s, c) => /* @__PURE__ */ r(
      ne,
      {
        checked: s.value === i,
        onClick: () => a(s.value),
        children: s.label
      },
      `lineHeight-${c}`
    )) })
  ] });
}
const Ii = ["paragraph", "heading", "list_item", "todo_item"];
function Bi(e, t) {
  const { selection: i, doc: n } = e;
  if (!i || !n || !(i instanceof ot || i instanceof rn))
    return e;
  const { from: a, to: o } = i, s = [], c = t && t !== lt ? t : null;
  if (n.nodesBetween(a, o, (h, d) => {
    const l = h.type;
    return Ii.includes(l.name) ? ((h.attrs.lineHeight || null) !== c && s.push({
      node: h,
      pos: d,
      nodeType: l
    }), l.name !== "list_item" && l.name !== "todo_item") : !0;
  }), s.length === 0)
    return e;
  for (const h of s) {
    const { node: d, pos: l, nodeType: u } = h;
    let { attrs: f } = d;
    f = {
      ...f,
      lineHeight: c
    }, e = e.setNodeMarkup(l, u, f, d.marks);
  }
  return e;
}
function ji(e) {
  return ({ state: t, dispatch: i }) => {
    const { selection: n } = t;
    let { tr: a } = t;
    return a = a.setSelection(n), a = Bi(a, e), a.docChanged ? (i && i(a), !0) : !1;
  };
}
const zo = N.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: Vn,
      defaultHeight: lt,
      button({ editor: t, t: i }) {
        return {
          component: Pi,
          componentProps: {
            editor: t,
            tooltip: i("editor.lineheight.tooltip")
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => e.style.lineHeight || this.options.defaultHeight,
            renderHTML: (e) => e.lineHeight === this.options.defaultHeight || !e.lineHeight ? {} : { style: `line-height: ${e.lineHeight}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => ji(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
}), Di = {
  setOpen: (e, t) => {
    K(D.UPLOAD_VIDEO(e), t);
  }
};
function Oi(e) {
  const t = [
    {
      name: "format",
      title: A.t("editor.slash.format"),
      commands: []
    },
    {
      name: "insert",
      title: A.t("editor.slash.insert"),
      commands: []
    }
  ];
  return e.forEach((i) => {
    i.name.toLowerCase() === "heading" && i.options.levels.forEach((n) => {
      t[0].commands.push({
        name: `heading${n}`,
        label: A.t(`editor.heading.h${n}.tooltip`),
        aliases: [`h${n}`, "bt", `bt${n}`],
        iconName: `Heading${n}`,
        action: ({ editor: a, range: o }) => {
          a.chain().focus().deleteRange(o).setHeading({ level: n }).run();
        }
      });
    }), i.name.toLowerCase() === "bulletlist" && t[0].commands.push({
      name: "bulletList",
      label: A.t("editor.bulletlist.tooltip"),
      aliases: ["ul", "yxlb"],
      iconName: "List",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleBulletList().run();
      }
    }), i.name.toLowerCase() === "orderedlist" && t[0].commands.push({
      name: "numberedList",
      label: A.t("editor.orderedlist.tooltip"),
      aliases: ["ol", "yxlb"],
      iconName: "ListOrdered",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleOrderedList().run();
      }
    }), i.name.toLowerCase() === "tasklist" && t[0].commands.push({
      name: "taskList",
      label: A.t("editor.tasklist.tooltip"),
      iconName: "ListTodo",
      description: "Task list with todo items",
      aliases: ["todo"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).toggleTaskList().run();
      }
    }), i.name.toLowerCase() === "blockquote" && t[0].commands.push({
      name: "blockquote",
      label: A.t("editor.blockquote.tooltip"),
      description: "插入引入格式",
      aliases: ["yr"],
      iconName: "TextQuote",
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setBlockquote().run();
      }
    }), i.name.toLowerCase() === "codeblock" && t[0].commands.push({
      name: "codeBlock",
      label: A.t("editor.codeblock.tooltip"),
      iconName: "Code2",
      description: "Code block with syntax highlighting",
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setCodeBlock().run();
      }
    }), i.name.toLowerCase() === Mn.name && t[1].commands.push({
      name: "image",
      label: A.t("editor.image.tooltip"),
      iconName: "ImageUp",
      description: "Insert a image",
      aliases: ["image", "tp", "tupian"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), zn.setOpen(n.id, !0);
      }
    }), i.name.toLowerCase() === Rn.name && t[1].commands.push({
      name: "video",
      label: A.t("editor.video.tooltip"),
      iconName: "Video",
      description: "Insert a video",
      aliases: ["video", "sp", "shipin"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).run(), Di.setOpen(n.id, !0);
      }
    }), i.name.toLowerCase() === "table" && t[1].commands.push({
      name: "table",
      label: A.t("editor.table.tooltip"),
      iconName: "Table",
      description: "Insert a table",
      aliases: ["table", "bg", "biaoge", "biao"],
      shouldBeHidden: (n) => n.isActive("columns"),
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).insertTable({ rows: 3, cols: 3, withHeaderRow: !1 }).run();
      }
    }), i.name.toLowerCase() === "horizontalrule" && t[1].commands.push({
      name: "horizontalRule",
      label: A.t("editor.horizontalrule.tooltip"),
      iconName: "Minus",
      description: "Insert a horizontal divider",
      aliases: ["hr", "fgx", "fg"],
      action: ({ editor: n, range: a }) => {
        n.chain().focus().deleteRange(a).setHorizontalRule().run();
      }
    }), i.name.toLowerCase() === "columns" && t[1].commands.push({
      name: "columns",
      label: A.t("editor.columns.tooltip"),
      iconName: "Columns2",
      description: "Add two column content",
      action: ({ editor: n }) => {
        n.chain().focus().insertColumns({ cols: 2 }).run();
      }
    });
  }), t;
}
function $i(e, t) {
  var T, E;
  const [i, n] = v(0), [a, o] = v(0), s = G(null), { t: c } = B(), h = G([]);
  Pe(t, () => ({
    onKeyDown: d
  })), M(() => {
    if (!s.current)
      return;
    const g = a * 1e3 + i, b = h.current[g];
    b && b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [i, a]);
  function d({ event: g }) {
    return g.key === "ArrowUp" ? (l(), !0) : g.key === "ArrowDown" ? (u(), !0) : g.key === "Enter" ? (f(), !0) : !1;
  }
  function l() {
    var k;
    if (e.items.length === 0)
      return !1;
    let g = i - 1, b = a;
    g < 0 && (b = a - 1, g = ((k = e.items[b]) == null ? void 0 : k.commands.length) - 1 || 0), b < 0 && (b = e.items.length - 1, g = e.items[b].commands.length - 1), n(g), o(b);
  }
  function u() {
    if (e.items.length === 0)
      return !1;
    const g = e.items[a].commands;
    let b = i + 1, k = a;
    g.length - 1 < b && (b = 0, k = a + 1), e.items.length - 1 < k && (k = 0), n(b), o(k);
  }
  function f() {
    if (e.items.length === 0 || a === -1 || i === -1)
      return !1;
    _(a, i);
  }
  function _(g, b) {
    const k = e.items[g].commands[b];
    e.command(k);
  }
  function p(g, b) {
    _(g, b);
  }
  function w(g, b, k) {
    h.current[g * 1e3 + b] = k;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: "richtext-mb-8 richtext-max-h-[min(80vh,24rem)] richtext-flex-wrap richtext-overflow-auto richtext-rounded-lg !richtext-border !richtext-border-neutral-200 !richtext-bg-white richtext-p-1 !richtext-text-black richtext-shadow-sm dark:!richtext-border-neutral-800 dark:!richtext-bg-black",
      ref: s,
      children: (T = e == null ? void 0 : e.items) != null && T.length ? /* @__PURE__ */ r("div", { className: "richtext-grid richtext-min-w-48 richtext-grid-cols-1 richtext-gap-0.5", children: (E = e == null ? void 0 : e.items) == null ? void 0 : E.map((g, b) => /* @__PURE__ */ m(ze, { children: [
        /* @__PURE__ */ r("div", { className: "richtext-col-[1/-1] richtext-mx-2 richtext-mt-2 richtext-select-none richtext-text-[0.65rem] richtext-font-semibold richtext-uppercase richtext-tracking-wider !richtext-text-neutral-500 first:richtext-mt-0.5", children: g.title }),
        g.commands.map((k, H) => /* @__PURE__ */ m(
          "button",
          {
            onClick: () => p(b, H),
            ref: (L) => w(b, H, L),
            className: S("richtext-flex richtext-items-center richtext-gap-3 richtext-px-2 richtext-py-1.5 richtext-text-sm !richtext-text-neutral-800 dark:!richtext-text-neutral-200 richtext-text-left richtext-w-full richtext-rounded-sm richtext-outline-none richtext-transition-colors !richtext-bg-transparent hover:!richtext-bg-accent ", {
              "slash-command-active": a === b && i === H
            }),
            children: [
              k.iconUrl && /* @__PURE__ */ r(
                "img",
                {
                  alt: "",
                  className: "richtext-size-6",
                  src: k.iconUrl
                }
              ),
              k.iconName && /* @__PURE__ */ r(
                z,
                {
                  className: "!richtext-mr-1 !richtext-text-lg",
                  name: k.iconName
                }
              ),
              k.label
            ]
          },
          `command-${H}`
        ))
      ] }, `slash-${g.title}`)) }) : /* @__PURE__ */ r("div", { className: "richtext-p-3", children: /* @__PURE__ */ r("span", { className: "richtext-text-xs richtext-text-gray-800 dark:richtext-text-gray-100", children: c("editor.slash.empty") }) })
    }
  );
}
const Fi = Re($i), q = "slashCommand";
let y;
const Ro = N.create({
  name: q,
  priority: 200,
  onCreate() {
    y = Fe("body", {
      interactive: !0,
      trigger: "manual",
      placement: "bottom-start",
      theme: "slash-command",
      maxWidth: "16rem",
      offset: [16, 8],
      popperOptions: {
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            enabled: !1
          }
        ]
      }
    });
  },
  addProseMirrorPlugins() {
    return [
      at({
        editor: this.editor,
        char: "/",
        allowSpaces: !0,
        startOfLine: !0,
        pluginKey: new Z(q),
        allow: ({ state: e, range: t }) => {
          var d, l, u;
          const i = e.doc.resolve(t.from), n = i.depth === 1, a = i.parent.type.name === "paragraph", o = ((d = i.parent.textContent) == null ? void 0 : d.charAt(0)) === "/", s = this.editor.isActive("column"), c = (u = i.parent.textContent) == null ? void 0 : u.slice(
            Math.max(0, (l = i.parent.textContent) == null ? void 0 : l.indexOf("/"))
          ), h = !(c != null && c.endsWith("  "));
          return (n && a && o || s && a && o) && h;
        },
        command: ({ editor: e, range: t, props: i }) => {
          const { view: n } = e;
          i.action({ editor: e, range: t }), n.focus();
        },
        items: ({ query: e, editor: t }) => Oi(t.extensionManager.extensions).map((s) => ({
          ...s,
          commands: s.commands.filter((c) => {
            const h = c.label.toLowerCase().trim(), d = e.toLowerCase().trim();
            if (c.aliases) {
              const l = c.aliases.map((_) => _.toLowerCase().trim()), u = h.match(d), f = l.some((_) => _.match(d));
              return u || f;
            }
            return h.match(d);
          }).filter(
            (c) => c.shouldBeHidden ? !c.shouldBeHidden(this.editor) : !0
          )
        })).filter((s) => s.commands.length > 0).map((s) => ({
          ...s,
          commands: s.commands.map((c) => ({
            ...c,
            isEnabled: !0
          }))
        })),
        render: () => {
          let e, t = null;
          return {
            onStart: (i) => {
              var o;
              e = new Me(Fi, {
                props: i,
                editor: i.editor
              });
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[q].rect;
                const s = i.clientRect();
                if (!s)
                  return i.editor.storage[q].rect;
                let c = s.y;
                if (s.top + e.element.offsetHeight + 40 > window.innerHeight) {
                  const h = s.top + e.element.offsetHeight - window.innerHeight + 40;
                  c = s.y - h;
                }
                return new DOMRect(s.x, c, s.width, s.height);
              };
              t = () => {
                y == null || y[0].setProps({
                  getReferenceClientRect: a
                });
              }, (o = n.dom.parentElement) == null || o.addEventListener("scroll", t), y == null || y[0].setProps({
                getReferenceClientRect: a,
                appendTo: () => document.body,
                content: e.element
              }), y == null || y[0].show();
            },
            onUpdate(i) {
              var s;
              e.updateProps(i);
              const { view: n } = i.editor, a = () => {
                if (!i.clientRect)
                  return i.editor.storage[q].rect;
                const c = i.clientRect();
                return c ? new DOMRect(c.x, c.y, c.width, c.height) : i.editor.storage[q].rect;
              }, o = () => {
                y == null || y[0].setProps({
                  getReferenceClientRect: a
                });
              };
              (s = n.dom.parentElement) == null || s.addEventListener("scroll", o), i.editor.storage[q].rect = i.clientRect ? a() : {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }, y == null || y[0].setProps({
                getReferenceClientRect: a
              });
            },
            onKeyDown(i) {
              var n;
              return i.event.key === "Escape" ? (y == null || y[0].hide(), !0) : (y != null && y[0].state.isShown || y == null || y[0].show(), (n = e.ref) == null ? void 0 : n.onKeyDown(i));
            },
            onExit(i) {
              var n;
              if (y == null || y[0].hide(), t) {
                const { view: a } = i.editor;
                (n = a.dom.parentElement) == null || n.removeEventListener("scroll", t);
              }
              e.destroy();
            }
          };
        }
      })
    ];
  },
  addStorage() {
    return {
      rect: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
});
function Ui(e, t, i) {
  if (!e.doc)
    return e;
  const n = e.doc.nodeAt(t);
  if (!n || i === n.attrs.backgroundColor)
    return e;
  const a = {
    ...n.attrs,
    backgroundColor: i
  };
  return e.setNodeMarkup(t, n.type, a, n.marks);
}
function qi(e, t, i) {
  const { doc: n, selection: a } = e;
  return !n || !a || !(a instanceof sn) || a.forEachCell((o, s) => {
    e = Ui(e, s, i);
  }), e;
}
function Qe(e, t) {
  return ({ tr: i, state: n, dispatch: a }) => {
    const { selection: o } = n;
    return i = i.setSelection(o), i = qi(i, t, e), i.docChanged ? (a == null || a(i), !0) : !1;
  };
}
const Ki = N.create({
  name: "tableCellBackground",
  addOptions() {
    return {
      types: ["tableCell"],
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            parseHTML: (e) => e.style.backgroundColor || "",
            renderHTML: (e) => !e.backgroundColor || e.backgroundColor === "" ? {} : {
              style: `background-color: ${e.backgroundColor}`
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTableCellBackground: (e) => Qe(e, this.options),
      unsetTableCellBackground: () => Qe("", this.options)
    };
  }
}), Vi = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, Wi = /CrOS/, Gi = /android|ipad|playbook|silk/i;
function Ye(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(Vi.test(t) && !Wi.test(t) || e.tablet && Gi.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const Xe = (e) => Array.from({ length: e }).map((t, i) => i + 1);
function Zi(e) {
  var l;
  const [t, i] = v(!0), [n, a] = v({
    rows: Ye() ? fe : _e,
    cols: Ye() ? fe : _e
  }), [o, s] = v({
    rows: ge,
    cols: ge
  });
  function c(u, f) {
    u === n.rows && a((_) => ({
      ..._,
      rows: Math.min(u + 1, fe)
    })), f === n.cols && a((_) => ({
      ..._,
      cols: Math.min(f + 1, fe)
    })), s({
      rows: u,
      cols: f
    });
  }
  function h(u, f) {
    e == null || e.createTable({ rows: u, cols: f, withHeaderRow: t }), d();
  }
  function d() {
    i(!1), a({
      rows: _e,
      cols: _e
    }), s({
      rows: ge,
      cols: ge
    });
  }
  return /* @__PURE__ */ m(ie, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: e == null ? void 0 : e.children }),
    /* @__PURE__ */ r(
      oe,
      {
        align: "start",
        className: "richtext-w-full !richtext-p-2",
        side: "bottom",
        children: /* @__PURE__ */ m("div", { className: "table-grid-size-editor richtext-p-0", children: [
          /* @__PURE__ */ r("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (l = Xe(n == null ? void 0 : n.rows)) == null ? void 0 : l.map((u) => {
            var f;
            return /* @__PURE__ */ r(
              "div",
              {
                className: "richtext-flex richtext-gap-1",
                children: (f = Xe(n == null ? void 0 : n.cols)) == null ? void 0 : f.map((_) => /* @__PURE__ */ r(
                  "div",
                  {
                    onMouseDown: () => h(u, _),
                    onMouseOver: () => c(u, _),
                    className: `richtext-cursor-pointer richtext-border-border ${_ <= o.cols && u <= o.rows && "tableCellActive !richtext-bg-foreground"}`,
                    children: /* @__PURE__ */ r("div", { className: "richtext-box-border richtext-size-4 richtext-rounded-[2px] !richtext-border richtext-border-solid !richtext-border-border richtext-p-1" })
                  },
                  `c-${_}`
                ))
              },
              `r-${u}`
            );
          }) }),
          /* @__PURE__ */ m("div", { className: "richtext-mt-2 richtext-text-center richtext-text-sm richtext-text-zinc-600", children: [
            o.rows,
            " ",
            "x",
            o.cols
          ] })
        ] })
      }
    )
  ] });
}
function Ji(e) {
  function t(i) {
    e.disabled || e.editor.chain().focus().insertTable({ ...i, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ r(Zi, { createTable: t, children: /* @__PURE__ */ r(
    x,
    {
      icon: e == null ? void 0 : e.icon,
      tooltip: e == null ? void 0 : e.tooltip,
      disabled: e == null ? void 0 : e.disabled,
      color: e == null ? void 0 : e.color,
      action: e == null ? void 0 : e.action,
      isActive: e == null ? void 0 : e.isActive
    }
  ) });
}
const Po = Xt.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: i }) => ({
        component: Ji,
        componentProps: {
          disabled: t.isActive("table") || !1,
          icon: "Table",
          tooltip: i("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  addExtensions() {
    return [
      en.configure(this.options.tableRow),
      tn.configure(this.options.tableHeader),
      nn.configure(this.options.tableCell),
      Ki.configure(this.options.tableCellBackground)
    ];
  }
}), Io = N.create({
  name: "painter",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => {
            t.commands.setPainter(t == null ? void 0 : t.state.selection.$head.marks());
          },
          icon: "PaintRoller",
          tooltip: i("editor.format")
        }
      })
    };
  },
  addCommands() {
    return {
      setPainter: (e) => ({
        view: {
          dispatch: t,
          state: { tr: i },
          dom: n
        }
      }) => {
        const s = `url("data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9 22v-6H4V7q0-1.65 1.175-2.825T8 3h12v13h-5v6zM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588T6 7zm0 4h12v-2H6zm0 0v-2z"/></svg>')}"), auto`;
        return n.style.cursor = s, t(i.setMeta("painterAction", { type: "start", marks: e })), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new te({
        key: new Z("format-painter"),
        state: {
          init: () => [],
          apply: (e, t) => {
            const i = e.getMeta("painterAction");
            return i && i.type === "start" ? t = i.marks : i && i.type === "end" && (t = []), t;
          }
        },
        props: {
          handleDOMEvents: {
            mousedown(e) {
              const t = this.getState(e.state);
              if (!t || t.length === 0)
                return e.dom.style.cursor = "", !1;
              const i = () => {
                document.removeEventListener("mouseup", i);
                let {
                  dispatch: n,
                  state: { tr: a, selection: o },
                  dom: s
                } = e;
                s.style.cursor = "", a = a.removeMark(o.from, o.to);
                for (const c of t)
                  c.type.name !== "link" && (a = a.addMark(o.from, o.to, c));
                n(a.setMeta("painterAction", { type: "end" }));
              };
              return document.addEventListener("mouseup", i), !0;
            }
          }
        }
      })
    ];
  }
});
function Qi({ editor: e, ...t }) {
  const { t: i } = B(), [n, a] = v(-1), [o, s] = v([]), [c, h] = v(""), [d, l] = v(""), [u, f] = v(!1), [_, p] = v(!1);
  return M(() => {
    u || (h(""), l(""), a(-1), s([]), e.commands.setSearchTerm(""), e.commands.setReplaceTerm(""));
  }, [e, u]), M(() => {
    u && e && e.commands && e.commands.setSearchTerm && e.commands.setSearchTerm(c);
  }, [u, c, e]), M(() => {
    u && e && e.commands && e.commands.setReplaceTerm && e.commands.setReplaceTerm(d);
  }, [u, d, e]), M(() => {
    if (!e)
      return;
    const w = e.extensionManager.extensions.find((E) => E.name === na.name);
    if (!w)
      return;
    const T = () => {
      if (!u)
        return;
      const E = w ? w.storage.currentIndex : -1, g = w ? w.storage.results : [];
      a((b) => b !== E ? E : b), s((b) => cn(b, g) ? b : g);
    };
    return Ve(D.SEARCH_REPLCE, T), () => {
      w && Ve(D.SEARCH_REPLCE, T);
    };
  }, [u, e]), /* @__PURE__ */ m(
    ie,
    {
      onOpenChange: f,
      open: u,
      children: [
        /* @__PURE__ */ r(
          ae,
          {
            asChild: !0,
            disabled: t == null ? void 0 : t.disabled,
            children: /* @__PURE__ */ r(
              x,
              {
                disabled: t == null ? void 0 : t.disabled,
                isActive: t == null ? void 0 : t.isActive,
                tooltip: t == null ? void 0 : t.tooltip,
                children: /* @__PURE__ */ r(z, { name: t == null ? void 0 : t.icon })
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          oe,
          {
            align: "start",
            className: "richtext-w-full",
            hideWhenDetached: !0,
            side: "bottom",
            children: [
              /* @__PURE__ */ m("div", { className: "richtext-mb-[6px] richtext-flex richtext-items-center richtext-justify-between", children: [
                /* @__PURE__ */ r(Ne, { children: i("editor.search.dialog.text") }),
                /* @__PURE__ */ r("span", { className: "richtext-font-semibold", children: o.length > 0 ? `${n + 1}/${o.length}` : "0/0" })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: [
                /* @__PURE__ */ r(
                  We,
                  {
                    autoFocus: !0,
                    className: "richtext-w-full",
                    onChange: (w) => h(w.target.value),
                    placeholder: "Text",
                    required: !0,
                    type: "text",
                    value: c
                  }
                ),
                /* @__PURE__ */ r(
                  V,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.goToPrevSearchResult,
                    children: /* @__PURE__ */ r(z, { name: "ChevronUp" })
                  }
                ),
                /* @__PURE__ */ r(
                  V,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.goToNextSearchResult,
                    children: /* @__PURE__ */ r(z, { name: "ChevronDown" })
                  }
                )
              ] }),
              /* @__PURE__ */ r(Ne, { className: "richtext-mb-[6px]", children: i("editor.replace.dialog.text") }),
              /* @__PURE__ */ r("div", { className: "richtext-mb-[5px] richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ r("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ r(
                We,
                {
                  className: "richtext-w-80",
                  onChange: (w) => l(w.target.value),
                  placeholder: "Text",
                  required: !0,
                  type: "text",
                  value: d
                }
              ) }) }),
              /* @__PURE__ */ m("div", { className: "richtext-mb-[10px] richtext-flex richtext-items-center richtext-space-x-2", children: [
                /* @__PURE__ */ r(
                  Pn,
                  {
                    checked: _,
                    onCheckedChange: (w) => {
                      p(w), e.commands.setCaseSensitive(w);
                    }
                  }
                ),
                /* @__PURE__ */ r(Ne, { children: i("editor.replace.caseSensitive") })
              ] }),
              /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ r(
                  V,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.replace,
                    children: i("editor.replace.dialog.text")
                  }
                ),
                /* @__PURE__ */ r(
                  V,
                  {
                    className: "richtext-flex-1",
                    disabled: o.length === 0,
                    onClick: e.commands.replaceAll,
                    children: i("editor.replaceAll.dialog.text")
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const se = (e, t) => t(e.tr);
function Yi(e, t, i) {
  return RegExp(t ? e.replace(/[$()*+./?[\\\]^{|}-]/g, String.raw`\$&`) : e, i ? "gu" : "gui");
}
function Xi(e, t, i) {
  const n = [];
  let a = [];
  const o = [];
  let s = 0;
  if (!t)
    return { decorationsToReturn: [], results: [] };
  e == null || e.descendants((c, h) => {
    c.isText ? a[s] ? a[s] = {
      text: a[s].text + c.text,
      pos: a[s].pos
    } : a[s] = {
      text: `${c.text}`,
      pos: h
    } : s += 1;
  }), a = a.filter(Boolean);
  for (const { text: c, pos: h } of a) {
    const d = [...c.matchAll(t)];
    for (const l of d) {
      if (l[0] === "")
        break;
      l.index !== void 0 && o.push({
        from: h + l.index,
        to: h + l.index + l[0].length
      });
    }
  }
  for (const c of o)
    n.push(he.inline(c.from, c.to, { class: i }));
  return {
    decorationsToReturn: n,
    results: o
  };
}
function et(e, t, { state: i, dispatch: n }) {
  if (!t[0])
    return;
  const { from: o, to: s } = t[0];
  n && n(i.tr.insertText(e, o, s));
}
function ea(e, t, i, n) {
  const a = t + 1;
  if (!n[a])
    return null;
  const { from: o, to: s } = n[t], c = s - o - e.length + i, { from: h, to: d } = n[a];
  return n[a] = {
    to: d - c,
    from: h - c
  }, [c, n];
}
function ta(e, t, { tr: i, dispatch: n }) {
  let a = 0, o = t.slice();
  if (o.length === 0)
    return !1;
  for (let s = 0; s < o.length; s += 1) {
    const { from: c, to: h } = o[s];
    i.insertText(e, c, h);
    const d = ea(e, s, a, o);
    d && (a = d[0], o = d[1]);
  }
  return n(i), !0;
}
function tt({ view: e, tr: t, searchResults: i, searchResultCurrentClass: n, gotoIndex: a }) {
  const o = i[a];
  if (o) {
    const s = t.setMeta("directDecoration", {
      fromPos: o.from,
      toPos: o.to,
      attrs: { class: n }
    });
    return e == null || e.dispatch(s), setTimeout(() => {
      const c = window.document.querySelector(`.${n}`);
      c && Ue(c, { behavior: "smooth", scrollMode: "if-needed" });
    }, 0), !0;
  }
  return !1;
}
const na = N.create({
  name: "search",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      searchTerm: "",
      replaceTerm: "",
      results: [],
      currentIndex: 0,
      searchResultClass: "search-result",
      searchResultCurrentClass: "search-result-current",
      caseSensitive: !1,
      disableRegex: !1,
      onChange: () => {
      },
      button: ({ editor: t, t: i }) => ({
        component: Qi,
        componentProps: {
          action: () => {
          },
          icon: "SearchAndReplace",
          tooltip: i("editor.searchAndReplace.tooltip"),
          isActive: () => !1,
          disabled: !1,
          editor: t
        }
      })
    };
  },
  addStorage() {
    return {
      results: [],
      currentIndex: -1
    };
  },
  addCommands() {
    return {
      setSearchTerm: (e) => ({ state: t, dispatch: i }) => (this.options.searchTerm = e, this.storage.results = [], this.storage.currentIndex = 0, K(D.SEARCH_REPLCE), se(t, i), !1),
      setReplaceTerm: (e) => ({ state: t, dispatch: i }) => (this.options.replaceTerm = e, se(t, i), !1),
      setCaseSensitive: (e) => ({ state: t, dispatch: i }) => (this.options.caseSensitive = e, se(t, i), !1),
      replace: () => ({ state: e, dispatch: t }) => {
        const { replaceTerm: i } = this.options, { currentIndex: n, results: a } = this.storage, o = a[n];
        return o ? (et(i, [o], { state: e, dispatch: t }), this.storage.results.splice(n, 1)) : (et(i, a, { state: e, dispatch: t }), this.storage.results.shift()), K(D.SEARCH_REPLCE), se(e, t), !1;
      },
      replaceAll: () => ({ state: e, tr: t, dispatch: i }) => {
        const { replaceTerm: n } = this.options, { results: a } = this.storage;
        return ta(n, a, { tr: t, dispatch: i }), this.storage.currentIndex = -1, this.storage.results = [], K(D.SEARCH_REPLCE), se(e, i), !1;
      },
      goToPrevSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + a.length - 1) % a.length;
        return this.storage.currentIndex = o, K(D.SEARCH_REPLCE), tt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      },
      goToNextSearchResult: () => ({ view: e, tr: t }) => {
        const { searchResultCurrentClass: i } = this.options, { currentIndex: n, results: a } = this.storage, o = (n + 1) % a.length;
        return this.storage.currentIndex = o, this.options.onChange && this.options.onChange(), K(D.SEARCH_REPLCE), tt({
          view: e,
          tr: t,
          searchResults: a,
          searchResultCurrentClass: i,
          gotoIndex: o
        });
      }
    };
  },
  addProseMirrorPlugins() {
    const e = this;
    return [
      new te({
        key: new Z("search"),
        state: {
          init() {
            return de.empty;
          },
          apply(t) {
            const { doc: i, docChanged: n } = t, { searchTerm: a, searchResultClass: o, searchResultCurrentClass: s, disableRegex: c, caseSensitive: h } = e.options;
            if (n || a) {
              const { decorationsToReturn: d, results: l } = Xi(
                i,
                Yi(a, c, h),
                o
              );
              if (e.storage.results = l, e.storage.currentIndex > l.length - 1 && (e.storage.currentIndex = 0), K(D.SEARCH_REPLCE), t.getMeta("directDecoration")) {
                const { fromPos: u, toPos: f, attrs: _ } = t.getMeta("directDecoration");
                d.push(he.inline(u, f, _));
              } else
                l.length > 0 && (d[0] = he.inline(l[0].from, l[0].to, {
                  class: s
                }));
              return de.create(i, d);
            }
            return de.empty;
          }
        },
        props: {
          decorations(t) {
            return this.getState(t);
          }
        }
      })
    ];
  }
});
function ia({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    W.Root,
    {
      className: S(
        "richtext-bg-popover richtext-text-popover-foreground richtext-isolate richtext-flex richtext-h-full richtext-w-fit richtext-flex-col richtext-overflow-hidden richtext-rounded-md",
        e
      ),
      "data-slot": "emoji-picker",
      ...t
    }
  );
}
function aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: S("richtext-flex richtext-h-9 richtext-items-center richtext-gap-2 richtext-border-b richtext-px-3", e),
      "data-slot": "emoji-picker-search-wrapper",
      children: [
        /* @__PURE__ */ r(_n, { className: "richtext-size-4 richtext-shrink-0 richtext-opacity-50" }),
        /* @__PURE__ */ r(
          W.Search,
          {
            className: "richtext-outline-hidden placeholder:richtext-text-muted-foreground richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md richtext-bg-transparent richtext-py-3 richtext-text-sm disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
            "data-slot": "emoji-picker-search",
            ...t
          }
        )
      ]
    }
  );
}
function oa({ children: e, ...t }) {
  return /* @__PURE__ */ r("div", { ...t, className: "richtext-scroll-my-1 richtext-px-1", "data-slot": "emoji-picker-row", children: e });
}
function ra({
  emoji: e,
  className: t,
  ...i
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      ...i,
      className: S(
        "data-[active]:richtext-bg-accent richtext-flex richtext-size-7 richtext-items-center richtext-justify-center richtext-rounded-sm richtext-text-base",
        t
      ),
      "data-slot": "emoji-picker-emoji",
      children: e.emoji
    }
  );
}
function sa({
  category: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      ...t,
      className: "richtext-bg-popover richtext-text-muted-foreground richtext-px-3 richtext-pb-2 richtext-pt-3.5 richtext-text-xs richtext-leading-none",
      "data-slot": "emoji-picker-category-header",
      children: e.label
    }
  );
}
function ca({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    W.Viewport,
    {
      className: S("richtext-outline-hidden richtext-relative richtext-flex-1", e),
      "data-slot": "emoji-picker-viewport",
      ...t,
      children: [
        /* @__PURE__ */ r(
          W.Loading,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground",
            "data-slot": "emoji-picker-loading",
            children: /* @__PURE__ */ r(gn, { className: "richtext-size-4 richtext-animate-spin" })
          }
        ),
        /* @__PURE__ */ r(
          W.Empty,
          {
            className: "richtext-absolute richtext-inset-0 richtext-flex richtext-items-center richtext-justify-center richtext-text-muted-foreground richtext-text-sm",
            "data-slot": "emoji-picker-empty",
            children: "No emoji found."
          }
        ),
        /* @__PURE__ */ r(
          W.List,
          {
            className: "richtext-select-none richtext-pb-1",
            components: {
              Row: oa,
              Emoji: ra,
              CategoryHeader: sa
            },
            "data-slot": "emoji-picker-list"
          }
        )
      ]
    }
  );
}
function la({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: S(
        "richtext-max-w-(--frimousse-viewport-width) richtext-flex richtext-w-full richtext-min-w-0 richtext-items-center richtext-gap-1 richtext-border-t richtext-p-2",
        e
      ),
      "data-slot": "emoji-picker-footer",
      ...t,
      children: /* @__PURE__ */ r(W.ActiveEmoji, { children: ({ emoji: i }) => i ? /* @__PURE__ */ m(ye, { children: [
        /* @__PURE__ */ r("div", { className: "richtext-flex richtext-size-7 richtext-flex-none richtext-items-center richtext-justify-center richtext-text-lg", children: i.emoji }),
        /* @__PURE__ */ r("span", { className: "richtext-text-secondary-foreground richtext-truncate richtext-text-xs", children: i.label })
      ] }) : /* @__PURE__ */ r("span", { className: "richtext-text-muted-foreground richtext-ml-1.5 richtext-flex richtext-h-7 richtext-items-center richtext-truncate richtext-text-xs", children: "Select an emoji…" }) })
    }
  );
}
function da({ onSelectEmoji: e, children: t }) {
  return /* @__PURE__ */ m(ie, { modal: !0, children: [
    /* @__PURE__ */ r(ae, { asChild: !0, children: t }),
    /* @__PURE__ */ r(
      oe,
      {
        align: "start",
        className: "richtext-size-full richtext-p-2",
        hideWhenDetached: !0,
        side: "bottom",
        children: /* @__PURE__ */ m(
          ia,
          {
            className: "!richtext-h-[342px]",
            onEmojiSelect: ({ emoji: i }) => {
              e(i);
            },
            children: [
              /* @__PURE__ */ r(aa, {}),
              /* @__PURE__ */ r(ca, {}),
              /* @__PURE__ */ r(la, {})
            ]
          }
        )
      }
    )
  ] });
}
function ha({ editor: e, icon: t, ...i }) {
  const n = F(
    (a) => {
      const { selection: o } = e.state, { $anchor: s } = o;
      return e.chain().insertContentAt(s.pos, a).run();
    },
    [e]
  );
  return /* @__PURE__ */ r(da, { onSelectEmoji: n, children: /* @__PURE__ */ r(
    x,
    {
      icon: t,
      tooltip: i == null ? void 0 : i.tooltip
    }
  ) });
}
const xt = Re((e, t) => {
  const i = G(null), [n, a] = v(0), { t: o } = B(), s = (l) => {
    const u = e.items[l];
    u && e.command(u);
  }, c = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, h = () => {
    a((n + 1) % e.items.length);
  }, d = () => {
    s(n);
  };
  return M(() => a(0), [e.items]), M(() => {
    if (Number.isNaN(n + 1))
      return;
    const l = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    l && Ue(l, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), Pe(t, () => ({
    onKeyDown: ({ event: l }) => l.key === "ArrowUp" ? (c(), !0) : l.key === "ArrowDown" ? (h(), !0) : l.key === "Enter" ? (d(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: "richtext-max-h-[320px] richtext-w-[200px] richtext-overflow-y-auto richtext-overflow-x-hidden richtext-rounded-sm !richtext-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length > 0 ? e.items.map((l, u) => /* @__PURE__ */ m(
    "span",
    {
      className: R(" richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors hover:richtext-bg-accent focus:richtext-bg-accent  focus:richtext-text-accent-foreground", u === n ? "bg-accent" : ""),
      onClick: () => s(u),
      children: [
        l.fallbackImage ? /* @__PURE__ */ r(
          "img",
          {
            className: "richtext-size-[1em]",
            src: l.fallbackImage
          }
        ) : l.emoji,
        ":",
        l.name,
        ":"
      ]
    },
    `emoji-list-code-${u}`
  )) : /* @__PURE__ */ r("div", { className: "richtext-relative richtext-flex  richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-px-2 richtext-py-1.5 richtext-text-sm richtext-outline-none richtext-transition-colors", children: /* @__PURE__ */ r("span", { children: o("no_result_found") }) }) }) });
});
xt.displayName = "EmojiList";
const ee = {
  100: "💯",
  1234: "🔢",
  grinning: "😀",
  smiley: "😃",
  smile: "😄",
  grin: "😁",
  laughing: "😆",
  satisfied: "😆",
  sweat_smile: "😅",
  rofl: "🤣",
  joy: "😂",
  slightly_smiling_face: "🙂",
  upside_down_face: "🙃",
  wink: "😉",
  blush: "😊",
  innocent: "😇",
  smiling_face_with_three_hearts: "🥰",
  heart_eyes: "😍",
  star_struck: "🤩",
  kissing_heart: "😘",
  kissing: "😗",
  relaxed: "☺️",
  kissing_closed_eyes: "😚",
  kissing_smiling_eyes: "😙",
  smiling_face_with_tear: "🥲",
  yum: "😋",
  stuck_out_tongue: "😛",
  stuck_out_tongue_winking_eye: "😜",
  zany_face: "🤪",
  stuck_out_tongue_closed_eyes: "😝",
  money_mouth_face: "🤑",
  hugs: "🤗",
  hand_over_mouth: "🤭",
  shushing_face: "🤫",
  thinking: "🤔",
  zipper_mouth_face: "🤐",
  raised_eyebrow: "🤨",
  neutral_face: "😐",
  expressionless: "😑",
  no_mouth: "😶",
  smirk: "😏",
  unamused: "😒",
  roll_eyes: "🙄",
  grimacing: "😬",
  lying_face: "🤥",
  relieved: "😌",
  pensive: "😔",
  sleepy: "😪",
  drooling_face: "🤤",
  sleeping: "😴",
  mask: "😷",
  face_with_thermometer: "🤒",
  face_with_head_bandage: "🤕",
  nauseated_face: "🤢",
  vomiting_face: "🤮",
  sneezing_face: "🤧",
  hot_face: "🥵",
  cold_face: "🥶",
  woozy_face: "🥴",
  dizzy_face: "😵",
  exploding_head: "🤯",
  cowboy_hat_face: "🤠",
  partying_face: "🥳",
  disguised_face: "🥸",
  sunglasses: "😎",
  nerd_face: "🤓",
  monocle_face: "🧐",
  confused: "😕",
  worried: "😟",
  slightly_frowning_face: "🙁",
  frowning_face: "☹️",
  open_mouth: "😮",
  hushed: "😯",
  astonished: "😲",
  flushed: "😳",
  pleading_face: "🥺",
  frowning: "😦",
  anguished: "😧",
  fearful: "😨",
  cold_sweat: "😰",
  disappointed_relieved: "😥",
  cry: "😢",
  sob: "😭",
  scream: "😱",
  confounded: "😖",
  persevere: "😣",
  disappointed: "😞",
  sweat: "😓",
  weary: "😩",
  tired_face: "😫",
  yawning_face: "🥱",
  triumph: "😤",
  rage: "😡",
  pout: "😡",
  angry: "😠",
  cursing_face: "🤬",
  smiling_imp: "😈",
  imp: "👿",
  skull: "💀",
  skull_and_crossbones: "☠️",
  hankey: "💩",
  poop: "💩",
  shit: "💩",
  clown_face: "🤡",
  japanese_ogre: "👹",
  japanese_goblin: "👺",
  ghost: "👻",
  alien: "👽",
  space_invader: "👾",
  robot: "🤖",
  smiley_cat: "😺",
  smile_cat: "😸",
  joy_cat: "😹",
  heart_eyes_cat: "😻",
  smirk_cat: "😼",
  kissing_cat: "😽",
  scream_cat: "🙀",
  crying_cat_face: "😿",
  pouting_cat: "😾",
  see_no_evil: "🙈",
  hear_no_evil: "🙉",
  speak_no_evil: "🙊",
  kiss: "💋",
  love_letter: "💌",
  cupid: "💘",
  gift_heart: "💝",
  sparkling_heart: "💖",
  heartpulse: "💗",
  heartbeat: "💓",
  revolving_hearts: "💞",
  two_hearts: "💕",
  heart_decoration: "💟",
  heavy_heart_exclamation: "❣️",
  broken_heart: "💔",
  heart: "❤️",
  orange_heart: "🧡",
  yellow_heart: "💛",
  green_heart: "💚",
  blue_heart: "💙",
  purple_heart: "💜",
  brown_heart: "🤎",
  black_heart: "🖤",
  white_heart: "🤍",
  anger: "💢",
  boom: "💥",
  collision: "💥",
  dizzy: "💫",
  sweat_drops: "💦",
  dash: "💨",
  hole: "🕳️",
  bomb: "💣",
  speech_balloon: "💬",
  eye_speech_bubble: "👁️‍🗨️",
  left_speech_bubble: "🗨️",
  right_anger_bubble: "🗯️",
  thought_balloon: "💭",
  zzz: "💤",
  wave: "👋",
  raised_back_of_hand: "🤚",
  raised_hand_with_fingers_splayed: "🖐️",
  hand: "✋",
  raised_hand: "✋",
  vulcan_salute: "🖖",
  ok_hand: "👌",
  pinched_fingers: "🤌",
  pinching_hand: "🤏",
  v: "✌️",
  crossed_fingers: "🤞",
  love_you_gesture: "🤟",
  metal: "🤘",
  call_me_hand: "🤙",
  point_left: "👈",
  point_right: "👉",
  point_up_2: "👆",
  middle_finger: "🖕",
  fu: "🖕",
  point_down: "👇",
  point_up: "☝️",
  "+1": "👍",
  thumbsup: "👍",
  "-1": "👎",
  thumbsdown: "👎",
  fist_raised: "✊",
  fist: "✊",
  fist_oncoming: "👊",
  facepunch: "👊",
  punch: "👊",
  fist_left: "🤛",
  fist_right: "🤜",
  clap: "👏",
  raised_hands: "🙌",
  open_hands: "👐",
  palms_up_together: "🤲",
  handshake: "🤝",
  pray: "🙏",
  writing_hand: "✍️",
  nail_care: "💅",
  selfie: "🤳",
  muscle: "💪",
  mechanical_arm: "🦾",
  mechanical_leg: "🦿",
  leg: "🦵",
  foot: "🦶",
  ear: "👂",
  ear_with_hearing_aid: "🦻",
  nose: "👃",
  brain: "🧠",
  anatomical_heart: "🫀",
  lungs: "🫁",
  tooth: "🦷",
  bone: "🦴",
  eyes: "👀",
  eye: "👁️",
  tongue: "👅",
  lips: "👄",
  baby: "👶",
  child: "🧒",
  boy: "👦",
  girl: "👧",
  adult: "🧑",
  blond_haired_person: "👱",
  man: "👨",
  bearded_person: "🧔",
  red_haired_man: "👨‍🦰",
  curly_haired_man: "👨‍🦱",
  white_haired_man: "👨‍🦳",
  bald_man: "👨‍🦲",
  woman: "👩",
  red_haired_woman: "👩‍🦰",
  person_red_hair: "🧑‍🦰",
  curly_haired_woman: "👩‍🦱",
  person_curly_hair: "🧑‍🦱",
  white_haired_woman: "👩‍🦳",
  person_white_hair: "🧑‍🦳",
  bald_woman: "👩‍🦲",
  person_bald: "🧑‍🦲",
  blond_haired_woman: "👱‍♀️",
  blonde_woman: "👱‍♀️",
  blond_haired_man: "👱‍♂️",
  older_adult: "🧓",
  older_man: "👴",
  older_woman: "👵",
  frowning_person: "🙍",
  frowning_man: "🙍‍♂️",
  frowning_woman: "🙍‍♀️",
  pouting_face: "🙎",
  pouting_man: "🙎‍♂️",
  pouting_woman: "🙎‍♀️",
  no_good: "🙅",
  no_good_man: "🙅‍♂️",
  ng_man: "🙅‍♂️",
  no_good_woman: "🙅‍♀️",
  ng_woman: "🙅‍♀️",
  ok_person: "🙆",
  ok_man: "🙆‍♂️",
  ok_woman: "🙆‍♀️",
  tipping_hand_person: "💁",
  information_desk_person: "💁",
  tipping_hand_man: "💁‍♂️",
  sassy_man: "💁‍♂️",
  tipping_hand_woman: "💁‍♀️",
  sassy_woman: "💁‍♀️",
  raising_hand: "🙋",
  raising_hand_man: "🙋‍♂️",
  raising_hand_woman: "🙋‍♀️",
  deaf_person: "🧏",
  deaf_man: "🧏‍♂️",
  deaf_woman: "🧏‍♀️",
  bow: "🙇",
  bowing_man: "🙇‍♂️",
  bowing_woman: "🙇‍♀️",
  facepalm: "🤦",
  man_facepalming: "🤦‍♂️",
  woman_facepalming: "🤦‍♀️",
  shrug: "🤷",
  man_shrugging: "🤷‍♂️",
  woman_shrugging: "🤷‍♀️",
  health_worker: "🧑‍⚕️",
  man_health_worker: "👨‍⚕️",
  woman_health_worker: "👩‍⚕️",
  student: "🧑‍🎓",
  man_student: "👨‍🎓",
  woman_student: "👩‍🎓",
  teacher: "🧑‍🏫",
  man_teacher: "👨‍🏫",
  woman_teacher: "👩‍🏫",
  judge: "🧑‍⚖️",
  man_judge: "👨‍⚖️",
  woman_judge: "👩‍⚖️",
  farmer: "🧑‍🌾",
  man_farmer: "👨‍🌾",
  woman_farmer: "👩‍🌾",
  cook: "🧑‍🍳",
  man_cook: "👨‍🍳",
  woman_cook: "👩‍🍳",
  mechanic: "🧑‍🔧",
  man_mechanic: "👨‍🔧",
  woman_mechanic: "👩‍🔧",
  factory_worker: "🧑‍🏭",
  man_factory_worker: "👨‍🏭",
  woman_factory_worker: "👩‍🏭",
  office_worker: "🧑‍💼",
  man_office_worker: "👨‍💼",
  woman_office_worker: "👩‍💼",
  scientist: "🧑‍🔬",
  man_scientist: "👨‍🔬",
  woman_scientist: "👩‍🔬",
  technologist: "🧑‍💻",
  man_technologist: "👨‍💻",
  woman_technologist: "👩‍💻",
  singer: "🧑‍🎤",
  man_singer: "👨‍🎤",
  woman_singer: "👩‍🎤",
  artist: "🧑‍🎨",
  man_artist: "👨‍🎨",
  woman_artist: "👩‍🎨",
  pilot: "🧑‍✈️",
  man_pilot: "👨‍✈️",
  woman_pilot: "👩‍✈️",
  astronaut: "🧑‍🚀",
  man_astronaut: "👨‍🚀",
  woman_astronaut: "👩‍🚀",
  firefighter: "🧑‍🚒",
  man_firefighter: "👨‍🚒",
  woman_firefighter: "👩‍🚒",
  police_officer: "👮",
  cop: "👮",
  policeman: "👮‍♂️",
  policewoman: "👮‍♀️",
  detective: "🕵️",
  male_detective: "🕵️‍♂️",
  female_detective: "🕵️‍♀️",
  guard: "💂",
  guardsman: "💂‍♂️",
  guardswoman: "💂‍♀️",
  ninja: "🥷",
  construction_worker: "👷",
  construction_worker_man: "👷‍♂️",
  construction_worker_woman: "👷‍♀️",
  prince: "🤴",
  princess: "👸",
  person_with_turban: "👳",
  man_with_turban: "👳‍♂️",
  woman_with_turban: "👳‍♀️",
  man_with_gua_pi_mao: "👲",
  woman_with_headscarf: "🧕",
  person_in_tuxedo: "🤵",
  man_in_tuxedo: "🤵‍♂️",
  woman_in_tuxedo: "🤵‍♀️",
  person_with_veil: "👰",
  man_with_veil: "👰‍♂️",
  woman_with_veil: "👰‍♀️",
  bride_with_veil: "👰‍♀️",
  pregnant_woman: "🤰",
  breast_feeding: "🤱",
  woman_feeding_baby: "👩‍🍼",
  man_feeding_baby: "👨‍🍼",
  person_feeding_baby: "🧑‍🍼",
  angel: "👼",
  santa: "🎅",
  mrs_claus: "🤶",
  mx_claus: "🧑‍🎄",
  superhero: "🦸",
  superhero_man: "🦸‍♂️",
  superhero_woman: "🦸‍♀️",
  supervillain: "🦹",
  supervillain_man: "🦹‍♂️",
  supervillain_woman: "🦹‍♀️",
  mage: "🧙",
  mage_man: "🧙‍♂️",
  mage_woman: "🧙‍♀️",
  fairy: "🧚",
  fairy_man: "🧚‍♂️",
  fairy_woman: "🧚‍♀️",
  vampire: "🧛",
  vampire_man: "🧛‍♂️",
  vampire_woman: "🧛‍♀️",
  merperson: "🧜",
  merman: "🧜‍♂️",
  mermaid: "🧜‍♀️",
  elf: "🧝",
  elf_man: "🧝‍♂️",
  elf_woman: "🧝‍♀️",
  genie: "🧞",
  genie_man: "🧞‍♂️",
  genie_woman: "🧞‍♀️",
  zombie: "🧟",
  zombie_man: "🧟‍♂️",
  zombie_woman: "🧟‍♀️",
  massage: "💆",
  massage_man: "💆‍♂️",
  massage_woman: "💆‍♀️",
  haircut: "💇",
  haircut_man: "💇‍♂️",
  haircut_woman: "💇‍♀️",
  walking: "🚶",
  walking_man: "🚶‍♂️",
  walking_woman: "🚶‍♀️",
  standing_person: "🧍",
  standing_man: "🧍‍♂️",
  standing_woman: "🧍‍♀️",
  kneeling_person: "🧎",
  kneeling_man: "🧎‍♂️",
  kneeling_woman: "🧎‍♀️",
  person_with_probing_cane: "🧑‍🦯",
  man_with_probing_cane: "👨‍🦯",
  woman_with_probing_cane: "👩‍🦯",
  person_in_motorized_wheelchair: "🧑‍🦼",
  man_in_motorized_wheelchair: "👨‍🦼",
  woman_in_motorized_wheelchair: "👩‍🦼",
  person_in_manual_wheelchair: "🧑‍🦽",
  man_in_manual_wheelchair: "👨‍🦽",
  woman_in_manual_wheelchair: "👩‍🦽",
  runner: "🏃",
  running: "🏃",
  running_man: "🏃‍♂️",
  running_woman: "🏃‍♀️",
  woman_dancing: "💃",
  dancer: "💃",
  man_dancing: "🕺",
  business_suit_levitating: "🕴️",
  dancers: "👯",
  dancing_men: "👯‍♂️",
  dancing_women: "👯‍♀️",
  sauna_person: "🧖",
  sauna_man: "🧖‍♂️",
  sauna_woman: "🧖‍♀️",
  climbing: "🧗",
  climbing_man: "🧗‍♂️",
  climbing_woman: "🧗‍♀️",
  person_fencing: "🤺",
  horse_racing: "🏇",
  skier: "⛷️",
  snowboarder: "🏂",
  golfing: "🏌️",
  golfing_man: "🏌️‍♂️",
  golfing_woman: "🏌️‍♀️",
  surfer: "🏄",
  surfing_man: "🏄‍♂️",
  surfing_woman: "🏄‍♀️",
  rowboat: "🚣",
  rowing_man: "🚣‍♂️",
  rowing_woman: "🚣‍♀️",
  swimmer: "🏊",
  swimming_man: "🏊‍♂️",
  swimming_woman: "🏊‍♀️",
  bouncing_ball_person: "⛹️",
  bouncing_ball_man: "⛹️‍♂️",
  basketball_man: "⛹️‍♂️",
  bouncing_ball_woman: "⛹️‍♀️",
  basketball_woman: "⛹️‍♀️",
  weight_lifting: "🏋️",
  weight_lifting_man: "🏋️‍♂️",
  weight_lifting_woman: "🏋️‍♀️",
  bicyclist: "🚴",
  biking_man: "🚴‍♂️",
  biking_woman: "🚴‍♀️",
  mountain_bicyclist: "🚵",
  mountain_biking_man: "🚵‍♂️",
  mountain_biking_woman: "🚵‍♀️",
  cartwheeling: "🤸",
  man_cartwheeling: "🤸‍♂️",
  woman_cartwheeling: "🤸‍♀️",
  wrestling: "🤼",
  men_wrestling: "🤼‍♂️",
  women_wrestling: "🤼‍♀️",
  water_polo: "🤽",
  man_playing_water_polo: "🤽‍♂️",
  woman_playing_water_polo: "🤽‍♀️",
  handball_person: "🤾",
  man_playing_handball: "🤾‍♂️",
  woman_playing_handball: "🤾‍♀️",
  juggling_person: "🤹",
  man_juggling: "🤹‍♂️",
  woman_juggling: "🤹‍♀️",
  lotus_position: "🧘",
  lotus_position_man: "🧘‍♂️",
  lotus_position_woman: "🧘‍♀️",
  bath: "🛀",
  sleeping_bed: "🛌",
  people_holding_hands: "🧑‍🤝‍🧑",
  two_women_holding_hands: "👭",
  couple: "👫",
  two_men_holding_hands: "👬",
  couplekiss: "💏",
  couplekiss_man_woman: "👩‍❤️‍💋‍👨",
  couplekiss_man_man: "👨‍❤️‍💋‍👨",
  couplekiss_woman_woman: "👩‍❤️‍💋‍👩",
  couple_with_heart: "💑",
  couple_with_heart_woman_man: "👩‍❤️‍👨",
  couple_with_heart_man_man: "👨‍❤️‍👨",
  couple_with_heart_woman_woman: "👩‍❤️‍👩",
  family: "👪",
  family_man_woman_boy: "👨‍👩‍👦",
  family_man_woman_girl: "👨‍👩‍👧",
  family_man_woman_girl_boy: "👨‍👩‍👧‍👦",
  family_man_woman_boy_boy: "👨‍👩‍👦‍👦",
  family_man_woman_girl_girl: "👨‍👩‍👧‍👧",
  family_man_man_boy: "👨‍👨‍👦",
  family_man_man_girl: "👨‍👨‍👧",
  family_man_man_girl_boy: "👨‍👨‍👧‍👦",
  family_man_man_boy_boy: "👨‍👨‍👦‍👦",
  family_man_man_girl_girl: "👨‍👨‍👧‍👧",
  family_woman_woman_boy: "👩‍👩‍👦",
  family_woman_woman_girl: "👩‍👩‍👧",
  family_woman_woman_girl_boy: "👩‍👩‍👧‍👦",
  family_woman_woman_boy_boy: "👩‍👩‍👦‍👦",
  family_woman_woman_girl_girl: "👩‍👩‍👧‍👧",
  family_man_boy: "👨‍👦",
  family_man_boy_boy: "👨‍👦‍👦",
  family_man_girl: "👨‍👧",
  family_man_girl_boy: "👨‍👧‍👦",
  family_man_girl_girl: "👨‍👧‍👧",
  family_woman_boy: "👩‍👦",
  family_woman_boy_boy: "👩‍👦‍👦",
  family_woman_girl: "👩‍👧",
  family_woman_girl_boy: "👩‍👧‍👦",
  family_woman_girl_girl: "👩‍👧‍👧",
  speaking_head: "🗣️",
  bust_in_silhouette: "👤",
  busts_in_silhouette: "👥",
  people_hugging: "🫂",
  footprints: "👣",
  monkey_face: "🐵",
  monkey: "🐒",
  gorilla: "🦍",
  orangutan: "🦧",
  dog: "🐶",
  dog2: "🐕",
  guide_dog: "🦮",
  service_dog: "🐕‍🦺",
  poodle: "🐩",
  wolf: "🐺",
  fox_face: "🦊",
  raccoon: "🦝",
  cat: "🐱",
  cat2: "🐈",
  black_cat: "🐈‍⬛",
  lion: "🦁",
  tiger: "🐯",
  tiger2: "🐅",
  leopard: "🐆",
  horse: "🐴",
  racehorse: "🐎",
  unicorn: "🦄",
  zebra: "🦓",
  deer: "🦌",
  bison: "🦬",
  cow: "🐮",
  ox: "🐂",
  water_buffalo: "🐃",
  cow2: "🐄",
  pig: "🐷",
  pig2: "🐖",
  boar: "🐗",
  pig_nose: "🐽",
  ram: "🐏",
  sheep: "🐑",
  goat: "🐐",
  dromedary_camel: "🐪",
  camel: "🐫",
  llama: "🦙",
  giraffe: "🦒",
  elephant: "🐘",
  mammoth: "🦣",
  rhinoceros: "🦏",
  hippopotamus: "🦛",
  mouse: "🐭",
  mouse2: "🐁",
  rat: "🐀",
  hamster: "🐹",
  rabbit: "🐰",
  rabbit2: "🐇",
  chipmunk: "🐿️",
  beaver: "🦫",
  hedgehog: "🦔",
  bat: "🦇",
  bear: "🐻",
  polar_bear: "🐻‍❄️",
  koala: "🐨",
  panda_face: "🐼",
  sloth: "🦥",
  otter: "🦦",
  skunk: "🦨",
  kangaroo: "🦘",
  badger: "🦡",
  feet: "🐾",
  paw_prints: "🐾",
  turkey: "🦃",
  chicken: "🐔",
  rooster: "🐓",
  hatching_chick: "🐣",
  baby_chick: "🐤",
  hatched_chick: "🐥",
  bird: "🐦",
  penguin: "🐧",
  dove: "🕊️",
  eagle: "🦅",
  duck: "🦆",
  swan: "🦢",
  owl: "🦉",
  dodo: "🦤",
  feather: "🪶",
  flamingo: "🦩",
  peacock: "🦚",
  parrot: "🦜",
  frog: "🐸",
  crocodile: "🐊",
  turtle: "🐢",
  lizard: "🦎",
  snake: "🐍",
  dragon_face: "🐲",
  dragon: "🐉",
  sauropod: "🦕",
  "t-rex": "🦖",
  whale: "🐳",
  whale2: "🐋",
  dolphin: "🐬",
  flipper: "🐬",
  seal: "🦭",
  fish: "🐟",
  tropical_fish: "🐠",
  blowfish: "🐡",
  shark: "🦈",
  octopus: "🐙",
  shell: "🐚",
  snail: "🐌",
  butterfly: "🦋",
  bug: "🐛",
  ant: "🐜",
  bee: "🐝",
  honeybee: "🐝",
  beetle: "🪲",
  lady_beetle: "🐞",
  cricket: "🦗",
  cockroach: "🪳",
  spider: "🕷️",
  spider_web: "🕸️",
  scorpion: "🦂",
  mosquito: "🦟",
  fly: "🪰",
  worm: "🪱",
  microbe: "🦠",
  bouquet: "💐",
  cherry_blossom: "🌸",
  white_flower: "💮",
  rosette: "🏵️",
  rose: "🌹",
  wilted_flower: "🥀",
  hibiscus: "🌺",
  sunflower: "🌻",
  blossom: "🌼",
  tulip: "🌷",
  seedling: "🌱",
  potted_plant: "🪴",
  evergreen_tree: "🌲",
  deciduous_tree: "🌳",
  palm_tree: "🌴",
  cactus: "🌵",
  ear_of_rice: "🌾",
  herb: "🌿",
  shamrock: "☘️",
  four_leaf_clover: "🍀",
  maple_leaf: "🍁",
  fallen_leaf: "🍂",
  leaves: "🍃",
  grapes: "🍇",
  melon: "🍈",
  watermelon: "🍉",
  tangerine: "🍊",
  orange: "🍊",
  mandarin: "🍊",
  lemon: "🍋",
  banana: "🍌",
  pineapple: "🍍",
  mango: "🥭",
  apple: "🍎",
  green_apple: "🍏",
  pear: "🍐",
  peach: "🍑",
  cherries: "🍒",
  strawberry: "🍓",
  blueberries: "🫐",
  kiwi_fruit: "🥝",
  tomato: "🍅",
  olive: "🫒",
  coconut: "🥥",
  avocado: "🥑",
  eggplant: "🍆",
  potato: "🥔",
  carrot: "🥕",
  corn: "🌽",
  hot_pepper: "🌶️",
  bell_pepper: "🫑",
  cucumber: "🥒",
  leafy_green: "🥬",
  broccoli: "🥦",
  garlic: "🧄",
  onion: "🧅",
  mushroom: "🍄",
  peanuts: "🥜",
  chestnut: "🌰",
  bread: "🍞",
  croissant: "🥐",
  baguette_bread: "🥖",
  flatbread: "🫓",
  pretzel: "🥨",
  bagel: "🥯",
  pancakes: "🥞",
  waffle: "🧇",
  cheese: "🧀",
  meat_on_bone: "🍖",
  poultry_leg: "🍗",
  cut_of_meat: "🥩",
  bacon: "🥓",
  hamburger: "🍔",
  fries: "🍟",
  pizza: "🍕",
  hotdog: "🌭",
  sandwich: "🥪",
  taco: "🌮",
  burrito: "🌯",
  tamale: "🫔",
  stuffed_flatbread: "🥙",
  falafel: "🧆",
  egg: "🥚",
  fried_egg: "🍳",
  shallow_pan_of_food: "🥘",
  stew: "🍲",
  fondue: "🫕",
  bowl_with_spoon: "🥣",
  green_salad: "🥗",
  popcorn: "🍿",
  butter: "🧈",
  salt: "🧂",
  canned_food: "🥫",
  bento: "🍱",
  rice_cracker: "🍘",
  rice_ball: "🍙",
  rice: "🍚",
  curry: "🍛",
  ramen: "🍜",
  spaghetti: "🍝",
  sweet_potato: "🍠",
  oden: "🍢",
  sushi: "🍣",
  fried_shrimp: "🍤",
  fish_cake: "🍥",
  moon_cake: "🥮",
  dango: "🍡",
  dumpling: "🥟",
  fortune_cookie: "🥠",
  takeout_box: "🥡",
  crab: "🦀",
  lobster: "🦞",
  shrimp: "🦐",
  squid: "🦑",
  oyster: "🦪",
  icecream: "🍦",
  shaved_ice: "🍧",
  ice_cream: "🍨",
  doughnut: "🍩",
  cookie: "🍪",
  birthday: "🎂",
  cake: "🍰",
  cupcake: "🧁",
  pie: "🥧",
  chocolate_bar: "🍫",
  candy: "🍬",
  lollipop: "🍭",
  custard: "🍮",
  honey_pot: "🍯",
  baby_bottle: "🍼",
  milk_glass: "🥛",
  coffee: "☕",
  teapot: "🫖",
  tea: "🍵",
  sake: "🍶",
  champagne: "🍾",
  wine_glass: "🍷",
  cocktail: "🍸",
  tropical_drink: "🍹",
  beer: "🍺",
  beers: "🍻",
  clinking_glasses: "🥂",
  tumbler_glass: "🥃",
  cup_with_straw: "🥤",
  bubble_tea: "🧋",
  beverage_box: "🧃",
  mate: "🧉",
  ice_cube: "🧊",
  chopsticks: "🥢",
  plate_with_cutlery: "🍽️",
  fork_and_knife: "🍴",
  spoon: "🥄",
  hocho: "🔪",
  knife: "🔪",
  amphora: "🏺",
  earth_africa: "🌍",
  earth_americas: "🌎",
  earth_asia: "🌏",
  globe_with_meridians: "🌐",
  world_map: "🗺️",
  japan: "🗾",
  compass: "🧭",
  mountain_snow: "🏔️",
  mountain: "⛰️",
  volcano: "🌋",
  mount_fuji: "🗻",
  camping: "🏕️",
  beach_umbrella: "🏖️",
  desert: "🏜️",
  desert_island: "🏝️",
  national_park: "🏞️",
  stadium: "🏟️",
  classical_building: "🏛️",
  building_construction: "🏗️",
  bricks: "🧱",
  rock: "🪨",
  wood: "🪵",
  hut: "🛖",
  houses: "🏘️",
  derelict_house: "🏚️",
  house: "🏠",
  house_with_garden: "🏡",
  office: "🏢",
  post_office: "🏣",
  european_post_office: "🏤",
  hospital: "🏥",
  bank: "🏦",
  hotel: "🏨",
  love_hotel: "🏩",
  convenience_store: "🏪",
  school: "🏫",
  department_store: "🏬",
  factory: "🏭",
  japanese_castle: "🏯",
  european_castle: "🏰",
  wedding: "💒",
  tokyo_tower: "🗼",
  statue_of_liberty: "🗽",
  church: "⛪",
  mosque: "🕌",
  hindu_temple: "🛕",
  synagogue: "🕍",
  shinto_shrine: "⛩️",
  kaaba: "🕋",
  fountain: "⛲",
  tent: "⛺",
  foggy: "🌁",
  night_with_stars: "🌃",
  cityscape: "🏙️",
  sunrise_over_mountains: "🌄",
  sunrise: "🌅",
  city_sunset: "🌆",
  city_sunrise: "🌇",
  bridge_at_night: "🌉",
  hotsprings: "♨️",
  carousel_horse: "🎠",
  ferris_wheel: "🎡",
  roller_coaster: "🎢",
  barber: "💈",
  circus_tent: "🎪",
  steam_locomotive: "🚂",
  railway_car: "🚃",
  bullettrain_side: "🚄",
  bullettrain_front: "🚅",
  train2: "🚆",
  metro: "🚇",
  light_rail: "🚈",
  station: "🚉",
  tram: "🚊",
  monorail: "🚝",
  mountain_railway: "🚞",
  train: "🚋",
  bus: "🚌",
  oncoming_bus: "🚍",
  trolleybus: "🚎",
  minibus: "🚐",
  ambulance: "🚑",
  fire_engine: "🚒",
  police_car: "🚓",
  oncoming_police_car: "🚔",
  taxi: "🚕",
  oncoming_taxi: "🚖",
  car: "🚗",
  red_car: "🚗",
  oncoming_automobile: "🚘",
  blue_car: "🚙",
  pickup_truck: "🛻",
  truck: "🚚",
  articulated_lorry: "🚛",
  tractor: "🚜",
  racing_car: "🏎️",
  motorcycle: "🏍️",
  motor_scooter: "🛵",
  manual_wheelchair: "🦽",
  motorized_wheelchair: "🦼",
  auto_rickshaw: "🛺",
  bike: "🚲",
  kick_scooter: "🛴",
  skateboard: "🛹",
  roller_skate: "🛼",
  busstop: "🚏",
  motorway: "🛣️",
  railway_track: "🛤️",
  oil_drum: "🛢️",
  fuelpump: "⛽",
  rotating_light: "🚨",
  traffic_light: "🚥",
  vertical_traffic_light: "🚦",
  stop_sign: "🛑",
  construction: "🚧",
  anchor: "⚓",
  boat: "⛵",
  sailboat: "⛵",
  canoe: "🛶",
  speedboat: "🚤",
  passenger_ship: "🛳️",
  ferry: "⛴️",
  motor_boat: "🛥️",
  ship: "🚢",
  airplane: "✈️",
  small_airplane: "🛩️",
  flight_departure: "🛫",
  flight_arrival: "🛬",
  parachute: "🪂",
  seat: "💺",
  helicopter: "🚁",
  suspension_railway: "🚟",
  mountain_cableway: "🚠",
  aerial_tramway: "🚡",
  artificial_satellite: "🛰️",
  rocket: "🚀",
  flying_saucer: "🛸",
  bellhop_bell: "🛎️",
  luggage: "🧳",
  hourglass: "⌛",
  hourglass_flowing_sand: "⏳",
  watch: "⌚",
  alarm_clock: "⏰",
  stopwatch: "⏱️",
  timer_clock: "⏲️",
  mantelpiece_clock: "🕰️",
  clock12: "🕛",
  clock1230: "🕧",
  clock1: "🕐",
  clock130: "🕜",
  clock2: "🕑",
  clock230: "🕝",
  clock3: "🕒",
  clock330: "🕞",
  clock4: "🕓",
  clock430: "🕟",
  clock5: "🕔",
  clock530: "🕠",
  clock6: "🕕",
  clock630: "🕡",
  clock7: "🕖",
  clock730: "🕢",
  clock8: "🕗",
  clock830: "🕣",
  clock9: "🕘",
  clock930: "🕤",
  clock10: "🕙",
  clock1030: "🕥",
  clock11: "🕚",
  clock1130: "🕦",
  new_moon: "🌑",
  waxing_crescent_moon: "🌒",
  first_quarter_moon: "🌓",
  moon: "🌔",
  waxing_gibbous_moon: "🌔",
  full_moon: "🌕",
  waning_gibbous_moon: "🌖",
  last_quarter_moon: "🌗",
  waning_crescent_moon: "🌘",
  crescent_moon: "🌙",
  new_moon_with_face: "🌚",
  first_quarter_moon_with_face: "🌛",
  last_quarter_moon_with_face: "🌜",
  thermometer: "🌡️",
  sunny: "☀️",
  full_moon_with_face: "🌝",
  sun_with_face: "🌞",
  ringed_planet: "🪐",
  star: "⭐",
  star2: "🌟",
  stars: "🌠",
  milky_way: "🌌",
  cloud: "☁️",
  partly_sunny: "⛅",
  cloud_with_lightning_and_rain: "⛈️",
  sun_behind_small_cloud: "🌤️",
  sun_behind_large_cloud: "🌥️",
  sun_behind_rain_cloud: "🌦️",
  cloud_with_rain: "🌧️",
  cloud_with_snow: "🌨️",
  cloud_with_lightning: "🌩️",
  tornado: "🌪️",
  fog: "🌫️",
  wind_face: "🌬️",
  cyclone: "🌀",
  rainbow: "🌈",
  closed_umbrella: "🌂",
  open_umbrella: "☂️",
  umbrella: "☔",
  parasol_on_ground: "⛱️",
  zap: "⚡",
  snowflake: "❄️",
  snowman_with_snow: "☃️",
  snowman: "⛄",
  comet: "☄️",
  fire: "🔥",
  droplet: "💧",
  ocean: "🌊",
  jack_o_lantern: "🎃",
  christmas_tree: "🎄",
  fireworks: "🎆",
  sparkler: "🎇",
  firecracker: "🧨",
  sparkles: "✨",
  balloon: "🎈",
  tada: "🎉",
  confetti_ball: "🎊",
  tanabata_tree: "🎋",
  bamboo: "🎍",
  dolls: "🎎",
  flags: "🎏",
  wind_chime: "🎐",
  rice_scene: "🎑",
  red_envelope: "🧧",
  ribbon: "🎀",
  gift: "🎁",
  reminder_ribbon: "🎗️",
  tickets: "🎟️",
  ticket: "🎫",
  medal_military: "🎖️",
  trophy: "🏆",
  medal_sports: "🏅",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  soccer: "⚽",
  baseball: "⚾",
  softball: "🥎",
  basketball: "🏀",
  volleyball: "🏐",
  football: "🏈",
  rugby_football: "🏉",
  tennis: "🎾",
  flying_disc: "🥏",
  bowling: "🎳",
  cricket_game: "🏏",
  field_hockey: "🏑",
  ice_hockey: "🏒",
  lacrosse: "🥍",
  ping_pong: "🏓",
  badminton: "🏸",
  boxing_glove: "🥊",
  martial_arts_uniform: "🥋",
  goal_net: "🥅",
  golf: "⛳",
  ice_skate: "⛸️",
  fishing_pole_and_fish: "🎣",
  diving_mask: "🤿",
  running_shirt_with_sash: "🎽",
  ski: "🎿",
  sled: "🛷",
  curling_stone: "🥌",
  dart: "🎯",
  yo_yo: "🪀",
  kite: "🪁",
  "8ball": "🎱",
  crystal_ball: "🔮",
  magic_wand: "🪄",
  nazar_amulet: "🧿",
  video_game: "🎮",
  joystick: "🕹️",
  slot_machine: "🎰",
  game_die: "🎲",
  jigsaw: "🧩",
  teddy_bear: "🧸",
  pinata: "🪅",
  nesting_dolls: "🪆",
  spades: "♠️",
  hearts: "♥️",
  diamonds: "♦️",
  clubs: "♣️",
  chess_pawn: "♟️",
  black_joker: "🃏",
  mahjong: "🀄",
  flower_playing_cards: "🎴",
  performing_arts: "🎭",
  framed_picture: "🖼️",
  art: "🎨",
  thread: "🧵",
  sewing_needle: "🪡",
  yarn: "🧶",
  knot: "🪢",
  eyeglasses: "👓",
  dark_sunglasses: "🕶️",
  goggles: "🥽",
  lab_coat: "🥼",
  safety_vest: "🦺",
  necktie: "👔",
  shirt: "👕",
  tshirt: "👕",
  jeans: "👖",
  scarf: "🧣",
  gloves: "🧤",
  coat: "🧥",
  socks: "🧦",
  dress: "👗",
  kimono: "👘",
  sari: "🥻",
  one_piece_swimsuit: "🩱",
  swim_brief: "🩲",
  shorts: "🩳",
  bikini: "👙",
  womans_clothes: "👚",
  purse: "👛",
  handbag: "👜",
  pouch: "👝",
  shopping: "🛍️",
  school_satchel: "🎒",
  thong_sandal: "🩴",
  mans_shoe: "👞",
  shoe: "👞",
  athletic_shoe: "👟",
  hiking_boot: "🥾",
  flat_shoe: "🥿",
  high_heel: "👠",
  sandal: "👡",
  ballet_shoes: "🩰",
  boot: "👢",
  crown: "👑",
  womans_hat: "👒",
  tophat: "🎩",
  mortar_board: "🎓",
  billed_cap: "🧢",
  military_helmet: "🪖",
  rescue_worker_helmet: "⛑️",
  prayer_beads: "📿",
  lipstick: "💄",
  ring: "💍",
  gem: "💎",
  mute: "🔇",
  speaker: "🔈",
  sound: "🔉",
  loud_sound: "🔊",
  loudspeaker: "📢",
  mega: "📣",
  postal_horn: "📯",
  bell: "🔔",
  no_bell: "🔕",
  musical_score: "🎼",
  musical_note: "🎵",
  notes: "🎶",
  studio_microphone: "🎙️",
  level_slider: "🎚️",
  control_knobs: "🎛️",
  microphone: "🎤",
  headphones: "🎧",
  radio: "📻",
  saxophone: "🎷",
  accordion: "🪗",
  guitar: "🎸",
  musical_keyboard: "🎹",
  trumpet: "🎺",
  violin: "🎻",
  banjo: "🪕",
  drum: "🥁",
  long_drum: "🪘",
  iphone: "📱",
  calling: "📲",
  phone: "☎️",
  telephone: "☎️",
  telephone_receiver: "📞",
  pager: "📟",
  fax: "📠",
  battery: "🔋",
  electric_plug: "🔌",
  computer: "💻",
  desktop_computer: "🖥️",
  printer: "🖨️",
  keyboard: "⌨️",
  computer_mouse: "🖱️",
  trackball: "🖲️",
  minidisc: "💽",
  floppy_disk: "💾",
  cd: "💿",
  dvd: "📀",
  abacus: "🧮",
  movie_camera: "🎥",
  film_strip: "🎞️",
  film_projector: "📽️",
  clapper: "🎬",
  tv: "📺",
  camera: "📷",
  camera_flash: "📸",
  video_camera: "📹",
  vhs: "📼",
  mag: "🔍",
  mag_right: "🔎",
  candle: "🕯️",
  bulb: "💡",
  flashlight: "🔦",
  izakaya_lantern: "🏮",
  lantern: "🏮",
  diya_lamp: "🪔",
  notebook_with_decorative_cover: "📔",
  closed_book: "📕",
  book: "📖",
  open_book: "📖",
  green_book: "📗",
  blue_book: "📘",
  orange_book: "📙",
  books: "📚",
  notebook: "📓",
  ledger: "📒",
  page_with_curl: "📃",
  scroll: "📜",
  page_facing_up: "📄",
  newspaper: "📰",
  newspaper_roll: "🗞️",
  bookmark_tabs: "📑",
  bookmark: "🔖",
  label: "🏷️",
  moneybag: "💰",
  coin: "🪙",
  yen: "💴",
  dollar: "💵",
  euro: "💶",
  pound: "💷",
  money_with_wings: "💸",
  credit_card: "💳",
  receipt: "🧾",
  chart: "💹",
  envelope: "✉️",
  email: "📧",
  "e-mail": "📧",
  incoming_envelope: "📨",
  envelope_with_arrow: "📩",
  outbox_tray: "📤",
  inbox_tray: "📥",
  package: "📦",
  mailbox: "📫",
  mailbox_closed: "📪",
  mailbox_with_mail: "📬",
  mailbox_with_no_mail: "📭",
  postbox: "📮",
  ballot_box: "🗳️",
  pencil2: "✏️",
  black_nib: "✒️",
  fountain_pen: "🖋️",
  pen: "🖊️",
  paintbrush: "🖌️",
  crayon: "🖍️",
  memo: "📝",
  pencil: "📝",
  briefcase: "💼",
  file_folder: "📁",
  open_file_folder: "📂",
  card_index_dividers: "🗂️",
  date: "📅",
  calendar: "📆",
  spiral_notepad: "🗒️",
  spiral_calendar: "🗓️",
  card_index: "📇",
  chart_with_upwards_trend: "📈",
  chart_with_downwards_trend: "📉",
  bar_chart: "📊",
  clipboard: "📋",
  pushpin: "📌",
  round_pushpin: "📍",
  paperclip: "📎",
  paperclips: "🖇️",
  straight_ruler: "📏",
  triangular_ruler: "📐",
  scissors: "✂️",
  card_file_box: "🗃️",
  file_cabinet: "🗄️",
  wastebasket: "🗑️",
  lock: "🔒",
  unlock: "🔓",
  lock_with_ink_pen: "🔏",
  closed_lock_with_key: "🔐",
  key: "🔑",
  old_key: "🗝️",
  hammer: "🔨",
  axe: "🪓",
  pick: "⛏️",
  hammer_and_pick: "⚒️",
  hammer_and_wrench: "🛠️",
  dagger: "🗡️",
  crossed_swords: "⚔️",
  gun: "🔫",
  boomerang: "🪃",
  bow_and_arrow: "🏹",
  shield: "🛡️",
  carpentry_saw: "🪚",
  wrench: "🔧",
  screwdriver: "🪛",
  nut_and_bolt: "🔩",
  gear: "⚙️",
  clamp: "🗜️",
  balance_scale: "⚖️",
  probing_cane: "🦯",
  link: "🔗",
  chains: "⛓️",
  hook: "🪝",
  toolbox: "🧰",
  magnet: "🧲",
  ladder: "🪜",
  alembic: "⚗️",
  test_tube: "🧪",
  petri_dish: "🧫",
  dna: "🧬",
  microscope: "🔬",
  telescope: "🔭",
  satellite: "📡",
  syringe: "💉",
  drop_of_blood: "🩸",
  pill: "💊",
  adhesive_bandage: "🩹",
  stethoscope: "🩺",
  door: "🚪",
  elevator: "🛗",
  mirror: "🪞",
  window: "🪟",
  bed: "🛏️",
  couch_and_lamp: "🛋️",
  chair: "🪑",
  toilet: "🚽",
  plunger: "🪠",
  shower: "🚿",
  bathtub: "🛁",
  mouse_trap: "🪤",
  razor: "🪒",
  lotion_bottle: "🧴",
  safety_pin: "🧷",
  broom: "🧹",
  basket: "🧺",
  roll_of_paper: "🧻",
  bucket: "🪣",
  soap: "🧼",
  toothbrush: "🪥",
  sponge: "🧽",
  fire_extinguisher: "🧯",
  shopping_cart: "🛒",
  smoking: "🚬",
  coffin: "⚰️",
  headstone: "🪦",
  funeral_urn: "⚱️",
  moyai: "🗿",
  placard: "🪧",
  atm: "🏧",
  put_litter_in_its_place: "🚮",
  potable_water: "🚰",
  wheelchair: "♿",
  mens: "🚹",
  womens: "🚺",
  restroom: "🚻",
  baby_symbol: "🚼",
  wc: "🚾",
  passport_control: "🛂",
  customs: "🛃",
  baggage_claim: "🛄",
  left_luggage: "🛅",
  warning: "⚠️",
  children_crossing: "🚸",
  no_entry: "⛔",
  no_entry_sign: "🚫",
  no_bicycles: "🚳",
  no_smoking: "🚭",
  do_not_litter: "🚯",
  "non-potable_water": "🚱",
  no_pedestrians: "🚷",
  no_mobile_phones: "📵",
  underage: "🔞",
  radioactive: "☢️",
  biohazard: "☣️",
  arrow_up: "⬆️",
  arrow_upper_right: "↗️",
  arrow_right: "➡️",
  arrow_lower_right: "↘️",
  arrow_down: "⬇️",
  arrow_lower_left: "↙️",
  arrow_left: "⬅️",
  arrow_upper_left: "↖️",
  arrow_up_down: "↕️",
  left_right_arrow: "↔️",
  leftwards_arrow_with_hook: "↩️",
  arrow_right_hook: "↪️",
  arrow_heading_up: "⤴️",
  arrow_heading_down: "⤵️",
  arrows_clockwise: "🔃",
  arrows_counterclockwise: "🔄",
  back: "🔙",
  end: "🔚",
  on: "🔛",
  soon: "🔜",
  top: "🔝",
  place_of_worship: "🛐",
  atom_symbol: "⚛️",
  om: "🕉️",
  star_of_david: "✡️",
  wheel_of_dharma: "☸️",
  yin_yang: "☯️",
  latin_cross: "✝️",
  orthodox_cross: "☦️",
  star_and_crescent: "☪️",
  peace_symbol: "☮️",
  menorah: "🕎",
  six_pointed_star: "🔯",
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpius: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓",
  ophiuchus: "⛎",
  twisted_rightwards_arrows: "🔀",
  repeat: "🔁",
  repeat_one: "🔂",
  arrow_forward: "▶️",
  fast_forward: "⏩",
  next_track_button: "⏭️",
  play_or_pause_button: "⏯️",
  arrow_backward: "◀️",
  rewind: "⏪",
  previous_track_button: "⏮️",
  arrow_up_small: "🔼",
  arrow_double_up: "⏫",
  arrow_down_small: "🔽",
  arrow_double_down: "⏬",
  pause_button: "⏸️",
  stop_button: "⏹️",
  record_button: "⏺️",
  eject_button: "⏏️",
  cinema: "🎦",
  low_brightness: "🔅",
  high_brightness: "🔆",
  signal_strength: "📶",
  vibration_mode: "📳",
  mobile_phone_off: "📴",
  female_sign: "♀️",
  male_sign: "♂️",
  transgender_symbol: "⚧️",
  heavy_multiplication_x: "✖️",
  heavy_plus_sign: "➕",
  heavy_minus_sign: "➖",
  heavy_division_sign: "➗",
  infinity: "♾️",
  bangbang: "‼️",
  interrobang: "⁉️",
  question: "❓",
  grey_question: "❔",
  grey_exclamation: "❕",
  exclamation: "❗",
  heavy_exclamation_mark: "❗",
  wavy_dash: "〰️",
  currency_exchange: "💱",
  heavy_dollar_sign: "💲",
  medical_symbol: "⚕️",
  recycle: "♻️",
  fleur_de_lis: "⚜️",
  trident: "🔱",
  name_badge: "📛",
  beginner: "🔰",
  o: "⭕",
  white_check_mark: "✅",
  ballot_box_with_check: "☑️",
  heavy_check_mark: "✔️",
  x: "❌",
  negative_squared_cross_mark: "❎",
  curly_loop: "➰",
  loop: "➿",
  part_alternation_mark: "〽️",
  eight_spoked_asterisk: "✳️",
  eight_pointed_black_star: "✴️",
  sparkle: "❇️",
  copyright: "©️",
  registered: "®️",
  tm: "™️",
  hash: "#️⃣",
  asterisk: "*️⃣",
  zero: "0️⃣",
  one: "1️⃣",
  two: "2️⃣",
  three: "3️⃣",
  four: "4️⃣",
  five: "5️⃣",
  six: "6️⃣",
  seven: "7️⃣",
  eight: "8️⃣",
  nine: "9️⃣",
  keycap_ten: "🔟",
  capital_abcd: "🔠",
  abcd: "🔡",
  symbols: "🔣",
  abc: "🔤",
  a: "🅰️",
  ab: "🆎",
  b: "🅱️",
  cl: "🆑",
  cool: "🆒",
  free: "🆓",
  information_source: "ℹ️",
  id: "🆔",
  m: "Ⓜ️",
  new: "🆕",
  ng: "🆖",
  o2: "🅾️",
  ok: "🆗",
  parking: "🅿️",
  sos: "🆘",
  up: "🆙",
  vs: "🆚",
  koko: "🈁",
  sa: "🈂️",
  ideograph_advantage: "🉐",
  accept: "🉑",
  congratulations: "㊗️",
  secret: "㊙️",
  u6e80: "🈵",
  red_circle: "🔴",
  orange_circle: "🟠",
  yellow_circle: "🟡",
  green_circle: "🟢",
  large_blue_circle: "🔵",
  purple_circle: "🟣",
  brown_circle: "🟤",
  black_circle: "⚫",
  white_circle: "⚪",
  red_square: "🟥",
  orange_square: "🟧",
  yellow_square: "🟨",
  green_square: "🟩",
  blue_square: "🟦",
  purple_square: "🟪",
  brown_square: "🟫",
  black_large_square: "⬛",
  white_large_square: "⬜",
  black_medium_square: "◼️",
  white_medium_square: "◻️",
  black_medium_small_square: "◾",
  white_medium_small_square: "◽",
  black_small_square: "▪️",
  white_small_square: "▫️",
  large_orange_diamond: "🔶",
  large_blue_diamond: "🔷",
  small_orange_diamond: "🔸",
  small_blue_diamond: "🔹",
  small_red_triangle: "🔺",
  small_red_triangle_down: "🔻",
  diamond_shape_with_a_dot_inside: "💠",
  radio_button: "🔘",
  white_square_button: "🔳",
  black_square_button: "🔲",
  checkered_flag: "🏁",
  triangular_flag_on_post: "🚩",
  crossed_flags: "🎌",
  black_flag: "🏴",
  white_flag: "🏳️",
  rainbow_flag: "🏳️‍🌈",
  transgender_flag: "🏳️‍⚧️",
  pirate_flag: "🏴‍☠️",
  ascension_island: "🇦🇨",
  andorra: "🇦🇩",
  united_arab_emirates: "🇦🇪",
  afghanistan: "🇦🇫",
  antigua_barbuda: "🇦🇬",
  anguilla: "🇦🇮",
  albania: "🇦🇱",
  armenia: "🇦🇲",
  angola: "🇦🇴",
  antarctica: "🇦🇶",
  argentina: "🇦🇷",
  american_samoa: "🇦🇸",
  austria: "🇦🇹",
  australia: "🇦🇺",
  aruba: "🇦🇼",
  aland_islands: "🇦🇽",
  azerbaijan: "🇦🇿",
  bosnia_herzegovina: "🇧🇦",
  barbados: "🇧🇧",
  bangladesh: "🇧🇩",
  belgium: "🇧🇪",
  burkina_faso: "🇧🇫",
  bulgaria: "🇧🇬",
  bahrain: "🇧🇭",
  burundi: "🇧🇮",
  benin: "🇧🇯",
  st_barthelemy: "🇧🇱",
  bermuda: "🇧🇲",
  brunei: "🇧🇳",
  bolivia: "🇧🇴",
  caribbean_netherlands: "🇧🇶",
  brazil: "🇧🇷",
  bahamas: "🇧🇸",
  bhutan: "🇧🇹",
  bouvet_island: "🇧🇻",
  botswana: "🇧🇼",
  belarus: "🇧🇾",
  belize: "🇧🇿",
  canada: "🇨🇦",
  cocos_islands: "🇨🇨",
  congo_kinshasa: "🇨🇩",
  central_african_republic: "🇨🇫",
  congo_brazzaville: "🇨🇬",
  switzerland: "🇨🇭",
  cote_divoire: "🇨🇮",
  cook_islands: "🇨🇰",
  chile: "🇨🇱",
  cameroon: "🇨🇲",
  cn: "🇨🇳",
  colombia: "🇨🇴",
  clipperton_island: "🇨🇵",
  costa_rica: "🇨🇷",
  cuba: "🇨🇺",
  cape_verde: "🇨🇻",
  curacao: "🇨🇼",
  christmas_island: "🇨🇽",
  cyprus: "🇨🇾",
  czech_republic: "🇨🇿",
  de: "🇩🇪",
  diego_garcia: "🇩🇬",
  djibouti: "🇩🇯",
  denmark: "🇩🇰",
  dominica: "🇩🇲",
  dominican_republic: "🇩🇴",
  algeria: "🇩🇿",
  ceuta_melilla: "🇪🇦",
  ecuador: "🇪🇨",
  estonia: "🇪🇪",
  egypt: "🇪🇬",
  western_sahara: "🇪🇭",
  eritrea: "🇪🇷",
  es: "🇪🇸",
  ethiopia: "🇪🇹",
  eu: "🇪🇺",
  european_union: "🇪🇺",
  finland: "🇫🇮",
  fiji: "🇫🇯",
  falkland_islands: "🇫🇰",
  micronesia: "🇫🇲",
  faroe_islands: "🇫🇴",
  fr: "🇫🇷",
  gabon: "🇬🇦",
  gb: "🇬🇧",
  uk: "🇬🇧",
  grenada: "🇬🇩",
  georgia: "🇬🇪",
  french_guiana: "🇬🇫",
  guernsey: "🇬🇬",
  ghana: "🇬🇭",
  gibraltar: "🇬🇮",
  greenland: "🇬🇱",
  gambia: "🇬🇲",
  guinea: "🇬🇳",
  guadeloupe: "🇬🇵",
  equatorial_guinea: "🇬🇶",
  greece: "🇬🇷",
  south_georgia_south_sandwich_islands: "🇬🇸",
  guatemala: "🇬🇹",
  guam: "🇬🇺",
  guinea_bissau: "🇬🇼",
  guyana: "🇬🇾",
  hong_kong: "🇭🇰",
  heard_mcdonald_islands: "🇭🇲",
  honduras: "🇭🇳",
  croatia: "🇭🇷",
  haiti: "🇭🇹",
  hungary: "🇭🇺",
  canary_islands: "🇮🇨",
  indonesia: "🇮🇩",
  ireland: "🇮🇪",
  israel: "🇮🇱",
  isle_of_man: "🇮🇲",
  india: "🇮🇳",
  british_indian_ocean_territory: "🇮🇴",
  iraq: "🇮🇶",
  iran: "🇮🇷",
  iceland: "🇮🇸",
  it: "🇮🇹",
  jersey: "🇯🇪",
  jamaica: "🇯🇲",
  jordan: "🇯🇴",
  jp: "🇯🇵",
  kenya: "🇰🇪",
  kyrgyzstan: "🇰🇬",
  cambodia: "🇰🇭",
  kiribati: "🇰🇮",
  comoros: "🇰🇲",
  st_kitts_nevis: "🇰🇳",
  north_korea: "🇰🇵",
  kr: "🇰🇷",
  kuwait: "🇰🇼",
  cayman_islands: "🇰🇾",
  kazakhstan: "🇰🇿",
  laos: "🇱🇦",
  lebanon: "🇱🇧",
  st_lucia: "🇱🇨",
  liechtenstein: "🇱🇮",
  sri_lanka: "🇱🇰",
  liberia: "🇱🇷",
  lesotho: "🇱🇸",
  lithuania: "🇱🇹",
  luxembourg: "🇱🇺",
  latvia: "🇱🇻",
  libya: "🇱🇾",
  morocco: "🇲🇦",
  monaco: "🇲🇨",
  moldova: "🇲🇩",
  montenegro: "🇲🇪",
  st_martin: "🇲🇫",
  madagascar: "🇲🇬",
  marshall_islands: "🇲🇭",
  macedonia: "🇲🇰",
  mali: "🇲🇱",
  myanmar: "🇲🇲",
  mongolia: "🇲🇳",
  macau: "🇲🇴",
  northern_mariana_islands: "🇲🇵",
  martinique: "🇲🇶",
  mauritania: "🇲🇷",
  montserrat: "🇲🇸",
  malta: "🇲🇹",
  mauritius: "🇲🇺",
  maldives: "🇲🇻",
  malawi: "🇲🇼",
  mexico: "🇲🇽",
  malaysia: "🇲🇾",
  mozambique: "🇲🇿",
  namibia: "🇳🇦",
  new_caledonia: "🇳🇨",
  niger: "🇳🇪",
  norfolk_island: "🇳🇫",
  nigeria: "🇳🇬",
  nicaragua: "🇳🇮",
  netherlands: "🇳🇱",
  norway: "🇳🇴",
  nepal: "🇳🇵",
  nauru: "🇳🇷",
  niue: "🇳🇺",
  new_zealand: "🇳🇿",
  oman: "🇴🇲",
  panama: "🇵🇦",
  peru: "🇵🇪",
  french_polynesia: "🇵🇫",
  papua_new_guinea: "🇵🇬",
  philippines: "🇵🇭",
  pakistan: "🇵🇰",
  poland: "🇵🇱",
  st_pierre_miquelon: "🇵🇲",
  pitcairn_islands: "🇵🇳",
  puerto_rico: "🇵🇷",
  palestinian_territories: "🇵🇸",
  portugal: "🇵🇹",
  palau: "🇵🇼",
  paraguay: "🇵🇾",
  qatar: "🇶🇦",
  reunion: "🇷🇪",
  romania: "🇷🇴",
  serbia: "🇷🇸",
  ru: "🇷🇺",
  rwanda: "🇷🇼",
  saudi_arabia: "🇸🇦",
  solomon_islands: "🇸🇧",
  seychelles: "🇸🇨",
  sudan: "🇸🇩",
  sweden: "🇸🇪",
  singapore: "🇸🇬",
  st_helena: "🇸🇭",
  slovenia: "🇸🇮",
  svalbard_jan_mayen: "🇸🇯",
  slovakia: "🇸🇰",
  sierra_leone: "🇸🇱",
  san_marino: "🇸🇲",
  senegal: "🇸🇳",
  somalia: "🇸🇴",
  suriname: "🇸🇷",
  south_sudan: "🇸🇸",
  sao_tome_principe: "🇸🇹",
  el_salvador: "🇸🇻",
  sint_maarten: "🇸🇽",
  syria: "🇸🇾",
  swaziland: "🇸🇿",
  tristan_da_cunha: "🇹🇦",
  turks_caicos_islands: "🇹🇨",
  chad: "🇹🇩",
  french_southern_territories: "🇹🇫",
  togo: "🇹🇬",
  thailand: "🇹🇭",
  tajikistan: "🇹🇯",
  tokelau: "🇹🇰",
  timor_leste: "🇹🇱",
  turkmenistan: "🇹🇲",
  tunisia: "🇹🇳",
  tonga: "🇹🇴",
  tr: "🇹🇷",
  trinidad_tobago: "🇹🇹",
  tuvalu: "🇹🇻",
  taiwan: "🇹🇼",
  tanzania: "🇹🇿",
  ukraine: "🇺🇦",
  uganda: "🇺🇬",
  us_outlying_islands: "🇺🇲",
  united_nations: "🇺🇳",
  us: "🇺🇸",
  uruguay: "🇺🇾",
  uzbekistan: "🇺🇿",
  vatican_city: "🇻🇦",
  st_vincent_grenadines: "🇻🇨",
  venezuela: "🇻🇪",
  british_virgin_islands: "🇻🇬",
  us_virgin_islands: "🇻🇮",
  vietnam: "🇻🇳",
  vanuatu: "🇻🇺",
  wallis_futuna: "🇼🇫",
  samoa: "🇼🇸",
  kosovo: "🇽🇰",
  yemen: "🇾🇪",
  mayotte: "🇾🇹",
  south_africa: "🇿🇦",
  zambia: "🇿🇲",
  zimbabwe: "🇿🇼",
  england: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
};
Object.keys(ee).reduce((e, t) => {
  const i = ee[t];
  return e[i] = t, e;
}, {});
const ua = Object.keys(ee).map((e) => e);
Object.keys(ee).map((e) => ee[e]);
function ma(e) {
  return ua.filter((t) => t.startsWith(e)).map((t) => ({
    name: t,
    emoji: ee[t]
  }));
}
const fa = 200, _a = new Z("emoji"), Bo = pe.create({
  name: "emoji",
  content: "text*",
  priority: fa,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {},
      suggestion: {
        char: ":",
        pluginKey: _a,
        command: ({ editor: t, range: i, props: n }) => {
          t.chain().focus().insertContentAt(i, `${n.emoji} `).run();
        }
      },
      button: ({ editor: t, t: i }) => ({
        component: ha,
        componentProps: {
          editor: t,
          action: () => {
          },
          isActive: () => !1,
          disabled: !1,
          icon: "EmojiIcon",
          tooltip: i("editor.emoji.tooltip")
        }
      })
    };
  },
  addCommands() {
    return {
      setEmoji: (e) => ({ commands: t }) => t.insertContent(`${e.emoji} `)
    };
  },
  addProseMirrorPlugins() {
    return [
      at({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}).configure({
  suggestion: {
    items: ({ query: e }) => ma(e),
    render: () => {
      let e, t, i;
      return {
        onStart: (n) => {
          i = n.editor.isEditable, i && (e = new Me(xt, {
            props: n,
            editor: n.editor
          }), t = Fe("body", {
            getReferenceClientRect: n.clientRect,
            appendTo: () => document.body,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(n) {
          i && (e.updateProps(n), t[0].setProps({
            getReferenceClientRect: n.clientRect
          }));
        },
        onKeyDown(n) {
          var a;
          if (i)
            return n.event.key === "Escape" ? (t[0].hide(), !0) : (a = e.ref) == null ? void 0 : a.onKeyDown(n);
        },
        onExit() {
          i && (t[0].destroy(), e.destroy());
        }
      };
    }
  }
});
function ga(e) {
  const t = document.createElement("iframe");
  t.setAttribute("style", "position: absolute; width: 0; height: 0; top: 0; left: 0;"), document.body.appendChild(t), t.textContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Echo Editor</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body class="is-print">
      <div class="tiptap ProseMirror" translate="no" aria-expanded="false">
          ${e}
      </div>
    </body>
    </html>
  `;
  const i = t.contentWindow, n = t.contentDocument || t.contentWindow && t.contentWindow.document, a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/reactjs-tiptap-editor@latest/lib/style.css", n.head.appendChild(a), n && (n.open(), n.write(e), n.close()), i && t.addEventListener("load", function() {
    try {
      setTimeout(() => {
        i.focus();
        try {
          i.document.execCommand("print", !1) || i.print();
        } catch {
          i.print();
        }
        i.close();
      }, 10);
    } catch (o) {
      console.error(o);
    }
    setTimeout(() => {
      document.body.removeChild(t);
    }, 100);
  });
}
function ba(e) {
  const t = e.getHTML();
  return t ? (ga(t), !0) : !1;
}
const jo = N.create({
  name: "exportPdf",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => {
            ba(t);
          },
          icon: "ExportPdf",
          tooltip: i("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  }
});
function xa(e, t) {
  const i = atob(e.split(",")[1]), n = Array.from({ length: i.length });
  for (let o = 0; o < i.length; o++)
    n[o] = i.charCodeAt(o);
  const a = new Uint8Array(n);
  return new Blob([a], { type: t });
}
function pa(e, t) {
  return new File([e], t, { type: e.type });
}
function wa(e) {
  const { toast: t } = In(), { t: i } = B(), [n, a] = v(!1), o = G(null);
  function s() {
    var u;
    (u = o.current) == null || u.click();
  }
  function c(u) {
    const f = u.target.files[0];
    if (f) {
      if (f.size > e.limit) {
        t({
          variant: "destructive",
          title: i("editor.importWord.limitSize")
        });
        return;
      }
      d(f);
    }
  }
  async function h(u) {
    var T;
    const _ = new DOMParser().parseFromString(u, "text/html"), p = _.querySelectorAll("img");
    if (p.length === 0)
      return _.body.innerHTML;
    if (Bn(e.editor, "image")) {
      const E = (T = e.editor.extensionManager.extensions.find(
        (g) => g.name === "importWord"
      )) == null ? void 0 : T.options;
      if (E && typeof E.upload == "function") {
        const g = [];
        for (const k of p) {
          const H = k.getAttribute("src"), L = xa(H, "image/jpeg"), O = pa(L, "image.jpeg");
          g.push(O);
        }
        const b = await E.upload(g);
        for (const [k, H] of p.entries()) {
          H.setAttribute("src", b[k].src);
          const L = H.parentElement;
          (L == null ? void 0 : L.tagName) === "P" && (L.insertAdjacentElement("beforebegin", H), !L.hasChildNodes() && L.textContent === "" && L.remove());
        }
        return _.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), _.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), _.body.innerHTML;
  }
  async function d(u) {
    a(!0);
    try {
      if (e.convert) {
        const f = await e.convert(u);
        l(f);
      } else {
        const f = await u.arrayBuffer(), { value: _ } = await ln.convertToHtml(
          { arrayBuffer: f },
          e == null ? void 0 : e.mammothOptions
        );
        l(_);
      }
    } finally {
      a(!1);
    }
  }
  async function l(u) {
    const f = await h(u);
    e.editor.chain().setContent(f, !0).run();
  }
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ r(
      x,
      {
        action: s,
        disabled: e == null ? void 0 : e.disabled,
        icon: e == null ? void 0 : e.icon,
        loading: n,
        tooltip: e == null ? void 0 : e.tooltip
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        accept: ".docx",
        onChange: c,
        ref: o,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
const Do = N.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      limit: 1024 * 1024 * 10,
      // 10 MB
      button: ({ editor: t, extension: i, t: n }) => {
        const { convert: a, limit: o, mammothOptions: s } = i.options;
        return {
          component: wa,
          componentProps: {
            editor: t,
            convert: a,
            limit: o,
            mammothOptions: s,
            action: () => t.commands.setHorizontalRule(),
            disabled: !t.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: ["alt", "mod", "S"],
            tooltip: n("editor.importWord.tooltip")
          }
        };
      }
    };
  }
}), ya = typeof window < "u";
function ka(e, t) {
  if (ya) {
    const i = window.URL.createObjectURL(e), n = document.createElement("a");
    return n.href = i, n.download = t, n.click(), window.URL.revokeObjectURL(i), Promise.resolve();
  }
  return console.error("Download is not supported in Node.js"), Promise.resolve();
}
const va = {
  ...U,
  hardBreak: U.hard_break,
  codeBlock: U.code_block,
  orderedList: U.ordered_list,
  listItem: U.list_item,
  bulletList: U.bullet_list,
  horizontalRule: U.horizontal_rule,
  // Requirement Buffer on browser
  image(e, t) {
    e.renderInline(t), e.closeBlock(t);
  },
  table(e, t) {
    e.table(t, {
      tableOptions: {
        width: {
          size: 100,
          type: Jn.PERCENTAGE
        }
      }
    });
  }
}, Ca = new Qn(va, Yn), Oo = N.create({
  name: "exportWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          icon: "ExportWord",
          action: () => {
            t == null || t.commands.exportToWord();
          },
          tooltip: i("editor.exportWord.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  // @ts-expect-error
  addCommands() {
    return {
      exportToWord: () => async ({ editor: e }) => {
        const t = {
          getImageBuffer: async (n) => {
            const o = await (await fetch(n)).arrayBuffer();
            return new Uint8Array(o);
          }
        }, i = Ca.serialize(e.state.doc, t);
        return Zn.toBlob(i).then((n) => ka(new Blob([n]), "export-document.docx")), !0;
      }
    };
  }
}), Na = "_toc_aag8a_1", Aa = "_visible_aag8a_7", Ta = "_list_aag8a_11", La = "_item_aag8a_16", be = {
  toc: Na,
  visible: Aa,
  list: Ta,
  item: La
};
function Sa(e) {
  const t = [], i = [t];
  return e.forEach((n) => {
    let a = -1, o = i[n.level + a];
    for (; !o; )
      a -= 1, o = i[n.level + a];
    o.push({ ...n, children: i[n.level] = [] });
  }), t;
}
function Ea({ editor: e }) {
  const t = De(), [i, n] = v([]), { t: a } = B(), o = F(() => {
    const s = [], c = e.state.tr;
    e.state.doc.descendants((h, d) => {
      if (h.type.name === "heading") {
        const l = `heading-${s.length + 1}`;
        h.attrs.id !== l && c.setNodeMarkup(d, void 0, {
          ...h.attrs,
          id: l
        }), s.push({
          level: h.attrs.level,
          text: h.textContent,
          id: l
        });
      }
    }), c.setMeta("addToHistory", !1), c.setMeta("preventUpdate", !0), e.view.dispatch(c), n(s), e.eventEmitter && e.eventEmitter.emit("TableOfContents", Sa(s));
  }, [e]);
  return M(() => {
    if (e) {
      if (!e.options.editable) {
        o();
        return;
      }
      return e.on("update", o), () => {
        e.off("update", o);
      };
    }
  }, [e, o]), M(() => {
    o();
  }, []), /* @__PURE__ */ r(le, { className: R("tableOfContent", be.toc, t && be.visible), children: t ? /* @__PURE__ */ m("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ r("p", { className: "text-[20px] richtext-mb-[8px] richtext-font-semibold", children: a("editor.table_of_content") }),
    /* @__PURE__ */ r("ul", { className: be.list, children: i.map((s, c) => /* @__PURE__ */ r(
      "li",
      {
        className: be.item,
        style: { paddingLeft: `${s.level - 1}rem` },
        children: /* @__PURE__ */ r("a", { href: `#${s.id}`, children: s.text })
      },
      `table-of-content-${c}`
    )) })
  ] }) : null });
}
function Ha(e, ...t) {
  const [i, n] = v(!1);
  return M(() => {
    const a = () => {
      n(e.isActive.apply(e, t));
    };
    return e.on("selectionUpdate", a), e.on("transaction", a), () => {
      e.off("selectionUpdate", a), e.off("transaction", a);
    };
  }, [e, t, n]), i;
}
function Ma({ editor: e, icon: t, tooltip: i }) {
  const n = Ha(e, Pa.name), a = F(() => {
    if (n) {
      e.chain().focus().removeTableOfContents().run();
      return;
    }
    e.chain().focus().setTableOfContents().run();
  }, [e, n]);
  return /* @__PURE__ */ r(
    x,
    {
      action: a,
      isActive: () => n || !1,
      icon: t,
      tooltip: i
    }
  );
}
function za(e) {
  return e && e.type.name === "title";
}
function Ra(e, t) {
  const n = [e.getJSON()], a = [];
  for (; n.length > 0; ) {
    const o = n.shift();
    o.type === t && a.push(o), o.content && o.content.length > 0 && n.push(...o.content);
  }
  return a;
}
const Pa = pe.create({
  name: "tableOfContents",
  group: "block",
  atom: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      onHasOneBeforeInsert: () => {
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: t, t: i }) => ({
        component: Ma,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: i("editor.table.tooltip"),
          editor: t
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["toc", we(e)];
  },
  addNodeView() {
    return He(Ea);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: e, editor: t, view: i }) => {
        if (Ra(t, this.name).length > 0) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const a = i.props.state.doc.content.firstChild;
        if (za(a)) {
          const o = (a.firstChild && a.firstChild.nodeSize || 0) + 1;
          return e.insertContentAt(o, { type: this.name });
        }
        return e.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: e, dispatch: t }) => {
        const { tr: i } = e, n = e.schema.nodes.tableOfContents;
        return e.doc.descendants((a, o) => {
          if (a.type === n) {
            const s = o, c = o + a.nodeSize;
            i.delete(s, c);
          }
        }), i.docChanged ? (t(i), !0) : !1;
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});
function Ia(e) {
  var i;
  const t = P(() => {
    var o;
    const n = (o = e == null ? void 0 : e.items) == null ? void 0 : o.find((s) => s.isActive());
    return n && !n.default ? {
      ...n,
      icon: n.icon ? n.icon : e.icon
    } : {
      title: e == null ? void 0 : e.tooltip,
      icon: e.icon,
      isActive: () => !1
    };
  }, [e]);
  return /* @__PURE__ */ m(ie, { modal: !0, children: [
    /* @__PURE__ */ r(
      ae,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ r(
          x,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: e == null ? void 0 : e.icon,
            tooltip: e == null ? void 0 : e.tooltip,
            children: /* @__PURE__ */ r(
              z,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      oe,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (i = e == null ? void 0 : e.items) == null ? void 0 : i.map((n, a) => {
          var o, s;
          return /* @__PURE__ */ m(ke, { children: [
            /* @__PURE__ */ r(ve, { asChild: !0, children: /* @__PURE__ */ r(
              $e,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": t.title === n.title ? "on" : "off",
                onClick: n == null ? void 0 : n.action,
                pressed: t.title === n.title,
                size: "sm",
                children: (n == null ? void 0 : n.icon) && /* @__PURE__ */ r(z, { name: n.icon })
              }
            ) }),
            /* @__PURE__ */ m(Ce, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ r("span", { children: n.title }),
              !!((o = n.shortcutKeys) != null && o.length) && /* @__PURE__ */ r("span", { children: (s = n.shortcutKeys) == null ? void 0 : s.map((c) => Oe(c)).join(" ") })
            ] })
          ] }, `text-align-${a}`);
        })
      }
    )
  ] });
}
const $o = N.create({
  name: "text-direction",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph"],
      directions: ["auto", "ltr", "rtl"],
      defaultDirection: "auto",
      button({
        editor: t,
        extension: i,
        t: n
      }) {
        var h;
        const a = ((h = i.options) == null ? void 0 : h.directions) || [], o = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, s = a.map((d) => ({
          title: n(`editor.textDirection.${d}.tooltip`),
          icon: o[d],
          isActive: () => !1,
          action: () => {
            var l, u, f, _;
            if (d === "auto") {
              (u = (l = t.commands) == null ? void 0 : l.unsetTextDirection) == null || u.call(l);
              return;
            }
            (_ = (f = t.commands) == null ? void 0 : f.setTextDirection) == null || _.call(f, d);
          },
          disabled: !1
        })), c = s.filter((d) => d.disabled).length === s.length;
        return {
          component: Ia,
          componentProps: {
            icon: "TextDirection",
            tooltip: n("editor.textDirection.tooltip"),
            disabled: c,
            items: s
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          dir: {
            default: this.options.defaultDirection,
            parseHTML: (e) => e.attributes.dir && this.options.directions.includes(e.attributes.dir) ? e.attributes.dir.value : this.options.defaultDirection,
            renderHTML: (e) => ({ dir: e.dir })
          }
        }
      }
    ];
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTextDirection: (e) => ({ commands: t }) => this.options.directions.includes(e) ? this.options.types.every((i) => t.updateAttributes(i, { dir: e })) : !1,
      unsetTextDirection: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "dir"))
    };
  }
}), Ba = "_listUsers_en3pm_1", ja = "_itemUser_en3pm_10", Da = "_selectedUser_en3pm_31", xe = {
  listUsers: Ba,
  itemUser: ja,
  selectedUser: Da
}, Oa = Re((e, t) => {
  const i = G(null), [n, a] = v(0), o = (d) => {
    const l = e.items[d];
    l && e.command({ id: l, label: l });
  }, s = () => {
    a((n + e.items.length - 1) % e.items.length);
  }, c = () => {
    a((n + 1) % e.items.length);
  }, h = () => {
    o(n);
  };
  return M(() => a(0), [e.items]), M(() => {
    if (Number.isNaN(n + 1))
      return;
    const d = i.current.querySelector(`span:nth-of-type(${n + 1})`);
    d && Ue(d, { behavior: "smooth", scrollMode: "if-needed" });
  }, [n]), Pe(t, () => ({
    onKeyDown: ({ event: d }) => d.key === "ArrowUp" ? (s(), !0) : d.key === "ArrowDown" ? (c(), !0) : d.key === "Enter" ? (h(), !0) : !1
  })), /* @__PURE__ */ r("div", { className: R("listUsers", xe.listUsers), children: /* @__PURE__ */ r("div", { ref: i, children: e.items.length > 0 ? e.items.map((d, l) => /* @__PURE__ */ r(
    "span",
    {
      className: R("itemUser", xe.itemUser, l === n ? xe.selectedUser : ""),
      onClick: () => o(l),
      children: d
    },
    l
  )) : /* @__PURE__ */ r("div", { className: R("itemUserEmpty", xe.itemUser), children: "Empty" }) }) });
}), $a = [
  {
    id: "1",
    name: "John Doe"
  },
  {
    id: "2",
    name: "Jane Doe"
  },
  {
    id: "3",
    name: "Alice"
  },
  {
    id: "4",
    name: "Bob"
  }
], Fa = {
  items: async ({ query: e }) => $a.map((i) => i.name).filter((i) => i.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, t;
    return {
      onStart: (i) => {
        e = new Me(Oa, {
          props: i,
          editor: i.editor
        }), t = Fe("body", {
          getReferenceClientRect: i.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(i) {
        e.updateProps(i), t[0].setProps({
          getReferenceClientRect: i.clientRect
        });
      },
      onKeyDown(i) {
        var n;
        return i.event.key === "Escape" ? (t[0].hide(), !0) : (n = e.ref) == null ? void 0 : n.onKeyDown(i);
      },
      onExit() {
        t[0].destroy(), e.destroy();
      }
    };
  }
}, Fo = an.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: j("id")
      },
      label: {
        default: "",
        parseHTML: j("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: Fa
}), Ua = {
  audio: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  pdf: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z"></path>
      <path fill="currentColor" d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z"></path>
    </svg>`,
  word: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="icon"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
      />
      <path
        fill="currentColor"
        d="m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
      />
    </svg>`,
  excel: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sheet"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/></svg>',
  ppt: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-properties"><path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>'
};
function qa(e) {
  const t = Ua[e], a = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, o = [
    "svg",
    {
      ...Array.from(a.attributes).reduce((s, c) => (s[c.name] = c.value, s), {})
    }
  ];
  return Array.from(a.childNodes).forEach((s) => {
    if (s.nodeType === 1) {
      const c = [
        s.tagName.toLowerCase(),
        Array.from(s.attributes).reduce((h, d) => (h[d.name] = d.value, h), {})
      ];
      s.textContent && c.push(s.textContent), o.push(c);
    }
  }), o;
}
const Ka = {
  audio: /* @__PURE__ */ r(kn, {}),
  video: /* @__PURE__ */ r(yn, {}),
  file: /* @__PURE__ */ r(wn, {}),
  image: /* @__PURE__ */ r(pn, {}),
  pdf: /* @__PURE__ */ r(On, {}),
  word: /* @__PURE__ */ r(Dn, {}),
  excel: /* @__PURE__ */ r(xn, {}),
  ppt: /* @__PURE__ */ r(bn, {})
};
function pt(e, t = !1) {
  const i = jn(e), n = Ka[i] || /* @__PURE__ */ r(ye, {});
  return t ? qa(i) : n;
}
const Va = "_wrap_1x1ms_2", Le = {
  wrap: Va
};
function Wa({ editor: e, node: t, updateAttributes: i, deleteNode: n, extension: a }) {
  var H;
  const o = G(null), s = De(), { hasTrigger: c, fileName: h, fileSize: d, fileExt: l, fileType: u, url: f, error: _ } = t.attrs, [p, w] = v(!1), { t: T } = B(), E = (H = a == null ? void 0 : a.options) == null ? void 0 : H.upload, g = F(() => {
    !s || f || s && o.current.click();
  }, [s, f]), b = F(
    async (L) => {
      const O = L.target.files && L.target.files[0];
      if (!O)
        return;
      const wt = {
        fileName: Fn(O.name),
        fileSize: O.size,
        fileType: O.type,
        fileExt: $n(O.name)
      };
      w(!0);
      try {
        const ue = await E(O);
        i({ ...wt, url: ue }), w(!1);
      } catch (ue) {
        i({ error: `File upload fail: ${ue && ue.message}` || "Unknown error" }), w(!1), o.current.value = "";
      }
    },
    [w, i]
  );
  M(() => {
    !f && !c && (g(), i({ hasTrigger: !0 }));
  }, [f, c, g, i]);
  const k = F(() => n(), [e]);
  return s && !f ? /* @__PURE__ */ r(le, { children: /* @__PURE__ */ m("div", { className: R(Le.wrap, "render-wrapper"), children: [
    /* @__PURE__ */ r(
      "p",
      {
        onClick: g,
        style: { cursor: "pointer" },
        children: p ? /* @__PURE__ */ r("span", { children: T("editor.attachment.uploading") }) : /* @__PURE__ */ r("span", { children: T("editor.attachment.please_upload") })
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        hidden: !0,
        onChange: b,
        ref: o,
        type: "file"
      }
    )
  ] }) }) : f ? /* @__PURE__ */ r(le, { children: /* @__PURE__ */ m(
    "div",
    {
      className: R(Le.wrap, "render-wrapper"),
      onClick: g,
      children: [
        /* @__PURE__ */ m("div", { className: "richtext-flex richtext-items-center richtext-gap-[4px]", children: [
          /* @__PURE__ */ r("span", { children: pt(u) }),
          /* @__PURE__ */ m("span", { children: [
            h,
            ".",
            l
          ] }),
          /* @__PURE__ */ m("span", { children: [
            "(",
            st(d),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ r(
          x,
          {
            action: k,
            icon: "Trash2",
            tooltip: T("editor.delete")
          }
        )
      ]
    }
  ) }) : _ !== "null" ? /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(
    "div",
    {
      className: R(Le.wrap, "render-wrapper"),
      onClick: g,
      children: /* @__PURE__ */ r("p", { children: _ })
    }
  ) }) : /* @__PURE__ */ r(ye, {});
}
const Uo = pe.create({
  name: "attachment",
  content: "",
  marks: "",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "attachment"
      },
      button: ({ editor: t, t: i }) => ({
        component: x,
        componentProps: {
          action: () => t.chain().focus().setAttachment().run(),
          isActive: () => !1,
          disabled: !1,
          icon: "Attachment",
          tooltip: i("editor.attachment.tooltip")
        }
      })
    };
  },
  parseHTML() {
    return [{ tag: "div[class=attachment]" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    const {
      url: t = "",
      fileName: i = "",
      fileSize: n = "",
      fileType: a = "",
      fileExt: o = ""
    } = e || {};
    return [
      "div",
      we(
        // @ts-expect-error
        this.options.HTMLAttributes || {},
        e || {}
      ),
      t ? [
        "a",
        { href: t || "#" },
        [
          "span",
          { class: "attachment__icon" },
          pt(a, !0)
        ],
        [
          "span",
          { class: "attachment__text" },
          `${i}.${o} (${st(n)})`
        ]
      ] : ["div", { class: "attachment__placeholder" }]
    ];
  },
  addAttributes() {
    return {
      fileName: {
        default: null,
        parseHTML: j("filename")
      },
      fileSize: {
        default: null,
        parseHTML: j("filesize")
      },
      fileType: {
        default: null,
        parseHTML: j("filetype")
      },
      fileExt: {
        default: null,
        parseHTML: j("fileext")
      },
      url: {
        default: null,
        parseHTML: j("url")
      },
      hasTrigger: {
        default: !1,
        parseHTML: (e) => j("hastrigger")(e) === "true"
      },
      error: {
        default: null,
        parseHTML: j("error")
      }
    };
  },
  addCommands() {
    return {
      setAttachment: (e = {}) => ({ chain: t }) => t().insertContent({ type: this.name, attrs: e }).run()
    };
  },
  addNodeView() {
    return He(Wa);
  }
});
export {
  Uo as Attachment,
  So as BaseKit,
  Co as Blockquote,
  co as Bold,
  wo as BulletList,
  yo as Clear,
  mo as Code,
  xi as CodeBlock,
  xo as Color,
  Sn as Column,
  Lo as ColumnActionButton,
  Vo as Drawer,
  Bo as Emoji,
  Wo as Excalidraw,
  jo as ExportPdf,
  Oo as ExportWord,
  fo as FontFamily,
  bo as FontSize,
  Io as FormatPainter,
  _o as Heading,
  po as Highlight,
  To as History,
  Ao as HorizontalRule,
  Go as Iframe,
  Mn as Image,
  Zo as ImageGif,
  Do as ImportWord,
  Mo as Indent,
  lo as Italic,
  Jo as Katex,
  zo as LineHeight,
  No as Link,
  Fo as Mention,
  Qo as Mermaid,
  Ho as MoreMark,
  En as MultiColumn,
  ko as OrderedList,
  na as SearchAndReplace,
  Ro as SlashCommand,
  uo as Strike,
  Eo as SubAndSuperScript,
  Po as Table,
  Pa as TableOfContents,
  vo as TaskList,
  go as TextAlign,
  $o as TextDirection,
  Yo as Twitter,
  ho as Underline,
  Rn as Video
};
