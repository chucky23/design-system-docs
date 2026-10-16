import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cr as t,Dr as n,Er as r,Gn as i,Or as a,Rn as o,Sr as s,Tr as c,br as l,kr as u,m as d,o as f,r as p,wr as m}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h,j as g,r as _}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as v,t as y}from"./docs-article-BUNGnjgF.js";var b=e(),x=[{id:`TASK-001`,title:`Rotate production database credentials`,priority:`high`,owner:`@alice`,due:`2026-04-24`},{id:`TASK-002`,title:`Investigate CDN cache miss spike in eu-west-1`,priority:`medium`,owner:`@bob`,due:`2026-04-25`},{id:`TASK-003`,title:`Upgrade Node runtime to LTS 22 across workers`,priority:`low`,owner:`@carol`,due:`2026-05-02`},{id:`TASK-004`,title:`Document postmortem for INC-4012`,priority:`medium`,owner:`@dave`,due:`2026-04-26`},{id:`TASK-005`,title:`Add tracing to auth-service signup flow`,priority:`high`,owner:`@alice`,due:`2026-04-28`}];function S(e){switch(e){case`high`:return`err`;case`medium`:return`warn`;default:return`secondary`}}var C=[{id:`usage`,label:`Использование`},{id:`pixel-widths`,label:`Пиксели и minWidth`},{id:`api`,label:`API`}];function w(){return(0,b.jsx)(d,{title:`Table Columns`,description:`TableColgroup + TableCol задают ширины колонок декларативно через нативный colgroup. Без utility-классов w-[N%] на каждой ячейке.`,breadcrumbs:y(`/components/table-columns`),children:(0,b.jsx)(f,{presentation:`article`,label:`Table Columns`,inspector:v(C),document:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{title:`Task List`,description:`Процентные ширины распределяют пространство пропорционально: ID и Priority узкие, Title забирает остаток.`,code:`<Table>
  <TableColgroup>
    <TableCol widthPercent={14} />
    <TableCol />
    <TableCol widthPercent={12} />
    <TableCol widthPercent={14} />
    <TableCol widthPercent={14} />
  </TableColgroup>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Priority</TableHead>
      <TableHead>Owner</TableHead>
      <TableHead>Due</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {tasks.map((t) => (
      <TableRow key={t.id}>
        <TableCell>{t.id}</TableCell>
        <TableCell>{t.title}</TableCell>
        <TableCell><Badge>{t.priority}</Badge></TableCell>
        <TableCell>{t.owner}</TableCell>
        <TableCell>{t.due}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,layout:`block`,children:(0,b.jsxs)(s,{children:[(0,b.jsxs)(r,{children:[(0,b.jsx)(c,{widthPercent:14}),(0,b.jsx)(c,{}),(0,b.jsx)(c,{widthPercent:12}),(0,b.jsx)(c,{widthPercent:14}),(0,b.jsx)(c,{widthPercent:14})]}),(0,b.jsx)(a,{children:(0,b.jsxs)(u,{children:[(0,b.jsx)(n,{children:`ID`}),(0,b.jsx)(n,{children:`Title`}),(0,b.jsx)(n,{children:`Priority`}),(0,b.jsx)(n,{children:`Owner`}),(0,b.jsx)(n,{children:`Due`})]})}),(0,b.jsx)(t,{children:x.map(e=>(0,b.jsxs)(u,{children:[(0,b.jsx)(m,{className:`font-medium`,children:e.id}),(0,b.jsx)(m,{children:e.title}),(0,b.jsx)(m,{children:(0,b.jsx)(p,{variant:S(e.priority),children:e.priority})}),(0,b.jsx)(m,{tone:`muted`,children:e.owner}),(0,b.jsx)(m,{className:`tabular-nums`,children:e.due})]},e.id))})]})}),(0,b.jsx)(o,{children:`Колонки фиксированной ширины нужны, когда содержимое разной длины ломает ритм строк или колонка-действие должна занимать ровно 56 пикселей. TableColgroup оборачивает набор TableCol, каждый из которых принимает взаимоисключающие width (px) или widthPercent (%), плюс опциональный minWidth.`}),(0,b.jsx)(l,{id:`usage`,label:`Использование`,children:(0,b.jsx)(i,{copyLabel:`Скопировать код: использование TableColgroup`,language:`tsx`,code:`import { Table, TableCol, TableColgroup } from "@chucky23/design-system/react"

<Table>
  <TableColgroup>
    <TableCol widthPercent={30} minWidth={120} />
    <TableCol width={56} />
  </TableColgroup>
  <TableHeader>…</TableHeader>
</Table>`})}),(0,b.jsx)(l,{id:`pixel-widths`,label:`Пиксели и minWidth`,children:(0,b.jsx)(_,{title:`Compact Actions Column`,description:`width в пикселях удобен для фиксированных колонок: чекбокс, иконка действия, короткий идентификатор. minWidth защищает от схлопывания.`,code:`<Table>
  <TableColgroup>
    <TableCol width={40} />
    <TableCol widthPercent={40} minWidth={180} />
    <TableCol />
    <TableCol width={96} />
  </TableColgroup>
  <TableHeader>
    <TableRow>
      <TableHead>#</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Owner</TableHead>
      <TableHead>Due</TableHead>
    </TableRow>
  </TableHeader>
  {/* ... */}
</Table>`,layout:`block`,children:(0,b.jsxs)(s,{children:[(0,b.jsxs)(r,{children:[(0,b.jsx)(c,{width:40}),(0,b.jsx)(c,{widthPercent:40,minWidth:180}),(0,b.jsx)(c,{}),(0,b.jsx)(c,{width:96})]}),(0,b.jsx)(a,{children:(0,b.jsxs)(u,{children:[(0,b.jsx)(n,{children:`#`}),(0,b.jsx)(n,{children:`Title`}),(0,b.jsx)(n,{children:`Owner`}),(0,b.jsx)(n,{children:`Due`})]})}),(0,b.jsx)(t,{children:x.slice(0,3).map((e,t)=>(0,b.jsxs)(u,{children:[(0,b.jsx)(m,{tone:`muted`,className:`tabular-nums`,children:t+1}),(0,b.jsx)(m,{children:e.title}),(0,b.jsx)(m,{tone:`muted`,children:e.owner}),(0,b.jsx)(m,{className:`tabular-nums`,children:e.due})]},e.id))})]})})}),(0,b.jsxs)(l,{id:`api`,label:`API`,children:[(0,b.jsx)(g,{title:`TableColgroup / TableCol Props`,props:[{name:`TableColgroup`,type:`colgroup`,defaultValue:`—`,description:`Обёртка над нативным <colgroup>. Принимает TableCol как children.`},{name:`TableCol.width`,type:`number`,defaultValue:`—`,description:`Ширина в пикселях. Взаимоисключающий с widthPercent.`},{name:`TableCol.widthPercent`,type:`number`,defaultValue:`—`,description:`Ширина в процентах. Взаимоисключающий с width.`},{name:`TableCol.minWidth`,type:`number`,defaultValue:`—`,description:`Минимальная ширина в пикселях. Комбинируется с width и widthPercent.`}]}),(0,b.jsxs)(o,{children:[`Остальные части таблицы описаны на странице `,(0,b.jsx)(h,{href:`/components/tables`,children:`Tables`}),`.`]})]})]})})})}export{w as default};