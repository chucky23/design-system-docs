import{$n as e,Ao as t,B as n,G as r,H as i,Hn as a,K as o,Ki as s,Mo as c,Nn as l,R as u,U as d,V as f,W as p,Z as m,c as h,kn as g,mr as _,q as v,si as y,z as b}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as x,M as S,r as C,s as w}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var T=c();function E(){return(0,T.jsxs)(w,{className:`flex flex-col gap-6`,children:[(0,T.jsx)(a,{title:`Feedback`,description:`Badge для индикаторов статуса, Skeleton для состояний загрузки, Toast на базе sonner. Signal-цвета диагностики кодируют смысл сообщения.`}),(0,T.jsx)(S,{className:`max-w-prose`,"data-body":!0,children:`Обратная связь кодируется цветом и формой, а не интенсивностью анимаций. Badge маркирует текущее состояние, Skeleton держит layout во время загрузки, EmptyState объясняет причину пустого списка. Signal-токены ok/warn/err/info работают одинаково во всех трёх.`}),(0,T.jsx)(e,{label:`badge variants`,children:(0,T.jsxs)(C,{title:`Badge Variants`,description:`default, secondary, outline, destructive. Terminal [bracket] style, 11px JetBrains Mono, tabular-nums.`,code:`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,children:[(0,T.jsx)(h,{children:`Default`}),(0,T.jsx)(h,{variant:`secondary`,children:`Secondary`}),(0,T.jsx)(h,{variant:`outline`,children:`Outline`}),(0,T.jsx)(h,{variant:`destructive`,children:`Destructive`})]})}),(0,T.jsx)(e,{label:`signal badges`,children:(0,T.jsxs)(C,{title:`Diagnostic Status Badges`,description:`Используй signal-токены для передачи статуса. Фон: signal-faint, текст: signal.`,code:`{/* OK / Healthy / Resolved */}
<Badge variant="ok">Healthy</Badge>

{/* Warning / In Progress */}
<Badge variant="warn">In Progress</Badge>

{/* Error / Critical */}
<Badge variant="err">Critical</Badge>

{/* Muted / Inactive */}
<Badge variant="secondary">Inactive</Badge>`,children:[(0,T.jsx)(h,{variant:`ok`,children:`Healthy`}),(0,T.jsx)(h,{variant:`ok`,children:`Resolved`}),(0,T.jsx)(h,{variant:`warn`,children:`In Progress`}),(0,T.jsx)(h,{variant:`warn`,children:`Monitoring`}),(0,T.jsx)(h,{variant:`err`,children:`Critical`}),(0,T.jsx)(h,{variant:`err`,children:`Failed`}),(0,T.jsx)(h,{variant:`secondary`,children:`Inactive`}),(0,T.jsx)(h,{variant:`secondary`,children:`Archived`})]})}),(0,T.jsx)(e,{label:`severity badges`,children:(0,T.jsxs)(C,{title:`Incident Severity`,description:`SEV-1 через SEV-4 с градацией от alert к muted.`,code:`<Badge variant="err">SEV-1</Badge>
<Badge variant="warn">SEV-2</Badge>
<Badge variant="info">SEV-3</Badge>
<Badge variant="secondary">SEV-4</Badge>`,children:[(0,T.jsx)(h,{variant:`err`,children:`SEV-1`}),(0,T.jsx)(h,{variant:`warn`,children:`SEV-2`}),(0,T.jsx)(h,{variant:`info`,children:`SEV-3`}),(0,T.jsx)(h,{variant:`secondary`,children:`SEV-4`})]})}),(0,T.jsx)(e,{label:`skeleton`,children:(0,T.jsx)(C,{title:`Skeleton Loading`,description:`Placeholder для известной структуры. Используй Skeleton вместо spinner, когда форма контента предсказуема.`,code:`{/* Single line */}
<Skeleton className="h-4 w-[200px]" />

{/* Card skeleton */}
<div className="flex flex-col gap-3">
  <Skeleton className="h-5 w-[120px]" />
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[180px]" />
</div>

{/* Avatar + text */}
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex flex-col gap-2">
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-3 w-[100px]" />
  </div>
</div>`,children:(0,T.jsxs)(w,{className:`flex w-full flex-col gap-6`,children:[(0,T.jsxs)(w,{className:`flex flex-col gap-2`,children:[(0,T.jsx)(S,{signal:`ghost`,className:`text-2xs`,"data-label":!0,children:`Text skeleton`}),(0,T.jsx)(y,{className:`h-5 w-[160px]`}),(0,T.jsx)(y,{className:`h-4 w-[280px]`}),(0,T.jsx)(y,{className:`h-4 w-[220px]`})]}),(0,T.jsxs)(w,{className:`rounded-sm border p-4`,children:[(0,T.jsx)(S,{signal:`ghost`,className:`text-2xs mb-3`,"data-label":!0,children:`Card skeleton`}),(0,T.jsxs)(w,{className:`flex flex-col gap-3`,children:[(0,T.jsxs)(w,{className:`flex items-center justify-between`,children:[(0,T.jsx)(y,{className:`h-5 w-[120px]`}),(0,T.jsx)(y,{className:`h-5 w-[60px]`})]}),(0,T.jsx)(y,{className:`h-4 w-full`}),(0,T.jsx)(y,{className:`h-4 w-3/4`}),(0,T.jsxs)(w,{className:`flex gap-2`,children:[(0,T.jsx)(y,{className:`h-8 w-[80px]`}),(0,T.jsx)(y,{className:`h-8 w-[80px]`})]})]})]}),(0,T.jsxs)(w,{children:[(0,T.jsx)(S,{signal:`ghost`,className:`text-2xs mb-3`,"data-label":!0,children:`Table row skeleton`}),(0,T.jsx)(w,{className:`flex flex-col gap-2`,children:[1,2,3].map(e=>(0,T.jsxs)(w,{className:`flex items-center gap-4 rounded-sm border p-2`,children:[(0,T.jsx)(y,{className:`h-4 w-[70px]`}),(0,T.jsx)(y,{className:`h-4 w-[180px]`}),(0,T.jsx)(y,{className:`h-5 w-[50px]`}),(0,T.jsx)(y,{className:`h-4 w-[60px]`})]},e))})]})]})})}),(0,T.jsx)(e,{label:`spinner`,children:(0,T.jsx)(C,{title:`Spinner`,description:`4×4 pixel-grid snake: блок бежит по периметру 800ms. При prefers-reduced-motion — статическая 2×2 точка в центре.`,code:`<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner label="Saving changes" />`,children:(0,T.jsxs)(w,{className:`flex items-center gap-4`,children:[(0,T.jsx)(t,{size:`sm`}),(0,T.jsx)(t,{}),(0,T.jsx)(t,{size:`lg`}),(0,T.jsx)(t,{size:`xl`}),(0,T.jsx)(t,{label:`Saving changes`})]})})}),(0,T.jsx)(e,{label:`spinner / button loading`,children:(0,T.jsxs)(C,{title:`Spinner внутри Button`,description:`Кнопка с loading=true показывает Spinner вместо иконки. Используется во время submit форм.`,code:`<Button loading>Saving…</Button>
<Button variant="outline" loading>Loading</Button>`,children:[(0,T.jsx)(s,{loading:!0,children:`Saving…`}),(0,T.jsx)(s,{variant:`outline`,loading:!0,children:`Loading`})]})}),(0,T.jsx)(e,{label:`copy button`,children:(0,T.jsx)(C,{title:`CopyButton`,description:`Кнопка копирования текста в буфер обмена. Показывает check-иконку после успешного копирования.`,code:`<CopyButton text="npm install @chucky23/design-system" />`,children:(0,T.jsx)(l,{text:`npm install @chucky23/design-system`})})}),(0,T.jsxs)(e,{label:`empty state`,children:[(0,T.jsx)(C,{title:`EmptyState — convenience`,description:`Compact API: title / description / icon / action — sub-components не нужны для типичных кейсов. Junior получает визуально полную карточку без явной сборки.`,code:`<EmptyState
  title="Пусто"
  description="Здесь пока нет записей. Создай первую."
  icon={<InboxIcon />}
  action={<Button>Создать</Button>}
/>`,children:(0,T.jsx)(u,{className:`w-full`,title:`Пусто`,description:`Здесь пока нет записей. Создай первую.`,icon:(0,T.jsx)(m,{tone:`info`}),action:(0,T.jsx)(s,{children:`Создать`})})}),(0,T.jsx)(C,{title:`EmptyState — композиционный`,description:`Полный API через sub-components — для тонкого контроля над разметкой и стилями.`,code:`<EmptyState>
  <EmptyStateIcon>
    <InboxIcon />
  </EmptyStateIcon>
  <EmptyStateTitle>Пусто</EmptyStateTitle>
  <EmptyStateDescription>
    Здесь пока нет записей. Создай первую.
  </EmptyStateDescription>
  <EmptyStateAction>
    <Button>Создать</Button>
  </EmptyStateAction>
</EmptyState>`,children:(0,T.jsxs)(u,{className:`w-full`,children:[(0,T.jsx)(f,{children:(0,T.jsx)(m,{tone:`info`})}),(0,T.jsx)(i,{children:`Пусто`}),(0,T.jsx)(n,{children:`Здесь пока нет записей. Создай первую.`}),(0,T.jsx)(b,{children:(0,T.jsx)(s,{children:`Создать`})})]})})]}),(0,T.jsxs)(e,{label:`error state`,children:[(0,T.jsx)(C,{title:`ErrorState — convenience`,description:`Compact API: title / description / action. Без override иконка — SignalIcon tone=err.`,code:`<ErrorState
  title="Не удалось загрузить"
  description="Проверь соединение и попробуй ещё раз."
  action={<Button variant="outline">Повторить</Button>}
/>`,children:(0,T.jsx)(d,{className:`w-full`,title:`Не удалось загрузить`,description:`Проверь соединение и попробуй ещё раз.`,action:(0,T.jsx)(s,{variant:`outline`,children:`Повторить`})})}),(0,T.jsx)(C,{title:`ErrorState — композиционный`,description:`Полный API через sub-components. Используй когда нужна нестандартная иконка, особая разметка или дополнительный контент.`,code:`<ErrorState>
  <ErrorStateIcon>
    <SignalIcon tone="err" />
  </ErrorStateIcon>
  <ErrorStateTitle>Не удалось загрузить</ErrorStateTitle>
  <ErrorStateDescription>
    Проверь соединение и попробуй ещё раз.
  </ErrorStateDescription>
  <ErrorStateAction>
    <Button variant="outline">Повторить</Button>
  </ErrorStateAction>
</ErrorState>`,children:(0,T.jsxs)(d,{className:`w-full`,children:[(0,T.jsx)(o,{children:(0,T.jsx)(m,{tone:`err`})}),(0,T.jsx)(v,{children:`Не удалось загрузить`}),(0,T.jsx)(r,{children:`Проверь соединение и попробуй ещё раз.`}),(0,T.jsx)(p,{children:(0,T.jsx)(s,{variant:`outline`,children:`Повторить`})})]})})]}),(0,T.jsx)(e,{label:`theme toggle`,children:(0,T.jsx)(C,{title:`ThemeToggle`,description:`Переключатель темы (light/dark). Требует ThemeProvider на уровне приложения.`,code:`<ThemeToggle />`,children:(0,T.jsx)(_,{})})}),(0,T.jsxs)(e,{label:`toast (sonner)`,children:[(0,T.jsx)(S,{className:`mb-4`,"data-body":!0,children:`Toasts через sonner library. Появляются в нижнем правом углу. Используются для подтверждения действий, не для критических ошибок.`}),(0,T.jsx)(g,{language:`tsx`,code:`import { toast } from "sonner"

// Простое уведомление
toast("Incident created")

// С описанием
toast("Incident resolved", {
  description: "INC-4012 was resolved after 14m",
})

// Успех
toast.success("Deployed successfully")

// Ошибка
toast.error("Deployment failed", {
  description: "Check logs for details",
})

// С действием
toast("Incident assigned", {
  action: {
    label: "Undo",
    onClick: () => handleUndo(),
  },
})`})]}),(0,T.jsxs)(e,{label:`api reference`,children:[(0,T.jsx)(x,{title:`Badge Props`,props:[{name:`variant`,type:`"default" | "secondary" | "outline" | "destructive" | "ok" | "warn" | "err" | "info"`,defaultValue:`"default"`,description:`Visual style. Signal variants (ok, warn, err, info) for diagnostic badges.`},{name:`className`,type:`string`,defaultValue:`--`,description:`Custom styles override.`}]}),(0,T.jsx)(w,{className:`mt-4`,children:(0,T.jsx)(x,{title:`Skeleton Props`,props:[{name:`className`,type:`string`,defaultValue:`--`,description:`Width, height, border-radius via Tailwind`}]})})]})]})}export{E as default};