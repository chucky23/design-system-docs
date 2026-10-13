import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,I as n,O as r,Rn as i,ar as a,br as o}from"./chunk-5DUEG3R3-896u-HpP.js";import{A as s,I as c,r as l}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as u,t as d}from"./docs-article-DBNRC-Xz.js";var f=e(),p=[{id:`duration-tokens`,label:`Длительности`},{id:`easing-tokens`,label:`Кривые плавности`},{id:`patterns`,label:`Паттерны`},{id:`crt-effects`,label:`CRT-эффекты`},{id:`reduced-motion`,label:`Уменьшение движения`},{id:`scrollbar`,label:`Полоса прокрутки`}];function m(){return(0,f.jsx)(n,{title:`Motion`,description:`Семь duration-токенов и три easing. Паттерны hover/press/state через CSS-переменные. CRT-эффекты как signature.`,breadcrumbs:d(`/motion`),children:(0,f.jsx)(r,{presentation:`article`,label:`Motion`,inspector:u(p),document:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i,{children:[`Motion-слой строится на токенах. `,(0,f.jsx)(a,{children:`--motion-instant/quick/base/slow`}),` — стандартные состояния.`,` `,(0,f.jsx)(a,{children:`--motion-crt-step`}),`, `,(0,f.jsx)(a,{children:`--motion-crt-cycle`}),` и `,(0,f.jsx)(a,{children:`--motion-snake-cycle`}),` — внутренние анимации CRT и spinner. Все transition'ы отключаются под `,(0,f.jsx)(a,{children:`prefers-reduced-motion: reduce`}),`.`]}),(0,f.jsxs)(o,{id:`duration-tokens`,label:`Длительности`,children:[(0,f.jsxs)(i,{children:[`Семь токенов покрывают четыре уровня скорости и три внутренних цикла.`,` `,(0,f.jsx)(a,{children:`--motion-instant`}),` (80ms) — press на мелких элементах.`,` `,(0,f.jsx)(a,{children:`--motion-quick`}),` (120ms) — стандартный hover/press.`,` `,(0,f.jsx)(a,{children:`--motion-base`}),` (200ms) — state transitions.`,` `,(0,f.jsx)(a,{children:`--motion-slow`}),` (400ms) — modal open/close.`,` `,(0,f.jsx)(a,{children:`--motion-crt-step`}),` (80ms) — CRT scanline step.`,` `,(0,f.jsx)(a,{children:`--motion-crt-cycle`}),` (7s) — CRT phosphor tremor cycle.`,` `,(0,f.jsx)(a,{children:`--motion-snake-cycle`}),` (1600ms) — spinner snake period.`]}),(0,f.jsx)(c,{tokens:[{token:`--motion-instant`,value:`80ms`,preview:`spacing`},{token:`--motion-quick`,value:`120ms`,preview:`spacing`},{token:`--motion-base`,value:`200ms`,preview:`spacing`},{token:`--motion-slow`,value:`400ms`,preview:`spacing`},{token:`--motion-crt-step`,value:`80ms`,preview:`spacing`},{token:`--motion-crt-cycle`,value:`7s`,preview:`spacing`},{token:`--motion-snake-cycle`,value:`1600ms`,preview:`spacing`}]})]}),(0,f.jsxs)(o,{id:`easing-tokens`,label:`Кривые плавности`,children:[(0,f.jsxs)(i,{children:[`Три easing'а. `,(0,f.jsx)(a,{children:`--ease-out`}),` — стандартный для hover/press/state.`,` `,(0,f.jsx)(a,{children:`--ease-in-out`}),` — симметричный для modal и крупных переходов.`,` `,(0,f.jsx)(a,{children:`--ease-step`}),` — дискретный для scanline и CRT-анимаций без плавной интерполяции.`]}),(0,f.jsx)(c,{tokens:[{token:`--ease-out`,value:`cubic-bezier(0.2, 0, 0, 1)`},{token:`--ease-in-out`,value:`cubic-bezier(0.4, 0, 0.2, 1)`},{token:`--ease-step`,value:`step-end`}]})]}),(0,f.jsxs)(o,{id:`patterns`,label:`Паттерны`,children:[(0,f.jsxs)(i,{children:[`Единый паттерн для всех интерактивных `,(0,f.jsx)(a,{children:`[data-slot]`}),`: `,(0,f.jsx)(a,{children:`120ms ease-out`}),` на border, color, bg, outline. Press на button — 80ms translateY + opacity.`]}),(0,f.jsx)(l,{title:`hover (quick 120ms ease-out)`,description:`Border и background переключаются по hover.`,code:`.demo {
  transition:
    border-color var(--motion-quick) var(--ease-out),
    background-color var(--motion-quick) var(--ease-out);
}
.demo:hover {
  border-color: var(--signal-ok);
  background: var(--muted);
}`,children:(0,f.jsx)(s,{kind:`transition`,duration:`quick`,easing:`ease-out`})}),(0,f.jsx)(l,{title:`press (instant 80ms)`,description:`translateY + opacity за 80ms — субтильный клик-отклик.`,code:`[data-slot="button"]:active {
  transform: translateY(1px);
  opacity: 0.9;
  transition-duration: var(--motion-instant);
}`,children:(0,f.jsx)(i,{tone:`ghost`,children:`Нажми любую кнопку на странице — увидишь press-effect через 80ms.`})}),(0,f.jsx)(l,{title:`state (base 200ms)`,description:`Крупные state transitions: opacity + translate за 200ms.`,code:`.demo {
  transition:
    opacity var(--motion-base) var(--ease-out),
    transform var(--motion-base) var(--ease-out);
}`,children:(0,f.jsx)(s,{kind:`transform`,duration:`base`,easing:`ease-out`})}),(0,f.jsx)(l,{title:`modal (slow 400ms ease-in-out)`,description:`Modal open/close — fade + scale 0.96 → 1.`,code:`.modal-enter {
  transition:
    opacity var(--motion-slow) var(--ease-in-out),
    transform var(--motion-slow) var(--ease-in-out);
}
.modal-enter-from {
  opacity: 0;
  transform: scale(0.96);
}`,children:(0,f.jsx)(i,{tone:`ghost`,children:`Пример интеграции в Dialog или Sheet.`})}),(0,f.jsx)(l,{title:`skeleton (pulse 1500ms)`,description:`Loading placeholder — opacity-pulse 1.5s infinite.`,code:`<MotionSpecimen kind="skeleton" />
// Пакет владеет анимацией и отключает её при reduced motion.`,children:(0,f.jsx)(s,{kind:`skeleton`})})]}),(0,f.jsxs)(o,{id:`crt-effects`,label:`CRT-эффекты`,children:[(0,f.jsxs)(i,{children:[`CRT-эффекты применяются только к sidebar через `,(0,f.jsx)(a,{children:`.crt-item`}),` и `,(0,f.jsx)(a,{children:`.crt-item-active`}),`. Никогда в контентной области. Период tremor — `,(0,f.jsx)(a,{children:`--motion-crt-cycle`}),`, scanline step — `,(0,f.jsx)(a,{children:`--motion-crt-step`}),`.`]}),(0,f.jsx)(l,{title:`CRT Nav Item States`,description:`Hover: scanlines + interlace jitter + glow. Active: static scanlines + glow + rare h-glitch.`,code:`{/* CRT nav item — базовый */}
<a className="crt-item">Dashboard</a>

{/* CRT nav item — active */}
<a className="crt-item crt-item-active">Dashboard</a>

{/* CRT sidebar container */}
<nav className="crt-sidebar">...</nav>`,children:(0,f.jsx)(i,{tone:`ghost`,children:`Наведи курсор на пункт навигации сайта: боковая панель документации собрана из тех же CRT-пунктов.`})}),(0,f.jsx)(t,{copyLabel:`Скопировать код: развёртка и тремор CRT`,language:`css`,code:`/* Scanline interlace: NTSC 1/15s
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
}`}),(0,f.jsx)(t,{copyLabel:`Скопировать код: свечение пунктов навигации`,language:`css`,code:`/* Базовый glow — постоянный на всех nav items */
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
}`})]}),(0,f.jsxs)(o,{id:`reduced-motion`,label:`Уменьшение движения`,children:[(0,f.jsxs)(i,{children:[(0,f.jsx)(a,{children:`prefers-reduced-motion: reduce`}),` — обязательный. Все transition-duration сжимаются до `,(0,f.jsx)(a,{children:`0.01ms`}),`, CRT и spinner-анимации отключаются, spinner показывает статическую точку в центре.`]}),(0,f.jsx)(t,{copyLabel:`Скопировать код: уменьшение движения`,language:`css`,code:`@media (prefers-reduced-motion: reduce) {
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
}`})]}),(0,f.jsx)(o,{id:`scrollbar`,label:`Полоса прокрутки`,children:(0,f.jsx)(t,{copyLabel:`Скопировать код: полоса прокрутки`,language:`css`,code:`/* Тонкий 5px scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--trace); }
::-webkit-scrollbar-thumb:hover { background: var(--trace-strong); }`})})]})})})}export{m as default};