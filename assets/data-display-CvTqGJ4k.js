import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ar as t,Jt as n,Mr as r,Ps as i,Qr as a,Rr as o,Sr as s,fr as c,hr as l,j as u,jr as d,kr as f,mr as p,pr as m,ur as h,v as g,x as _,zr as v}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{Q as y,g as b}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import"./icons-2PLDBLl_.js";import{n as x,r as S,t as C}from"./docs-article-CV9v0E7s.js";import{n as w,t as T}from"./tree-view-rDYKUX3p.js";var E=e();function D({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`comment`,className:i(`flex gap-3 py-3`,e),...n,children:t})}function O({src:e,fallback:t,className:n,...r}){return(0,E.jsxs)(c,{"data-slot":`comment-avatar`,className:i(`size-7 shrink-0`,n),...r,children:[e&&(0,E.jsx)(p,{src:e}),(0,E.jsx)(m,{className:`text-xs`,children:t})]})}function k({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`comment-content`,className:i(`min-w-0 flex-1 flex flex-col gap-1`,e),...n,children:t})}function A({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`comment-header`,className:i(`flex items-center gap-2`,e),...n,children:t})}function j({className:e,...t}){return(0,E.jsx)(`span`,{"data-slot":`comment-author`,className:i(`text-sm font-medium text-foreground`,e),...t})}function M({className:e,...t}){return(0,E.jsx)(`time`,{"data-slot":`comment-timestamp`,className:i(`text-xs text-muted-foreground`,e),...t})}function N({className:e,...t}){return(0,E.jsx)(`div`,{"data-slot":`comment-body`,className:i(`text-sm text-foreground`,e),...t})}function P({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`comment-thread`,className:i(`divide-y divide-border`,e),...n,children:t})}var F=[{id:`usage`,label:`Использование`},{id:`nested-collapsible`,label:`Вложенные блоки`},{id:`scroll-area`,label:`ScrollArea`},{id:`tree-view`,label:`TreeView`},{id:`comment-thread`,label:`Комментарии`},{id:`api`,label:`API`}],I=Array.from({length:20},(e,t)=>`Log entry #${t+1} — service health check passed`);function L(){return(0,E.jsx)(u,{title:`Data Display`,description:`Компоненты для отображения структурированных данных: раскрывающиеся блоки, прокрутка, дерево и комментарии.`,breadcrumbs:C(`/components/data-display`),meta:x(`/components/data-display`),children:(0,E.jsx)(_,{presentation:`article`,label:`Data Display`,inspector:S(F),document:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(b,{title:`Collapsible`,description:`CollapsibleTrigger раскрывает и скрывает CollapsibleContent. Подсветка наведения и видимый клавиатурный фокус принадлежат пакету; локальные цветовые классы не нужны. Иконка поворачивается при открытии.`,code:`<Collapsible>
  <CollapsibleTrigger className="group">
    <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
    Incident Details
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Body>API gateway timeout in us-east-1. Duration: 14m.</Body>
  </CollapsibleContent>
</Collapsible>`,layout:`stack`,children:(0,E.jsxs)(t,{children:[(0,E.jsxs)(r,{className:`group`,children:[(0,E.jsx)(n,{className:`size-4 group-data-[panel-open]:rotate-90`}),`Incident Details`]}),(0,E.jsx)(d,{children:(0,E.jsx)(s,{children:`API gateway timeout in us-east-1. Duration: 14m.`})})]})}),(0,E.jsx)(s,{children:`Четыре примитива для плотных читаемых данных. Collapsible скрывает детали до запроса, ScrollArea даёт кастомный скроллбар в тон темы, TreeView показывает иерархии с connector-lines, Comment собирает треды обсуждений.`}),(0,E.jsx)(a,{id:`usage`,label:`Использование`,children:(0,E.jsx)(f,{copyLabel:`Скопировать код: Collapsible, ScrollArea и TreeView`,language:`tsx`,code:`import { Collapsible, CollapsibleContent, CollapsibleTrigger, ScrollArea } from "@chucky23/design-system/react"
import { TreeView, TreeItem } from "@chucky23/design-system/extended/tree-view"
import { CommentThread, Comment, CommentAvatar, CommentContent, CommentHeader, CommentAuthor, CommentTimestamp, CommentBody } from "@chucky23/design-system/extended/comment"

<ScrollArea className="h-48" aria-label="Журнал проверок">{entries}</ScrollArea>
<TreeView onSelect={openTask}>
  <TreeItem id="epic-1" label="Platform Migration" status="progress" />
</TreeView>`})}),(0,E.jsx)(a,{id:`nested-collapsible`,label:`Вложенные блоки`,children:(0,E.jsx)(b,{title:`Nested Collapsible`,description:`Вложенные Collapsible для иерархических данных. Отступа для вложенного содержимого у CollapsibleContent нет: уровень читается по иконке и порядку.`,code:`<Collapsible defaultOpen>
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
</Collapsible>`,layout:`stack`,children:(0,E.jsxs)(t,{defaultOpen:!0,children:[(0,E.jsxs)(r,{className:`group`,children:[(0,E.jsx)(n,{className:`size-4 group-data-[panel-open]:rotate-90`}),`Production Services`]}),(0,E.jsxs)(d,{children:[(0,E.jsxs)(t,{children:[(0,E.jsxs)(r,{className:`group`,children:[(0,E.jsx)(n,{className:`size-4 group-data-[panel-open]:rotate-90`}),`api-gateway`]}),(0,E.jsx)(d,{children:(0,E.jsx)(s,{children:`Status: Healthy | p99: 45ms`})})]}),(0,E.jsxs)(t,{children:[(0,E.jsxs)(r,{className:`group`,children:[(0,E.jsx)(n,{className:`size-4 group-data-[panel-open]:rotate-90`}),`auth-service`]}),(0,E.jsx)(d,{children:(0,E.jsx)(s,{children:`Status: Degraded | p99: 340ms`})})]})]})]})})}),(0,E.jsx)(a,{id:`scroll-area`,label:`ScrollArea`,children:(0,E.jsx)(b,{title:`ScrollArea`,description:`Контейнер с прокруткой: vertical, horizontal или both. Получает фокус с клавиатуры, поэтому PageDown и стрелки прокручивают содержимое.`,code:`<ScrollArea className="h-48 rounded-sm border" aria-label="Журнал проверок">
  <List>
    {entries.map((entry) => <ListItem key={entry}>{entry}</ListItem>)}
  </List>
</ScrollArea>`,layout:`block`,children:(0,E.jsx)(l,{className:`h-48 rounded-sm border`,"aria-label":`Журнал проверок`,children:(0,E.jsx)(o,{children:I.map(e=>(0,E.jsx)(v,{children:e},e))})})})}),(0,E.jsx)(a,{id:`tree-view`,label:`TreeView`,children:(0,E.jsx)(b,{title:`TreeView`,description:`Дерево задач с drag-and-drop, StatusIcon и метаданными. Декларативный API через TreeItem.`,code:`<TreeView>
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
</TreeView>`,layout:`block`,children:(0,E.jsxs)(w,{children:[(0,E.jsxs)(T,{id:`epic-1`,label:`Platform Migration`,status:`progress`,meta:(0,E.jsx)(g,{variant:`info`,children:`Epic`}),children:[(0,E.jsx)(T,{id:`task-1`,label:`Migrate auth service`,status:`closed`,priority:`p1`,meta:(0,E.jsx)(h,{size:`sm`,color:`ok`,children:`Done`})}),(0,E.jsx)(T,{id:`task-2`,label:`Update API gateway`,status:`progress`,priority:`p1`,meta:(0,E.jsx)(h,{size:`sm`,color:`info`,children:`In Progress`})}),(0,E.jsxs)(T,{id:`task-3`,label:`Database schema migration`,status:`open`,priority:`p2`,children:[(0,E.jsx)(T,{id:`sub-1`,label:`Backup production data`,status:`closed`}),(0,E.jsx)(T,{id:`sub-2`,label:`Run migration scripts`,status:`open`}),(0,E.jsx)(T,{id:`sub-3`,label:`Validate data integrity`,status:`open`})]})]}),(0,E.jsxs)(T,{id:`epic-2`,label:`Monitoring Setup`,status:`open`,meta:(0,E.jsx)(g,{variant:`info`,children:`Epic`}),children:[(0,E.jsx)(T,{id:`task-4`,label:`Configure alerts`,status:`open`,priority:`p2`}),(0,E.jsx)(T,{id:`task-5`,label:`Set up dashboards`,status:`open`,priority:`p3`})]})]})})}),(0,E.jsxs)(a,{id:`comment-thread`,label:`Комментарии`,children:[(0,E.jsx)(b,{title:`CommentThread`,description:`Тред комментариев: CommentThread > Comment > CommentAvatar + CommentContent.`,code:`<CommentThread>
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
</CommentThread>`,layout:`block`,children:(0,E.jsxs)(P,{children:[(0,E.jsxs)(D,{children:[(0,E.jsx)(O,{fallback:`AK`}),(0,E.jsxs)(k,{children:[(0,E.jsxs)(A,{children:[(0,E.jsx)(j,{children:`Alice Kim`}),(0,E.jsx)(M,{children:`2 hours ago`})]}),(0,E.jsx)(N,{children:`Root cause identified — connection pool exhaustion on the primary database. Rolling out a fix now.`})]})]}),(0,E.jsxs)(D,{children:[(0,E.jsx)(O,{fallback:`BN`}),(0,E.jsxs)(k,{children:[(0,E.jsxs)(A,{children:[(0,E.jsx)(j,{children:`Bob Nash`}),(0,E.jsx)(M,{children:`1 hour ago`})]}),(0,E.jsx)(N,{children:`Fix deployed to staging. Monitoring error rates before promoting to production.`})]})]}),(0,E.jsxs)(D,{children:[(0,E.jsx)(O,{fallback:`CM`}),(0,E.jsxs)(k,{children:[(0,E.jsxs)(A,{children:[(0,E.jsx)(j,{children:`Carol Mays`}),(0,E.jsx)(M,{children:`30 min ago`})]}),(0,E.jsx)(N,{children:`Staging looks clean. Error rate dropped to 0.01%. Ready for production deploy.`})]})]})]})}),(0,E.jsxs)(b,{title:`Avatar — размеры`,description:`Три размера: sm (16px), default (20px), lg (24px). Размер задают токены --avatar-sm, --avatar-default, --avatar-lg и утилиты size-avatar-sm, size-avatar-default, size-avatar-lg. Инициалы — Mono 11px.`,code:`<Avatar size="sm"><AvatarFallback>AK</AvatarFallback></Avatar>
<Avatar><AvatarFallback>AK</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarFallback>AK</AvatarFallback></Avatar>`,children:[(0,E.jsx)(c,{size:`sm`,children:(0,E.jsx)(m,{children:`AK`})}),(0,E.jsx)(c,{children:(0,E.jsx)(m,{children:`AK`})}),(0,E.jsx)(c,{size:`lg`,children:(0,E.jsx)(m,{children:`AK`})})]})]}),(0,E.jsxs)(a,{id:`api`,label:`API`,children:[(0,E.jsx)(y,{title:`Пропсы Collapsible`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние раскрытия.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние в неконтролируемом режиме.`},{name:`onOpenChange`,type:`(open: boolean, eventDetails) => void`,defaultValue:`—`,description:`Колбэк раскрытия и скрытия.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Игнорирует действия пользователя.`}]}),(0,E.jsx)(y,{title:`Пропсы ScrollArea`,props:[{name:`orientation`,type:`"vertical" | "horizontal" | "both"`,defaultValue:`"vertical"`,description:`Оси прокрутки.`},{name:`tabIndex`,type:`number`,defaultValue:`0`,description:`Область получает фокус и прокручивается с клавиатуры.`},{name:`aria-label`,type:`string`,defaultValue:`—`,description:`Название области. С ним область получает role group.`}]}),(0,E.jsx)(y,{title:`Пропсы TreeView`,props:[{name:`onReorder`,type:`(items: TreeItemData[]) => void`,defaultValue:`—`,description:`Колбэк нового порядка после перетаскивания.`},{name:`onSelect`,type:`(id: string) => void`,defaultValue:`—`,description:`Колбэк выбора элемента.`},{name:`selectedId`,type:`string`,defaultValue:`—`,description:`Выбранный элемент в контролируемом режиме.`},{name:`defaultCollapsed`,type:`string[]`,defaultValue:`[]`,description:`Элементы, свёрнутые при первом показе.`}]}),(0,E.jsx)(y,{title:`Пропсы TreeItem`,props:[{name:`id`,type:`string`,defaultValue:`—`,description:`Уникальный идентификатор элемента.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Название элемента.`},{name:`status`,type:`"open" | "progress" | "blocked" | "deferred" | "closed"`,defaultValue:`—`,description:`Статус задачи: WorkflowIcon перед названием.`},{name:`priority`,type:`"p0" | "p1" | "p2" | "p3" | "p4"`,defaultValue:`—`,description:`Приоритет: попадает в подпись иконки статуса, цвет не меняет.`},{name:`meta`,type:`ReactNode`,defaultValue:`—`,description:`Метаданные справа: Badge, Tag.`},{name:`children`,type:`TreeItem`,defaultValue:`—`,description:`Вложенные элементы.`}]}),(0,E.jsx)(y,{title:`Пропсы CommentAvatar`,props:[{name:`fallback`,type:`string`,defaultValue:`—`,description:`Инициалы, если изображения нет.`},{name:`src`,type:`string`,defaultValue:`—`,description:`Адрес изображения автора.`}]})]})]})})})}export{L as default};