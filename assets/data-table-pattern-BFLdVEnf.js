import{$n as e,B as t,Gn as n,H as r,Hn as i,Jn as a,Ki as o,Kn as s,Mo as c,R as l,Un as u,V as d,Wn as f,_n as p,c as m,cr as h,fn as g,hn as _,ln as v,mn as y,nr as b,or as x,p as S,qn as C,rr as w,sr as T,tr as E,vn as D}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{E as O,H as k,M as A,c as j,k as M,r as N,s as P}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./data-table-pattern-DnAdkcRQ.js";import{f as F,n as I,t as L}from"./recipe-mocks-qFM-Zc-i.js";var R=c();function z(){return(0,R.jsxs)(M,{gap:`lg`,children:[(0,R.jsx)(i,{title:`DataTablePattern`,description:`Layout-каркас для табличных реестров: header + table + footer + emptyState. Закрытый API: только LayoutClassName и SafeStyle, никаких произвольных классов.`}),(0,R.jsxs)(A,{className:`max-w-prose`,"data-body":!0,children:[`DataTablePattern — каркас, не сама таблица. Внутрь кладёшь Card + Table из `,(0,R.jsx)(j,{children:`@chucky23/design-system/react`}),`; pattern собирает слоты в нужном порядке (header → table → fallback → footer) и включает CSS-правило rowAccent. Закрытый API: `,(0,R.jsx)(j,{children:`className`}),` — только LayoutClassName (layout-only utilities), `,(0,R.jsx)(j,{children:`style`}),` — SafeStyle (без color/background).`]}),(0,R.jsx)(e,{label:`basic usage`,children:(0,R.jsx)(N,{title:`Card + Table внутри pattern'а`,description:`Минимальный пример: header (Card.CardHeader) + table (Table) обёрнуты в DataTablePattern.`,code:`<DataTablePattern>
  <Card>
    <CardHeader>
      <CardTitle data-label>$ Task Registry</CardTitle>
    </CardHeader>
    <CardContent className="px-0 pb-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((t) => (
            <TableRow key={t.id}>
              <TableCell data-numeric>{t.id}</TableCell>
              <TableCell>{t.title}</TableCell>
              <TableCell>
                <Tag color={STATUS_TONE[t.status]} size="sm">{t.status}</Tag>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</DataTablePattern>`,children:(0,R.jsx)(P,{className:`w-full`,children:(0,R.jsx)(S,{children:(0,R.jsxs)(g,{children:[(0,R.jsxs)(p,{children:[(0,R.jsx)(D,{"data-label":!0,children:`$ Task Registry`}),(0,R.jsx)(_,{children:`Активные задачи спринта (полный список).`})]}),(0,R.jsx)(y,{className:`px-0 pb-0`,children:(0,R.jsxs)(E,{children:[(0,R.jsx)(T,{children:(0,R.jsxs)(h,{children:[(0,R.jsx)(x,{className:`w-16`,children:`#`}),(0,R.jsx)(x,{children:`Task`}),(0,R.jsx)(x,{children:`Status`})]})}),(0,R.jsx)(b,{children:F.map(e=>(0,R.jsxs)(h,{children:[(0,R.jsx)(w,{"data-numeric":!0,children:e.id}),(0,R.jsx)(w,{"data-body":!0,children:e.title}),(0,R.jsx)(w,{children:(0,R.jsx)(v,{format:`bracket`,color:I[e.status],size:`sm`,children:e.status})})]},e.id))})]})})]})})})})}),(0,R.jsx)(e,{label:`header slot`,children:(0,R.jsx)(N,{title:`Header через named-slot`,description:`Альтернатива Card.CardHeader: передай header как prop. DataTablePattern обернёт его в data-slot="data-table-pattern-header" — удобно для тулбаров над таблицей, не привязанных к Card.`,code:`<DataTablePattern
  header={
    <div className="flex items-center justify-between">
      <CardTitle data-label>$ Tasks</CardTitle>
      <Button variant="outline" size="sm">+ Add</Button>
    </div>
  }
  table={
    <Table>...</Table>
  }
