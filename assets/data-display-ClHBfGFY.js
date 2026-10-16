import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Dn as t,En as n,Gn as r,Jn as i,Kn as a,Rn as o,Sn as s,Tn as c,Zo as l,br as u,cr as d,m as f,o as p,qn as m,r as h,sr as g,wn as _,yo as v}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{j as y,r as b}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as x,t as S}from"./docs-article-BUNGnjgF.js";import"./icons-L9GMQDIR.js";import{n as C,t as w}from"./tree-view-D0GxcrOx.js";var T=e();function E({className:e,children:t,...n}){return(0,T.jsx)(`div`,{"data-slot":`comment`,className:l(`flex gap-3 py-3`,e),...n,children:t})}function D({src:e,fallback:t,className:r,...i}){return(0,T.jsxs)(_,{"data-slot":`comment-avatar`,className:l(`size-7 shrink-0`,r),...i,children:[e&&(0,T.jsx)(n,{src:e}),(0,T.jsx)(c,{className:`text-xs`,children:t})]})}function O({className:e,children:t,...n}){return(0,T.jsx)(`div`,{"data-slot":`comment-content`,className:l(`min-w-0 flex-1 flex flex-col gap-1`,e),...n,children:t})}function k({className:e,children:t,...n}){return(0,T.jsx)(`div`,{"data-slot":`comment-header`,className:l(`flex items-center gap-2`,e),...n,children:t})}function A({className:e,...t}){return(0,T.jsx)(`span`,{"data-slot":`comment-author`,className:l(`text-sm font-medium text-foreground`,e),...t})}function j({className:e,...t}){return(0,T.jsx)(`time`,{"data-slot":`comment-timestamp`,className:l(`text-xs text-muted-foreground`,e),...t})}function M({className:e,...t}){return(0,T.jsx)(`div`,{"data-slot":`comment-body`,className:l(`text-sm text-foreground`,e),...t})}function N({className:e,children:t,...n}){return(0,T.jsx)(`div`,{"data-slot":`comment-thread`,className:l(`divide-y divide-border`,e),...n,children:t})}var P=[{id:`usage`,label:`Использование`},{id:`nested-collapsible`,label:`Вложенные блоки`},{id:`scroll-area`,label:`ScrollArea`},{id:`tree-view`,label:`TreeView`},{id:`comment-thread`,label:`Комментарии`},{id:`api`,label:`API`}],F=Array.from({length:20},(e,t)=>`Log entry #${t+1} — service health check passed`);function I(){return(0,T.jsx)(f,{title:`Data Display`,description:`Компоненты для отображения структурированных данных: раскрывающиеся блоки, прокрутка, дерево и комментарии.`,breadcrumbs:S(`/components/data-display`),children:(0,T.jsx)(p,{presentation:`article`,label:`Data Display`,inspector:x(P),document:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b,{title:`Collapsible`,description:`CollapsibleTrigger раскрывает и скрывает CollapsibleContent. Подсветка наведения и видимый клавиатурный фокус принадлежат пакету; локальные цветовые классы не нужны. Иконка поворачивается при открытии.`,code:`<Collapsible>
  <CollapsibleTrigger className="group">
    <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
    Incident Details
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Body>API gateway timeout in us-east-1. Duration: 14m.</Body>
  </CollapsibleContent>
</Collapsible>`,layout:`stack`,children:(0,T.jsxs)(a,{children:[(0,T.jsxs)(i,{className:`group`,children:[(0,T.jsx)(v,{className:`size-4 group-data-[panel-open]:rotate-90`}),`Incident Details`]}),(0,T.jsx)(m,{children:(0,T.jsx)(o,{children:`API gateway timeout in us-east-1. Duration: 14m.`})})]})}),(0,T.jsx)(o,{children:`Четыре примитива для плотных читаемых данных. Collapsible скрывает детали до запроса, ScrollArea даёт кастомный скроллбар в тон темы, TreeView показывает иерархии с connector-lines, Comment собирает треды обсуждений.`}),(0,T.jsx)(u,{id:`usage`,label:`Использование`,children:(0,T.jsx)(r,{copyLabel:`Скопировать код: Collapsible, ScrollArea и TreeView`,language:`tsx`,code:`import { Collapsible, CollapsibleContent, CollapsibleTrigger, ScrollArea } from "@chucky23/design-system/react"
import { TreeView, TreeItem } from "@chucky23/design-system/extended/tree-view"
import { CommentThread, Comment, CommentAvatar, CommentContent, CommentHeader, CommentAuthor, CommentTimestamp, CommentBody } from "@chucky23/design-system/extended/comment"

<ScrollArea className="h-48" aria-label="Журнал проверок">{entries}</ScrollArea>
<TreeView onSelect={openTask}>
  <TreeItem id="epic-1" label="Platform Migration" status="progress" />
</TreeView>`})}),(0,T.jsx)(u,{id:`nested-collapsible`,label:`Вложенные блоки`,children:(0,T.jsx)(b,{title:`Nested Collapsible`,description:`Вложенные Collapsible для иерархических данных. Отступа для вложенного содержимого у CollapsibleContent нет: уровень читается по иконке и порядку.`,code:`<Collapsible defaultOpen>
  <CollapsibleTrigger className="group">
    <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
    Production Services
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Collapsible>
      <CollapsibleTrigger className="group">
        <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
        api-gateway
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Body>Status: Healthy | p99: 45ms</Body>
      </CollapsibleContent>
    </Collapsible>
    <Collapsible>
      <CollapsibleTrigger className="group">
        <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
        auth-service
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Body>Status: Degraded | p99: 340ms</Body>
      </CollapsibleContent>
    </Collapsible>
  </CollapsibleContent>
</Collapsible>`,layout:`stack`,children:(0,T.jsxs)(a,{defaultOpen:!0,children:[(0,T.jsxs)(i,{className:`group`,children:[(0,T.jsx)(v,{className:`size-4 group-data-[panel-open]:rotate-90`}),`Production Services`]}),(0,T.jsxs)(m,{children:[(0,T.jsxs)(a,{children:[(0,T.jsxs)(i,{className:`group`,children:[(0,T.jsx)(v,{className:`size-4 group-data-[panel-open]:rotate-90`}),`api-gateway`]}),(0,T.jsx)(m,{children:(0,T.jsx)(o,{children:`Status: Healthy | p99: 45ms`})})]}),(0,T.jsxs)(a,{children:[(0,T.jsxs)(i,{className:`group`,children:[(0,T.jsx)(v,{className:`size-4 group-data-[panel-open]:rotate-90`}),`auth-service`]}),(0,T.jsx)(m,{children:(0,T.jsx)(o,{children:`Status: Degraded | p99: 340ms`})})]})]})]})})}),(0,T.jsx)(u,{id:`scroll-area`,label:`ScrollArea`,children:(0,T.jsx)(b,{title:`ScrollArea`,description:`Контейнер с прокруткой: vertical, horizontal или both. Получает фокус с клавиатуры, поэтому PageDown и стрелки прокручивают содержимое.`,code:`<ScrollArea className="h-48 rounded-sm border" aria-label="Журнал проверок">
  <List>
    {entries.map((entry) => <ListItem key={entry}>{entry}</ListItem>)}
  </List>
</ScrollArea>`,layout:`block`,children:(0,T.jsx)(t,{className:`h-48 rounded-sm border`,"aria-label":`Журнал проверок`,children:(0,T.jsx)(g,{children:F.map(e=>(0,T.jsx)(d,{children:e},e))})})})}),(0,T.jsx)(u,{id:`tree-view`,label:`TreeView`,children:(0,T.jsx)(b,{title:`TreeView`,description:`Дерево задач с drag-and-drop, StatusIcon и метаданными. Декларативный API через TreeItem.`,code:`<TreeView>
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
</TreeView>`,layout:`block`,children:(0,T.jsxs)(C,{children:[(0,T.jsxs)(w,{id:`epic-1`,label:`Platform Migration`,status:`progress`,meta:(0,T.jsx)(h,{variant:`info`,children:`Epic`}),children:[(0,T.jsx)(w,{id:`task-1`,label:`Migrate auth service`,status:`closed`,priority:`p1`,meta:(0,T.jsx)(s,{size:`sm`,color:`ok`,children:`Done`})}),(0,T.jsx)(w,{id:`task-2`,label:`Update API gateway`,status:`progress`,priority:`p1`,meta:(0,T.jsx)(s,{size:`sm`,color:`info`,children:`In Progress`})}),(0,T.jsxs)(w,{id:`task-3`,label:`Database schema migration`,status:`open`,priority:`p2`,children:[(0,T.jsx)(w,{id:`sub-1`,label:`Backup production data`,status:`closed`}),(0,T.jsx)(w,{id:`sub-2`,label:`Run migration scripts`,status:`open`}),(0,T.jsx)(w,{id:`sub-3`,label:`Validate data integrity`,status:`open`})]})]}),(0,T.jsxs)(w,{id:`epic-2`,label:`Monitoring Setup`,status:`open`,meta:(0,T.jsx)(h,{variant:`info`,children:`Epic`}),children:[(0,T.jsx)(w,{id:`task-4`,label:`Configure alerts`,status:`open`,priority:`p2`}),(0,T.jsx)(w,{id:`task-5`,label:`Set up dashboards`,status:`open`,priority:`p3`})]})]})})}),(0,T.jsx)(u,{id:`comment-thread`,label:`Комментарии`,children:(0,T.jsx)(b,{title:`CommentThread`,description:`Тред комментариев: CommentThread > Comment > CommentAvatar + CommentContent.`,code:`<CommentThread>
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
</CommentThread>`,layout:`block`,children:(0,T.jsxs)(N,{children:[(0,T.jsxs)(E,{children:[(0,T.jsx)(D,{fallback:`AK`}),(0,T.jsxs)(O,{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)(A,{children:`Alice Kim`}),(0,T.jsx)(j,{children:`2 hours ago`})]}),(0,T.jsx)(M,{children:`Root cause identified — connection pool exhaustion on the primary database. Rolling out a fix now.`})]})]}),(0,T.jsxs)(E,{children:[(0,T.jsx)(D,{fallback:`BN`}),(0,T.jsxs)(O,{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)(A,{children:`Bob Nash`}),(0,T.jsx)(j,{children:`1 hour ago`})]}),(0,T.jsx)(M,{children:`Fix deployed to staging. Monitoring error rates before promoting to production.`})]})]}),(0,T.jsxs)(E,{children:[(0,T.jsx)(D,{fallback:`CM`}),(0,T.jsxs)(O,{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)(A,{children:`Carol Mays`}),(0,T.jsx)(j,{children:`30 min ago`})]}),(0,T.jsx)(M,{children:`Staging looks clean. Error rate dropped to 0.01%. Ready for production deploy.`})]})]})]})})}),(0,T.jsxs)(u,{id:`api`,label:`API`,children:[(0,T.jsx)(y,{title:`Пропсы Collapsible`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние раскрытия.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние в неконтролируемом режиме.`},{name:`onOpenChange`,type:`(open: boolean, eventDetails) => void`,defaultValue:`—`,description:`Колбэк раскрытия и скрытия.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Игнорирует действия пользователя.`}]}),(0,T.jsx)(y,{title:`Пропсы ScrollArea`,props:[{name:`orientation`,type:`"vertical" | "horizontal" | "both"`,defaultValue:`"vertical"`,description:`Оси прокрутки.`},{name:`tabIndex`,type:`number`,defaultValue:`0`,description:`Область получает фокус и прокручивается с клавиатуры.`},{name:`aria-label`,type:`string`,defaultValue:`—`,description:`Название области. С ним область получает role group.`}]}),(0,T.jsx)(y,{title:`Пропсы TreeView`,props:[{name:`onReorder`,type:`(items: TreeItemData[]) => void`,defaultValue:`—`,description:`Колбэк нового порядка после перетаскивания.`},{name:`onSelect`,type:`(id: string) => void`,defaultValue:`—`,description:`Колбэк выбора элемента.`},{name:`selectedId`,type:`string`,defaultValue:`—`,description:`Выбранный элемент в контролируемом режиме.`},{name:`defaultCollapsed`,type:`string[]`,defaultValue:`[]`,description:`Элементы, свёрнутые при первом показе.`}]}),(0,T.jsx)(y,{title:`Пропсы TreeItem`,props:[{name:`id`,type:`string`,defaultValue:`—`,description:`Уникальный идентификатор элемента.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Название элемента.`},{name:`status`,type:`"open" | "progress" | "blocked" | "deferred" | "closed"`,defaultValue:`—`,description:`Статус задачи: WorkflowIcon перед названием.`},{name:`priority`,type:`"p0" | "p1" | "p2" | "p3" | "p4"`,defaultValue:`—`,description:`Приоритет: цвет иконки статуса.`},{name:`meta`,type:`ReactNode`,defaultValue:`—`,description:`Метаданные справа: Badge, Tag.`},{name:`children`,type:`TreeItem`,defaultValue:`—`,description:`Вложенные элементы.`}]}),(0,T.jsx)(y,{title:`Пропсы CommentAvatar`,props:[{name:`fallback`,type:`string`,defaultValue:`—`,description:`Инициалы, если изображения нет.`},{name:`src`,type:`string`,defaultValue:`—`,description:`Адрес изображения автора.`}]})]})]})})})}export{I as default};