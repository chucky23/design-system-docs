import{$n as e,An as t,Hn as n,Mn as r,Mo as i,Nr as a,Po as o,a as s,c,i as l,jn as u,l as d,ln as f,o as p}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as m,r as h,s as g}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./icons-BZQ_MwV3.js";import{n as _,t as v}from"./tree-view-C_RqSKtr.js";var y=i();function b({className:e,children:t,...n}){return(0,y.jsx)(`div`,{"data-slot":`comment`,className:o(`flex gap-3 py-3`,e),...n,children:t})}function x({src:e,fallback:t,className:n,...r}){return(0,y.jsxs)(l,{"data-slot":`comment-avatar`,className:o(`size-7 shrink-0`,n),...r,children:[e&&(0,y.jsx)(p,{src:e}),(0,y.jsx)(s,{className:`text-xs`,children:t})]})}function S({className:e,children:t,...n}){return(0,y.jsx)(`div`,{"data-slot":`comment-content`,className:o(`min-w-0 flex-1 flex flex-col gap-1`,e),...n,children:t})}function C({className:e,children:t,...n}){return(0,y.jsx)(`div`,{"data-slot":`comment-header`,className:o(`flex items-center gap-2`,e),...n,children:t})}function w({className:e,...t}){return(0,y.jsx)(`span`,{"data-slot":`comment-author`,className:o(`text-sm font-medium text-foreground`,e),...t})}function T({className:e,...t}){return(0,y.jsx)(`time`,{"data-slot":`comment-timestamp`,className:o(`text-xs text-muted-foreground`,e),...t})}function E({className:e,...t}){return(0,y.jsx)(`div`,{"data-slot":`comment-body`,className:o(`text-sm text-foreground`,e),...t})}function D({className:e,children:t,...n}){return(0,y.jsx)(`div`,{"data-slot":`comment-thread`,className:o(`divide-y divide-border`,e),...n,children:t})}function O(){return(0,y.jsxs)(g,{className:`flex flex-col gap-6`,children:[(0,y.jsx)(n,{title:`Data Display`,description:`Компоненты для отображения структурированных данных: раскрывающиеся блоки, прокрутка, дерево и комментарии.`}),(0,y.jsx)(m,{className:`max-w-prose`,"data-body":!0,children:`Четыре примитива для плотных читаемых данных. Collapsible скрывает детали до запроса, ScrollArea даёт кастомный скроллбар в тон темы, TreeView показывает иерархии с connector-lines, Comment собирает треды обсуждений.`}),(0,y.jsxs)(e,{label:`collapsible`,children:[(0,y.jsx)(h,{title:`Basic Collapsible`,description:`CollapsibleTrigger раскрывает/скрывает CollapsibleContent. Подсветка наведения и видимый клавиатурный фокус принадлежат пакету; локальные цветовые классы не нужны. ChevronRightIcon поворачивается при открытии.`,code:`<Collapsible>
  <CollapsibleTrigger className="group">
    <ChevronRightIcon className="size-4 transition-transform group-data-[panel-open]:rotate-90" />
    Incident Details
  </CollapsibleTrigger>
  <CollapsibleContent className="pl-5 pt-2">
    <p className="text-sm">
      API gateway timeout in us-east-1. Duration: 14m.
    </p>
  </CollapsibleContent>
</Collapsible>`,children:(0,y.jsx)(g,{className:`w-full max-w-md flex flex-col gap-1`,children:(0,y.jsxs)(t,{children:[(0,y.jsxs)(r,{className:`group`,children:[(0,y.jsx)(a,{className:`size-4 transition-transform group-data-[panel-open]:rotate-90`}),`Incident Details`]}),(0,y.jsx)(u,{className:`pl-5 pt-2`,children:(0,y.jsx)(m,{"data-body":!0,children:`API gateway timeout in us-east-1. Duration: 14m.`})})]})})}),(0,y.jsx)(h,{title:`Nested Collapsible`,description:`Вложенные Collapsible для иерархических данных.`,code:`<Collapsible defaultOpen>
  <CollapsibleTrigger className="group">
    <ChevronRightIcon className="size-4 transition-transform group-data-[panel-open]:rotate-90" />
    Production Services
  </CollapsibleTrigger>
  <CollapsibleContent className="pl-5 pt-2 flex flex-col gap-1">
    <Collapsible>
      <CollapsibleTrigger className="group">
        <ChevronRightIcon className="size-4 transition-transform group-data-[panel-open]:rotate-90" />
        api-gateway
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-5 pt-1">
        <p className="text-sm">Status: Healthy | p99: 45ms</p>
      </CollapsibleContent>
    </Collapsible>
    <Collapsible>
      <CollapsibleTrigger className="group">
        <ChevronRightIcon className="size-4 transition-transform group-data-[panel-open]:rotate-90" />
        auth-service
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-5 pt-1">
        <p className="text-sm">Status: Degraded | p99: 340ms</p>
      </CollapsibleContent>
    </Collapsible>
  </CollapsibleContent>
