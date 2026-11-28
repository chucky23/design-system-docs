import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$ as t,Ct as n,Q as r,St as i,X as a,Z as o,_t as s,et as c,ht as l,mt as u,tt as d,xt as f}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Mt as p,dr as m,lr as h,sr as g,ur as _,ws as v}from"./useLabelableId-Ck49MOKz.js";import{i as y,o as b,r as x,s as S,t as C}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{Ar as w,Fn as T,M as E,Ot as D,St as O,hi as k,pt as A,rt as j,tn as M,xr as N}from"./index-DnsCB0LC.js";var P=e(),F=[{id:`TM-101`,title:`Подключить конечную точку метрик`,status:`closed`,label:`Готово`},{id:`TM-102`,title:`Передать фильтры в реестр`,status:`progress`,label:`В работе`},{id:`TM-103`,title:`Покрыть тестами KpiGrid`,status:`blocked`,label:`Заблокирована`},{id:`TM-104`,title:`Обновить журнал изменений`,status:`open`,label:`Открыта`}],I=`<Table>
  <TableHeader>
    <TableRow><TableHead>Ключ</TableHead><TableHead>Задача</TableHead><TableHead>Статус</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((t) => (
      <TableRow key={t.id}>
        <TableCell mono wrap="nowrap">{t.id}</TableCell>
        <TableCell>{t.title}</TableCell>
        <TableCell><StatusTag status={t.status} label={t.label} /></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;function L(){return(0,P.jsxs)(O,{kind:`component`,route:`/patterns/data-table-pattern`,description:`Самостоятельная таблица с заголовком, пустым состоянием и подвалом для раздела документа или обзора. В реестр её не кладут: там таблица идёт прямо в children, а поиск, счётчик и состояния уже есть у типа экрана.`,example:(0,P.jsx)(j,{layout:`block`,code:`<DataTablePattern header={<SectionHeaderRecipe title="Задачи спринта 24" />}>
  <Card>
    <CardContent>
      ${I.split(`
`).join(`
      `)}
    </CardContent>
  </Card>
