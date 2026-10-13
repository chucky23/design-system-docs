import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$ as t,An as n,Cr as r,Gn as i,I as a,J as o,Mn as s,Nn as c,O as l,On as u,Q as d,Rn as f,Sr as p,X as m,Y as h,Yn as g,Yr as _,Z as v,a as y,br as b,eo as x,et as S,gi as C,jr as w,kn as T,kr as E,nt as D,rt as O,tt as k,ut as A,wr as j}from"./chunk-5DUEG3R3-896u-HpP.js";import{dt as M,j as N,r as P}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as F,t as I}from"./docs-article-DBNRC-Xz.js";import"./recipes-BC5fuR3f.js";var L=e(),R=[{id:`usage`,label:`Использование`},{id:`signal-badges`,label:`Сигнальные Badge`},{id:`severity-badges`,label:`Severity`},{id:`skeleton`,label:`Skeleton`},{id:`spinner`,label:`Spinner`},{id:`copy-button`,label:`CopyButton`},{id:`empty-state`,label:`EmptyState`},{id:`error-state`,label:`ErrorState`},{id:`theme-toggle`,label:`ThemeToggle`},{id:`toast`,label:`Toast`},{id:`api`,label:`API`}];function z(){return(0,L.jsx)(a,{title:`Feedback`,description:`Badge для индикаторов статуса, Skeleton для состояний загрузки, Toast на базе sonner. Signal-цвета диагностики кодируют смысл сообщения.`,breadcrumbs:I(`/components/feedback`),children:(0,L.jsx)(l,{presentation:`article`,label:`Feedback`,inspector:F(R),document:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(P,{title:`Badge Variants`,description:`default, secondary, outline, destructive. Terminal [bracket] style, 11px JetBrains Mono, tabular-nums.`,code:`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,children:[(0,L.jsx)(y,{children:`Default`}),(0,L.jsx)(y,{variant:`secondary`,children:`Secondary`}),(0,L.jsx)(y,{variant:`outline`,children:`Outline`}),(0,L.jsx)(y,{variant:`destructive`,children:`Destructive`})]}),(0,L.jsx)(f,{children:`Обратная связь кодируется цветом и формой, а не интенсивностью анимаций. Badge маркирует текущее состояние, Skeleton держит layout во время загрузки, EmptyState объясняет причину пустого списка. Signal-токены ok/warn/err/info работают одинаково во всех трёх.`}),(0,L.jsx)(b,{id:`usage`,label:`Использование`,children:(0,L.jsx)(i,{copyLabel:`Скопировать код: Badge, EmptyState, Skeleton и Spinner`,language:`tsx`,code:`import { Badge, EmptyState, Skeleton, Spinner } from "@chucky23/design-system/react"

<Badge variant="ok">Healthy</Badge>
<Skeleton className="h-4 w-48" />
<Spinner label="Сохраняю изменения" />
<EmptyState title="Пусто" description="Здесь пока нет записей." />`})}),(0,L.jsx)(b,{id:`signal-badges`,label:`Сигнальные Badge`,children:(0,L.jsxs)(P,{title:`Diagnostic Status Badges`,description:`Используй signal-токены для передачи статуса. Фон: signal-faint, текст: signal.`,code:`{/* OK / Healthy / Resolved */}
<Badge variant="ok">Healthy</Badge>

{/* Warning / In Progress */}
<Badge variant="warn">In Progress</Badge>

{/* Error / Critical */}
<Badge variant="err">Critical</Badge>

{/* Muted / Inactive */}
<Badge variant="secondary">Inactive</Badge>`,children:[(0,L.jsx)(y,{variant:`ok`,children:`Healthy`}),(0,L.jsx)(y,{variant:`ok`,children:`Resolved`}),(0,L.jsx)(y,{variant:`warn`,children:`In Progress`}),(0,L.jsx)(y,{variant:`warn`,children:`Monitoring`}),(0,L.jsx)(y,{variant:`err`,children:`Critical`}),(0,L.jsx)(y,{variant:`err`,children:`Failed`}),(0,L.jsx)(y,{variant:`secondary`,children:`Inactive`}),(0,L.jsx)(y,{variant:`secondary`,children:`Archived`})]})}),(0,L.jsx)(b,{id:`severity-badges`,label:`Severity`,children:(0,L.jsxs)(P,{title:`Incident Severity`,description:`SEV-1 через SEV-4 с градацией от alert к muted.`,code:`<Badge variant="err">SEV-1</Badge>
<Badge variant="warn">SEV-2</Badge>
<Badge variant="info">SEV-3</Badge>
<Badge variant="secondary">SEV-4</Badge>`,children:[(0,L.jsx)(y,{variant:`err`,children:`SEV-1`}),(0,L.jsx)(y,{variant:`warn`,children:`SEV-2`}),(0,L.jsx)(y,{variant:`info`,children:`SEV-3`}),(0,L.jsx)(y,{variant:`secondary`,children:`SEV-4`})]})}),(0,L.jsxs)(b,{id:`skeleton`,label:`Skeleton`,children:[(0,L.jsx)(f,{children:`Skeleton — placeholder для известной структуры. Используй его вместо Spinner, когда форма контента предсказуема. Размеры задаёт className, а карточку и строки таблицы собирают те же Card и Table, что и загруженный контент.`}),(0,L.jsxs)(P,{title:`Text skeleton`,description:`Строки текста: заголовок и два абзаца разной длины.`,code:`<Skeleton className="h-5 w-[160px]" />
<Skeleton className="h-4 w-[280px]" />
<Skeleton className="h-4 w-[220px]" />`,layout:`stack`,children:[(0,L.jsx)(_,{className:`h-5 w-[160px]`}),(0,L.jsx)(_,{className:`h-4 w-[280px]`}),(0,L.jsx)(_,{className:`h-4 w-[220px]`})]}),(0,L.jsx)(P,{title:`Card skeleton`,description:`Карточка повторяет структуру будущего контента: заголовок, статус, строка и действия.`,code:`<Card>
  <CardHeader>
    <Skeleton className="h-5 w-[120px]" />
    <CardAction><Skeleton className="h-5 w-[60px]" /></CardAction>
    <Skeleton className="h-4 w-3/4" />
  </CardHeader>
  <CardContent><Skeleton className="h-4 w-full" /></CardContent>
  <CardFooter>
    <MetaClusterRecipe>
      <Skeleton className="h-8 w-[80px]" />
      <Skeleton className="h-8 w-[80px]" />
    </MetaClusterRecipe>
  </CardFooter>
</Card>`,layout:`block`,children:(0,L.jsxs)(u,{children:[(0,L.jsxs)(c,{children:[(0,L.jsx)(_,{className:`h-5 w-[120px]`}),(0,L.jsx)(T,{children:(0,L.jsx)(_,{className:`h-5 w-[60px]`})}),(0,L.jsx)(_,{className:`h-4 w-3/4`})]}),(0,L.jsx)(n,{children:(0,L.jsx)(_,{className:`h-4 w-full`})}),(0,L.jsx)(s,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(_,{className:`h-8 w-[80px]`}),(0,L.jsx)(_,{className:`h-8 w-[80px]`})]})})]})}),(0,L.jsx)(P,{title:`Table row skeleton`,description:`Строки таблицы держат ширины колонок, пока данные загружаются.`,code:`<Table aria-label="Загрузка инцидентов">
  <TableBody>
    {[1, 2, 3].map((row) => (
      <TableRow key={row}>
        <TableCell><Skeleton className="h-4 w-[70px]" /></TableCell>
        <TableCell><Skeleton className="h-4 w-[180px]" /></TableCell>
        <TableCell><Skeleton className="h-5 w-[50px]" /></TableCell>
        <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,layout:`block`,children:(0,L.jsx)(p,{"aria-label":`Загрузка инцидентов`,children:(0,L.jsx)(r,{children:[1,2,3].map(e=>(0,L.jsxs)(E,{children:[(0,L.jsx)(j,{children:(0,L.jsx)(_,{className:`h-4 w-[70px]`})}),(0,L.jsx)(j,{children:(0,L.jsx)(_,{className:`h-4 w-[180px]`})}),(0,L.jsx)(j,{children:(0,L.jsx)(_,{className:`h-5 w-[50px]`})}),(0,L.jsx)(j,{children:(0,L.jsx)(_,{className:`h-4 w-[60px]`})})]},e))})})})]}),(0,L.jsxs)(b,{id:`spinner`,label:`Spinner`,children:[(0,L.jsxs)(P,{title:`Spinner`,description:`4×4 pixel-grid snake: блок бежит по периметру за 1600 мс. При prefers-reduced-motion — статическая 2×2 точка в центре.`,code:`<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner label="Saving changes" />`,children:[(0,L.jsx)(x,{size:`sm`}),(0,L.jsx)(x,{}),(0,L.jsx)(x,{size:`lg`}),(0,L.jsx)(x,{size:`xl`}),(0,L.jsx)(x,{label:`Saving changes`})]}),(0,L.jsxs)(P,{title:`Spinner внутри Button`,description:`Кнопка с loading=true показывает Spinner вместо иконки. Используется во время submit форм.`,code:`<Button loading>Saving…</Button>
<Button variant="outline" loading>Loading</Button>`,children:[(0,L.jsx)(C,{loading:!0,children:`Saving…`}),(0,L.jsx)(C,{variant:`outline`,loading:!0,children:`Loading`})]})]}),(0,L.jsx)(b,{id:`copy-button`,label:`CopyButton`,children:(0,L.jsx)(P,{title:`CopyButton`,description:`Кнопка копирования текста в буфер обмена. Показывает check-иконку после успешного копирования.`,code:`<CopyButton text="npm install @chucky23/design-system" />`,children:(0,L.jsx)(g,{text:`npm install @chucky23/design-system`})})}),(0,L.jsxs)(b,{id:`empty-state`,label:`EmptyState`,children:[(0,L.jsx)(P,{title:`EmptyState — convenience`,description:`Compact API: title / description / icon / action — sub-components не нужны для типичных кейсов. Junior получает визуально полную карточку без явной сборки.`,code:`<EmptyState
  title="Пусто"
  description="Здесь пока нет записей. Создай первую."
  icon={<InboxIcon />}
  action={<Button>Создать</Button>}
/>`,layout:`block`,children:(0,L.jsx)(o,{title:`Пусто`,description:`Здесь пока нет записей. Создай первую.`,icon:(0,L.jsx)(A,{tone:`info`}),action:(0,L.jsx)(C,{children:`Создать`})})}),(0,L.jsx)(P,{title:`EmptyState — композиционный`,description:`Полный API через sub-components — для тонкого контроля над разметкой и стилями.`,code:`<EmptyState>
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
</EmptyState>`,layout:`block`,children:(0,L.jsxs)(o,{children:[(0,L.jsx)(v,{children:(0,L.jsx)(A,{tone:`info`})}),(0,L.jsx)(d,{children:`Пусто`}),(0,L.jsx)(m,{children:`Здесь пока нет записей. Создай первую.`}),(0,L.jsx)(h,{children:(0,L.jsx)(C,{children:`Создать`})})]})})]}),(0,L.jsxs)(b,{id:`error-state`,label:`ErrorState`,children:[(0,L.jsx)(P,{title:`ErrorState — convenience`,description:`Compact API: title / description / action. Без override иконка — SignalIcon tone=err.`,code:`<ErrorState
  title="Не удалось загрузить"
  description="Проверь соединение и попробуй ещё раз."
  action={<Button variant="outline">Повторить</Button>}
/>`,layout:`block`,children:(0,L.jsx)(t,{title:`Не удалось загрузить`,description:`Проверь соединение и попробуй ещё раз.`,action:(0,L.jsx)(C,{variant:`outline`,children:`Повторить`})})}),(0,L.jsx)(P,{title:`ErrorState — композиционный`,description:`Полный API через sub-components. Используй когда нужна нестандартная иконка, особая разметка или дополнительный контент.`,code:`<ErrorState>
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
</ErrorState>`,layout:`block`,children:(0,L.jsxs)(t,{children:[(0,L.jsx)(D,{children:(0,L.jsx)(A,{tone:`err`})}),(0,L.jsx)(O,{children:`Не удалось загрузить`}),(0,L.jsx)(k,{children:`Проверь соединение и попробуй ещё раз.`}),(0,L.jsx)(S,{children:(0,L.jsx)(C,{variant:`outline`,children:`Повторить`})})]})})]}),(0,L.jsx)(b,{id:`theme-toggle`,label:`ThemeToggle`,children:(0,L.jsx)(P,{title:`ThemeToggle`,description:`Переключатель темы (light/dark). Требует ThemeProvider на уровне приложения.`,code:`<ThemeToggle />`,children:(0,L.jsx)(w,{})})}),(0,L.jsxs)(b,{id:`toast`,label:`Toast`,children:[(0,L.jsx)(f,{children:`Toasts через sonner library. Появляются в нижнем правом углу. Используются для подтверждения действий, не для критических ошибок.`}),(0,L.jsx)(i,{copyLabel:`Скопировать код: вызов toast`,language:`tsx`,code:`import { toast } from "sonner"

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
})`})]}),(0,L.jsxs)(b,{id:`api`,label:`API`,children:[(0,L.jsx)(N,{title:`Badge Props`,props:[{name:`variant`,type:`"default" | "secondary" | "outline" | "destructive" | "ghost" | "link" | "ok" | "warn" | "err" | "info"`,defaultValue:`"default"`,description:`Visual style. Signal variants (ok, warn, err, info) for diagnostic badges.`},{name:`className`,type:`string`,defaultValue:`—`,description:`Custom styles override.`}]}),(0,L.jsx)(N,{title:`Skeleton Props`,props:[{name:`className`,type:`string`,defaultValue:`—`,description:`Width, height, border-radius via Tailwind`}]}),(0,L.jsx)(N,{title:`Spinner Props`,props:[{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 16, 20 или 24px.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Доступное название. Не нужно, если контекст уже озвучен, например внутри Button loading.`}]}),(0,L.jsx)(N,{title:`CopyButton Props`,props:[{name:`text`,type:`string`,defaultValue:`—`,description:`Текст, который попадёт в буфер обмена.`},{name:`copyLabel`,type:`string`,defaultValue:`"Скопировать код"`,description:`Доступное название до копирования.`},{name:`copiedLabel`,type:`string`,defaultValue:`"Скопировано"`,description:`Доступное название после копирования.`},{name:`aria-label`,type:`string`,defaultValue:`—`,description:`Явное название до копирования. Побеждает copyLabel; после копирования кнопка называется copiedLabel.`},{name:`resetDelay`,type:`number`,defaultValue:`2000`,description:`Через сколько миллисекунд вернуть исходную иконку.`}]}),(0,L.jsx)(N,{title:`EmptyState / ErrorState Props`,props:[{name:`title`,type:`ReactNode`,defaultValue:`—`,description:`Заголовок convenience-сигнатуры. Игнорируется при children.`},{name:`description`,type:`ReactNode`,defaultValue:`—`,description:`Описание convenience-сигнатуры.`},{name:`icon`,type:`ReactNode`,defaultValue:`—`,description:`Иконка. У ErrorState без значения — декоративная SignalIcon tone=err: ошибку называет заголовок.`},{name:`action`,type:`ReactNode`,defaultValue:`—`,description:`Действие, обычно Button.`}]})]})]})})})}export{z as default};