</Collapsible>`,children:(0,y.jsx)(g,{className:`w-full max-w-md flex flex-col gap-1`,children:(0,y.jsxs)(t,{defaultOpen:!0,children:[(0,y.jsxs)(r,{className:`group`,children:[(0,y.jsx)(a,{className:`size-4 transition-transform group-data-[panel-open]:rotate-90`}),`Production Services`]}),(0,y.jsxs)(u,{className:`pl-5 pt-2 flex flex-col gap-1`,children:[(0,y.jsxs)(t,{children:[(0,y.jsxs)(r,{className:`group`,children:[(0,y.jsx)(a,{className:`size-4 transition-transform group-data-[panel-open]:rotate-90`}),`api-gateway`]}),(0,y.jsx)(u,{className:`pl-5 pt-1`,children:(0,y.jsx)(m,{"data-body":!0,children:`Status: Healthy | p99: 45ms`})})]}),(0,y.jsxs)(t,{children:[(0,y.jsxs)(r,{className:`group`,children:[(0,y.jsx)(a,{className:`size-4 transition-transform group-data-[panel-open]:rotate-90`}),`auth-service`]}),(0,y.jsx)(u,{className:`pl-5 pt-1`,children:(0,y.jsx)(m,{"data-body":!0,children:`Status: Degraded | p99: 340ms`})})]})]})]})})})]}),(0,y.jsx)(e,{label:`scroll area`,children:(0,y.jsx)(h,{title:`ScrollArea`,description:`Контейнер с overflow-прокруткой. Поддерживает vertical, horizontal и both.`,code:`<ScrollArea className="h-48 rounded-sm border border-border p-3">
  <div className="flex flex-col gap-2">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="rounded-sm border border-border px-3 py-2 text-sm">
        Log entry #{i + 1} — service health check passed
      </div>
    ))}
  </div>
</ScrollArea>`,children:(0,y.jsx)(g,{className:`h-48 w-full rounded-sm border`,children:(0,y.jsx)(d,{className:`h-full w-full p-3`,children:(0,y.jsx)(g,{className:`flex flex-col gap-2`,children:Array.from({length:20},(e,t)=>(0,y.jsxs)(g,{className:`rounded-sm border px-3 py-2 text-sm`,children:[`Log entry #`,t+1,` — service health check passed`]},t))})})})})}),(0,y.jsx)(e,{label:`tree view`,children:(0,y.jsx)(h,{title:`TreeView`,description:`Дерево задач с drag-and-drop, StatusIcon и метаданными. Декларативный API через TreeItem.`,code:`<TreeView>
  <TreeItem
    id="epic-1"
    label="Platform Migration"
    status="progress"
    meta={<Badge variant="info">Epic</Badge>}
  >
    <TreeItem
      id="task-1"
      label="Migrate auth service"
      status="closed"
      priority="p1"
      meta={<Tag size="sm" color="ok">Done</Tag>}
    />
    <TreeItem
      id="task-2"
      label="Update API gateway"
      status="progress"
      priority="p1"
      meta={<Tag size="sm" color="info">In Progress</Tag>}
    />
    <TreeItem
      id="task-3"
      label="Database schema migration"
      status="open"
      priority="p2"
    >
      <TreeItem id="sub-1" label="Backup production data" status="closed" />
      <TreeItem id="sub-2" label="Run migration scripts" status="open" />
      <TreeItem id="sub-3" label="Validate data integrity" status="open" />
    </TreeItem>
  </TreeItem>
  <TreeItem
    id="epic-2"
    label="Monitoring Setup"
    status="open"
    meta={<Badge variant="info">Epic</Badge>}
  >
    <TreeItem id="task-4" label="Configure alerts" status="open" priority="p2" />
    <TreeItem id="task-5" label="Set up dashboards" status="open" priority="p3" />
  </TreeItem>
