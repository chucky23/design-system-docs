import{$n as e,Hn as t,Mo as n,kn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as i,V as a,c as o,k as s,q as c,r as l,s as u}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var d=n();function f(){return(0,d.jsxs)(s,{gap:`lg`,children:[(0,d.jsx)(t,{title:`Motion`,description:`Семь duration-токенов и три easing. Паттерны hover/press/state через CSS-переменные. CRT-эффекты как signature.`}),(0,d.jsxs)(i,{className:`max-w-prose`,"data-body":!0,children:[`Motion-слой строится на токенах. `,(0,d.jsx)(o,{children:`--motion-instant/quick/base/slow`}),` — стандартные состояния.`,` `,(0,d.jsx)(o,{children:`--motion-crt-step`}),`, `,(0,d.jsx)(o,{children:`--motion-crt-cycle`}),` и `,(0,d.jsx)(o,{children:`--motion-snake-cycle`}),` — внутренние анимации CRT и spinner. Все transition'ы отключаются под `,(0,d.jsx)(o,{children:`prefers-reduced-motion: reduce`}),`.`]}),(0,d.jsxs)(e,{label:`duration tokens`,children:[(0,d.jsxs)(i,{className:`mb-4 max-w-prose`,"data-body":!0,children:[`Семь токенов покрывают четыре уровня скорости и три внутренних цикла.`,` `,(0,d.jsx)(o,{children:`--motion-instant`}),` (80ms) — press на мелких элементах.`,` `,(0,d.jsx)(o,{children:`--motion-quick`}),` (120ms) — стандартный hover/press.`,` `,(0,d.jsx)(o,{children:`--motion-base`}),` (200ms) — state transitions.`,` `,(0,d.jsx)(o,{children:`--motion-slow`}),` (400ms) — modal open/close.`,` `,(0,d.jsx)(o,{children:`--motion-crt-step`}),` (80ms) — CRT scanline step.`,` `,(0,d.jsx)(o,{children:`--motion-crt-cycle`}),` (7s) — CRT phosphor tremor cycle.`,` `,(0,d.jsx)(o,{children:`--motion-snake-cycle`}),` (1600ms) — spinner snake period.`]}),(0,d.jsx)(c,{tokens:[{token:`--motion-instant`,value:`80ms`,preview:`spacing`},{token:`--motion-quick`,value:`120ms`,preview:`spacing`},{token:`--motion-base`,value:`200ms`,preview:`spacing`},{token:`--motion-slow`,value:`400ms`,preview:`spacing`},{token:`--motion-crt-step`,value:`80ms`,preview:`spacing`},{token:`--motion-crt-cycle`,value:`7s`,preview:`spacing`},{token:`--motion-snake-cycle`,value:`1600ms`,preview:`spacing`}]})]}),(0,d.jsxs)(e,{label:`easing tokens`,children:[(0,d.jsxs)(i,{className:`mb-4 max-w-prose`,"data-body":!0,children:[`Три easing'а. `,(0,d.jsx)(o,{children:`--ease-out`}),` — стандартный для hover/press/state.`,` `,(0,d.jsx)(o,{children:`--ease-in-out`}),` — симметричный для modal и крупных переходов.`,` `,(0,d.jsx)(o,{children:`--ease-step`}),` — дискретный для scanline и CRT-анимаций без плавной интерполяции.`]}),(0,d.jsx)(c,{tokens:[{token:`--ease-out`,value:`cubic-bezier(0.2, 0, 0, 1)`},{token:`--ease-in-out`,value:`cubic-bezier(0.4, 0, 0.2, 1)`},{token:`--ease-step`,value:`step-end`}]})]}),(0,d.jsxs)(e,{label:`patterns`,children:[(0,d.jsxs)(i,{className:`mb-4 max-w-prose`,"data-body":!0,children:[`Единый паттерн для всех интерактивных `,(0,d.jsx)(o,{children:`[data-slot]`}),`: `,(0,d.jsx)(o,{children:`120ms ease-out`}),` на border, color, bg, outline. Press на button — 80ms translateY + opacity.`]}),(0,d.jsx)(l,{title:`hover (quick 120ms ease-out)`,description:`Border и background переключаются по hover.`,code:`.demo {
  transition:
    border-color var(--motion-quick) var(--ease-out),
    background-color var(--motion-quick) var(--ease-out);
}
.demo:hover {
  border-color: var(--signal-ok);
  background: var(--muted);
}`,children:(0,d.jsx)(a,{kind:`transition`,duration:`quick`,easing:`ease-out`})}),(0,d.jsx)(l,{title:`press (instant 80ms)`,description:`translateY + opacity за 80ms — субтильный клик-отклик.`,code:`[data-slot="button"]:active {
  transform: translateY(1px);
  opacity: 0.9;
  transition-duration: var(--motion-instant);
}`,children:(0,d.jsx)(i,{signal:`ghost`,className:`text-2xs`,"data-body":!0,children:`Нажми любую кнопку на странице — увидишь press-effect через 80ms.`})}),(0,d.jsx)(l,{title:`state (base 200ms)`,description:`Крупные state transitions: opacity + translate за 200ms.`,code:`.demo {
  transition:
    opacity var(--motion-base) var(--ease-out),
    transform var(--motion-base) var(--ease-out);
}`,children:(0,d.jsx)(a,{kind:`transform`,duration:`base`,easing:`ease-out`})}),(0,d.jsx)(l,{title:`modal (slow 400ms ease-in-out)`,description:`Modal open/close — fade + scale 0.96 → 1.`,code:`.modal-enter {
  transition:
    opacity var(--motion-slow) var(--ease-in-out),
    transform var(--motion-slow) var(--ease-in-out);
}
.modal-enter-from {
  opacity: 0;
  transform: scale(0.96);
}`,children:(0,d.jsx)(i,{signal:`ghost`,className:`text-2xs`,"data-body":!0,children:`Пример интеграции в Dialog или Sheet.`})}),(0,d.jsx)(l,{title:`skeleton (pulse 1500ms)`,description:`Loading placeholder — opacity-pulse 1.5s infinite.`,code:`<MotionSpecimen kind="skeleton" />
// Пакет владеет анимацией и отключает её при reduced motion.`,children:(0,d.jsx)(a,{kind:`skeleton`})})]}),(0,d.jsxs)(e,{label:`crt effects`,children:[(0,d.jsxs)(i,{className:`mb-4 max-w-prose`,"data-body":!0,children:[`CRT-эффекты применяются только к sidebar через `,(0,d.jsx)(o,{children:`.crt-item`}),` и `,(0,d.jsx)(o,{children:`.crt-item-active`}),`. Никогда в контентной области. Период tremor — `,(0,d.jsx)(o,{children:`--motion-crt-cycle`}),`, scanline step — `,(0,d.jsx)(o,{children:`--motion-crt-step`}),`.`]}),(0,d.jsx)(l,{title:`CRT Nav Item States`,description:`Hover: scanlines + interlace jitter + glow. Active: static scanlines + glow + rare h-glitch.`,code:`{/* CRT nav item — базовый */}
<a className="crt-item">Dashboard</a>

{/* CRT nav item — active */}
<a className="crt-item crt-item-active">Dashboard</a>

{/* CRT sidebar container */}
<nav className="crt-sidebar">...</nav>`,children:(0,d.jsxs)(s,{className:`w-full font-crt`,gap:`sm`,children:[(0,d.jsx)(i,{as:`span`,tone:`label`,children:`Наведи курсор для CRT-эффектов`}),(0,d.jsx)(u,{border:!0,padding:`sm`,surface:`background`,children:(0,d.jsxs)(s,{gap:`none`,children:[(0,d.jsx)(u,{className:`crt-item rounded-sm px-3 py-1.5 text-sm`,children:`Dashboard`}),(0,d.jsx)(u,{className:`crt-item crt-item-active rounded-sm px-3 py-1.5 text-sm`,children:`Incidents`}),(0,d.jsx)(u,{className:`crt-item rounded-sm px-3 py-1.5 text-sm`,children:`Services`}),(0,d.jsx)(u,{className:`crt-item rounded-sm px-3 py-1.5 text-sm`,children:`Metrics`})]})})]})}),(0,d.jsx)(r,{language:`css`,code:`/* Scanline interlace: NTSC 1/15s
   Текст не дрожит — дрожат только полосы */
@keyframes crt-interlace {
  0%, 50%  { background-position: 0 0; }
  51%, 100% { background-position: 0 2px; }
}

/* Редкий тремор: 96% idle, 4% micro-glitch
   Едва заметный — не мешает чтению */
@keyframes crt-tremor {
  0%, 96%    { transform: translateX(0); }
  96.5%      { transform: translateX(0.7px); }
  97%        { transform: translateX(-0.4px); }
  97.5%, 100% { transform: translateX(0); }
}`}),(0,d.jsx)(r,{language:`css`,code:`/* Базовый glow — постоянный на всех nav items */
.crt-item {
  text-shadow:
    0 0 4px oklch(0.68 0.13 185 / 20%),
    0 0 8px oklch(0.68 0.13 185 / 8%);
}

/* Hover glow — усиленный + chromatic spread */
.crt-item:hover {
  text-shadow:
    0 0 5px oklch(0.68 0.13 185 / 35%),
    0 0 10px oklch(0.68 0.13 185 / 15%),
    0.5px 0 14px oklch(0.68 0.13 185 / 8%);
}

/* Active glow — между base и hover */
.crt-item-active {
  text-shadow:
    0 0 5px oklch(0.68 0.13 185 / 30%),
    0 0 10px oklch(0.68 0.13 185 / 12%),
    0.3px 0 12px oklch(0.68 0.13 185 / 6%);
}`})]}),(0,d.jsxs)(e,{label:`reduced motion`,children:[(0,d.jsxs)(i,{className:`mb-4 max-w-prose`,"data-body":!0,children:[(0,d.jsx)(o,{children:`prefers-reduced-motion: reduce`}),` — обязательный. Все transition-duration сжимаются до `,(0,d.jsx)(o,{children:`0.01ms`}),`, CRT и spinner-анимации отключаются, spinner показывает статическую точку в центре.`]}),(0,d.jsx)(r,{language:`css`,code:`@media (prefers-reduced-motion: reduce) {
  [data-style="theme"] * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }

  [data-style="theme"] .crt-item,
  [data-style="theme"] .crt-item:hover,
  [data-style="theme"] .crt-item-active {
    animation: none !important;
  }

  [data-style="theme"] .crt-item:hover::after,
  [data-style="theme"] .crt-item-active::after {
    animation: none !important;
  }
}`})]}),(0,d.jsx)(e,{label:`scrollbar`,children:(0,d.jsx)(r,{language:`css`,code:`/* Тонкий 5px scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--trace); }
::-webkit-scrollbar-thumb:hover { background: var(--trace-strong); }`})})]})}export{f as default};