/>`,children:(0,R.jsx)(P,{className:`w-full`,children:(0,R.jsx)(S,{header:(0,R.jsxs)(O,{align:`center`,className:`justify-between`,children:[(0,R.jsxs)(O,{align:`center`,children:[(0,R.jsx)(D,{"data-label":!0,children:`$ Tasks`}),(0,R.jsx)(m,{variant:`secondary`,children:F.length})]}),(0,R.jsx)(o,{variant:`outline`,size:`sm`,children:`+ Add`})]}),table:(0,R.jsx)(g,{children:(0,R.jsx)(y,{className:`px-0 pb-0`,children:(0,R.jsxs)(E,{children:[(0,R.jsx)(T,{children:(0,R.jsxs)(h,{children:[(0,R.jsx)(x,{className:`w-16`,children:`#`}),(0,R.jsx)(x,{children:`Task`}),(0,R.jsx)(x,{children:`Assignee`})]})}),(0,R.jsx)(b,{children:F.slice(0,3).map(e=>(0,R.jsxs)(h,{children:[(0,R.jsx)(w,{"data-numeric":!0,children:e.id}),(0,R.jsx)(w,{"data-body":!0,children:e.title}),(0,R.jsx)(w,{"data-body":!0,children:e.assignee})]},e.id))})]})})})})})})}),(0,R.jsx)(e,{label:`footer slot`,children:(0,R.jsx)(N,{title:`Footer с пагинацией`,description:`footer-prop — слот после таблицы. Типичное использование — Pagination из @chucky23/design-system/react.`,code:`<DataTablePattern
  table={<Card>...</Card>}
  footer={
    <Pagination ariaLabel="Tasks pagination">
      <PaginationStatus from={1} to={6} total={6} />
      <PaginationControls>
        <PaginationPrev disabled />
        <PaginationPage page={1} pageCount={1} />
        <PaginationNext disabled />
      </PaginationControls>
    </Pagination>
  }
/>`,children:(0,R.jsx)(P,{className:`w-full`,children:(0,R.jsx)(S,{table:(0,R.jsx)(g,{children:(0,R.jsx)(y,{className:`px-0 pb-0`,children:(0,R.jsxs)(E,{children:[(0,R.jsx)(T,{children:(0,R.jsxs)(h,{children:[(0,R.jsx)(x,{className:`w-16`,children:`#`}),(0,R.jsx)(x,{children:`Task`}),(0,R.jsx)(x,{children:`Updated`})]})}),(0,R.jsx)(b,{children:F.slice(0,3).map(e=>(0,R.jsxs)(h,{children:[(0,R.jsx)(w,{"data-numeric":!0,children:e.id}),(0,R.jsx)(w,{"data-body":!0,children:e.title}),(0,R.jsx)(w,{"data-numeric":!0,children:e.updated})]},e.id))})]})})}),footer:(0,R.jsxs)(u,{ariaLabel:`Tasks pagination`,children:[(0,R.jsx)(a,{from:1,to:3,total:F.length}),(0,R.jsxs)(f,{children:[(0,R.jsx)(C,{disabled:!0}),(0,R.jsx)(s,{page:1,pageCount:2}),(0,R.jsx)(n,{})]})]})})})})}),(0,R.jsx)(e,{label:`empty state slot`,children:(0,R.jsx)(N,{title:`emptyState — fallback при tasks.length === 0`,description:`emptyState-prop рендерится в data-slot='data-table-pattern-empty'. Используй EmptyState из пакета — ручная сборка через div блокируется prefer-ds-state-components.`,code:`<DataTablePattern
  header={<CardTitle data-label>$ Tasks</CardTitle>}
  emptyState={
    <EmptyState>
      <EmptyStateIcon />
      <EmptyStateTitle>Задач пока нет</EmptyStateTitle>
      <EmptyStateDescription>
        Создай первую задачу через CTA в шапке.
      </EmptyStateDescription>
    </EmptyState>
  }