</TreeView>`,children:(0,y.jsx)(g,{className:`w-full max-w-lg`,children:(0,y.jsxs)(_,{children:[(0,y.jsxs)(v,{id:`epic-1`,label:`Platform Migration`,status:`progress`,meta:(0,y.jsx)(c,{variant:`info`,children:`Epic`}),children:[(0,y.jsx)(v,{id:`task-1`,label:`Migrate auth service`,status:`closed`,priority:`p1`,meta:(0,y.jsx)(f,{size:`sm`,color:`ok`,children:`Done`})}),(0,y.jsx)(v,{id:`task-2`,label:`Update API gateway`,status:`progress`,priority:`p1`,meta:(0,y.jsx)(f,{size:`sm`,color:`info`,children:`In Progress`})}),(0,y.jsxs)(v,{id:`task-3`,label:`Database schema migration`,status:`open`,priority:`p2`,children:[(0,y.jsx)(v,{id:`sub-1`,label:`Backup production data`,status:`closed`}),(0,y.jsx)(v,{id:`sub-2`,label:`Run migration scripts`,status:`open`}),(0,y.jsx)(v,{id:`sub-3`,label:`Validate data integrity`,status:`open`})]})]}),(0,y.jsxs)(v,{id:`epic-2`,label:`Monitoring Setup`,status:`open`,meta:(0,y.jsx)(c,{variant:`info`,children:`Epic`}),children:[(0,y.jsx)(v,{id:`task-4`,label:`Configure alerts`,status:`open`,priority:`p2`}),(0,y.jsx)(v,{id:`task-5`,label:`Set up dashboards`,status:`open`,priority:`p3`})]})]})})})}),(0,y.jsx)(e,{label:`comment / comment thread`,children:(0,y.jsx)(h,{title:`CommentThread`,description:`Тред комментариев: CommentThread > Comment > CommentAvatar + CommentContent.`,code:`<CommentThread>
  <Comment>
    <CommentAvatar fallback="AK" />
    <CommentContent>
      <CommentHeader>
        <CommentAuthor>Alice Kim</CommentAuthor>
        <CommentTimestamp>2 hours ago</CommentTimestamp>
      </CommentHeader>
      <CommentBody>
        Root cause identified — connection pool exhaustion
        on the primary database. Rolling out a fix now.
      </CommentBody>
    </CommentContent>
  </Comment>
  <Comment>
    <CommentAvatar fallback="BN" />
    <CommentContent>
      <CommentHeader>
        <CommentAuthor>Bob Nash</CommentAuthor>
        <CommentTimestamp>1 hour ago</CommentTimestamp>
      </CommentHeader>
      <CommentBody>
        Fix deployed to staging. Monitoring error rates
        before promoting to production.
      </CommentBody>
    </CommentContent>
  </Comment>
  <Comment>
    <CommentAvatar fallback="CM" />
    <CommentContent>
      <CommentHeader>
        <CommentAuthor>Carol Mays</CommentAuthor>
        <CommentTimestamp>30 min ago</CommentTimestamp>
      </CommentHeader>
      <CommentBody>
        Staging looks clean. Error rate dropped to 0.01%.
        Ready for production deploy.
      </CommentBody>
    </CommentContent>
  </Comment>
</CommentThread>`,children:(0,y.jsx)(g,{className:`w-full max-w-lg`,children:(0,y.jsxs)(D,{children:[(0,y.jsxs)(b,{children:[(0,y.jsx)(x,{fallback:`AK`}),(0,y.jsxs)(S,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(w,{children:`Alice Kim`}),(0,y.jsx)(T,{children:`2 hours ago`})]}),(0,y.jsx)(E,{children:`Root cause identified — connection pool exhaustion on the primary database. Rolling out a fix now.`})]})]}),(0,y.jsxs)(b,{children:[(0,y.jsx)(x,{fallback:`BN`}),(0,y.jsxs)(S,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(w,{children:`Bob Nash`}),(0,y.jsx)(T,{children:`1 hour ago`})]}),(0,y.jsx)(E,{children:`Fix deployed to staging. Monitoring error rates before promoting to production.`})]})]}),(0,y.jsxs)(b,{children:[(0,y.jsx)(x,{fallback:`CM`}),(0,y.jsxs)(S,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(w,{children:`Carol Mays`}),(0,y.jsx)(T,{children:`30 min ago`})]}),(0,y.jsx)(E,{children:`Staging looks clean. Error rate dropped to 0.01%. Ready for production deploy.`})]})]})]})})})})]})}export{O as default};