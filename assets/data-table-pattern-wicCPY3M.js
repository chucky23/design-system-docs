import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gr as t,Hr as n,Ir as r,Kr as i,Oa as a,Qr as o,Sr as s,Un as c,Ur as l,Wr as u,_i as d,ai as f,ar as p,cr as m,ei as h,gi as g,hi as _,j as v,kr as y,lr as b,ni as x,oi as S,or as C,pi as w,qr as T,rr as E,si as D,ti as O,ur as k,x as A}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as j,Q as M,g as N}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{y as P}from"./chunk-CKG37GDB-SZ9fZavK.js";import{n as F,r as I,t as L}from"./docs-article-CV9v0E7s.js";import"./data-table-pattern-BIX3UcHb.js";import{f as R,n as z,t as B}from"./recipe-mocks-4jGL-pJW.js";var V=e(),H=[{id:`usage`,label:`Использование`},{id:`header`,label:`Слот header`},{id:`footer`,label:`Слот footer`},{id:`empty`,label:`Пустое состояние`},{id:`row-accent`,label:`Акцент строки`},{id:`anti-patterns`,label:`Ошибки`},{id:`api`,label:`API`}];function U(){return(0,V.jsx)(v,{title:`DataTablePattern`,description:`Layout-каркас для табличных реестров: header + table + footer + emptyState. Закрытый API: только LayoutClassName и SafeStyle, никаких произвольных классов.`,breadcrumbs:L(`/patterns/data-table-pattern`),meta:F(`/patterns/data-table-pattern`),children:(0,V.jsx)(A,{presentation:`article`,label:`DataTablePattern`,inspector:I(H),document:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(N,{title:`Card + Table внутри паттерна`,description:`Минимальный пример: шапка Card и таблица Table внутри DataTablePattern.`,layout:`block`,code:`<DataTablePattern>
  <Card>
    <CardHeader>
      <CardTitle data-label>$ Task Registry</CardTitle>
    </CardHeader>
    <CardContent>
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
              <TableCell data-numeric wrap="nowrap">{t.id}</TableCell>
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
</DataTablePattern>`,children:(0,V.jsx)(c,{children:(0,V.jsxs)(E,{children:[(0,V.jsxs)(m,{children:[(0,V.jsx)(b,{"data-label":!0,children:`$ Task Registry`}),(0,V.jsx)(C,{children:`Активные задачи спринта (полный список).`})]}),(0,V.jsx)(p,{children:(0,V.jsxs)(h,{children:[(0,V.jsx)(S,{children:(0,V.jsxs)(D,{children:[(0,V.jsx)(f,{children:`#`}),(0,V.jsx)(f,{children:`Task`}),(0,V.jsx)(f,{children:`Status`})]})}),(0,V.jsx)(O,{children:R.map(e=>(0,V.jsxs)(D,{children:[(0,V.jsx)(x,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,V.jsx)(x,{"data-body":!0,children:e.title}),(0,V.jsx)(x,{children:(0,V.jsx)(k,{format:`dot`,color:z[e.status],size:`sm`,children:e.status})})]},e.id))})]})})]})})}),(0,V.jsxs)(s,{children:[`DataTablePattern — каркас, а не сама таблица. Внутрь кладут Card и Table из`,` `,(0,V.jsx)(r,{children:`@chucky23/design-system/react`}),`; паттерн собирает слоты в нужном порядке (header → table → fallback → footer) и включает CSS-правило rowAccent. Закрытый API: `,(0,V.jsx)(r,{children:`className`}),` принимает только LayoutClassName (утилиты раскладки), `,(0,V.jsx)(r,{children:`style`}),` — только SafeStyle (без color и background).`]}),(0,V.jsxs)(s,{children:[`DataTablePattern — содержимое слота, а не способ собрать экран. Экран-реестр собирает тип`,` `,(0,V.jsx)(r,{children:`RegistryWorkspace`}),`: поиск, счётчик и пустое состояние даёт тип, поэтому DataTablePattern с собственным поиском и пустым состоянием внутри реестра не нужен. Эталон —`,` `,(0,V.jsx)(j,{href:`/examples/sprint/registry`,children:`реестр задач`}),`.`]}),(0,V.jsx)(o,{id:`usage`,label:`Использование`,children:(0,V.jsx)(y,{copyLabel:`Скопировать код: использование DataTablePattern`,language:`tsx`,code:`import { DataTablePattern } from "@chucky23/design-system/patterns/data-table-pattern"
import { Card, CardContent, Table } from "@chucky23/design-system/react"

<DataTablePattern footer={pagination} emptyState={tasks.length === 0 ? empty : undefined}>
  <Card>
    <CardContent><Table>…</Table></CardContent>
  </Card>
</DataTablePattern>`})}),(0,V.jsx)(o,{id:`header`,label:`Слот header`,children:(0,V.jsx)(N,{title:`Header через именованный слот`,description:`Альтернатива CardHeader: передай header пропом. DataTablePattern обернёт его в data-slot="data-table-pattern-header" — удобно для панели над таблицей, не привязанной к Card.`,layout:`block`,code:`<DataTablePattern
  header={
    <SectionHeaderRecipe
      title="Tasks"
      description={\`Задач: \${tasks.length}\`}
      actions={<Button variant="outline" size="sm">+ Add</Button>}
    />
  }
  table={
    <Table>...</Table>
  }
/>`,children:(0,V.jsx)(c,{header:(0,V.jsx)(P,{title:`Tasks`,description:`Задач: ${R.length}`,actions:(0,V.jsx)(a,{variant:`outline`,size:`sm`,children:`+ Add`})}),table:(0,V.jsx)(E,{children:(0,V.jsx)(p,{children:(0,V.jsxs)(h,{children:[(0,V.jsx)(S,{children:(0,V.jsxs)(D,{children:[(0,V.jsx)(f,{children:`#`}),(0,V.jsx)(f,{children:`Task`}),(0,V.jsx)(f,{children:`Assignee`})]})}),(0,V.jsx)(O,{children:R.slice(0,3).map(e=>(0,V.jsxs)(D,{children:[(0,V.jsx)(x,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,V.jsx)(x,{"data-body":!0,children:e.title}),(0,V.jsx)(x,{"data-body":!0,wrap:`nowrap`,children:e.assignee})]},e.id))})]})})})})})}),(0,V.jsx)(o,{id:`footer`,label:`Слот footer`,children:(0,V.jsx)(N,{title:`Footer с пагинацией`,description:`footer — слот после таблицы. Обычно туда кладут Pagination из @chucky23/design-system/react.`,layout:`block`,code:`<DataTablePattern
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
/>`,children:(0,V.jsx)(c,{table:(0,V.jsx)(E,{children:(0,V.jsx)(p,{children:(0,V.jsxs)(h,{children:[(0,V.jsx)(S,{children:(0,V.jsxs)(D,{children:[(0,V.jsx)(f,{children:`#`}),(0,V.jsx)(f,{children:`Task`}),(0,V.jsx)(f,{children:`Updated`})]})}),(0,V.jsx)(O,{children:R.slice(0,3).map(e=>(0,V.jsxs)(D,{children:[(0,V.jsx)(x,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,V.jsx)(x,{"data-body":!0,children:e.title}),(0,V.jsx)(x,{"data-numeric":!0,wrap:`nowrap`,children:e.updated})]},e.id))})]})})}),footer:(0,V.jsxs)(n,{ariaLabel:`Tasks pagination`,children:[(0,V.jsx)(T,{from:1,to:3,total:R.length}),(0,V.jsxs)(l,{children:[(0,V.jsx)(i,{disabled:!0}),(0,V.jsx)(t,{page:1,pageCount:2}),(0,V.jsx)(u,{})]})]})})})}),(0,V.jsx)(o,{id:`empty`,label:`Пустое состояние`,children:(0,V.jsx)(N,{title:`emptyState — замена при tasks.length === 0`,description:`emptyState рендерится в data-slot='data-table-pattern-empty'. Используй EmptyState из пакета: ручную сборку через div блокирует prefer-ds-state-components.`,layout:`block`,code:`<DataTablePattern
  header={<SectionHeaderRecipe title="Tasks" actions={<Button variant="outline" size="sm">+ Add</Button>} />}
  emptyState={
    <EmptyState>
      <EmptyStateIcon />
      <EmptyStateTitle>Задач пока нет</EmptyStateTitle>
      <EmptyStateDescription>
        Создай первую задачу через CTA в шапке.
      </EmptyStateDescription>
    </EmptyState>
  }
/>`,children:(0,V.jsx)(c,{header:(0,V.jsx)(P,{title:`Tasks`,actions:(0,V.jsx)(a,{variant:`outline`,size:`sm`,children:`+ Add`})}),emptyState:(0,V.jsxs)(w,{children:[(0,V.jsx)(g,{}),(0,V.jsx)(d,{children:`Задач пока нет`}),(0,V.jsx)(_,{children:`Создай первую задачу через CTA в шапке.`})]})})})}),(0,V.jsxs)(o,{id:`row-accent`,label:`Акцент строки`,children:[(0,V.jsxs)(s,{children:[(0,V.jsx)(r,{children:`rowAccentEnabled`}),` включает CSS-правило: каждая`,` `,(0,V.jsx)(r,{children:`<TableRow rowAccentToken="<token>">`}),` получает цветную полоску 3px слева через`,` `,(0,V.jsx)(r,{children:`::before`}),` в `,(0,V.jsx)(r,{children:`@layer ds-system`}),`. Без`,` `,(0,V.jsx)(r,{children:`rowAccentEnabled`}),` на корне правило не активируется.`]}),(0,V.jsx)(N,{title:`rowAccent с heatmap-токенами`,description:`rowAccentToken — имя CSS-переменной без префикса var(--). Токен "heatmap-done" → var(--heatmap-done). Done — ok-полоска, In Process — warn-полоска, Todo — без полоски.`,layout:`block`,code:`<DataTablePattern rowAccentEnabled>
  <Card>
    <CardContent>
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
</DataTablePattern>`,children:(0,V.jsx)(c,{rowAccentEnabled:!0,children:(0,V.jsxs)(E,{children:[(0,V.jsxs)(m,{children:[(0,V.jsx)(b,{"data-label":!0,children:`$ Task Heatmap`}),(0,V.jsx)(C,{children:`Done — ok-полоска, In Process — warn-полоска, Todo — нейтральная.`})]}),(0,V.jsx)(p,{children:(0,V.jsxs)(h,{children:[(0,V.jsx)(S,{children:(0,V.jsxs)(D,{children:[(0,V.jsx)(f,{children:`#`}),(0,V.jsx)(f,{children:`Task`}),(0,V.jsx)(f,{children:`Status`}),(0,V.jsx)(f,{children:`Assignee`})]})}),(0,V.jsx)(O,{children:R.map(e=>(0,V.jsxs)(D,{rowAccentToken:B[e.status],children:[(0,V.jsx)(x,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,V.jsx)(x,{"data-body":!0,children:e.title}),(0,V.jsx)(x,{children:(0,V.jsx)(k,{format:`dot`,color:z[e.status],size:`sm`,children:e.status})}),(0,V.jsx)(x,{"data-body":!0,wrap:`nowrap`,children:e.assignee})]},e.id))})]})})]})})})]}),(0,V.jsxs)(o,{id:`anti-patterns`,label:`Ошибки`,children:[(0,V.jsxs)(s,{children:[`className и style — закрытый контракт через LayoutClassName и SafeStyle: на background и color assertSafeProps бросает исключение в dev-режиме. Примеры ниже показывают только код; таблица в составе дашборда — на странице`,` `,(0,V.jsx)(j,{href:`/example-1`,children:`Example 1`}),`.`]}),(0,V.jsx)(y,{copyLabel:`Скопировать код: ошибка с визуальным className`,language:`tsx`,code:`{/* Ошибка: className с визуальной утилитой (background, color, border, font).
       LayoutClassName разрешает только раскладку: flex, grid, gap, w-*, h-*,
       p-*, m-*, position и т.п. На border/bg/color assertSafeProps бросает
       Error в dev, а линтер блокирует сборку. */}
<DataTablePattern className="bg-card border border-border rounded-sm">
  ...
</DataTablePattern>

{/* Ошибка: style с background или color.
       SafeStyle запрещает background, backgroundColor, color, fill, stroke. */}
<DataTablePattern style={{ background: "var(--card)" }}>
  ...
</DataTablePattern>

{/* Ошибка: rowAccent через ручной className на TableRow вместо rowAccentToken.
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

{/* Ошибка: rowAccentEnabled без rowAccentToken на TableRow.
       CSS-правило активируется, но ни одна строка его не использует —
       мёртвая разметка. Используй их в паре. */}
<DataTablePattern rowAccentEnabled>
  <Card>
    <Table>
      <TableBody>
        <TableRow>...</TableRow>  {/* нет rowAccentToken */}
      </TableBody>
    </Table>
  </Card>
</DataTablePattern>`})]}),(0,V.jsx)(o,{id:`api`,label:`API`,children:(0,V.jsx)(M,{title:`DataTablePatternProps`,props:[{name:`header`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот заголовка. Необязательный: header можно положить в CardHeader внутри children.`},{name:`table`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот таблицы. Необязательный: Table можно положить прямо в children.`},{name:`emptyState`,type:`React.ReactNode`,defaultValue:`—`,description:`Замена при пустых данных. Используй EmptyState из @chucky23/design-system/react.`},{name:`footer`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот футера, обычно Pagination.`},{name:`rowAccentEnabled`,type:`boolean`,defaultValue:`false`,description:`Включает CSS rowAccent. Без него <TableRow rowAccentToken='…'> не получит полоску.`},{name:`children`,type:`React.ReactNode`,defaultValue:`—`,description:`Другой способ собрать содержимое, например Card + Table сразу.`},{name:`className`,type:`LayoutClassName`,defaultValue:`—`,description:`Только утилиты раскладки. На background/color/border assertSafeProps бросит Error в dev.`},{name:`style`,type:`SafeStyle`,defaultValue:`—`,description:`Без background, color, fill, stroke. Только свойства раскладки.`},{name:`id`,type:`string`,defaultValue:`—`,description:`HTML id секции, полезен для якорной ссылки.`}]})})]})})})}export{U as default};