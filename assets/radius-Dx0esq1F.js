import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cr as t,Dr as n,Or as r,Rn as i,Sr as a,_i as o,bn as s,br as c,hn as l,kr as u,lr as d,m as f,o as p,r as m,ti as h,vn as g,wr as _,xn as v}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{I as y,i as b,r as x,z as S}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as C,t as w}from"./docs-article-BUNGnjgF.js";var T=e(),E=[{el:`Badge, tag`,h:`20px`,r:`rounded-4xl (7.8px)`,ratio:`~39%`},{el:`Button, input, select`,h:`32px`,r:`rounded-lg (3px)`,ratio:`~9%`},{el:`Card, table container`,h:`variable`,r:`rounded-lg (3px)`,ratio:`~2%`},{el:`Dialog, popover`,h:`large`,r:`rounded-lg (3px)`,ratio:`~1%`},{el:`Avatar, indicator`,h:`any`,r:`rounded-full`,ratio:`50%`},{el:`CRT sidebar items`,h:`29px`,r:`rounded-sm (1.8px)`,ratio:`6%`},{el:`CRT sidebar container`,h:`full`,r:`0 (sharp)`,ratio:`0%`}],D=[{id:`radius-scale`,label:`Шкала радиусов`},{id:`radius-scaling`,label:`Радиус по размеру элемента`},{id:`when-to-use`,label:`Когда какой радиус`},{id:`border-tokens`,label:`Токены границ`},{id:`focus-ring`,label:`Кольцо фокуса`},{id:`component-radius`,label:`Радиус компонентов`}];function O(){return(0,T.jsx)(f,{title:`Radius & Borders`,description:`Базовый радиус 3px (0.1875rem). Стратегия глубины borders-only — без box-shadow. CRT sidebar: 0px (пиксельные грани).`,breadcrumbs:w(`/radius`),children:(0,T.jsx)(p,{presentation:`article`,label:`Radius & Borders`,inspector:C(D),document:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{children:`Радиус и граница — единственные инструменты глубины в системе. Box-shadow запрещён: вместо него слой отделяется от фона subtle surface-shift и тонкой границей trace-strong. Все производные радиусы считаются от одной CSS-переменной, поэтому скейл меняется в одном месте.`}),(0,T.jsxs)(c,{id:`radius-scale`,label:`Шкала радиусов`,children:[(0,T.jsx)(i,{children:`Базовый радиус: --radius = 0.1875rem (3px). Производные вычисляются через calc(var(--radius) * factor).`}),(0,T.jsx)(y,{tokens:[{token:`--radius (base)`,value:`0.1875rem (3px)`,preview:`radius`},{token:`rounded-sm`,value:`var(--radius) * 0.6 = 1.8px`,preview:`radius`},{token:`rounded-md`,value:`var(--radius) * 0.8 = 2.4px`,preview:`radius`},{token:`rounded-lg`,value:`var(--radius) = 3px`,preview:`radius`},{token:`rounded-xl`,value:`var(--radius) * 1.4 = 4.2px`,preview:`radius`},{token:`rounded-2xl`,value:`var(--radius) * 1.8 = 5.4px`,preview:`radius`},{token:`rounded-4xl`,value:`var(--radius) * 2.6 = 7.8px`,preview:`radius`},{token:`rounded-full`,value:`9999px`,preview:`radius`},{token:`CRT sidebar`,value:`0px`,preview:`radius`}]})]}),(0,T.jsxs)(c,{id:`radius-scaling`,label:`Радиус по размеру элемента`,children:[(0,T.jsx)(i,{children:`Радиус масштабируется с размером элемента. Маленьким элементам — маленький radius, крупным — больше. Соотношение radius/height остаётся визуально сбалансированным.`}),(0,T.jsx)(x,{title:`Radius по размеру элемента`,description:`Один radius на все размеры выглядит негармонично. Система подбирает radius пропорционально.`,code:`{/* Badge 20px -> rounded-4xl (pill) */}
<Badge>Label</Badge>

{/* Button 32px -> rounded-lg (3px) */}
<Button>Action</Button>

{/* Input 32px -> rounded-lg (3px) */}
<Input />

{/* Card ~200px -> rounded-lg (3px) */}
<Card>...</Card>

{/* Dialog / Popover -> rounded-lg (3px) */}
<Dialog>...</Dialog>`,layout:`block`,children:(0,T.jsxs)(a,{children:[(0,T.jsx)(r,{children:(0,T.jsxs)(u,{children:[(0,T.jsx)(n,{"data-label":!0,children:`Element`}),(0,T.jsx)(n,{"data-label":!0,children:`Height / radius`})]})}),(0,T.jsxs)(t,{children:[(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(m,{children:`Badge`})}),(0,T.jsx)(_,{tone:`muted`,children:`h=20px — rounded-4xl (7.8px)`})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(o,{variant:`outline`,children:`Button`})}),(0,T.jsx)(_,{tone:`muted`,children:`h=32px — rounded-lg (3px)`})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(h,{placeholder:`Input field`,"aria-label":`Input field`})}),(0,T.jsx)(_,{tone:`muted`,children:`h=32px — rounded-lg (3px)`})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:(0,T.jsx)(l,{size:`sm`,children:(0,T.jsx)(s,{children:(0,T.jsx)(v,{children:`Card`})})})}),(0,T.jsx)(_,{tone:`muted`,children:`h=variable — rounded-lg (3px)`})]}),(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:`Dialog / Popover`}),(0,T.jsx)(_,{tone:`muted`,children:`h=large — rounded-lg (3px)`})]})]})]})})]}),(0,T.jsxs)(c,{id:`when-to-use`,label:`Когда какой радиус`,children:[(0,T.jsxs)(a,{children:[(0,T.jsx)(r,{children:(0,T.jsxs)(u,{children:[(0,T.jsx)(n,{"data-label":!0,children:`Element`}),(0,T.jsx)(n,{"data-label":!0,children:`Height`}),(0,T.jsx)(n,{"data-label":!0,children:`Radius`}),(0,T.jsx)(n,{"data-label":!0,children:`Ratio`})]})}),(0,T.jsx)(t,{children:E.map(e=>(0,T.jsxs)(u,{children:[(0,T.jsx)(_,{children:e.el}),(0,T.jsx)(_,{tone:`muted`,children:e.h}),(0,T.jsx)(_,{children:e.r}),(0,T.jsx)(_,{tone:`muted`,children:e.ratio})]},e.el))})]}),(0,T.jsx)(i,{children:`Правило: radius/height ratio около 5-10% для интерактивных элементов. Для контейнеров ratio ниже (1-3%), для badge/tag используется pill-like rounded-4xl. CRT sidebar — исключение: 0px (pixel-sharp edges совместимы с Pixelify Sans).`})]}),(0,T.jsxs)(c,{id:`border-tokens`,label:`Токены границ`,children:[(0,T.jsx)(i,{children:`Глубина стратегии borders-only: никаких box-shadow. Границы через oklch с opacity для автоматической адаптации к light/dark.`}),(0,T.jsx)(y,{tokens:[{token:`--trace`,value:S[`color.primitive.trace`].value,preview:`border`,previewValue:`var(--trace)`},{token:`--trace-strong`,value:S[`color.primitive.trace-strong`].value,preview:`border`,previewValue:`var(--trace-strong)`},{token:`--surface-border`,value:S[`color.primitive.surface-border`].value,preview:`border`,previewValue:`var(--surface-border)`},{token:`--border`,value:`var(--trace)`,preview:`border`,previewValue:`var(--border)`},{token:`--input`,value:`var(--trace-strong)`,preview:`border`,previewValue:`var(--input)`}]}),(0,T.jsxs)(x,{title:`Шкала opacity границ`,description:`Dark mode инвертирует: neutral trace 12%, input trace 22%, surface border 18%.`,code:`{/* Default border — карточки, разделители */}
<div className="border border-border" />

{/* Strong border — inputs, акцентированные границы */}
<div className="border border-input" />

{/* Section divider — линия после label */}
<div className="section-divider">
  <h3 data-label>Section</h3>
  {/* ::after { height: 1px; background: var(--border) } */}
</div>`,layout:`stack`,children:[(0,T.jsx)(l,{size:`sm`,children:(0,T.jsx)(s,{children:(0,T.jsx)(g,{children:`border-border (--trace: 12%)`})})}),(0,T.jsx)(h,{readOnly:!0,"aria-label":`Образец border-input`,value:`border-input (--trace-strong: 20% / 22% dark)`}),(0,T.jsx)(c,{label:`section divider`,children:(0,T.jsxs)(d,{children:[`::after `,`{`,` height: 1px; background: var(--border) `,`}`]})})]})]}),(0,T.jsxs)(c,{id:`focus-ring`,label:`Кольцо фокуса`,children:[(0,T.jsx)(i,{children:`Нажми Tab для навигации по элементам ниже — focus ring появится автоматически.`}),(0,T.jsxs)(x,{title:`Focus Visible`,description:`1.5px solid teal, offset 1px. Единый стиль для всех интерактивных элементов.`,code:`/* Глобальный override */
[data-style="theme"] :focus-visible {
  outline: 1.5px solid var(--teal);
  outline-offset: 1px;
  border-radius: 0.1875rem;
}`,children:[(0,T.jsx)(o,{variant:`outline`,size:`default`,children:`Button`}),(0,T.jsx)(h,{type:`text`,placeholder:`Input field`,"aria-label":`Input field`})]})]}),(0,T.jsx)(c,{id:`component-radius`,label:`Радиус компонентов`,children:(0,T.jsx)(x,{title:`Component radius map`,description:`Живые DS-компоненты показывают, где применяется rounded-4xl/lg и где остаётся sharp CRT shell.`,code:`/* Card: 3px */
[data-style="theme"] [data-slot="card"] {
  border-radius: 0.1875rem;
  box-shadow: none;  /* borders-only */
}

/* Badge: rounded-4xl (7.8px) */
[data-style="theme"] [data-slot="badge"] {
  border-radius: calc(var(--radius) * 2.6);
}

/* Button: 3px */
[data-style="theme"] [data-slot="button"] {
  border-radius: 0.1875rem;
}

/* Input: 3px */
[data-style="theme"] [data-slot="input"] {
  border-radius: 0.1875rem;
}

/* CRT sidebar: 0 */
.crt-sidebar { border-radius: 0; }`,layout:`block`,children:(0,T.jsx)(b,{})})})]})})})}export{O as default};