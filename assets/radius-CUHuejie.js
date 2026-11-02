import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Oa as t,Qr as n,Sr as r,Vr as i,_a as a,ai as o,cr as s,ei as c,j as l,lr as u,ni as d,oi as f,or as p,rr as m,si as h,ti as g,v as _,x as v}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{_ as y,at as b,g as x,nt as S}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as C,r as w,t as T}from"./docs-article-CV9v0E7s.js";var E=e(),D=[{el:`Button, input, select`,h:`24px`,r:`rounded-lg (4px)`,ratio:`~17%`},{el:`Badge, tag`,h:`20px`,r:`rounded-lg (4px)`,ratio:`~20%`},{el:`Sidebar items, rows`,h:`24px`,r:`rounded-lg (4px)`,ratio:`~17%`},{el:`Popover, menu, tooltip, select list`,h:`variable`,r:`rounded-lg (4px)`,ratio:`—`},{el:`Toast, kanban column`,h:`variable`,r:`rounded-xl (6px)`,ratio:`—`},{el:`Dialog, card`,h:`large`,r:`rounded-2xl (8px)`,ratio:`—`},{el:`Avatar, indicator, switch`,h:`any`,r:`rounded-full`,ratio:`50%`}],O=[{id:`radius-scale`,label:`Шкала радиусов`},{id:`radius-scaling`,label:`Радиус по размеру элемента`},{id:`when-to-use`,label:`Когда какой радиус`},{id:`border-tokens`,label:`Токены границ`},{id:`focus-ring`,label:`Кольцо фокуса`},{id:`component-radius`,label:`Радиус компонентов`}];function k(){return(0,E.jsx)(l,{title:`Radius & Borders`,description:`Три радиуса: 4px у контролов и всплывающих окон, 6px у тостов, 8px у диалогов и карточек. Глубину задают границы, без box-shadow.`,breadcrumbs:T(`/radius`),meta:C(`/radius`),children:(0,E.jsx)(v,{presentation:`article`,label:`Radius & Borders`,inspector:w(O),document:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{children:`Радиус и граница — единственные инструменты глубины в системе. Box-shadow запрещён: вместо него слой отделяется от фона subtle surface-shift и тонкой границей trace-strong. Все производные радиусы считаются от одной CSS-переменной, поэтому скейл меняется в одном месте.`}),(0,E.jsxs)(n,{id:`radius-scale`,label:`Шкала радиусов`,children:[(0,E.jsx)(r,{children:`Базовый радиус --radius равен 0.25rem (4px). Остальные ступени шкалы Tailwind считаются от него через calc(var(--radius) * N).`}),(0,E.jsx)(S,{tokens:[{token:`--radius (base)`,value:`0.25rem (4px)`,preview:`radius`},{token:`rounded-sm`,value:`var(--radius) * 0.5 = 2px`,preview:`radius`},{token:`rounded-md`,value:`var(--radius) * 0.75 = 3px`,preview:`radius`},{token:`rounded-lg`,value:`var(--radius) = 4px`,preview:`radius`},{token:`rounded-xl`,value:`var(--radius) * 1.5 = 6px`,preview:`radius`},{token:`rounded-2xl`,value:`var(--radius) * 2 = 8px`,preview:`radius`},{token:`rounded-3xl`,value:`var(--radius) * 2.5 = 10px`,preview:`radius`},{token:`rounded-4xl`,value:`var(--radius) * 3 = 12px`,preview:`radius`},{token:`rounded-full`,value:`9999px`,preview:`radius`}]})]}),(0,E.jsxs)(n,{id:`radius-scaling`,label:`Радиус по размеру элемента`,children:[(0,E.jsx)(r,{children:`Радиус зависит от роли поверхности. Контролы, строки, теги и всплывающие окна получают базовые 4px. Тосты получают 6px, диалоги и карточки 8px.`}),(0,E.jsx)(x,{title:`Radius по размеру элемента`,description:`Крупная поверхность получает радиус крупнее. Компонент берёт радиус сам, вручную его не задают.`,code:`{/* Badge 20px -> rounded-lg (4px) */}
<Badge>Label</Badge>

{/* Button 24px -> rounded-lg (4px) */}
<Button>Action</Button>

{/* Input 24px -> rounded-lg (4px) */}
<Input />

{/* Popover, menu -> --radius (4px) */}
<Popover>...</Popover>

{/* Card, Dialog -> --radius-2xl (8px) */}
<Card>...</Card>
<Dialog>...</Dialog>`,layout:`block`,children:(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:(0,E.jsxs)(h,{children:[(0,E.jsx)(o,{"data-label":!0,children:`Element`}),(0,E.jsx)(o,{"data-label":!0,children:`Height / radius`})]})}),(0,E.jsxs)(g,{children:[(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:(0,E.jsx)(_,{children:`Badge`})}),(0,E.jsx)(d,{tone:`muted`,children:`h=20px — rounded-lg (4px)`})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:(0,E.jsx)(t,{variant:`outline`,children:`Button`})}),(0,E.jsx)(d,{tone:`muted`,children:`h=24px — rounded-lg (4px)`})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:(0,E.jsx)(a,{placeholder:`Input field`,"aria-label":`Input field`})}),(0,E.jsx)(d,{tone:`muted`,children:`h=24px — rounded-lg (4px)`})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:(0,E.jsx)(m,{size:`sm`,children:(0,E.jsx)(s,{children:(0,E.jsx)(u,{children:`Card`})})})}),(0,E.jsx)(d,{tone:`muted`,children:`h=variable — --radius-2xl (8px)`})]}),(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:`Popover / Dialog`}),(0,E.jsx)(d,{tone:`muted`,children:`--radius (4px) / --radius-2xl (8px)`})]})]})]})})]}),(0,E.jsxs)(n,{id:`when-to-use`,label:`Когда какой радиус`,children:[(0,E.jsxs)(c,{children:[(0,E.jsx)(f,{children:(0,E.jsxs)(h,{children:[(0,E.jsx)(o,{"data-label":!0,children:`Element`}),(0,E.jsx)(o,{"data-label":!0,children:`Height`}),(0,E.jsx)(o,{"data-label":!0,children:`Radius`}),(0,E.jsx)(o,{"data-label":!0,children:`Ratio`})]})}),(0,E.jsx)(g,{children:D.map(e=>(0,E.jsxs)(h,{children:[(0,E.jsx)(d,{children:e.el}),(0,E.jsx)(d,{tone:`muted`,children:e.h}),(0,E.jsx)(d,{children:e.r}),(0,E.jsx)(d,{tone:`muted`,children:e.ratio})]},e.el))})]}),(0,E.jsx)(r,{children:`Правило: одна поверхность получает один из трёх радиусов по роли. Таблетку rounded-full получают только аватар, индикатор и переключатель Switch с круглым бегунком.`})]}),(0,E.jsxs)(n,{id:`border-tokens`,label:`Токены границ`,children:[(0,E.jsx)(r,{children:`Глубина стратегии borders-only: никаких box-shadow. Границы через oklch с opacity для автоматической адаптации к light/dark.`}),(0,E.jsx)(S,{tokens:[{token:`--trace`,value:b[`color.primitive.trace`].value,preview:`border`,previewValue:`var(--trace)`},{token:`--trace-strong`,value:b[`color.primitive.trace-strong`].value,preview:`border`,previewValue:`var(--trace-strong)`},{token:`--surface-border`,value:b[`color.primitive.surface-border`].value,preview:`border`,previewValue:`var(--surface-border)`},{token:`--border`,value:`var(--trace)`,preview:`border`,previewValue:`var(--border)`},{token:`--input`,value:`var(--trace-strong)`,preview:`border`,previewValue:`var(--input)`}]}),(0,E.jsxs)(x,{title:`Шкала opacity границ`,description:`Dark mode инвертирует: neutral trace 12%, input trace 22%, surface border 18%.`,code:`{/* Default border — карточки, разделители */}
<div className="border border-border" />

{/* Strong border — inputs, акцентированные границы */}
<div className="border border-input" />

{/* Section divider — линия после label */}
<div className="section-divider">
  <h3 data-label>Section</h3>
  {/* ::after { height: 1px; background: var(--border) } */}
</div>`,layout:`stack`,children:[(0,E.jsx)(m,{size:`sm`,children:(0,E.jsx)(s,{children:(0,E.jsx)(p,{children:`border-border (--trace: 12%)`})})}),(0,E.jsx)(a,{readOnly:!0,"aria-label":`Образец border-input`,value:`border-input (--trace-strong: 20% / 22% dark)`}),(0,E.jsx)(n,{label:`section divider`,children:(0,E.jsxs)(i,{children:[`::after `,`{`,` height: 1px; background: var(--border) `,`}`]})})]})]}),(0,E.jsxs)(n,{id:`focus-ring`,label:`Кольцо фокуса`,children:[(0,E.jsx)(r,{children:`Нажми Tab для навигации по элементам ниже — focus ring появится автоматически.`}),(0,E.jsxs)(x,{title:`Focus Visible`,description:`1px solid var(--ring) цвета акцента, offset 1px. Единый стиль для всех интерактивных элементов.`,code:`/* Глобальный override */
[data-style="theme"] :focus-visible {
  outline: 1px solid var(--ring);
  outline-offset: 1px;
  border-radius: var(--radius);
}`,children:[(0,E.jsx)(t,{variant:`outline`,size:`default`,children:`Button`}),(0,E.jsx)(a,{type:`text`,placeholder:`Input field`,"aria-label":`Input field`})]})]}),(0,E.jsx)(n,{id:`component-radius`,label:`Радиус компонентов`,children:(0,E.jsx)(x,{title:`Component radius map`,description:`Живые компоненты пакета показывают, где применяются 4, 6 и 8px: 4 у контролов и всплывающих окон, 6 у тостов, 8 у карточек и диалогов.`,code:`/* Card, Dialog: 8px */
[data-style="theme"] [data-slot="card"] {
  border-radius: var(--radius-2xl);
  box-shadow: none;  /* borders-only */
}

/* Popover, menu, tooltip: 4px */
[data-style="theme"] [data-surface="popover"] {
  border-radius: var(--radius);
}

/* Toast: 6px */
[data-style="theme"] [data-sonner-toast] {
  border-radius: var(--radius-xl);
}

/* Button, input, badge, tag: 4px */
.rounded-lg {
  border-radius: var(--radius);
}`,layout:`block`,children:(0,E.jsx)(y,{})})})]})})})}export{k as default};