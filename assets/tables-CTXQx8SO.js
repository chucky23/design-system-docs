import{$n as e,Fo as t,Hn as n,Mo as r,c as i,cr as a,kn as o,nr as s,or as c,rr as l,sr as u,tr as d}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as f,M as p,O as m,St as h,r as g,s as _}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./dist-CDWUwtFJ.js";var v=r(),y=[{id:`INC-4012`,title:`API gateway timeout`,severity:`SEV-2`,status:`Active`,region:`us-east-1`,duration:`14m`},{id:`INC-4011`,title:`Database replication lag`,severity:`SEV-3`,status:`Resolved`,region:`eu-west-1`,duration:`47m`},{id:`INC-4010`,title:`CDN cache invalidation`,severity:`SEV-4`,status:`Resolved`,region:`ap-south-1`,duration:`8m`},{id:`INC-4009`,title:`Auth service 503`,severity:`SEV-1`,status:`Resolved`,region:`us-east-1`,duration:`3m`},{id:`INC-4008`,title:`Search index stale`,severity:`SEV-3`,status:`Monitoring`,region:`us-west-2`,duration:`1h 12m`}];function b(e){switch(e){case`SEV-1`:return`err`;case`SEV-2`:return`warn`;case`SEV-3`:return`info`;default:return`secondary`}}function x(e){switch(e){case`Active`:return`err`;case`Monitoring`:return`warn`;case`Resolved`:return`ok`;default:return}}function S(){return(0,v.jsxs)(_,{className:`flex flex-col gap-6`,children:[(0,v.jsx)(n,{title:`Tables`,description:`Плотные таблицы данных: padding ячейки 0.5rem, tabular-nums, JetBrains Mono. Заголовки uppercase с трекингом, 12px. Hover строки — teal-faint фон.`}),(0,v.jsx)(p,{className:`max-w-prose`,"data-body":!0,children:`Таблица — основной инструмент для реестров и мониторинга. Плотность подобрана так, чтобы на экране помещалось 20–30 строк без скролла, а числа выравниваются по разрядам через tabular-nums. Signal-иконки и Badge дают статус без отдельной колонки.`}),(0,v.jsx)(p,{className:`max-w-prose`,"data-body":!0,children:`TableCell переносит обычный текст по границам слов. Для ключей и действий используй wrap="nowrap"; закреплённая справа ячейка выбирает его по умолчанию. Длинное описание не должно расширять таблицу и скрывать статусы соседней колонки. Проверяй полный текст, клавиатурную прокрутку и действия на мобильном экране.`}),(0,v.jsx)(e,{label:`basic table`,children:(0,v.jsx)(g,{title:`Incident Table`,description:`Реальный пример таблицы инцидентов с severity badges и status indicators.`,code:`<Table>
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
      <TableCell>INC-4012</TableCell>
      <TableCell>API gateway timeout</TableCell>
      <TableCell><Badge>SEV-2</Badge></TableCell>
      <TableCell>Active</TableCell>
      <TableCell>us-east-1</TableCell>
      <TableCell>14m</TableCell>
    </TableRow>
  </TableBody>
</Table>`,children:(0,v.jsx)(_,{className:`w-full overflow-x-auto`,children:(0,v.jsxs)(d,{children:[(0,v.jsx)(u,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(c,{children:`ID`}),(0,v.jsx)(c,{children:`Title`}),(0,v.jsx)(c,{children:`Severity`}),(0,v.jsx)(c,{children:`Status`}),(0,v.jsx)(c,{children:`Region`}),(0,v.jsx)(c,{children:`Duration`})]})}),(0,v.jsx)(s,{children:y.map(e=>(0,v.jsxs)(a,{children:[(0,v.jsx)(l,{className:`font-medium`,children:e.id}),(0,v.jsx)(l,{children:e.title}),(0,v.jsx)(l,{children:(0,v.jsx)(i,{variant:b(e.severity),children:e.severity})}),(0,v.jsx)(l,{children:(0,v.jsx)(p,{as:`span`,tone:x(e.status)?`body`:`muted`,signal:x(e.status),className:`leading-5`,children:e.status})}),(0,v.jsx)(l,{tone:`muted`,wrap:`nowrap`,children:e.region}),(0,v.jsx)(l,{className:`tabular-nums`,children:e.duration})]},e.id))})]})})})}),(0,v.jsx)(e,{label:`compact variant`,children:(0,v.jsx)(g,{title:`Service Health Table`,description:`Минималистичная таблица без badges — только текст и цвета.`,code:`<Table>
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
      <TableCell><DocsText as="span" signal="ok">Healthy</DocsText></TableCell>
      <TableCell>45ms</TableCell>
      <TableCell>0.02%</TableCell>
    </TableRow>
  </TableBody>
