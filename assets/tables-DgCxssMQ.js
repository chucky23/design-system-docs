import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Fs as t,Qr as n,Sr as r,ai as i,ei as a,er as o,j as s,kr as c,ni as l,oi as u,si as d,ti as f,v as p,x as m}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as h,Q as g,R as _,g as v}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{v as y}from"./chunk-CKG37GDB-SZ9fZavK.js";import{n as b,r as x,t as S}from"./docs-article-CV9v0E7s.js";import"./dist-DO5LNhzb.js";var C=e(),w=[{id:`INC-4012`,title:`API gateway timeout`,severity:`SEV-2`,status:`Active`,region:`us-east-1`,duration:`14m`},{id:`INC-4011`,title:`Database replication lag`,severity:`SEV-3`,status:`Resolved`,region:`eu-west-1`,duration:`47m`},{id:`INC-4010`,title:`CDN cache invalidation`,severity:`SEV-4`,status:`Resolved`,region:`ap-south-1`,duration:`8m`},{id:`INC-4009`,title:`Auth service 503`,severity:`SEV-1`,status:`Resolved`,region:`us-east-1`,duration:`3m`},{id:`INC-4008`,title:`Search index stale`,severity:`SEV-3`,status:`Monitoring`,region:`us-west-2`,duration:`1h 12m`}],T=[{service:`api-gateway`,status:`Healthy`,latency:`45ms`,errors:`0.02%`,rps:`12,450`},{service:`auth-service`,status:`Degraded`,latency:`340ms`,errors:`2.4%`,rps:`3,200`},{service:`user-api`,status:`Healthy`,latency:`28ms`,errors:`0.01%`,rps:`8,100`},{service:`notification-worker`,status:`Healthy`,latency:`12ms`,errors:`0.00%`,rps:`1,580`},{service:`search-indexer`,status:`Monitoring`,latency:`180ms`,errors:`0.8%`,rps:`420`}];function E(e){switch(e){case`SEV-1`:return`err`;case`SEV-2`:return`warn`;case`SEV-3`:return`info`;default:return`secondary`}}function D(e){switch(e){case`Active`:return`err`;case`Monitoring`:return`warn`;case`Resolved`:return`ok`;default:return`neutral`}}function O(e){switch(e){case`Healthy`:return`ok`;case`Degraded`:return`err`;default:return`warn`}}var k=[{id:`usage`,label:`Использование`},{id:`compact`,label:`Компактная таблица`},{id:`severity`,label:`SeverityRecipe`},{id:`index`,label:`Колонка номера`},{id:`sortable`,label:`Сортировка`},{id:`css`,label:`CSS-контракт пакета`},{id:`api`,label:`API`}];function A(){return(0,C.jsx)(s,{title:`Tables`,description:`Плотные таблицы данных: padding ячейки 0.5rem, SF Pro, числа tabular-nums. Заголовки SF Pro 11px без капса и разрядки. Hover строки — teal-faint фон.`,breadcrumbs:S(`/components/tables`),meta:b(`/components/tables`),children:(0,C.jsx)(m,{presentation:`article`,label:`Tables`,inspector:x(k),document:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v,{title:`Incident Table`,description:`Реальный пример таблицы инцидентов с severity badges и status indicators.`,code:`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Severity</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Region</TableHead>
      <TableHead>Duration</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell wrap="nowrap">INC-4012</TableCell>
      <TableCell>API gateway timeout</TableCell>
      <TableCell><Badge>SEV-2</Badge></TableCell>
      <TableCell><StatusTag tone="err" label="Active" /></TableCell>
      <TableCell tone="muted" wrap="nowrap">us-east-1</TableCell>
      <TableCell>14m</TableCell>
    </TableRow>
  </TableBody>
</Table>`,layout:`block`,children:(0,C.jsxs)(a,{children:[(0,C.jsx)(u,{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(i,{children:`ID`}),(0,C.jsx)(i,{children:`Title`}),(0,C.jsx)(i,{children:`Severity`}),(0,C.jsx)(i,{children:`Status`}),(0,C.jsx)(i,{children:`Region`}),(0,C.jsx)(i,{children:`Duration`})]})}),(0,C.jsx)(f,{children:w.map(e=>(0,C.jsxs)(d,{children:[(0,C.jsx)(l,{className:`font-medium`,wrap:`nowrap`,children:e.id}),(0,C.jsx)(l,{children:e.title}),(0,C.jsx)(l,{children:(0,C.jsx)(p,{variant:E(e.severity),children:e.severity})}),(0,C.jsx)(l,{children:(0,C.jsx)(o,{tone:D(e.status),label:e.status})}),(0,C.jsx)(l,{tone:`muted`,wrap:`nowrap`,children:e.region}),(0,C.jsx)(l,{className:`tabular-nums`,children:e.duration})]},e.id))})]})}),(0,C.jsx)(r,{children:`Таблица — основной инструмент для реестров и мониторинга. Плотность подобрана так, чтобы на экране помещалось 20–30 строк без скролла, а числа выравниваются по разрядам через tabular-nums. Signal-иконки и Badge дают статус без отдельной колонки.`}),(0,C.jsx)(r,{children:`TableCell переносит обычный текст по границам слов. Для ключей и действий используй wrap="nowrap"; закреплённая справа ячейка выбирает его по умолчанию. Длинное описание не должно расширять таблицу и скрывать статусы соседней колонки. Проверяй полный текст, клавиатурную прокрутку и действия на мобильном экране.`}),(0,C.jsx)(n,{id:`usage`,label:`Использование`,children:(0,C.jsx)(c,{copyLabel:`Скопировать код: использование Table`,language:`tsx`,code:`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@chucky23/design-system/react"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Title</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell wrap="nowrap">INC-4012</TableCell>
      <TableCell>API gateway timeout</TableCell>
    </TableRow>
  </TableBody>
</Table>`})}),(0,C.jsx)(n,{id:`compact`,label:`Компактная таблица`,children:(0,C.jsx)(v,{title:`Service Health Table`,description:`Минималистичная таблица без плашек: статус — цветная точка и слово StatusTag в формате dot по умолчанию.`,code:`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>p99 Latency</TableHead>
      <TableHead>Error Rate</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>api-gateway</TableCell>
      <TableCell><StatusTag tone="ok" label="Healthy" /></TableCell>
      <TableCell>45ms</TableCell>
      <TableCell>0.02%</TableCell>
    </TableRow>
  </TableBody>
</Table>`,layout:`block`,children:(0,C.jsxs)(a,{children:[(0,C.jsx)(u,{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(i,{children:`Service`}),(0,C.jsx)(i,{children:`Status`}),(0,C.jsx)(i,{children:`p99 Latency`}),(0,C.jsx)(i,{children:`Error Rate`}),(0,C.jsx)(i,{children:`Requests/s`})]})}),(0,C.jsx)(f,{children:T.map(e=>(0,C.jsxs)(d,{children:[(0,C.jsx)(l,{className:`font-medium`,children:e.service}),(0,C.jsx)(l,{children:(0,C.jsx)(o,{tone:O(e.status),label:e.status})}),(0,C.jsx)(l,{className:`tabular-nums`,children:e.latency}),(0,C.jsx)(l,{className:`tabular-nums`,children:e.errors}),(0,C.jsx)(l,{className:`tabular-nums`,children:e.rps})]},e.service))})]})})}),(0,C.jsx)(n,{id:`severity`,label:`SeverityRecipe`,children:(0,C.jsxs)(v,{title:`SeverityRecipe`,description:`Ladder SEV-1…SEV-4 c привязкой уровня к сигнальному цвету: 1 — err, 2 — warn, 3 — info, 4 — secondary. Используй вместо ручного подбора Badge variant там, где важна упорядоченность.`,code:`import { SeverityRecipe } from "@chucky23/design-system/recipes/severity"

<SeverityRecipe level={1} />
<SeverityRecipe level={2} />
<SeverityRecipe level={3} />
<SeverityRecipe level={4} />
<SeverityRecipe level={2} label="Major" />`,children:[(0,C.jsx)(y,{level:1}),(0,C.jsx)(y,{level:2}),(0,C.jsx)(y,{level:3}),(0,C.jsx)(y,{level:4}),(0,C.jsx)(y,{level:2,label:`Major`})]})}),(0,C.jsx)(n,{id:`index`,label:`Колонка номера`,children:(0,C.jsx)(v,{title:`Index column`,description:`Колонка # с постоянной шириной — стабильный якорь для скана. Используй formatEntityId(n) для leading-zeros и font-mono tabular-nums text-muted-foreground для визуальной тишины.`,code:`import { formatEntityId } from "@chucky23/design-system"

<TableCell tone="muted" className="font-mono tabular-nums text-right w-12">
  {formatEntityId(index + 1)}
</TableCell>`,layout:`block`,children:(0,C.jsxs)(a,{children:[(0,C.jsx)(u,{children:(0,C.jsxs)(d,{children:[(0,C.jsx)(i,{className:`w-12 text-right`,children:`#`}),(0,C.jsx)(i,{children:`Title`}),(0,C.jsx)(i,{children:`Severity`})]})}),(0,C.jsx)(f,{children:w.map((e,n)=>(0,C.jsxs)(d,{children:[(0,C.jsx)(l,{tone:`muted`,className:`font-mono tabular-nums text-right w-12`,children:t(n+1)}),(0,C.jsx)(l,{children:e.title}),(0,C.jsx)(l,{children:(0,C.jsx)(p,{variant:E(e.severity),children:e.severity})})]},e.id))})]})})}),(0,C.jsx)(n,{id:`sortable`,label:`Сортировка`,children:(0,C.jsx)(v,{title:`Sortable Table`,description:`TableHead с пропом sortable рендерит встроенную кнопку-переключатель. aria-sort на <th> обновляется автоматически. Иконки: SortIcon (неактивна), SortAscIcon, SortDescIcon.`,code:`<TableHead
  sortable
  sortDirection={directionFor("latency")}
  onSortChange={() => toggle("latency")}
>
  p99 Latency
</TableHead>`,layout:`block`,children:(0,C.jsx)(_,{})})}),(0,C.jsxs)(n,{id:`css`,label:`CSS-контракт пакета`,children:[(0,C.jsx)(r,{children:`Эти правила принадлежат пакету и показывают его контракт. Приложению достаточно preset.css и публичных props, включая wrap и pin; копировать CSS таблицы не нужно.`}),(0,C.jsx)(c,{copyLabel:`Скопировать код: CSS-контракт таблицы`,language:`css`,code:`/* Table cells: compact 0.5rem padding */
[data-style="theme"] [data-slot="table-cell"] {
  padding: 0.5rem;
  font-size: var(--text-sm);
  line-height: 1.4;
}

/* Table headers: SF Pro label style, no caps */
[data-style="theme"] [data-slot="table-head"] {
  padding: 0.5rem;
  height: auto;
  font-size: var(--text-2xs);
  color: var(--steel);
}

/* Row hover: teal-faint background */
[data-style="theme"] [data-slot="table-row"]:hover {
  background: var(--teal-faint);
}

/* Row border */
[data-style="theme"] [data-slot="table-row"] {
  border-color: var(--border);
}`})]}),(0,C.jsxs)(n,{id:`api`,label:`API`,children:[(0,C.jsx)(g,{title:`Table Slots`,props:[{name:`Table`,type:`table`,defaultValue:`—`,description:`Root table element. Full width.`},{name:`TableHeader`,type:`thead`,defaultValue:`—`,description:`Header group. Contains TableRow with TableHead cells.`},{name:`TableHead`,type:`th`,defaultValue:`—`,description:`Header cell. SF Pro 11px, no caps or tracking, steel color.`},{name:`TableBody`,type:`tbody`,defaultValue:`—`,description:`Body group. Contains TableRow with TableCell cells.`},{name:`TableRow`,type:`tr`,defaultValue:`—`,description:`Table row. Hover: teal-faint background.`},{name:`TableCell`,type:`td`,defaultValue:`—`,description:`Data cell. 0.5rem padding, tabular-nums.`},{name:`TableCell.wrap`,type:`"normal" | "nowrap"`,defaultValue:`"normal"; "nowrap" при pin="end"`,description:`Перенос по границам слов. Явный nowrap сохраняет ключи и действия в одну строку.`}]}),(0,C.jsxs)(r,{children:[(0,C.jsx)(h,{href:`/components/table-columns`,children:`Table Columns`}),` — ширины колонок через TableColgroup и TableCol.`]})]})]})})})}export{A as default};