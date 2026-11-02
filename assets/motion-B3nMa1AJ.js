import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Sr as r,j as i,kr as a,x as o}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{X as s,g as c,nt as l}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as u,r as d,t as f}from"./docs-article-CV9v0E7s.js";var p=e(),m=[{id:`duration-tokens`,label:`Длительности`},{id:`easing-tokens`,label:`Кривые плавности`},{id:`patterns`,label:`Паттерны`},{id:`reduced-motion`,label:`Уменьшение движения`},{id:`scrollbar`,label:`Полоса прокрутки`}];function h(){return(0,p.jsx)(i,{title:`Motion`,description:`Три длительности и две кривые: интерфейс движется быстро и тихо, как Zed. Растра, свечения и аберрации в системе нет.`,breadcrumbs:f(`/motion`),meta:u(`/motion`),children:(0,p.jsx)(o,{presentation:`article`,label:`Motion`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r,{children:[`Движение объясняет, что произошло: откуда появилось окно, куда легла карточка, что раскрылось в дереве. Все анимации пакета берут `,(0,p.jsx)(t,{children:`--motion-quick/base/slow`}),` и `,(0,p.jsx)(t,{children:`--ease-out/in`}),`.`,` `,(0,p.jsx)(t,{children:`--motion-snake-cycle`}),` — период анимации spinner. Под `,(0,p.jsx)(t,{children:`prefers-reduced-motion: reduce`}),` смена состояния мгновенная.`]}),(0,p.jsxs)(n,{id:`duration-tokens`,label:`Длительности`,children:[(0,p.jsxs)(r,{children:[`Норма — навык ui-animations: микро-отклик 100 мс, переход состояния 150–200 мс, пространственное перемещение 300 мс или пружина.`,` `,(0,p.jsx)(t,{children:`--motion-quick`}),` (100ms) — выход окон и строк, наведение, нажатие, фокус.`,` `,(0,p.jsx)(t,{children:`--motion-base`}),` (150ms) — вход всплывающих окон и палитры, раскрытие строк, смена вкладки.`,` `,(0,p.jsx)(t,{children:`--motion-slow`}),` (200ms) — вход модальных окон и панелей, приземление и перестановка карточек.`,` `,`Выход всегда быстрее входа.`,` `,(0,p.jsx)(t,{children:`--motion-snake-cycle`}),` (1600ms) — период spinner, не переход.`]}),(0,p.jsx)(l,{tokens:[{token:`--motion-quick`,value:`100ms`,preview:`spacing`},{token:`--motion-base`,value:`150ms`,preview:`spacing`},{token:`--motion-slow`,value:`200ms`,preview:`spacing`},{token:`--motion-spatial`,value:`300ms`,preview:`spacing`},{token:`--motion-spring-snappy`,value:`375ms`,preview:`spacing`},{token:`--motion-spring-default`,value:`512ms`,preview:`spacing`},{token:`--motion-spring-heavy`,value:`596ms`,preview:`spacing`},{token:`--motion-snake-cycle`,value:`1600ms`,preview:`spacing`}]})]}),(0,p.jsxs)(n,{id:`easing-tokens`,label:`Кривые плавности`,children:[(0,p.jsxs)(r,{children:[`Четыре кривые и пружины. `,(0,p.jsx)(t,{children:`--ease-out`}),` — вход и отклик: быстрый старт и мягкая остановка. `,(0,p.jsx)(t,{children:`--ease-in-out`}),` — перемещение между позициями, `,(0,p.jsx)(t,{children:`--ease-out-back`}),` — вход меню с лёгким перелётом, `,(0,p.jsx)(t,{children:`--spring-*`}),` — панели, лист, тост и перетаскивание.`,` `,(0,p.jsx)(t,{children:`--ease-in`}),` — выход: элемент уходит, ускоряясь, и не задерживает взгляд.`]}),(0,p.jsx)(l,{tokens:[{token:`--ease-out`,value:`cubic-bezier(0.2, 0, 0, 1)`},{token:`--ease-in`,value:`cubic-bezier(0.4, 0, 1, 1)`},{token:`--ease-in-out`,value:`cubic-bezier(0.65, 0, 0.35, 1)`},{token:`--ease-out-back`,value:`cubic-bezier(0.34, 1.3, 0.64, 1)`},{token:`--spring-default`,value:`linear(…) · stiffness 200, damping 20, mass 1`}]})]}),(0,p.jsxs)(n,{id:`patterns`,label:`Паттерны`,children:[(0,p.jsxs)(r,{children:[`Единый паттерн для интерактивных `,(0,p.jsx)(t,{children:`[data-slot]`}),`: `,(0,p.jsx)(t,{children:`--motion-quick --ease-out`}),` на border, color, bg, outline. Анимируются `,(0,p.jsx)(t,{children:`transform`}),` и `,(0,p.jsx)(t,{children:`opacity`}),`, высота — только у строк дерева, где без неё соседние строки прыгают.`]}),(0,p.jsx)(c,{title:`hover (quick 100ms ease-out)`,description:`Border и background переключаются по hover.`,code:`.demo {
  transition:
    border-color var(--motion-quick) var(--ease-out),
    background-color var(--motion-quick) var(--ease-out);
}
.demo:hover {
  border-color: var(--signal-ok);
  background: var(--muted);
}`,children:(0,p.jsx)(s,{kind:`transition`,duration:`quick`,easing:`ease-out`})}),(0,p.jsx)(c,{title:`state (base 150ms)`,description:`Смена состояния: opacity и translate за 150ms.`,code:`.demo {
  transition:
    opacity var(--motion-base) var(--ease-out),
    transform var(--motion-base) var(--ease-out);
}`,children:(0,p.jsx)(s,{kind:`transform`,duration:`base`,easing:`ease-out`})}),(0,p.jsx)(c,{title:`окно (вход slow 200ms, выход quick 100ms)`,description:`Dialog, AlertDialog и Sheet: вход — масштаб от 0.98 или сдвиг на 0.5rem, выход — затухание быстрее входа.`,code:`[data-slot="dialog-content"] {
  transition:
    opacity var(--motion-slow) var(--ease-out),
    transform var(--motion-slow) var(--ease-out);
}
[data-slot="dialog-content"][data-starting-style] { transform: scale(.98); }
[data-slot="dialog-content"][data-ending-style] {
  opacity: 0;
  transform: scale(.98);
  transition-duration: var(--motion-quick);
  transition-timing-function: var(--ease-in);
}`,children:(0,p.jsx)(r,{tone:`ghost`,children:`Пакет владеет этим переходом: своё движение поверх окон не добавляй.`})}),(0,p.jsx)(c,{title:`skeleton (pulse --motion-pulse)`,description:`Заглушка загрузки: прозрачность пульсирует с циклом --motion-pulse по --ease-in-out.`,code:`<MotionSpecimen kind="skeleton" />
// Пакет владеет анимацией и отключает её при reduced motion.`,children:(0,p.jsx)(s,{kind:`skeleton`})})]}),(0,p.jsxs)(n,{id:`reduced-motion`,label:`Уменьшение движения`,children:[(0,p.jsxs)(r,{children:[(0,p.jsx)(t,{children:`prefers-reduced-motion: reduce`}),` — обязательный. Все transition-duration сжимаются до `,(0,p.jsx)(t,{children:`0.01ms`}),`, анимации отключаются, spinner показывает статическую точку в центре.`]}),(0,p.jsx)(a,{copyLabel:`Скопировать код: уменьшение движения`,language:`css`,code:`@media (prefers-reduced-motion: reduce) {
  [data-style="theme"] * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}`})]}),(0,p.jsx)(n,{id:`scrollbar`,label:`Полоса прокрутки`,children:(0,p.jsx)(a,{copyLabel:`Скопировать код: полоса прокрутки`,language:`css`,code:`/* Тонкий 5px scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--trace); }
::-webkit-scrollbar-thumb:hover { background: var(--trace-strong); }`})})]})})})}export{h as default};