/>`,children:(0,R.jsx)(P,{className:`w-full`,children:(0,R.jsx)(S,{header:(0,R.jsxs)(O,{align:`center`,className:`justify-between`,children:[(0,R.jsx)(D,{"data-label":!0,children:`$ Tasks`}),(0,R.jsx)(o,{variant:`outline`,size:`sm`,children:`+ Add`})]}),emptyState:(0,R.jsxs)(l,{children:[(0,R.jsx)(d,{}),(0,R.jsx)(r,{children:`Задач пока нет`}),(0,R.jsx)(t,{children:`Создай первую задачу через CTA в шапке.`})]})})})})}),(0,R.jsxs)(e,{label:`rowAccentEnabled + rowAccentToken`,children:[(0,R.jsxs)(A,{className:`max-w-prose`,"data-body":!0,children:[(0,R.jsx)(j,{children:`rowAccentEnabled`}),` включает CSS-правило: каждая`,(0,R.jsx)(j,{children:` <TableRow rowAccentToken="<token>"> `}),`получает 3px цветную полоску слева через `,(0,R.jsx)(j,{children:`::before`}),` в`,(0,R.jsx)(j,{children:`@layer ds-system`}),`. Без `,(0,R.jsx)(j,{children:`rowAccentEnabled`}),`на корне правило не активируется.`]}),(0,R.jsx)(N,{title:`rowAccent с heatmap-токенами`,description:`rowAccentToken — имя CSS-переменной без префикса var(--). Token "heatmap-done" → var(--heatmap-done). Done — ok-полоска, In Process — warn-полоска, Todo — без полоски.`,code:`<DataTablePattern rowAccentEnabled>
  <Card>
    <CardContent className="px-0 pb-0">
      <Table>
        <TableHeader>...</TableHeader>
        <TableBody>
          {tasks.map((t) => (
            <TableRow
              key={t.id}
              rowAccentToken={STATUS_ACCENT_TOKEN[t.status]}
            >
              {/* ... */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</DataTablePattern>`,children:(0,R.jsx)(P,{className:`w-full`,children:(0,R.jsx)(S,{rowAccentEnabled:!0,children:(0,R.jsxs)(g,{children:[(0,R.jsxs)(p,{children:[(0,R.jsx)(D,{"data-label":!0,children:`$ Task Heatmap`}),(0,R.jsx)(_,{children:`Done — ok-полоска, In Process — warn-полоска, Todo — нейтральная.`})]}),(0,R.jsx)(y,{className:`px-0 pb-0`,children:(0,R.jsxs)(E,{children:[(0,R.jsx)(T,{children:(0,R.jsxs)(h,{children:[(0,R.jsx)(x,{className:`w-16`,children:`#`}),(0,R.jsx)(x,{children:`Task`}),(0,R.jsx)(x,{children:`Status`}),(0,R.jsx)(x,{children:`Assignee`})]})}),(0,R.jsx)(b,{children:F.map(e=>(0,R.jsxs)(h,{rowAccentToken:L[e.status],children:[(0,R.jsx)(w,{"data-numeric":!0,children:e.id}),(0,R.jsx)(w,{"data-body":!0,children:e.title}),(0,R.jsx)(w,{children:(0,R.jsx)(v,{format:`bracket`,color:I[e.status],size:`sm`,children:e.status})}),(0,R.jsx)(w,{"data-body":!0,children:e.assignee})]},e.id))})]})})]})})})})]}),(0,R.jsx)(e,{label:`anti-patterns`,children:(0,R.jsx)(N,{title:`Что НЕ делать`,description:`className и style — закрытый контракт через LayoutClassName / SafeStyle. assertSafeProps бросает исключение в dev на background/color.`,code:`{/* ❌ className с visual utility (background, color, border, font).
       LayoutClassName разрешает только layout: flex, grid, gap, w-*, h-*,
       p-*, m-*, position и т.п. Border/bg/color → assertSafeProps бросает
       Error в dev и блокируется linter'ом. */}
<DataTablePattern className="bg-card border border-border rounded-sm">
  ...
</DataTablePattern>

{/* ❌ style с background или color.
       SafeStyle запрещает background, backgroundColor, color, fill, stroke. */}
<DataTablePattern style={{ background: "var(--card)" }}>
  ...
</DataTablePattern>

{/* ❌ rowAccent через ручной className на TableRow вместо rowAccentToken.
       Прямой className "border-l-2 border-l-signal-warn" на TableRow ловит
       no-color-utility-on-ds-component (signal на DS-компоненте) и не работает
       в @layer ds-system без rowAccentEnabled на корне. */}
<DataTablePattern>
  <Table>
    <TableBody>
      <TableRow className="border-l-2 border-l-signal-warn">
        ...
      </TableRow>
    </TableBody>
  </Table>
</DataTablePattern>

{/* ❌ rowAccentEnabled без TableRow-rowAccentToken.
       CSS-правило активируется, но ни одна строка его не использует —
       мёртвая разметка. Используй парно. */}
<DataTablePattern rowAccentEnabled>
  <Card>
    <Table>
      <TableBody>
        <TableRow>...</TableRow>  {/* нет rowAccentToken */}
      </TableBody>
    </Table>
  </Card>
</DataTablePattern>`,children:(0,R.jsxs)(A,{className:`font-mono text-xs text-muted-foreground`,children:[`Примеры выше — code-only. См. рабочий dashboard в`,` `,(0,R.jsx)(j,{children:`/example-1`}),`.`]})})}),(0,R.jsx)(e,{label:`api reference`,children:(0,R.jsx)(k,{title:`DataTablePatternProps`,props:[{name:`header`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот заголовка. Опционально — header можно класть в Card.CardHeader внутри children.`},{name:`table`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот таблицы. Опционально — Table можно класть прямо в children.`},{name:`emptyState`,type:`React.ReactNode`,defaultValue:`—`,description:`Fallback при пустых данных. Используй EmptyState из @chucky23/design-system/react.`},{name:`footer`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот футера. Типично — Pagination.`},{name:`rowAccentEnabled`,type:`boolean`,defaultValue:`false`,description:`Активирует CSS rowAccent. Без него <TableRow rowAccentToken='…'> не получит полоску.`},{name:`children`,type:`React.ReactNode`,defaultValue:`—`,description:`Альтернативный способ собрать содержимое (например Card + Table сразу).`},{name:`className`,type:`LayoutClassName`,defaultValue:`—`,description:`Только layout-utilities. assertSafeProps бросит Error на background/color/border в dev.`},{name:`style`,type:`SafeStyle`,defaultValue:`—`,description:`Без background, color, fill, stroke. Только layout-properties.`},{name:`id`,type:`string`,defaultValue:`—`,description:`HTML id для секции (полезно для якорной ссылки).`}]})})]})}export{z as default};