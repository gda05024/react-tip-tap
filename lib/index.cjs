"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react"),d=require("./RichTextEditor-DAqU7JiB.cjs"),c=require("./tiptap-Ufn12SjW.cjs");function a(){var r;const e=t.useRef({editor:null}),[i,o]=t.useState(!1),[s,n]=t.useState(null);return t.useEffect(()=>{var u;(u=e.current)!=null&&u.editor&&(o(!0),n(e.current.editor))},[e,(r=e.current)==null?void 0:r.editor]),{isReady:i,editor:s,editorRef:e}}exports.default=d.RichTextEditor;exports.BubbleMenu=c.BubbleMenu;exports.useEditorState=a;
