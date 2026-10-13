import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cr as t,Dr as n,Gn as r,I as i,O as a,Or as o,Rn as s,Sr as c,Xo as l,a as u,br as d,kr as f,wn as p,wr as m}from"./chunk-5DUEG3R3-896u-HpP.js";import{h,j as g,lt as _,r as v,x as y}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as b,t as x}from"./docs-article-DBNRC-Xz.js";import"./dist-BOtGaVMq.js";var S=e(),C=[{id:`INC-4012`,title:`API gateway timeout`,severity:`SEV-2`,status:`Active`,region:`us-east-1`,duration:`14m`},{id:`INC-4011`,title:`Database replication lag`,severity:`SEV-3`,status:`Resolved`,region:`eu-west-1`,duration:`47m`},{id:`INC-4010`,title:`CDN cache invalidation`,severity:`SEV-4`,status:`Resolved`,region:`ap-south-1`,duration:`8m`},{id:`INC-4009`,title:`Auth service 503`,severity:`SEV-1`,status:`Resolved`,region:`us-east-1`,duration:`3m`},{id:`INC-4008`,title:`Search index stale`,severity:`SEV-3`,status:`Monitoring`,region:`us-west-2`,duration:`1h 12m`}],w=[{service:`api-gateway`,status:`Healthy`,latency:`45ms`,errors:`0.02%`,rps:`12,450`},{service:`auth-service`,status:`Degraded`,latency:`340ms`,errors:`2.4%`,rps:`3,200`},{service:`user-api`,status:`Healthy`,latency:`28ms`,errors:`0.01%`,rps:`8,100`},{service:`notification-worker`,status:`Healthy`,latency:`12ms`,errors:`0.00%`,rps:`1,580`},{service:`search-indexer`,status:`Monitoring`,latency:`180ms`,errors:`0.8%`,rps:`420`}];function T(e){switch(e){case`SEV-1`:return`err`;case`SEV-2`:return`warn`;case`SEV-3`:return`info`;default:return`secondary`}}function E(e){switch(e){case`Active`:return`err`;case`Monitoring`:return`warn`;case`Resolved`:return`ok`;default:return`neutral`}}function D(e){switch(e){case`Healthy`:return`ok`;case`Degraded`:return`err`;default:return`warn`}}var O=[{id:`usage`,label:`Использование`},{id:`compact`,label:`Компактная таблица`},{id:`severity`,label:`SeverityRecipe`},{id:`index`,label:`Колонка номера`},{id:`sortable`,label:`Сортировка`},{id:`css`,label:`CSS-контракт пакета`},{id:`api`,label:`API`}];function k(){return(0,S.jsx)(i,{title:`Tables`,description:`Плотные таблицы данных: padding ячейки 0.5rem, tabular-nums, JetBrains Mono. Заголовки uppercase с трекингом, 12px. Hover строки — teal-faint фон.`,breadcrumbs:x(`/components/tables`),children:(0,S.jsx)(a,{presentation:`article`,label:`Tables`,inspector:b(O),document:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v,{title:`Incident Table`,description:`Реальный пример таблицы инцидентов с severity badges и status indicators.`,code:`<Table>
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
      <TableCell><StatusTag tone="err" format="bracket" label="Active" /></TableCell>
      <TableCell tone="muted" wrap="nowrap">us-east-1</TableCell>
      <TableCell>14m</TableCell>
    </TableRow>
  </TableBody>
</Table>`,layout:`block`,children:(0,S.jsxs)(c,{children:[(0,S.jsx)(o,{children:(0,S.jsxs)(f,{children:[(0,S.jsx)(n,{children:`ID`}),(0,S.jsx)(n,{children:`Title`}),(0,S.jsx)(n,{children:`Severity`}),(0,S.jsx)(n,{children:`Status`}),(0,S.jsx)(n,{children:`Region`}),(0,S.jsx)(n,{children:`Duration`})]})}),(0,S.jsx)(t,{children:C.map(e=>(0,S.jsxs)(f,{children:[(0,S.jsx)(m,{className:`font-medium`,wrap:`nowrap`,children:e.id}),(0,S.jsx)(m,{children:e.title}),(0,S.jsx)(m,{children:(0,S.jsx)(u,{variant:T(e.severity),children:e.severity})}),(0,S.jsx)(m,{children:(0,S.jsx)(p,{tone:E(e.status),format:`bracket`,label:e.status})}),(0,S.jsx)(m,{tone:`muted`,wrap:`nowrap`,children:e.region}),(0,S.jsx)(m,{className:`tabular-nums`,children:e.duration})]},e.id))})]})}),(0,S.jsx)(s,{children:`Таблица — основной инструмент для реестров и мониторинга. Плотность подобрана так, чтобы на экране помещалось 20–30 строк без скролла, а числа выравниваются по разрядам через tabular-nums. Signal-иконки и Badge дают статус без отдельной колонки.`}),(0,S.jsx)(s,{children:`TableCell переносит обычный текст по границам слов. Для ключей и действий используй wrap="nowrap"; закреплённая справа ячейка выбирает его по умолчанию. Длинное описание не должно расширять таблицу и скрывать статусы соседней колонки. Проверяй полный текст, клавиатурную прокрутку и действия на мобильном экране.`}),(0,S.jsx)(d,{id:`usage`,label:`Использование`,children:(0,S.jsx)(r,{copyLabel:`Скопировать код: использование Table`,language:`tsx`,code:`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@chucky23/design-system/react"

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
</Table>`})}),(0,S.jsx)(d,{id:`compact`,label:`Компактная таблица`,children:(0,S.jsx)(v,{title:`Service Health Table`,description:`Минималистичная таблица без плашек: статус — цветной текст StatusTag в формате bracket.`,code:`<Table>
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
      <TableCell><StatusTag tone="ok" format="bracket" label="Healthy" /></TableCell>
      <TableCell>45ms</TableCell>
      <TableCell>0.02%</TableCell>
    </TableRow>
  </TableBody>
</Table>`,layout:`block`,children:(0,S.jsxs)(c,{children:[(0,S.jsx)(o,{children:(0,S.jsxs)(f,{children:[(0,S.jsx)(n,{children:`Service`}),(0,S.jsx)(n,{children:`Status`}),(0,S.jsx)(n,{children:`p99 Latency`}),(0,S.jsx)(n,{children:`Error Rate`}),(0,S.jsx)(n,{children:`Requests/s`})]})}),(0,S.jsx)(t,{children:w.map(e=>(0,S.jsxs)(f,{children:[(0,S.jsx)(m,{className:`font-medium`,children:e.service}),(0,S.jsx)(m,{children:(0,S.jsx)(p,{tone:D(e.status),format:`bracket`,label:e.status})}),(0,S.jsx)(m,{className:`tabular-nums`,children:e.latency}),(0,S.jsx)(m,{className:`tabular-nums`,children:e.errors}),(0,S.jsx)(m,{className:`tabular-nums`,children:e.rps})]},e.service))})]})})}),(0,S.jsx)(d,{id:`severity`,label:`SeverityRecipe`,children:(0,S.jsxs)(v,{title:`SeverityRecipe`,description:`Ladder SEV-1…SEV-4 c привязкой уровня к сигнальному цвету: 1 — err, 2 — warn, 3 — info, 4 — secondary. Используй вместо ручного подбора Badge variant там, где важна упорядоченность.`,code:`import { SeverityRecipe } from "@chucky23/design-system/recipes/severity"

<SeverityRecipe level={1} />
<SeverityRecipe level={2} />
<SeverityRecipe level={3} />
<SeverityRecipe level={4} />
<SeverityRecipe level={2} label="Major" />`,children:[(0,S.jsx)(_,{level:1}),(0,S.jsx)(_,{level:2}),(0,S.jsx)(_,{level:3}),(0,S.jsx)(_,{level:4}),(0,S.jsx)(_,{level:2,label:`Major`})]})}),(0,S.jsx)(d,{id:`index`,label:`Колонка номера`,children:(0,S.jsx)(v,{title:`Index column`,description:`Колонка # с постоянной шириной — стабильный якорь для скана. Используй formatEntityId(n) для leading-zeros и font-mono tabular-nums text-muted-foreground для визуальной тишины.`,code:`import { formatEntityId } from "@chucky23/design-system"

<TableCell tone="muted" className="font-mono tabular-nums text-right w-12">
  {formatEntityId(index + 1)}
</TableCell>`,layout:`block`,children:(0,S.jsxs)(c,{children:[(0,S.jsx)(o,{children:(0,S.jsxs)(f,{children:[(0,S.jsx)(n,{className:`w-12 text-right`,children:`#`}),(0,S.jsx)(n,{children:`Title`}),(0,S.jsx)(n,{children:`Severity`})]})}),(0,S.jsx)(t,{children:C.map((e,t)=>(0,S.jsxs)(f,{children:[(0,S.jsx)(m,{tone:`muted`,className:`font-mono tabular-nums text-right w-12`,children:l(t+1)}),(0,S.jsx)(m,{children:e.title}),(0,S.jsx)(m,{children:(0,S.jsx)(u,{variant:T(e.severity),children:e.severity})})]},e.id))})]})})}),(0,S.jsx)(d,{id:`sortable`,label:`Сортировка`,children:(0,S.jsx)(v,{title:`Sortable Table`,description:`TableHead с пропом sortable рендерит встроенную кнопку-переключатель. aria-sort на <th> обновляется автоматически. Иконки: SortIcon (неактивна), SortAscIcon, SortDescIcon.`,code:`<TableHead
  sortable
  sortDirection={directionFor("latency")}
  onSortChange={() => toggle("latency")}
>
  p99 Latency
</TableHead>`,layout:`block`,children:(0,S.jsx)(y,{})})}),(0,S.jsxs)(d,{id:`css`,label:`CSS-контракт пакета`,children:[(0,S.jsx)(s,{children:`Эти правила принадлежат пакету и показывают его контракт. Приложению достаточно preset.css и публичных props, включая wrap и pin; копировать CSS таблицы не нужно.`}),(0,S.jsx)(r,{copyLabel:`Скопировать код: CSS-контракт таблицы`,language:`css`,code:`/* Table cells: compact 0.5rem padding */
[data-style="theme"] [data-slot="table-cell"] {
  padding: 0.5rem;
  font-size: var(--text-sm);
  line-height: 1.3;
}

/* Table headers: uppercase label style */
[data-style="theme"] [data-slot="table-head"] {
  padding: 0.5rem;
  height: auto;
  font-size: var(--text-xs);
  color: var(--steel);
}

/* Row hover: teal-faint background */
[data-style="theme"] [data-slot="table-row"]:hover {
  background: var(--teal-faint);
}

/* Row border */
[data-style="theme"] [data-slot="table-row"] {
  border-color: var(--border);
}`})]}),(0,S.jsxs)(d,{id:`api`,label:`API`,children:[(0,S.jsx)(g,{title:`Table Slots`,props:[{name:`Table`,type:`table`,defaultValue:`—`,description:`Root table element. Full width.`},{name:`TableHeader`,type:`thead`,defaultValue:`—`,description:`Header group. Contains TableRow with TableHead cells.`},{name:`TableHead`,type:`th`,defaultValue:`—`,description:`Header cell. Uppercase, tracked, 12px, steel color.`},{name:`TableBody`,type:`tbody`,defaultValue:`—`,description:`Body group. Contains TableRow with TableCell cells.`},{name:`TableRow`,type:`tr`,defaultValue:`—`,description:`Table row. Hover: teal-faint background.`},{name:`TableCell`,type:`td`,defaultValue:`—`,description:`Data cell. 0.5rem padding, tabular-nums.`},{name:`TableCell.wrap`,type:`"normal" | "nowrap"`,defaultValue:`"normal"; "nowrap" при pin="end"`,description:`Перенос по границам слов. Явный nowrap сохраняет ключи и действия в одну строку.`}]}),(0,S.jsxs)(s,{children:[(0,S.jsx)(h,{href:`/components/table-columns`,children:`Table Columns`}),` — ширины колонок через TableColgroup и TableCol.`]})]})]})})})}export{k as default};