</Table>`,children:(0,v.jsx)(_,{className:`w-full overflow-x-auto`,children:(0,v.jsxs)(d,{children:[(0,v.jsx)(u,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(c,{children:`Service`}),(0,v.jsx)(c,{children:`Status`}),(0,v.jsx)(c,{children:`p99 Latency`}),(0,v.jsx)(c,{children:`Error Rate`}),(0,v.jsx)(c,{children:`Requests/s`})]})}),(0,v.jsx)(s,{children:[{service:`api-gateway`,status:`Healthy`,latency:`45ms`,errors:`0.02%`,rps:`12,450`},{service:`auth-service`,status:`Degraded`,latency:`340ms`,errors:`2.4%`,rps:`3,200`},{service:`user-api`,status:`Healthy`,latency:`28ms`,errors:`0.01%`,rps:`8,100`},{service:`notification-worker`,status:`Healthy`,latency:`12ms`,errors:`0.00%`,rps:`1,580`},{service:`search-indexer`,status:`Monitoring`,latency:`180ms`,errors:`0.8%`,rps:`420`}].map(e=>(0,v.jsxs)(a,{children:[(0,v.jsx)(l,{className:`font-medium`,children:e.service}),(0,v.jsx)(l,{children:(0,v.jsx)(p,{as:`span`,signal:e.status===`Healthy`?`ok`:e.status===`Degraded`?`err`:`warn`,children:e.status})}),(0,v.jsx)(l,{className:`tabular-nums`,children:e.latency}),(0,v.jsx)(l,{className:`tabular-nums`,children:e.errors}),(0,v.jsx)(l,{className:`tabular-nums`,children:e.rps})]},e.service))})]})})})}),(0,v.jsx)(e,{label:`severity recipe`,children:(0,v.jsx)(g,{title:`SeverityRecipe`,description:`Ladder SEV-1…SEV-4 c привязкой уровня к сигнальному цвету: 1 — err, 2 — warn, 3 — info, 4 — secondary. Используй вместо ручного подбора Badge variant там, где важна упорядоченность.`,code:`import { SeverityRecipe } from "@chucky23/design-system/recipes/severity"

<SeverityRecipe level={1} />
<SeverityRecipe level={2} />
<SeverityRecipe level={3} />
<SeverityRecipe level={4} />`,children:(0,v.jsxs)(_,{className:`flex items-center gap-3`,children:[(0,v.jsx)(h,{level:1}),(0,v.jsx)(h,{level:2}),(0,v.jsx)(h,{level:3}),(0,v.jsx)(h,{level:4}),(0,v.jsx)(h,{level:2,label:`Major`})]})})}),(0,v.jsx)(e,{label:`index column`,children:(0,v.jsx)(g,{title:`Index column`,description:`Колонка # с постоянной шириной — стабильный якорь для скана. Используй formatEntityId(n) для leading-zeros и font-mono tabular-nums text-muted-foreground для визуальной тишины.`,code:`import { formatEntityId } from "@chucky23/design-system"

<TableCell tone="muted" className="font-mono tabular-nums text-right w-12">
  {formatEntityId(index + 1)}
</TableCell>`,children:(0,v.jsx)(_,{className:`w-full overflow-x-auto`,children:(0,v.jsxs)(d,{children:[(0,v.jsx)(u,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(c,{className:`w-12 text-right`,children:`#`}),(0,v.jsx)(c,{children:`Title`}),(0,v.jsx)(c,{children:`Severity`})]})}),(0,v.jsx)(s,{children:y.slice(0,5).map((e,n)=>(0,v.jsxs)(a,{children:[(0,v.jsx)(l,{tone:`muted`,className:`font-mono tabular-nums text-right w-12`,children:t(n+1)}),(0,v.jsx)(l,{children:e.title}),(0,v.jsx)(l,{children:(0,v.jsx)(i,{variant:b(e.severity),children:e.severity})})]},e.id))})]})})})}),(0,v.jsx)(e,{label:`sortable`,children:(0,v.jsx)(g,{title:`Sortable Table`,description:`TableHead с пропом sortable рендерит встроенную кнопку-переключатель. aria-sort на <th> обновляется автоматически. Иконки: SortIcon (неактивна), SortAscIcon, SortDescIcon.`,code:`<TableHead
  sortable
  sortDirection={directionFor("latency")}
  onSortChange={() => toggle("latency")}
>
  p99 Latency
</TableHead>`,children:(0,v.jsx)(m,{})})}),(0,v.jsxs)(e,{label:`package css contract`,children:[(0,v.jsx)(p,{"data-body":!0,children:`Эти правила принадлежат пакету и показывают его контракт. Приложению достаточно preset.css и публичных props, включая wrap и pin; копировать CSS таблицы не нужно.`}),(0,v.jsx)(o,{language:`css`,code:`/* Table cells: compact 0.5rem padding */
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
}`})]}),(0,v.jsx)(e,{label:`api reference`,children:(0,v.jsx)(f,{title:`Table Slots`,props:[{name:`Table`,type:`table`,defaultValue:`--`,description:`Root table element. Full width.`},{name:`TableHeader`,type:`thead`,defaultValue:`--`,description:`Header group. Contains TableRow with TableHead cells.`},{name:`TableHead`,type:`th`,defaultValue:`--`,description:`Header cell. Uppercase, tracked, 12px, steel color.`},{name:`TableBody`,type:`tbody`,defaultValue:`--`,description:`Body group. Contains TableRow with TableCell cells.`},{name:`TableRow`,type:`tr`,defaultValue:`--`,description:`Table row. Hover: teal-faint background.`},{name:`TableCell`,type:`td`,defaultValue:`--`,description:`Data cell. 0.5rem padding, tabular-nums.`},{name:`TableCell.wrap`,type:`"normal" | "nowrap"`,defaultValue:`"normal"; "nowrap" при pin="end"`,description:`Перенос по границам слов. Явный nowrap сохраняет ключи и действия в одну строку.`}]})})]})}export{S as default};