import{$n as e,Hn as t,Ki as n,Mo as r,Vn as i,cr as a,fi as o,nr as s,or as c,rr as l,sr as u,tr as d}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{E as f,M as p,X as m,i as h,k as g,q as _,r as v,s as y}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var b=r(),x=[{el:`Badge, tag`,h:`20px`,r:`rounded-4xl (7.8px)`,ratio:`~39%`},{el:`Button, input, select`,h:`32px`,r:`rounded-lg (3px)`,ratio:`~9%`},{el:`Card, table container`,h:`variable`,r:`rounded-lg (3px)`,ratio:`~2%`},{el:`Dialog, popover`,h:`large`,r:`rounded-lg (3px)`,ratio:`~1%`},{el:`Avatar, indicator`,h:`any`,r:`rounded-full`,ratio:`50%`},{el:`CRT sidebar items`,h:`29px`,r:`rounded-sm (1.8px)`,ratio:`6%`},{el:`CRT sidebar container`,h:`full`,r:`0 (sharp)`,ratio:`0%`}],S=[{label:`Badge`,meta:`h=20px — rounded-4xl (7.8px)`,className:`rounded-4xl px-2 py-0.5`},{label:`Button`,meta:`h=32px — rounded-lg (3px)`,className:`h-8 rounded-lg px-4`},{label:`Input field`,meta:`h=32px — rounded-lg (3px)`,className:`h-8 w-48 rounded-lg px-3`},{label:`Card`,meta:`h=variable — rounded-lg (3px)`,className:`h-24 w-64 justify-center rounded-lg`},{label:`Dialog / Popover`,meta:`h=large — rounded-lg (3px)`,className:`h-40 w-80 justify-center rounded-lg`}];function C(){return(0,b.jsxs)(g,{gap:`lg`,children:[(0,b.jsx)(t,{title:`Radius & Borders`,description:`Базовый радиус 3px (0.1875rem). Стратегия глубины borders-only — без box-shadow. CRT sidebar: 0px (пиксельные грани).`}),(0,b.jsx)(p,{className:`max-w-prose`,"data-body":!0,children:`Радиус и граница — единственные инструменты глубины в системе. Box-shadow запрещён: вместо него слой отделяется от фона subtle surface-shift и тонкой границей trace-strong. Все производные радиусы считаются от одной CSS-переменной, поэтому скейл меняется в одном месте.`}),(0,b.jsxs)(e,{label:`radius scale`,children:[(0,b.jsx)(p,{className:`mb-4`,"data-body":!0,children:`Базовый радиус: --radius = 0.1875rem (3px). Производные вычисляются через calc(var(--radius) * factor).`}),(0,b.jsx)(_,{tokens:[{token:`--radius (base)`,value:`0.1875rem (3px)`,preview:`radius`},{token:`rounded-sm`,value:`var(--radius) * 0.6 = 1.8px`,preview:`radius`},{token:`rounded-md`,value:`var(--radius) * 0.8 = 2.4px`,preview:`radius`},{token:`rounded-lg`,value:`var(--radius) = 3px`,preview:`radius`},{token:`rounded-xl`,value:`var(--radius) * 1.4 = 4.2px`,preview:`radius`},{token:`rounded-2xl`,value:`var(--radius) * 1.8 = 5.4px`,preview:`radius`},{token:`rounded-4xl`,value:`var(--radius) * 2.6 = 7.8px`,preview:`radius`},{token:`rounded-full`,value:`9999px`,preview:`radius`},{token:`CRT sidebar`,value:`0px`,preview:`radius`}]})]}),(0,b.jsxs)(e,{label:`radius scaling`,children:[(0,b.jsx)(p,{className:`mb-4`,"data-body":!0,children:`Радиус масштабируется с размером элемента. Маленьким элементам — маленький radius, крупным — больше. Соотношение radius/height остаётся визуально сбалансированным.`}),(0,b.jsx)(v,{title:`Radius по размеру элемента`,description:`Один radius на все размеры выглядит негармонично. Система подбирает radius пропорционально.`,code:`{/* Badge 20px -> rounded-4xl (pill) */}
<Badge>Label</Badge>

{/* Button 32px -> rounded-lg (3px) */}
<Button>Action</Button>

{/* Input 32px -> rounded-lg (3px) */}
<Input />

{/* Card ~200px -> rounded-lg (3px) */}
<Card>...</Card>

{/* Dialog / Popover -> rounded-lg (3px) */}
<Dialog>...</Dialog>`,children:(0,b.jsx)(g,{gap:`md`,className:`w-full`,children:S.map(e=>(0,b.jsxs)(f,{align:`center`,gap:`md`,children:[(0,b.jsx)(y,{border:!0,surface:`muted-faint`,className:`flex items-center font-mono text-xs text-muted-foreground ${e.className}`,children:e.label}),(0,b.jsx)(p,{as:`span`,tone:`label`,children:e.meta})]},e.label))})})]}),(0,b.jsxs)(e,{label:`when to use which`,children:[(0,b.jsx)(y,{border:!0,children:(0,b.jsxs)(d,{children:[(0,b.jsx)(u,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(c,{"data-label":!0,children:`Element`}),(0,b.jsx)(c,{"data-label":!0,children:`Height`}),(0,b.jsx)(c,{"data-label":!0,children:`Radius`}),(0,b.jsx)(c,{"data-label":!0,children:`Ratio`})]})}),(0,b.jsx)(s,{children:x.map(e=>(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{className:`font-mono text-xs`,children:e.el}),(0,b.jsx)(l,{tone:`muted`,className:`font-mono text-xs`,children:e.h}),(0,b.jsx)(l,{className:`font-mono text-xs`,children:e.r}),(0,b.jsx)(l,{tone:`muted`,className:`font-mono text-xs`,children:e.ratio})]},e.el))})]})}),(0,b.jsx)(p,{className:`mt-3 text-xs`,"data-body":!0,children:`Правило: radius/height ratio около 5-10% для интерактивных элементов. Для контейнеров ratio ниже (1-3%), для badge/tag используется pill-like rounded-4xl. CRT sidebar — исключение: 0px (pixel-sharp edges совместимы с Pixelify Sans).`})]}),(0,b.jsxs)(e,{label:`border tokens`,children:[(0,b.jsx)(p,{className:`mb-4`,"data-body":!0,children:`Глубина стратегии borders-only: никаких box-shadow. Границы через oklch с opacity для автоматической адаптации к light/dark.`}),(0,b.jsx)(_,{tokens:[{token:`--trace`,value:m[`color.primitive.trace`].value,preview:`border`,previewValue:`var(--trace)`},{token:`--trace-strong`,value:m[`color.primitive.trace-strong`].value,preview:`border`,previewValue:`var(--trace-strong)`},{token:`--surface-border`,value:m[`color.primitive.surface-border`].value,preview:`border`,previewValue:`var(--surface-border)`},{token:`--border`,value:`var(--trace)`,preview:`border`,previewValue:`var(--border)`},{token:`--input`,value:`var(--trace-strong)`,preview:`border`,previewValue:`var(--input)`}]}),(0,b.jsx)(v,{title:`Шкала opacity границ`,description:`Dark mode инвертирует: neutral trace 12%, input trace 22%, surface border 18%.`,code:`{/* Default border — карточки, разделители */}
<div className="border border-border" />

{/* Strong border — inputs, акцентированные границы */}
<div className="border border-input" />

{/* Section divider — линия после label */}
<div className="section-divider">
  <h3 data-label>Section</h3>
  {/* ::after { height: 1px; background: var(--border) } */}
</div>`,children:(0,b.jsxs)(g,{gap:`sm`,className:`w-full`,children:[(0,b.jsx)(y,{border:!0,padding:`md`,children:(0,b.jsx)(p,{className:`font-mono text-xs text-muted-foreground`,children:`border-border (--trace: 12%)`})}),(0,b.jsx)(y,{border:!0,padding:`md`,borderTone:`input`,children:(0,b.jsx)(p,{className:`font-mono text-xs text-muted-foreground`,children:`border-input (--trace-strong: 20% / 22% dark)`})}),(0,b.jsx)(y,{className:`section-divider`,children:(0,b.jsx)(i,{tone:`muted`,as:`h3`,children:`section divider`})})]})})]}),(0,b.jsx)(e,{label:`focus ring`,children:(0,b.jsx)(v,{title:`Focus Visible`,description:`1.5px solid teal, offset 1px. Единый стиль для всех интерактивных элементов.`,code:`/* Глобальный override */
[data-style="theme"] :focus-visible {
  outline: 1.5px solid var(--teal);
  outline-offset: 1px;
  border-radius: 0.1875rem;
}`,children:(0,b.jsxs)(g,{gap:`sm`,className:`w-full`,children:[(0,b.jsx)(p,{"data-body":!0,children:`Нажми Tab для навигации по элементам ниже — focus ring появится автоматически.`}),(0,b.jsxs)(f,{gap:`sm`,children:[(0,b.jsx)(n,{variant:`outline`,size:`default`,children:`Button`}),(0,b.jsx)(o,{type:`text`,placeholder:`Input field`,className:`w-48`})]})]})})}),(0,b.jsx)(e,{label:`component radius`,children:(0,b.jsx)(v,{title:`Component radius map`,description:`Живые DS-компоненты показывают, где применяется rounded-4xl/lg и где остаётся sharp CRT shell.`,code:`/* Card: 3px */
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
.crt-sidebar { border-radius: 0; }`,previewClassName:`block`,children:(0,b.jsx)(h,{})})})]})}export{C as default};