</DataTablePattern>`,children:(0,P.jsx)(w,{header:(0,P.jsx)(N,{title:`Задачи спринта 24`}),children:(0,P.jsx)(C,{children:(0,P.jsx)(x,{children:(0,P.jsxs)(u,{children:[(0,P.jsx)(i,{children:(0,P.jsxs)(n,{children:[(0,P.jsx)(f,{children:`Ключ`}),(0,P.jsx)(f,{children:`Задача`}),(0,P.jsx)(f,{children:`Статус`})]})}),(0,P.jsx)(l,{children:F.map(e=>(0,P.jsxs)(n,{children:[(0,P.jsx)(s,{mono:!0,wrap:`nowrap`,children:e.id}),(0,P.jsx)(s,{children:e.title}),(0,P.jsx)(s,{children:(0,P.jsx)(k,{status:e.status,label:e.label})})]},e.id))})]})})})})}),imports:(0,P.jsx)(A,{code:`import {
  Button, Card, CardContent, CardDescription, CardHeader, CardTitle,
  EmptyState, EmptyStateDescription, EmptyStateIcon, EmptyStateTitle,
  Pagination, PaginationControls, PaginationNext, PaginationPage, PaginationPrev, PaginationStatus,
  StatusTag, Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@chucky23/design-system/react"
import { TreeIcon } from "@chucky23/design-system/icons"
import { DataTablePattern } from "@chucky23/design-system/patterns/data-table-pattern"
import { SectionHeaderRecipe } from "@chucky23/design-system/recipes/section-header"`}),usage:(0,P.jsx)(T,{placement:[{screen:{href:`/screens/document`,label:`Документ`},slot:`sections[].content`},{screen:{href:`/screens/overview`,label:`Обзор`},slot:`sections[].content`}],use:[`Таблица подзадач в разделе документа эпика.`,`Последние сборки или задачи спринта в разделе обзора со своим подвалом.`,`Таблица в отчёте, которой нужны заголовок и пустое состояние, а типа экрана рядом нет.`],avoid:[{text:`Главный список экрана с поиском, фильтрами и счётчиком: передай Table прямо в children реестра.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Каркас таблицы внутри реестра повторяет его панель и состояния.`,instead:{href:`/screens/anti-patterns`,label:`Чего избегать`}},{text:`Короткий список без колонок.`,instead:{href:`/recipes/entity-row`,label:`EntityRowRecipe`}}]}),api:(0,P.jsx)(E,{items:[{name:`DataTablePattern`,props:[{name:`header`,type:`ReactNode`,description:`Заголовок над таблицей, обычно SectionHeaderRecipe.`},{name:`table`,type:`ReactNode`,description:`Таблица. Её можно передать и как children.`},{name:`emptyState`,type:`ReactNode`,description:`Пустое состояние после таблицы. Когда его показать, решает твой код.`},{name:`footer`,type:`ReactNode`,description:`Подвал под таблицей, обычно Pagination.`},{name:`rowAccentEnabled`,type:`boolean`,defaultValue:`false`,deprecated:`значок и слово в ячейке`,description:`Полосу слева у строки больше не рисует: цветных полос в системе нет. Статус строки показывает StatusTag в ячейке.`},{name:`children`,type:`ReactNode`,description:`Содержимое между таблицей и пустым состоянием.`},{name:`id`,type:`string`,description:`Якорь для ссылки на таблицу с другой части страницы.`}]}]}),related:(0,P.jsx)(D,{links:[{href:`/components/table`,label:`Table`,description:`Таблица внутри каркаса.`},{href:`/components/pagination`,label:`Pagination`,description:`Подвал с постраничной навигацией.`},{href:`/screens/registry`,label:`Реестр`,description:`Тип экрана для главного списка: Table кладётся прямо в children.`},{href:`/screens/anti-patterns`,label:`Чего избегать`,description:`Почему каркас таблицы не кладут в реестр.`}]}),children:[(0,P.jsx)(M,{id:`footer`,label:`Подвал с постраничной навигацией`,description:`Когда записей больше, чем помещается в раздел: подвал показывает страницу и общее число.`,children:(0,P.jsx)(j,{layout:`block`,code:`<DataTablePattern
  table={<Table>…</Table>}
  footer={
    <Pagination ariaLabel="Страницы таблицы">
      <PaginationStatus from={1} to={4} total={8} />
      <PaginationControls>
        <PaginationPrev disabled />
        <PaginationPage page={1} pageCount={2} />
        <PaginationNext />
      </PaginationControls>
    </Pagination>
  }
/>`,children:(0,P.jsx)(w,{table:(0,P.jsx)(C,{children:(0,P.jsx)(x,{children:(0,P.jsxs)(u,{children:[(0,P.jsx)(i,{children:(0,P.jsxs)(n,{children:[(0,P.jsx)(f,{children:`Ключ`}),(0,P.jsx)(f,{children:`Задача`})]})}),(0,P.jsx)(l,{children:F.slice(0,3).map(e=>(0,P.jsxs)(n,{children:[(0,P.jsx)(s,{mono:!0,wrap:`nowrap`,children:e.id}),(0,P.jsx)(s,{children:e.title})]},e.id))})]})})}),footer:(0,P.jsxs)(a,{ariaLabel:`Страницы таблицы`,children:[(0,P.jsx)(d,{from:1,to:3,total:8}),(0,P.jsxs)(o,{children:[(0,P.jsx)(c,{disabled:!0}),(0,P.jsx)(t,{page:1,pageCount:3}),(0,P.jsx)(r,{})]})]})})})}),(0,P.jsx)(M,{id:`empty`,label:`Пустое состояние`,description:`Когда записей ещё нет: пустое состояние объясняет, что делать, и стоит на месте таблицы.`,children:(0,P.jsx)(j,{layout:`block`,code:`<DataTablePattern
  header={<SectionHeaderRecipe title="Подзадачи" />}
  emptyState={
    <EmptyState>
      <EmptyStateIcon><TreeIcon /></EmptyStateIcon>
      <EmptyStateTitle>Подзадач нет</EmptyStateTitle>
      <EmptyStateDescription>Разбей эпик на задачи, чтобы следить за ходом работы.</EmptyStateDescription>
      <Button>Создать подзадачу</Button>
    </EmptyState>
  }
/>`,children:(0,P.jsx)(w,{header:(0,P.jsx)(N,{title:`Подзадачи`}),emptyState:(0,P.jsxs)(g,{children:[(0,P.jsx)(_,{children:(0,P.jsx)(p,{})}),(0,P.jsx)(m,{children:`Подзадач нет`}),(0,P.jsx)(h,{children:`Разбей эпик на задачи, чтобы следить за ходом работы.`}),(0,P.jsx)(v,{children:`Создать подзадачу`})]})})})}),(0,P.jsx)(M,{id:`row-status`,label:`Статус строки`,description:`Когда статус строки нужно найти глазами в длинной таблице: значок и слово StatusTag в своей колонке. Цветной полосы слева у строки нет.`,children:(0,P.jsx)(j,{fragment:!0,layout:`block`,code:`<DataTablePattern>
  <Card>
    <CardHeader><CardTitle>Статусы</CardTitle><CardDescription>Статус — значок и слово в своей колонке.</CardDescription></CardHeader>
    <CardContent>
      <Table>
        <TableBody>
          {rows.map((t) => (
            <TableRow key={t.id}>
              <TableCell mono wrap="nowrap">{t.id}</TableCell>
              <TableCell>{t.title}</TableCell>
              <TableCell><StatusTag status={t.status} label={t.label} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</DataTablePattern>`,children:(0,P.jsx)(w,{children:(0,P.jsxs)(C,{children:[(0,P.jsxs)(b,{children:[(0,P.jsx)(S,{children:`Статусы`}),(0,P.jsx)(y,{children:`Статус — значок и слово в своей колонке.`})]}),(0,P.jsx)(x,{children:(0,P.jsx)(u,{children:(0,P.jsx)(l,{children:F.map(e=>(0,P.jsxs)(n,{children:[(0,P.jsx)(s,{mono:!0,wrap:`nowrap`,children:e.id}),(0,P.jsx)(s,{children:e.title}),(0,P.jsx)(s,{children:(0,P.jsx)(k,{status:e.status,label:e.label})})]},e.id))})})})]})})})})]})}export{L as default};