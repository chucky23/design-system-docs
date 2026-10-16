import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,_i as r,_n as i,_r as a,bn as o,br as s,gn as c,hn as l,m as u,o as d,r as f,vn as p,xn as m,yn as h}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{V as g,h as _,j as v,n as y,r as b}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as x,t as S}from"./docs-article-BUNGnjgF.js";import"./recipes-D5dnGl5M.js";var C=e(),w=[{id:`usage`,label:`Использование`},{id:`metrics`,label:`Метрики`},{id:`compact-signal`,label:`Compact signal cards`},{id:`status`,label:`Карточка со статусом`},{id:`composition`,label:`Полная карточка`},{id:`api`,label:`API`}];function T(){return(0,C.jsx)(u,{title:`Cards`,description:`Radius 3px, без box-shadow (borders-only), компактный padding 0.75rem. Структура Header → Content → Footer.`,breadcrumbs:S(`/components/cards`),children:(0,C.jsx)(d,{presentation:`article`,label:`Cards`,inspector:x(w),document:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(b,{title:`Card Structure`,description:`CardHeader (title + description) -> CardContent -> CardFooter.`,code:`<Card>
  <CardHeader>
    <CardTitle>Incident Summary</CardTitle>
    <CardDescription>Last 24 hours overview</CardDescription>
  </CardHeader>
  <CardContent>12 incidents resolved, 3 active, 1 critical.</CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View All</Button>
  </CardFooter>
</Card>`,layout:`block`,children:(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`Incident Summary`}),(0,C.jsx)(p,{children:`Last 24 hours overview`})]}),(0,C.jsx)(i,{children:`12 incidents resolved, 3 active, 1 critical.`}),(0,C.jsx)(h,{children:(0,C.jsx)(r,{variant:`outline`,size:`sm`,children:`View All`})})]})}),(0,C.jsx)(n,{children:`Карточка — контейнер для группы связанного контента: метрика, сущность, превью. Граница заменяет тень, subtle surface-shift отделяет слой от фона. Фиксированная структура Header → Content → Footer упрощает композицию и сохраняет ритм между карточками на одном экране.`}),(0,C.jsx)(s,{id:`usage`,label:`Использование`,children:(0,C.jsx)(t,{copyLabel:`Скопировать код: использование Card`,language:`tsx`,code:`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@chucky23/design-system/react"

<Card signal="ok">
  <CardHeader>
    <CardTitle>Status</CardTitle>
    <CardDescription>All systems operational</CardDescription>
  </CardHeader>
  <CardContent>Dashboard content</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>`})}),(0,C.jsx)(s,{id:`metrics`,label:`Метрики`,children:(0,C.jsx)(b,{title:`Metric Card Grid`,description:`Compact cards для KPI. Числа — tabular-nums, JetBrains Mono.`,code:`<ComponentGrid columns={4}>
  <Card>
    <CardHeader>
      <CardDescription>Active Incidents</CardDescription>
      <CardTitle size="display">7</CardTitle>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader>
      <CardDescription>MTTR</CardDescription>
      <CardTitle size="display">14m</CardTitle>
    </CardHeader>
  </Card>
</ComponentGrid>`,layout:`block`,children:(0,C.jsxs)(y,{columns:4,children:[(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(p,{children:`Active Incidents`}),(0,C.jsx)(m,{size:`display`,children:`7`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`+2 from yesterday`})})]}),(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(p,{children:`MTTR`}),(0,C.jsx)(m,{size:`display`,children:`14m`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`-3m improvement`})})]}),(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(p,{children:`Uptime`}),(0,C.jsx)(m,{size:`display`,children:`99.97%`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`Within SLA`})})]}),(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(p,{children:`Services`}),(0,C.jsx)(m,{size:`display`,children:`42`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`3 degraded`})})]})]})})}),(0,C.jsxs)(s,{id:`compact-signal`,label:`compact signal cards`,children:[(0,C.jsx)(b,{title:`Compact Signal Cards`,description:`size='sm' уплотняет карточку, signal задаёт диагностический контур. Для KPI сначала используй MetricRecipe.`,code:`<Card size="sm" signal="ok">
  <CardHeader>
    <CardTitle>pixelarticons</CardTitle>
    <CardDescription>CRT sidebar navigation</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>Retro sections with Pixelify Sans.</CardDescription>
    <CardDescription>Pixel art context.</CardDescription>
  </CardContent>
</Card>`,layout:`block`,children:(0,C.jsxs)(y,{columns:2,children:[(0,C.jsxs)(l,{size:`sm`,signal:`ok`,children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`pixelarticons`}),(0,C.jsx)(p,{children:`CRT sidebar navigation`})]}),(0,C.jsxs)(i,{children:[(0,C.jsx)(p,{children:`Retro sections with Pixelify Sans.`}),(0,C.jsx)(p,{children:`Pixel art context.`})]})]}),(0,C.jsxs)(l,{size:`sm`,signal:`info`,children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`lucide-react`}),(0,C.jsx)(p,{children:`Content area icons`})]}),(0,C.jsxs)(i,{children:[(0,C.jsx)(p,{children:`Tables, forms and toolbars.`}),(0,C.jsx)(p,{children:`Actions outside CRT sidebar.`})]})]})]})}),(0,C.jsxs)(n,{children:[(0,C.jsx)(_,{href:`/components/card-title-signal`,children:`Card Title Signal`}),` — проп signal у CardTitle в тон сигнальной рамки.`]})]}),(0,C.jsx)(s,{id:`status`,label:`Карточка со статусом`,children:(0,C.jsx)(b,{title:`Card + Badge`,description:`Badge в CardHeader для обозначения статуса.`,code:`<Card>
  <CardHeader>
    <CardTitle>api-gateway</CardTitle>
    <CardAction>
      <Badge variant="ok">Healthy</Badge>
    </CardAction>
    <CardDescription>us-east-1 / production</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>p99: 45ms / Error rate: 0.02%</CardDescription>
  </CardContent>
</Card>`,layout:`block`,children:(0,C.jsxs)(y,{columns:2,children:[(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`api-gateway`}),(0,C.jsx)(c,{children:(0,C.jsx)(f,{variant:`ok`,children:`Healthy`})}),(0,C.jsx)(p,{children:`us-east-1 / production`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`p99: 45ms / Error rate: 0.02%`})})]}),(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`auth-service`}),(0,C.jsx)(c,{children:(0,C.jsx)(f,{variant:`destructive`,children:`Degraded`})}),(0,C.jsx)(p,{children:`eu-west-1 / production`})]}),(0,C.jsx)(i,{children:(0,C.jsx)(p,{children:`p99: 340ms / Error rate: 2.4%`})})]})]})})}),(0,C.jsx)(s,{id:`composition`,label:`Полная карточка`,children:(0,C.jsx)(b,{title:`Full Card Example`,description:`Header + rich content + footer с actions.`,code:`<Card>
  <CardHeader>
    <CardTitle>INC-4012</CardTitle>
    <CardAction>
      <Badge variant="destructive">SEV-2</Badge>
    </CardAction>
    <CardDescription>API gateway timeout in us-east-1</CardDescription>
  </CardHeader>
  <CardContent>
    <PropertyField label="Duration">14m 32s</PropertyField>
    <PropertyField label="Affected">3 services</PropertyField>
    <PropertyField label="Commander">@alice</PropertyField>
    <PropertyField label="Started">14:23 UTC</PropertyField>
  </CardContent>
  <CardFooter>
    <MetaClusterRecipe>
      <Badge variant="warn">Active</Badge>
      <Button variant="ghost" size="sm">Escalate</Button>
      <Button size="sm">Resolve</Button>
    </MetaClusterRecipe>
  </CardFooter>
</Card>`,layout:`block`,children:(0,C.jsxs)(l,{children:[(0,C.jsxs)(o,{children:[(0,C.jsx)(m,{children:`INC-4012`}),(0,C.jsx)(c,{children:(0,C.jsx)(f,{variant:`destructive`,children:`SEV-2`})}),(0,C.jsx)(p,{children:`API gateway timeout in us-east-1`})]}),(0,C.jsxs)(i,{children:[(0,C.jsx)(a,{label:`Duration`,children:`14m 32s`}),(0,C.jsx)(a,{label:`Affected`,children:`3 services`}),(0,C.jsx)(a,{label:`Commander`,children:`@alice`}),(0,C.jsx)(a,{label:`Started`,children:`14:23 UTC`})]}),(0,C.jsx)(h,{children:(0,C.jsxs)(g,{children:[(0,C.jsx)(f,{variant:`warn`,children:`Active`}),(0,C.jsx)(r,{variant:`ghost`,size:`sm`,children:`Escalate`}),(0,C.jsx)(r,{size:`sm`,children:`Resolve`})]})})]})})}),(0,C.jsx)(s,{id:`api`,label:`API`,children:(0,C.jsx)(v,{title:`Card API and Slots`,props:[{name:`Card.size`,type:`"default" | "sm"`,defaultValue:`"default"`,description:`Плотность контейнера. sm уменьшает gap и вертикальный padding.`},{name:`Card.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Диагностический контур через data-signal. Используй для статуса блока.`},{name:`CardTitle.size`,type:`"default" | "display"`,defaultValue:`"default"`,description:`display включает крупное tabular-nums значение для KPI.`},{name:`CardTitle.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет заголовка. Обычно совпадает с Card.signal.`},{name:`Card`,type:`div`,defaultValue:`—`,description:`Root container. data-slot='card'. border + padding.`},{name:`CardHeader`,type:`div`,defaultValue:`—`,description:`Title + description area. padding-inline: 0.75rem.`},{name:`CardTitle`,type:`div`,defaultValue:`—`,description:`JetBrains Mono, card-title slot.`},{name:`CardDescription`,type:`div`,defaultValue:`—`,description:`Muted text below title.`},{name:`CardAction`,type:`div`,defaultValue:`—`,description:`Action area in the header's top-right corner: badge or button.`},{name:`CardContent`,type:`div`,defaultValue:`—`,description:`Main content area. padding-inline: 0.75rem.`},{name:`CardFooter`,type:`div`,defaultValue:`—`,description:`Footer with actions. flex layout.`}]})})]})})})}export{T as default};