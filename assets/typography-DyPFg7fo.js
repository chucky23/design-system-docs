import{$n as e,Hn as t,Mo as n,Vn as r,er as i,kn as a}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{E as o,J as s,M as c,R as l,S as u,_ as d,a as f,c as p,g as m,k as h,m as g,q as _,r as v,s as y,x as b,z as x}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var S=n(),C=[{id:`font-stack`,label:`font stack`},{id:`type-scale`,label:`type scale`},{id:`heading-hierarchy`,label:`heading hierarchy`},{id:`text-roles`,label:`text roles`},{id:`body-paragraphs`,label:`body paragraphs`},{id:`lists`,label:`lists`},{id:`code-blocks`,label:`code blocks`},{id:`text-utilities`,label:`text utilities`},{id:`signal-text`,label:`signal text`}],w=[{key:`2xs`,label:`11px`,className:`text-2xs`},{key:`xs`,label:`12px`,className:`text-xs`},{key:`sm`,label:`14px`,className:`text-sm`},{key:`base`,label:`16px`,className:`text-base`},{key:`md`,label:`19px`,className:`text-md`},{key:`lg`,label:`23px`,className:`text-lg`},{key:`xl`,label:`28px`,className:`text-xl`},{key:`2xl`,label:`33px`,className:`text-2xl`},{key:`display`,label:`48px`,className:`text-display`}],T=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`];function E(){return(0,S.jsxs)(h,{gap:`lg`,children:[(0,S.jsx)(t,{title:`Typography`,description:`Три шрифта (JetBrains Mono / DM Sans / Pixelify Sans), модульная шкала 1.2× от 16px, list-маркеры ▸/·/─ для трёх уровней вложенности.`}),(0,S.jsx)(c,{className:`max-w-prose`,"data-body":!0,children:`Шкала считается формульно от базового 16px по коэффициенту 1.2 (minor third). Заголовки и labels — JetBrains Mono с tracked 0.02em. Body-текст — DM Sans. Pixelify Sans живёт только в CRT-сайдбаре.`}),(0,S.jsx)(f,{items:C}),(0,S.jsxs)(e,{id:`font-stack`,label:`font stack`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Три роли — три шрифта. Смешение запрещено: JetBrains Mono для терминальной иерархии (headings, labels, buttons, data), DM Sans для чтения документов и ввода текста, Pixelify Sans — только в CRT-сайдбаре.`}),(0,S.jsx)(v,{title:`Font Stack`,description:`Реальный рендер трёх гарнитур.`,codeLanguage:`css`,code:`/* CSS Custom Properties */
--font-heading: "JetBrains Mono", ui-monospace, monospace;
--font-sans: "DM Sans", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
--font-crt: "Pixelify Sans", monospace;`,children:(0,S.jsxs)(h,{className:`w-full`,gap:`md`,children:[(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`JetBrains Mono — headings, labels, data, buttons`}),(0,S.jsx)(c,{className:`mt-2 font-heading text-xl font-bold tracking-tight`,children:`The quick brown fox jumps over the lazy dog`}),(0,S.jsx)(c,{className:`mt-1 font-mono text-sm`,children:`0123456789 ABCDEF abcdef !@#$%^&*()`})]}),(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`DM Sans — body text`}),(0,S.jsx)(c,{className:`mt-2 text-base`,"data-body":!0,children:`The quick brown fox jumps over the lazy dog`}),(0,S.jsx)(c,{className:`mt-1`,"data-body":!0,children:`Длинный текст описания для проверки читаемости при плотной подаче данных в интерфейсе мониторинга.`})]}),(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`Pixelify Sans — CRT sidebar only`}),(0,S.jsx)(c,{className:`mt-2 font-crt text-lg`,children:`The quick brown fox jumps over the lazy dog`}),(0,S.jsx)(c,{className:`mt-1 font-crt text-sm text-muted-foreground`,children:`DASHBOARD / INCIDENTS / SERVICES / METRICS`})]})]})}),(0,S.jsx)(a,{language:`css`,code:`--font-heading: "JetBrains Mono", ui-monospace, monospace;
--font-sans: "DM Sans", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
--font-crt: "Pixelify Sans", monospace;`})]}),(0,S.jsxs)(e,{id:`type-scale`,label:`type scale`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Шкала 10 токенов от 11px до 48px. Специальный text-data (13px / 1.3) для data-dense секций.`}),(0,S.jsx)(_,{tokens:[{token:`text-2xs`,value:`11px / 0.6875rem`,preview:`spacing`},{token:`text-xs`,value:`12px / 0.75rem`,preview:`spacing`},{token:`text-sm`,value:`14px / 0.875rem`,preview:`spacing`},{token:`text-base`,value:`16px / 1rem`,preview:`spacing`},{token:`text-md`,value:`19px / 1.1875rem`,preview:`spacing`},{token:`text-lg`,value:`23px / 1.4375rem`,preview:`spacing`},{token:`text-xl`,value:`28px / 1.75rem`,preview:`spacing`},{token:`text-2xl`,value:`33px / 2.0625rem`,preview:`spacing`},{token:`text-display`,value:`48px / 3rem`,preview:`spacing`},{token:`text-data`,value:`13px / 0.8125rem (tabular-nums)`,preview:`spacing`}]}),(0,S.jsx)(v,{title:`Live preview`,description:`Все 9 размеров из модульной шкалы с pangram'ом.`,code:`<span className="text-2xs">The quick brown fox</span>
<span className="text-xs">The quick brown fox</span>
<span className="text-sm">The quick brown fox</span>
<span className="text-base">The quick brown fox</span>
<span className="text-md">The quick brown fox</span>
<span className="text-lg">The quick brown fox</span>
<span className="text-xl">The quick brown fox</span>
<span className="text-2xl">The quick brown fox</span>
<span className="text-display">The quick brown fox</span>`,children:(0,S.jsx)(h,{className:`w-full`,gap:`sm`,children:w.map(({key:e,label:t,className:n})=>(0,S.jsxs)(o,{align:`center`,wrap:!1,children:[(0,S.jsxs)(c,{as:`span`,tone:`label`,className:`w-24`,children:[`text-`,e]}),(0,S.jsx)(c,{as:`span`,className:n,children:`The quick brown fox`}),(0,S.jsx)(c,{as:`span`,tone:`numeric`,signal:`ghost`,className:`ml-auto text-2xs`,children:t})]},e))})})]}),(0,S.jsxs)(e,{id:`heading-hierarchy`,label:`heading hierarchy`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`На каждой странице уже есть один h1 в PageHeader. Внутри контента используй h2 для крупных разделов, h3–h4 для вложенных блоков, а h5–h6 оставляй для плотных служебных подписей. Так документ читается как структура, а не как набор одинаковых строк.`}),(0,S.jsx)(v,{title:`h1–h6`,description:`Реальный рендер каждого уровня с размером и ролью.`,code:`<h1 className="text-2xl font-bold">Observability dashboard</h1>
<h2 className="text-xl font-semibold">Service topology</h2>
<h3 className="text-lg font-medium">Incidents by severity</h3>
<h4 className="text-md font-medium">P0 actions</h4>
<h5 className="text-base font-semibold">Playbook</h5>
<h6 className="text-sm font-semibold uppercase tracking-wider">Last updated</h6>`,children:(0,S.jsx)(h,{className:`w-full`,gap:`none`,children:T.map(e=>(0,S.jsx)(s,{role:e},e))})})]}),(0,S.jsxs)(e,{id:`body-paragraphs`,label:`body paragraphs`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Body нужен для текста, который пользователь действительно читает: пояснения к разделам, описания поведения, короткие инструкции. Muted оставляй для подписей и второстепенного контекста, который помогает, но не должен спорить с основным содержанием.`}),(0,S.jsx)(v,{title:`body / muted`,description:`Один размер, два уровня контраста. Signal-ghost как body-цвет не используется.`,code:`<p className="max-w-prose" data-body>Body — основной текст.</p>
<p className="text-sm text-muted-foreground">Muted — второстепенное пояснение или подпись.</p>`,children:(0,S.jsxs)(h,{className:`w-full`,gap:`sm`,children:[(0,S.jsxs)(c,{className:`max-w-prose`,"data-body":!0,children:[(0,S.jsx)(c,{as:`strong`,tone:`strong`,children:`Body.`}),` Каждый элемент интерфейса передаёт диагностический сигнал. Плотная подача внутри секций, просторные промежутки между ними.`]}),(0,S.jsxs)(c,{className:`text-sm text-muted-foreground`,children:[(0,S.jsx)(c,{as:`strong`,tone:`strong`,children:`Muted.`}),` OKLCh — перцептуально однородное цветовое пространство. Используется для подписей к графикам, figcaption и второстепенных пояснений.`]})]})}),(0,S.jsx)(v,{title:`Blockquote`,description:`Цитата с боковой полосой signal-ok.`,code:`<DocsText as="blockquote" borderSignal="ok" className="border-l-2 pl-4 italic" data-body>
  Хороший дашборд — тот, на который не нужно смотреть.
</DocsText>`,children:(0,S.jsx)(c,{as:`blockquote`,borderSignal:`ok`,className:`border-l-2 pl-4 italic`,"data-body":!0,children:`Хороший дашборд — тот, на который не нужно смотреть. Если всё зелёное, значит всё работает. Внимание нужно только при смене цвета.`})}),(0,S.jsx)(v,{title:`Figure`,description:`Иллюстрация с figcaption.`,code:`<figure>
  <img src="..." alt="..." />
  <figcaption className="text-xs text-muted-foreground">
    Рис. 1 — архитектура токенов.
  </figcaption>
</figure>`,children:(0,S.jsx)(m,{className:`w-full`,caption:`Рис. 1 — Архитектура дизайн-токенов: primitives → semantic → signal diagnostic.`,children:(0,S.jsx)(y,{surface:`muted`,className:`flex h-32 items-center justify-center text-sm text-muted-foreground`,children:`Image placeholder (960 × 540)`})})})]}),(0,S.jsxs)(e,{id:`lists`,label:`lists`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Используй списки, когда порядок или вложенность важнее абзаца. Маркеры и номера уже настроены токенами: первый уровень должен быстро сканироваться, вложенные уровни — оставаться читаемыми рядом с inline code и короткими командами.`}),(0,S.jsx)(v,{title:`bullet / ordered / definition`,description:`Три типа списков: ненумерованный с тремя уровнями маркеров, нумерованный с фиксированной колонкой номера, definition list.`,code:`<ul data-body>
  <li>Foundations
    <ul>
      <li>Colors
        <ul><li>Semantic tokens</li></ul>
      </li>
    </ul>
  </li>
</ul>

<ol data-body data-typography-ordered-list>
  <li>Установи Node.js 20+
    <ol>
      <li>Клонируй репозиторий
        <ol><li>npm install</li></ol>
      </li>
    </ol>
  </li>
</ol>

<dl data-body>
  <dt><code>--motion-quick</code></dt>
  <dd>120ms, стандартный hover.</dd>
</dl>`,children:(0,S.jsxs)(d,{columns:3,className:`w-full`,children:[(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`unordered (3 уровня)`}),(0,S.jsxs)(b,{className:`mt-2`,children:[(0,S.jsxs)(u,{children:[`Foundations`,(0,S.jsxs)(b,{children:[(0,S.jsxs)(u,{children:[`Colors и OKLCh primitives`,(0,S.jsxs)(b,{children:[(0,S.jsx)(u,{children:`Semantic tokens`}),(0,S.jsx)(u,{children:`Signal diagnostics`})]})]}),(0,S.jsx)(u,{children:`Typography`}),(0,S.jsx)(u,{children:`Spacing`})]})]}),(0,S.jsx)(u,{children:`Components`}),(0,S.jsx)(u,{children:`Patterns`})]})]}),(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`ordered (3 уровня)`}),(0,S.jsxs)(b,{as:`ol`,className:`mt-2`,"data-body":!0,"data-typography-ordered-list":!0,children:[(0,S.jsxs)(u,{children:[`Настрой окружение`,(0,S.jsxs)(b,{as:`ol`,children:[(0,S.jsx)(u,{children:`Установи Node.js 20+`}),(0,S.jsxs)(u,{children:[`Клонируй репозиторий`,(0,S.jsxs)(b,{as:`ol`,children:[(0,S.jsx)(u,{children:(0,S.jsx)(l,{children:`git clone`})}),(0,S.jsx)(u,{children:(0,S.jsx)(l,{children:`npm install`})})]})]})]})]}),(0,S.jsxs)(u,{children:[`Запусти `,(0,S.jsx)(l,{children:`npm run dev`})]}),(0,S.jsx)(u,{children:`Открой дашборд`})]})]}),(0,S.jsxs)(y,{border:!0,padding:`md`,children:[(0,S.jsx)(c,{as:`span`,tone:`label`,children:`definition list`}),(0,S.jsx)(g,{className:`mt-2`,items:[{term:(0,S.jsx)(p,{children:`--motion-quick`}),description:`120ms, стандартный hover.`},{term:(0,S.jsx)(p,{children:`--motion-base`}),description:`200ms, state transitions.`},{term:(0,S.jsx)(p,{children:`--motion-slow`}),description:`400ms, панели и overlays.`}]})]})]})})]}),(0,S.jsxs)(e,{id:`code-blocks`,label:`code blocks`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Три формата: inline для переменных и команд, block — для сниппетов, diff — для миграций. Все используют JetBrains Mono.`}),(0,S.jsx)(v,{title:`inline code`,description:`Inline-код внутри абзаца для CSS-переменных и команд.`,code:`<p data-body>
  Запусти <code>npm run tokens:build</code>, затем перезапусти <code>dev</code>.
</p>`,children:(0,S.jsxs)(c,{"data-body":!0,children:[`Запусти `,(0,S.jsx)(p,{children:`npm run tokens:build`}),`, затем перезапусти`,` `,(0,S.jsx)(p,{children:`dev`}),`.`]})}),(0,S.jsx)(v,{title:`block code`,description:`Pre + code для сниппетов в несколько строк.`,code:`<pre className="w-full overflow-x-auto rounded-sm border border-border bg-muted/40 p-3 text-sm leading-relaxed">
  <code className="font-mono">{\`const signal = {
  ok:   var(--signal-ok),
  warn: var(--signal-warn),
  err:  var(--signal-err),
}\`}</code>
</pre>`,children:(0,S.jsx)(a,{language:`javascript`,className:`w-full`,code:`const signal = {
  ok:   var(--signal-ok),
  warn: var(--signal-warn),
  err:  var(--signal-err),
}`})}),(0,S.jsx)(v,{title:`diff`,description:`Удаление — signal-err-faint, добавление — signal-ok-faint.`,code:`<pre>
  <code>
    <span className="block bg-signal-err-faint text-signal-err">- color: oklch(0.5 0.18 20);</span>
    <span className="block bg-signal-ok-faint text-signal-ok">+ color: var(--teal);</span>
  </code>
</pre>`,children:(0,S.jsx)(a,{language:`diff`,className:`w-full`,code:`- color: var(--signal-err);
+ color: var(--teal);`})})]}),(0,S.jsxs)(e,{id:`text-utilities`,label:`text utilities`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Data-атрибуты и Tailwind-утилиты для специальных режимов текста. data-label даёт uppercase + tracked, data-numeric — tabular-nums, truncate — ellipsis при переполнении, text-balance — сбалансированный перенос заголовков.`}),(0,S.jsx)(v,{title:`uppercase + tracked (data-label)`,description:`Микро-лейбл для поля, колонки или группы данных. Для заголовков секций используй SectionBlock/SubsectionHeader.`,code:`<EyebrowLabel tone="muted">field label</EyebrowLabel>`,children:(0,S.jsx)(r,{tone:`muted`,children:`field label`})}),(0,S.jsx)(v,{title:`truncate`,description:`Однострочный текст с ellipsis при переполнении контейнера.`,code:`<div className="w-64 rounded-sm border border-border px-3 py-2">
  <span className="block truncate text-sm">
    A very long string of text that will not wrap but gets clipped with ellipsis
  </span>
</div>`,children:(0,S.jsx)(y,{border:!0,className:`w-64 px-3 py-2`,children:(0,S.jsx)(c,{as:`span`,className:`block truncate text-sm`,children:`A very long string of text that will not wrap but gets clipped with ellipsis`})})}),(0,S.jsx)(v,{title:`tabular-nums (data-numeric)`,description:`Моноширинные цифры для выравнивания колонок.`,code:`<div className="flex gap-6 font-mono text-lg">
  <span data-numeric>1 234 567</span>
  <span data-numeric>8 901 234</span>
  <span data-numeric>56 789</span>
</div>`,children:(0,S.jsxs)(o,{className:`font-mono text-lg`,gap:`lg`,children:[(0,S.jsx)(c,{as:`span`,tone:`numeric`,children:`1 234 567`}),(0,S.jsx)(c,{as:`span`,tone:`numeric`,children:`8 901 234`}),(0,S.jsx)(c,{as:`span`,tone:`numeric`,children:`56 789`})]})}),(0,S.jsx)(v,{title:`text-balance`,description:`Сбалансированный перенос строк для длинных заголовков.`,code:`<h3 className="max-w-xs text-xl font-bold text-balance">
  Balanced wrapping for a long heading that benefits from balanced line breaks
</h3>`,children:(0,S.jsx)(c,{className:`max-w-xs text-balance text-xl font-bold`,children:`Balanced wrapping for a long heading that benefits from balanced line breaks`})}),(0,S.jsx)(v,{title:`keyboard shortcuts (<kbd>)`,description:`Border + muted-bg + JetBrains Mono для горячих клавиш в подсказках и палитрах команд.`,code:`<p data-body>
  Открой палитру командой <KeyboardKey>⌘</KeyboardKey> + <KeyboardKey className="mr-px">K</KeyboardKey>,
  навигация — <KeyboardKey>↑</KeyboardKey> <KeyboardKey className="mr-px">↓</KeyboardKey>.
</p>`,children:(0,S.jsxs)(c,{"data-body":!0,children:[`Открой палитру командой`,` `,(0,S.jsx)(x,{children:`⌘`}),(0,S.jsx)(c,{as:`span`,signal:`ghost`,children:` + `}),(0,S.jsx)(x,{className:`mr-px`,children:`K`}),`, навигация —`,` `,(0,S.jsx)(x,{children:`↑`}),` `,(0,S.jsx)(x,{className:`mr-px`,children:`↓`}),`, подтверждение —`,` `,(0,S.jsx)(x,{children:`Enter`}),`.`]})})]}),(0,S.jsxs)(e,{id:`text-roles`,label:`text roles`,children:[(0,S.jsxs)(c,{className:`mb-4`,"data-body":!0,children:[`Готовые компоненты для типовых текстовых ролей. Используй их вместо ручной сборки через `,(0,S.jsx)(p,{children:`font-heading uppercase tracking-*`}),`. Так типографика не расходится между страницами.`]}),(0,S.jsx)(v,{title:`SubsectionHeader`,description:`Subsection — уровень между PageHeader и SectionBlock.`,code:`<SubsectionHeader
  title="Source services"
  description="12 сервисов в активной ротации."
/>`,children:(0,S.jsx)(i,{title:`Source services`,description:`12 сервисов в активной ротации.`})}),(0,S.jsx)(v,{title:`EyebrowLabel`,description:`Uppercase-метка поверх контента.`,code:`<EyebrowLabel tone="muted">Source services</EyebrowLabel>
<EyebrowLabel tone="ghost" size="sm">Shells</EyebrowLabel>`,children:(0,S.jsxs)(h,{className:`w-full`,gap:`sm`,children:[(0,S.jsx)(r,{tone:`muted`,children:`Source services`}),(0,S.jsx)(r,{tone:`ghost`,size:`sm`,children:`Shells`})]})})]}),(0,S.jsxs)(e,{id:`signal-text`,label:`signal text`,children:[(0,S.jsx)(c,{className:`mb-4`,"data-body":!0,children:`Цветной текст для диагностических сообщений. Используй ТОЛЬКО в контексте состояния (ok / warn / err / info). Ghost — приглушённые метки без semantic-нагрузки.`}),(0,S.jsx)(v,{title:`Signal text API`,description:`Пять signal-цветов: teal / amber / red / blue / fog.`,code:`<DocsText signal="ok">ok — teal, hue 185°</DocsText>
<DocsText signal="warn">warn — amber, hue 35°</DocsText>
<DocsText signal="err">err — red, hue 5°</DocsText>
<DocsText signal="info">info — blue, hue 260°</DocsText>
<DocsText signal="ghost">ghost — muted label</DocsText>`,children:(0,S.jsxs)(h,{className:`w-full`,gap:`sm`,children:[(0,S.jsx)(c,{signal:`ok`,children:`ok — teal, hue 185°`}),(0,S.jsx)(c,{signal:`warn`,children:`warn — amber, hue 35°`}),(0,S.jsx)(c,{signal:`err`,children:`err — red, hue 5°`}),(0,S.jsx)(c,{signal:`info`,children:`info — blue, hue 260°`}),(0,S.jsx)(c,{signal:`ghost`,children:`ghost — muted label`})]})})]})]})}export{E as default};