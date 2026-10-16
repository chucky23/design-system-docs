import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Cr as n,D as r,Dr as i,Gn as a,Or as o,Rn as s,Sn as c,Sr as l,_i as u,_n as d,ar as f,bn as p,br as m,dr as h,fr as g,hn as _,hr as v,j as y,k as b,kr as x,m as S,mr as C,nn as w,o as T,pr as E,ur as D,vn as O,wr as k,xn as A}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{J as j,h as M,j as N,r as P}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as F,t as I}from"./docs-article-BUNGnjgF.js";import"./data-table-pattern-Qj6uQCIE.js";import{f as L,n as R,t as z}from"./recipe-mocks-C44IbCNB.js";var B=e(),V=[{id:`usage`,label:`Использование`},{id:`header`,label:`Слот header`},{id:`footer`,label:`Слот footer`},{id:`empty`,label:`Пустое состояние`},{id:`row-accent`,label:`Акцент строки`},{id:`anti-patterns`,label:`Ошибки`},{id:`api`,label:`API`}];function H(){return(0,B.jsx)(S,{title:`DataTablePattern`,description:`Layout-каркас для табличных реестров: header + table + footer + emptyState. Закрытый API: только LayoutClassName и SafeStyle, никаких произвольных классов.`,breadcrumbs:I(`/patterns/data-table-pattern`),children:(0,B.jsx)(T,{presentation:`article`,label:`DataTablePattern`,inspector:F(V),document:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(P,{title:`Card + Table внутри паттерна`,description:`Минимальный пример: шапка Card и таблица Table внутри DataTablePattern.`,layout:`block`,code:`<DataTablePattern>
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
</DataTablePattern>`,children:(0,B.jsx)(w,{children:(0,B.jsxs)(_,{children:[(0,B.jsxs)(p,{children:[(0,B.jsx)(A,{"data-label":!0,children:`$ Task Registry`}),(0,B.jsx)(O,{children:`Активные задачи спринта (полный список).`})]}),(0,B.jsx)(d,{children:(0,B.jsxs)(l,{children:[(0,B.jsx)(o,{children:(0,B.jsxs)(x,{children:[(0,B.jsx)(i,{children:`#`}),(0,B.jsx)(i,{children:`Task`}),(0,B.jsx)(i,{children:`Status`})]})}),(0,B.jsx)(n,{children:L.map(e=>(0,B.jsxs)(x,{children:[(0,B.jsx)(k,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,B.jsx)(k,{"data-body":!0,children:e.title}),(0,B.jsx)(k,{children:(0,B.jsx)(c,{format:`bracket`,color:R[e.status],size:`sm`,children:e.status})})]},e.id))})]})})]})})}),(0,B.jsxs)(s,{children:[`DataTablePattern — каркас, а не сама таблица. Внутрь кладут Card и Table из`,` `,(0,B.jsx)(f,{children:`@chucky23/design-system/react`}),`; паттерн собирает слоты в нужном порядке (header → table → fallback → footer) и включает CSS-правило rowAccent. Закрытый API: `,(0,B.jsx)(f,{children:`className`}),` принимает только LayoutClassName (утилиты раскладки), `,(0,B.jsx)(f,{children:`style`}),` — только SafeStyle (без color и background).`]}),(0,B.jsxs)(s,{children:[`DataTablePattern — содержимое слота, а не способ собрать экран. Экран-реестр собирает тип`,` `,(0,B.jsx)(f,{children:`RegistryWorkspace`}),`: поиск, счётчик и пустое состояние даёт тип, поэтому DataTablePattern с собственным поиском и пустым состоянием внутри реестра не нужен. Эталон —`,` `,(0,B.jsx)(M,{href:`/screens/registry`,children:`реестр задач`}),`.`]}),(0,B.jsx)(m,{id:`usage`,label:`Использование`,children:(0,B.jsx)(a,{copyLabel:`Скопировать код: использование DataTablePattern`,language:`tsx`,code:`import { DataTablePattern } from "@chucky23/design-system/patterns/data-table-pattern"
import { Card, CardContent, Table } from "@chucky23/design-system/react"

<DataTablePattern footer={pagination} emptyState={tasks.length === 0 ? empty : undefined}>
  <Card>
    <CardContent><Table>…</Table></CardContent>
  </Card>
</DataTablePattern>`})}),(0,B.jsx)(m,{id:`header`,label:`Слот header`,children:(0,B.jsx)(P,{title:`Header через именованный слот`,description:`Альтернатива CardHeader: передай header пропом. DataTablePattern обернёт его в data-slot="data-table-pattern-header" — удобно для панели над таблицей, не привязанной к Card.`,layout:`block`,code:`<DataTablePattern
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
/>`,children:(0,B.jsx)(w,{header:(0,B.jsx)(j,{title:`Tasks`,description:`Задач: ${L.length}`,actions:(0,B.jsx)(u,{variant:`outline`,size:`sm`,children:`+ Add`})}),table:(0,B.jsx)(_,{children:(0,B.jsx)(d,{children:(0,B.jsxs)(l,{children:[(0,B.jsx)(o,{children:(0,B.jsxs)(x,{children:[(0,B.jsx)(i,{children:`#`}),(0,B.jsx)(i,{children:`Task`}),(0,B.jsx)(i,{children:`Assignee`})]})}),(0,B.jsx)(n,{children:L.slice(0,3).map(e=>(0,B.jsxs)(x,{children:[(0,B.jsx)(k,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,B.jsx)(k,{"data-body":!0,children:e.title}),(0,B.jsx)(k,{"data-body":!0,wrap:`nowrap`,children:e.assignee})]},e.id))})]})})})})})}),(0,B.jsx)(m,{id:`footer`,label:`Слот footer`,children:(0,B.jsx)(P,{title:`Footer с пагинацией`,description:`footer — слот после таблицы. Обычно туда кладут Pagination из @chucky23/design-system/react.`,layout:`block`,code:`<DataTablePattern
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
/>`,children:(0,B.jsx)(w,{table:(0,B.jsx)(_,{children:(0,B.jsx)(d,{children:(0,B.jsxs)(l,{children:[(0,B.jsx)(o,{children:(0,B.jsxs)(x,{children:[(0,B.jsx)(i,{children:`#`}),(0,B.jsx)(i,{children:`Task`}),(0,B.jsx)(i,{children:`Updated`})]})}),(0,B.jsx)(n,{children:L.slice(0,3).map(e=>(0,B.jsxs)(x,{children:[(0,B.jsx)(k,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,B.jsx)(k,{"data-body":!0,children:e.title}),(0,B.jsx)(k,{"data-numeric":!0,wrap:`nowrap`,children:e.updated})]},e.id))})]})})}),footer:(0,B.jsxs)(D,{ariaLabel:`Tasks pagination`,children:[(0,B.jsx)(v,{from:1,to:3,total:L.length}),(0,B.jsxs)(h,{children:[(0,B.jsx)(C,{disabled:!0}),(0,B.jsx)(E,{page:1,pageCount:2}),(0,B.jsx)(g,{})]})]})})})}),(0,B.jsx)(m,{id:`empty`,label:`Пустое состояние`,children:(0,B.jsx)(P,{title:`emptyState — замена при tasks.length === 0`,description:`emptyState рендерится в data-slot='data-table-pattern-empty'. Используй EmptyState из пакета: ручную сборку через div блокирует prefer-ds-state-components.`,layout:`block`,code:`<DataTablePattern
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
/>`,children:(0,B.jsx)(w,{header:(0,B.jsx)(j,{title:`Tasks`,actions:(0,B.jsx)(u,{variant:`outline`,size:`sm`,children:`+ Add`})}),emptyState:(0,B.jsxs)(r,{children:[(0,B.jsx)(t,{}),(0,B.jsx)(y,{children:`Задач пока нет`}),(0,B.jsx)(b,{children:`Создай первую задачу через CTA в шапке.`})]})})})}),(0,B.jsxs)(m,{id:`row-accent`,label:`Акцент строки`,children:[(0,B.jsxs)(s,{children:[(0,B.jsx)(f,{children:`rowAccentEnabled`}),` включает CSS-правило: каждая`,` `,(0,B.jsx)(f,{children:`<TableRow rowAccentToken="<token>">`}),` получает цветную полоску 3px слева через`,` `,(0,B.jsx)(f,{children:`::before`}),` в `,(0,B.jsx)(f,{children:`@layer ds-system`}),`. Без`,` `,(0,B.jsx)(f,{children:`rowAccentEnabled`}),` на корне правило не активируется.`]}),(0,B.jsx)(P,{title:`rowAccent с heatmap-токенами`,description:`rowAccentToken — имя CSS-переменной без префикса var(--). Токен "heatmap-done" → var(--heatmap-done). Done — ok-полоска, In Process — warn-полоска, Todo — без полоски.`,layout:`block`,code:`<DataTablePattern rowAccentEnabled>
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
</DataTablePattern>`,children:(0,B.jsx)(w,{rowAccentEnabled:!0,children:(0,B.jsxs)(_,{children:[(0,B.jsxs)(p,{children:[(0,B.jsx)(A,{"data-label":!0,children:`$ Task Heatmap`}),(0,B.jsx)(O,{children:`Done — ok-полоска, In Process — warn-полоска, Todo — нейтральная.`})]}),(0,B.jsx)(d,{children:(0,B.jsxs)(l,{children:[(0,B.jsx)(o,{children:(0,B.jsxs)(x,{children:[(0,B.jsx)(i,{children:`#`}),(0,B.jsx)(i,{children:`Task`}),(0,B.jsx)(i,{children:`Status`}),(0,B.jsx)(i,{children:`Assignee`})]})}),(0,B.jsx)(n,{children:L.map(e=>(0,B.jsxs)(x,{rowAccentToken:z[e.status],children:[(0,B.jsx)(k,{"data-numeric":!0,wrap:`nowrap`,children:e.id}),(0,B.jsx)(k,{"data-body":!0,children:e.title}),(0,B.jsx)(k,{children:(0,B.jsx)(c,{format:`bracket`,color:R[e.status],size:`sm`,children:e.status})}),(0,B.jsx)(k,{"data-body":!0,wrap:`nowrap`,children:e.assignee})]},e.id))})]})})]})})})]}),(0,B.jsxs)(m,{id:`anti-patterns`,label:`Ошибки`,children:[(0,B.jsxs)(s,{children:[`className и style — закрытый контракт через LayoutClassName и SafeStyle: на background и color assertSafeProps бросает исключение в dev-режиме. Примеры ниже показывают только код; таблица в составе дашборда — на странице`,` `,(0,B.jsx)(M,{href:`/example-1`,children:`Example 1`}),`.`]}),(0,B.jsx)(a,{copyLabel:`Скопировать код: ошибка с визуальным className`,language:`tsx`,code:`{/* Ошибка: className с визуальной утилитой (background, color, border, font).
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
</DataTablePattern>`})]}),(0,B.jsx)(m,{id:`api`,label:`API`,children:(0,B.jsx)(N,{title:`DataTablePatternProps`,props:[{name:`header`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот заголовка. Необязательный: header можно положить в CardHeader внутри children.`},{name:`table`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот таблицы. Необязательный: Table можно положить прямо в children.`},{name:`emptyState`,type:`React.ReactNode`,defaultValue:`—`,description:`Замена при пустых данных. Используй EmptyState из @chucky23/design-system/react.`},{name:`footer`,type:`React.ReactNode`,defaultValue:`—`,description:`Слот футера, обычно Pagination.`},{name:`rowAccentEnabled`,type:`boolean`,defaultValue:`false`,description:`Включает CSS rowAccent. Без него <TableRow rowAccentToken='…'> не получит полоску.`},{name:`children`,type:`React.ReactNode`,defaultValue:`—`,description:`Другой способ собрать содержимое, например Card + Table сразу.`},{name:`className`,type:`LayoutClassName`,defaultValue:`—`,description:`Только утилиты раскладки. На background/color/border assertSafeProps бросит Error в dev.`},{name:`style`,type:`SafeStyle`,defaultValue:`—`,description:`Без background, color, fill, stroke. Только свойства раскладки.`},{name:`id`,type:`string`,defaultValue:`—`,description:`HTML id секции, полезен для якорной ссылки.`}]})})]})})})}export{H as default};