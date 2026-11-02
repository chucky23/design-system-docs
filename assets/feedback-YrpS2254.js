import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ji as t,Nr as n,Oa as r,Qr as i,Si as a,Sr as o,_i as s,ar as c,bi as l,ci as u,cr as d,ei as f,gi as p,hi as m,ir as h,j as g,kr as _,mi as v,ms as y,ni as b,pi as x,rr as S,si as C,sr as w,ti as T,ua as E,v as D,vi as O,x as k,xi as A,yi as j}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{Q as M,g as N}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{o as P,r as F}from"./chunk-CKG37GDB-SZ9fZavK.js";import{n as I,r as L,t as R}from"./docs-article-CV9v0E7s.js";import"./recipes-DhOVglAh.js";var z=e(),B=[{id:`usage`,label:`Использование`},{id:`signal-badges`,label:`Сигнальные Badge`},{id:`severity-badges`,label:`Severity`},{id:`skeleton`,label:`Skeleton`},{id:`spinner`,label:`Spinner`},{id:`copy-button`,label:`CopyButton`},{id:`empty-state`,label:`EmptyState`},{id:`error-state`,label:`ErrorState`},{id:`theme-toggle`,label:`ThemeToggle`},{id:`toast`,label:`Toast`},{id:`api`,label:`API`}];function V(){return(0,z.jsx)(g,{title:`Feedback`,description:`Badge для индикаторов статуса, Skeleton для состояний загрузки, Toast на базе sonner. Signal-цвета диагностики кодируют смысл сообщения.`,breadcrumbs:R(`/components/feedback`),meta:I(`/components/feedback`),children:(0,z.jsx)(k,{presentation:`article`,label:`Feedback`,inspector:L(B),document:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(N,{title:`Badge Variants`,description:`default, secondary, outline, destructive. Высота 20px, радиус 4px, SF Pro 12px.`,code:`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,children:[(0,z.jsx)(D,{children:`Default`}),(0,z.jsx)(D,{variant:`secondary`,children:`Secondary`}),(0,z.jsx)(D,{variant:`outline`,children:`Outline`}),(0,z.jsx)(D,{variant:`destructive`,children:`Destructive`})]}),(0,z.jsx)(o,{children:`Обратная связь кодируется цветом и формой, а не интенсивностью анимаций. Badge маркирует текущее состояние, Skeleton держит layout во время загрузки, EmptyState объясняет причину пустого списка. Signal-токены ok/warn/err/info работают одинаково во всех трёх.`}),(0,z.jsx)(i,{id:`usage`,label:`Использование`,children:(0,z.jsx)(_,{copyLabel:`Скопировать код: Badge, EmptyState, Skeleton и Spinner`,language:`tsx`,code:`import { Badge, EmptyState, Skeleton, Spinner } from "@chucky23/design-system/react"

<Badge variant="ok">Healthy</Badge>
<Skeleton className="h-4 w-48" />
<Spinner label="Сохраняю изменения" />
<EmptyState title="Пусто" description="Здесь пока нет записей." />`})}),(0,z.jsx)(i,{id:`signal-badges`,label:`Сигнальные Badge`,children:(0,z.jsxs)(N,{title:`Diagnostic Status Badges`,description:`Используй signal-токены для передачи статуса. Фон: signal-faint, текст: signal.`,code:`{/* OK / Healthy / Resolved */}
<Badge variant="ok">Healthy</Badge>

{/* Warning / In Progress */}
<Badge variant="warn">In Progress</Badge>

{/* Error / Critical */}
<Badge variant="err">Critical</Badge>

{/* Muted / Inactive */}
<Badge variant="secondary">Inactive</Badge>`,children:[(0,z.jsx)(D,{variant:`ok`,children:`Healthy`}),(0,z.jsx)(D,{variant:`ok`,children:`Resolved`}),(0,z.jsx)(D,{variant:`warn`,children:`In Progress`}),(0,z.jsx)(D,{variant:`warn`,children:`Monitoring`}),(0,z.jsx)(D,{variant:`err`,children:`Critical`}),(0,z.jsx)(D,{variant:`err`,children:`Failed`}),(0,z.jsx)(D,{variant:`secondary`,children:`Inactive`}),(0,z.jsx)(D,{variant:`secondary`,children:`Archived`})]})}),(0,z.jsx)(i,{id:`severity-badges`,label:`Severity`,children:(0,z.jsxs)(N,{title:`Incident Severity`,description:`SEV-1 через SEV-4 с градацией от alert к muted.`,code:`<Badge variant="err">SEV-1</Badge>
<Badge variant="warn">SEV-2</Badge>
<Badge variant="info">SEV-3</Badge>
<Badge variant="secondary">SEV-4</Badge>`,children:[(0,z.jsx)(D,{variant:`err`,children:`SEV-1`}),(0,z.jsx)(D,{variant:`warn`,children:`SEV-2`}),(0,z.jsx)(D,{variant:`info`,children:`SEV-3`}),(0,z.jsx)(D,{variant:`secondary`,children:`SEV-4`})]})}),(0,z.jsxs)(i,{id:`skeleton`,label:`Skeleton`,children:[(0,z.jsx)(o,{children:`Skeleton — placeholder для известной структуры. Используй его вместо Spinner, когда форма контента предсказуема. Размеры задаёт className, а карточку и строки таблицы собирают те же Card и Table, что и загруженный контент.`}),(0,z.jsxs)(N,{title:`Text skeleton`,description:`Строки текста: заголовок и два абзаца разной длины.`,code:`<Skeleton className="h-5 w-[160px]" />
<Skeleton className="h-4 w-[280px]" />
<Skeleton className="h-4 w-[220px]" />`,layout:`stack`,children:[(0,z.jsx)(E,{className:`h-5 w-[160px]`}),(0,z.jsx)(E,{className:`h-4 w-[280px]`}),(0,z.jsx)(E,{className:`h-4 w-[220px]`})]}),(0,z.jsx)(N,{title:`Card skeleton`,description:`Карточка повторяет структуру будущего контента: заголовок, статус, строка и действия.`,code:`<Card>
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
</Card>`,layout:`block`,children:(0,z.jsxs)(S,{children:[(0,z.jsxs)(d,{children:[(0,z.jsx)(E,{className:`h-5 w-[120px]`}),(0,z.jsx)(h,{children:(0,z.jsx)(E,{className:`h-5 w-[60px]`})}),(0,z.jsx)(E,{className:`h-4 w-3/4`})]}),(0,z.jsx)(c,{children:(0,z.jsx)(E,{className:`h-4 w-full`})}),(0,z.jsx)(w,{children:(0,z.jsxs)(F,{children:[(0,z.jsx)(E,{className:`h-8 w-[80px]`}),(0,z.jsx)(E,{className:`h-8 w-[80px]`})]})})]})}),(0,z.jsx)(N,{title:`Table row skeleton`,description:`Строки таблицы держат ширины колонок, пока данные загружаются.`,code:`<Table aria-label="Загрузка инцидентов">
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
</Table>`,layout:`block`,children:(0,z.jsx)(f,{"aria-label":`Загрузка инцидентов`,children:(0,z.jsx)(T,{children:[1,2,3].map(e=>(0,z.jsxs)(C,{children:[(0,z.jsx)(b,{children:(0,z.jsx)(E,{className:`h-4 w-[70px]`})}),(0,z.jsx)(b,{children:(0,z.jsx)(E,{className:`h-4 w-[180px]`})}),(0,z.jsx)(b,{children:(0,z.jsx)(E,{className:`h-5 w-[50px]`})}),(0,z.jsx)(b,{children:(0,z.jsx)(E,{className:`h-4 w-[60px]`})})]},e))})})})]}),(0,z.jsxs)(i,{id:`spinner`,label:`Spinner`,children:[(0,z.jsxs)(N,{title:`Spinner`,description:`Бледное кольцо и дуга, которая делает оборот за 1600 мс (--motion-snake-cycle). При prefers-reduced-motion дуга стоит на месте.`,code:`<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner label="Saving changes" />`,children:[(0,z.jsx)(y,{size:`sm`}),(0,z.jsx)(y,{}),(0,z.jsx)(y,{size:`lg`}),(0,z.jsx)(y,{size:`xl`}),(0,z.jsx)(y,{label:`Saving changes`})]}),(0,z.jsxs)(N,{title:`Spinner внутри Button`,description:`Кнопка с loading=true показывает Spinner вместо иконки. Используется во время submit форм.`,code:`<Button loading>Saving…</Button>
<Button variant="outline" loading>Loading</Button>`,children:[(0,z.jsx)(r,{loading:!0,children:`Saving…`}),(0,z.jsx)(r,{variant:`outline`,loading:!0,children:`Loading`})]})]}),(0,z.jsx)(i,{id:`copy-button`,label:`CopyButton`,children:(0,z.jsx)(N,{title:`CopyButton`,description:`Кнопка копирования текста в буфер обмена. Показывает check-иконку после успешного копирования.`,code:`<CopyButton text="npm install @chucky23/design-system" />`,children:(0,z.jsx)(n,{text:`npm install @chucky23/design-system`})})}),(0,z.jsxs)(i,{id:`empty-state`,label:`EmptyState`,children:[(0,z.jsx)(N,{title:`EmptyState — convenience`,description:`Compact API: title / description / icon / action — sub-components не нужны для типичных кейсов. Junior получает визуально полную карточку без явной сборки.`,code:`<EmptyState
  title="Пусто"
  description="Здесь пока нет записей. Создай первую."
  icon={<InboxIcon />}
  action={<Button>Создать</Button>}
/>`,layout:`block`,children:(0,z.jsx)(x,{headingLevel:3,title:`Пусто`,description:`Здесь пока нет записей. Создай первую.`,icon:(0,z.jsx)(t,{tone:`info`}),action:(0,z.jsx)(r,{children:`Создать`})})}),(0,z.jsx)(N,{title:`EmptyState — композиционный`,description:`Полный API через sub-components — для тонкого контроля над разметкой и стилями.`,code:`<EmptyState>
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
</EmptyState>`,layout:`block`,children:(0,z.jsxs)(x,{children:[(0,z.jsx)(p,{children:(0,z.jsx)(t,{tone:`info`})}),(0,z.jsx)(s,{children:`Пусто`}),(0,z.jsx)(m,{children:`Здесь пока нет записей. Создай первую.`}),(0,z.jsx)(v,{children:(0,z.jsx)(r,{children:`Создать`})})]})})]}),(0,z.jsxs)(i,{id:`error-state`,label:`ErrorState`,children:[(0,z.jsx)(N,{title:`ErrorState — convenience`,description:`Compact API: title / description / action. Без override иконка — SignalIcon tone=err.`,code:`<ErrorState
  title="Не удалось загрузить"
  description="Проверь соединение и попробуй ещё раз."
  action={<Button variant="outline">Повторить</Button>}
/>`,layout:`block`,children:(0,z.jsx)(O,{headingLevel:3,title:`Не удалось загрузить`,description:`Проверь соединение и попробуй ещё раз.`,action:(0,z.jsx)(r,{variant:`outline`,children:`Повторить`})})}),(0,z.jsx)(N,{title:`ErrorState — композиционный`,description:`Полный API через sub-components. Используй когда нужна нестандартная иконка, особая разметка или дополнительный контент.`,code:`<ErrorState>
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
</ErrorState>`,layout:`block`,children:(0,z.jsxs)(O,{children:[(0,z.jsx)(A,{children:(0,z.jsx)(t,{tone:`err`})}),(0,z.jsx)(a,{children:`Не удалось загрузить`}),(0,z.jsx)(l,{children:`Проверь соединение и попробуй ещё раз.`}),(0,z.jsx)(j,{children:(0,z.jsx)(r,{variant:`outline`,children:`Повторить`})})]})}),(0,z.jsx)(N,{title:`FeedbackRecipe — строка в форме`,description:`size=compact — предупреждение внутри формы: без рамки карточки, полоса сигнала 2px слева, подложка цвета сигнала 6 %, текст 13px, действие xs в той же строке. Для err и warn роль alert, для остальных status.`,code:`<FeedbackRecipe size="compact" tone="warn" title="Черновик не сохранён" actionLabel="Сохранить" onAction={save} />`,layout:`block`,children:(0,z.jsx)(P,{size:`compact`,tone:`warn`,title:`Черновик не сохранён`,actionLabel:`Сохранить`,onAction:()=>{}})})]}),(0,z.jsx)(i,{id:`theme-toggle`,label:`ThemeToggle`,children:(0,z.jsx)(N,{title:`ThemeToggle`,description:`Переключатель темы (light/dark). Требует ThemeProvider на уровне приложения.`,code:`<ThemeToggle />`,children:(0,z.jsx)(u,{})})}),(0,z.jsxs)(i,{id:`toast`,label:`Toast`,children:[(0,z.jsx)(o,{children:`Toasts через sonner library. Появляются в нижнем правом углу. Используются для подтверждения действий, не для критических ошибок.`}),(0,z.jsx)(_,{copyLabel:`Скопировать код: вызов toast`,language:`tsx`,code:`import { toast } from "sonner"

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
})`})]}),(0,z.jsxs)(i,{id:`api`,label:`API`,children:[(0,z.jsx)(M,{title:`Badge Props`,props:[{name:`variant`,type:`"default" | "secondary" | "outline" | "destructive" | "ghost" | "link" | "ok" | "warn" | "err" | "info"`,defaultValue:`"default"`,description:`Visual style. Signal variants (ok, warn, err, info) for diagnostic badges.`},{name:`className`,type:`string`,defaultValue:`—`,description:`Custom styles override.`}]}),(0,z.jsx)(M,{title:`Skeleton Props`,props:[{name:`className`,type:`string`,defaultValue:`—`,description:`Width, height, border-radius via Tailwind`}]}),(0,z.jsx)(M,{title:`Spinner Props`,props:[{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 16, 20 или 24px.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Доступное название. Не нужно, если контекст уже озвучен, например внутри Button loading.`}]}),(0,z.jsx)(M,{title:`CopyButton Props`,props:[{name:`text`,type:`string`,defaultValue:`—`,description:`Текст, который попадёт в буфер обмена.`},{name:`copyLabel`,type:`string`,defaultValue:`"Скопировать код"`,description:`Доступное название до копирования.`},{name:`copiedLabel`,type:`string`,defaultValue:`"Скопировано"`,description:`Доступное название после копирования.`},{name:`aria-label`,type:`string`,defaultValue:`—`,description:`Явное название до копирования. Побеждает copyLabel; после копирования кнопка называется copiedLabel.`},{name:`resetDelay`,type:`number`,defaultValue:`2000`,description:`Через сколько миллисекунд вернуть исходную иконку.`}]}),(0,z.jsx)(M,{title:`EmptyState / ErrorState Props`,props:[{name:`title`,type:`ReactNode`,defaultValue:`—`,description:`Заголовок convenience-сигнатуры. Игнорируется при children.`},{name:`description`,type:`ReactNode`,defaultValue:`—`,description:`Описание convenience-сигнатуры.`},{name:`icon`,type:`ReactNode`,defaultValue:`—`,description:`Иконка. У ErrorState без значения — декоративная SignalIcon tone=err: ошибку называет заголовок.`},{name:`action`,type:`ReactNode`,defaultValue:`—`,description:`Действие, обычно Button.`}]})]})]})})})}export{V as default};