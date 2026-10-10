import{$n as e,Hn as t,Mo as n,ar as r,c as i,cr as a,ir as o,nr as s,or as c,rr as l,sr as u,tr as d}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as f,M as p,r as m,s as h}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var g=n(),_=[{id:`TASK-001`,title:`Rotate production database credentials`,priority:`high`,owner:`@alice`,due:`2026-04-24`},{id:`TASK-002`,title:`Investigate CDN cache miss spike in eu-west-1`,priority:`medium`,owner:`@bob`,due:`2026-04-25`},{id:`TASK-003`,title:`Upgrade Node runtime to LTS 22 across workers`,priority:`low`,owner:`@carol`,due:`2026-05-02`},{id:`TASK-004`,title:`Document postmortem for INC-4012`,priority:`medium`,owner:`@dave`,due:`2026-04-26`},{id:`TASK-005`,title:`Add tracing to auth-service signup flow`,priority:`high`,owner:`@alice`,due:`2026-04-28`}];function v(e){switch(e){case`high`:return`err`;case`medium`:return`warn`;default:return`secondary`}}function y(){return(0,g.jsxs)(h,{className:`flex flex-col gap-6`,children:[(0,g.jsx)(t,{title:`Table Columns`,description:`TableColgroup + TableCol задают ширины колонок декларативно через <colgroup>. Без utility-классов w-[N%] на каждой ячейке.`}),(0,g.jsx)(p,{className:`max-w-prose`,"data-body":!0,children:`Колонки фиксированной ширины нужны, когда содержимое разной длины ломает ритм строк или колонка-действие должна занимать ровно 56 пикселей. TableColgroup оборачивает набор TableCol, каждый из которых принимает взаимоисключающие width (px) или widthPercent (%), плюс опциональный minWidth.`}),(0,g.jsx)(e,{label:`percent widths`,children:(0,g.jsx)(m,{title:`Task List`,description:`Процентные ширины распределяют пространство пропорционально: ID и Priority узкие, Title забирает остаток.`,code:`<Table>
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
</Table>`,children:(0,g.jsx)(h,{className:`w-full overflow-x-auto`,children:(0,g.jsxs)(d,{children:[(0,g.jsxs)(r,{children:[(0,g.jsx)(o,{widthPercent:14}),(0,g.jsx)(o,{}),(0,g.jsx)(o,{widthPercent:12}),(0,g.jsx)(o,{widthPercent:14}),(0,g.jsx)(o,{widthPercent:14})]}),(0,g.jsx)(u,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(c,{children:`ID`}),(0,g.jsx)(c,{children:`Title`}),(0,g.jsx)(c,{children:`Priority`}),(0,g.jsx)(c,{children:`Owner`}),(0,g.jsx)(c,{children:`Due`})]})}),(0,g.jsx)(s,{children:_.map(e=>(0,g.jsxs)(a,{children:[(0,g.jsx)(l,{className:`font-medium`,children:e.id}),(0,g.jsx)(l,{children:e.title}),(0,g.jsx)(l,{children:(0,g.jsx)(i,{variant:v(e.priority),children:e.priority})}),(0,g.jsx)(l,{tone:`muted`,children:e.owner}),(0,g.jsx)(l,{className:`tabular-nums`,children:e.due})]},e.id))})]})})})}),(0,g.jsx)(e,{label:`pixel widths и minWidth`,children:(0,g.jsx)(m,{title:`Compact Actions Column`,description:`width в пикселях удобен для фиксированных колонок: чекбокс, иконка действия, короткий идентификатор. minWidth защищает от схлопывания.`,code:`<Table>
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
</Table>`,children:(0,g.jsx)(h,{className:`w-full overflow-x-auto`,children:(0,g.jsxs)(d,{children:[(0,g.jsxs)(r,{children:[(0,g.jsx)(o,{width:40}),(0,g.jsx)(o,{widthPercent:40,minWidth:180}),(0,g.jsx)(o,{}),(0,g.jsx)(o,{width:96})]}),(0,g.jsx)(u,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(c,{children:`#`}),(0,g.jsx)(c,{children:`Title`}),(0,g.jsx)(c,{children:`Owner`}),(0,g.jsx)(c,{children:`Due`})]})}),(0,g.jsx)(s,{children:_.slice(0,3).map((e,t)=>(0,g.jsxs)(a,{children:[(0,g.jsx)(l,{tone:`muted`,className:`tabular-nums`,children:t+1}),(0,g.jsx)(l,{children:e.title}),(0,g.jsx)(l,{tone:`muted`,children:e.owner}),(0,g.jsx)(l,{className:`tabular-nums`,children:e.due})]},e.id))})]})})})}),(0,g.jsx)(e,{label:`api reference`,children:(0,g.jsx)(f,{title:`TableColgroup / TableCol Props`,props:[{name:`TableColgroup`,type:`colgroup`,defaultValue:`--`,description:`Обёртка над нативным <colgroup>. Принимает TableCol как children.`},{name:`TableCol.width`,type:`number`,defaultValue:`--`,description:`Ширина в пикселях. Взаимоисключающий с widthPercent.`},{name:`TableCol.widthPercent`,type:`number`,defaultValue:`--`,description:`Ширина в процентах. Взаимоисключающий с width.`},{name:`TableCol.minWidth`,type:`number`,defaultValue:`--`,description:`Минимальная ширина в пикселях. Комбинируется с width и widthPercent.`}]})})]})}export{y as default};