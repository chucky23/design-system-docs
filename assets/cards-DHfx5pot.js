import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Oa as t,Qr as n,Sr as r,Yr as i,ar as a,cr as o,ir as s,j as c,kr as l,lr as u,or as d,rr as f,sr as p,v as m,x as h}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as g,Q as _,g as v,h as y}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{r as b}from"./chunk-CKG37GDB-SZ9fZavK.js";import{n as x,r as S,t as C}from"./docs-article-CV9v0E7s.js";import"./recipes-DhOVglAh.js";var w=e(),T=[{id:`usage`,label:`Использование`},{id:`metrics`,label:`Метрики`},{id:`compact-signal`,label:`Compact signal cards`},{id:`status`,label:`Карточка со статусом`},{id:`composition`,label:`Полная карточка`},{id:`api`,label:`API`}];function E(){return(0,w.jsx)(c,{title:`Cards`,description:`Радиус 8px, без box-shadow (borders-only), компактный padding 0.75rem. Структура Header → Content → Footer.`,breadcrumbs:C(`/components/cards`),meta:x(`/components/cards`),children:(0,w.jsx)(h,{presentation:`article`,label:`Cards`,inspector:S(T),document:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v,{title:`Card Structure`,description:`CardHeader (title + description) -> CardContent -> CardFooter.`,code:`<Card>
  <CardHeader>
    <CardTitle>Incident Summary</CardTitle>
    <CardDescription>Last 24 hours overview</CardDescription>
  </CardHeader>
  <CardContent>12 incidents resolved, 3 active, 1 critical.</CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View All</Button>
  </CardFooter>
</Card>`,layout:`block`,children:(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`Incident Summary`}),(0,w.jsx)(d,{children:`Last 24 hours overview`})]}),(0,w.jsx)(a,{children:`12 incidents resolved, 3 active, 1 critical.`}),(0,w.jsx)(p,{children:(0,w.jsx)(t,{variant:`outline`,size:`sm`,children:`View All`})})]})}),(0,w.jsx)(r,{children:`Карточка — контейнер для группы связанного контента: метрика, сущность, превью. Граница заменяет тень, subtle surface-shift отделяет слой от фона. Фиксированная структура Header → Content → Footer упрощает композицию и сохраняет ритм между карточками на одном экране.`}),(0,w.jsx)(n,{id:`usage`,label:`Использование`,children:(0,w.jsx)(l,{copyLabel:`Скопировать код: использование Card`,language:`tsx`,code:`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@chucky23/design-system/react"

<Card signal="ok">
  <CardHeader>
    <CardTitle>Status</CardTitle>
    <CardDescription>All systems operational</CardDescription>
  </CardHeader>
  <CardContent>Dashboard content</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>`})}),(0,w.jsx)(n,{id:`metrics`,label:`Метрики`,children:(0,w.jsx)(v,{title:`Metric Card Grid`,description:`Compact cards для KPI. Числа — SF Pro с tabular-nums.`,code:`<ComponentGrid columns={4}>
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
</ComponentGrid>`,layout:`block`,children:(0,w.jsxs)(y,{columns:4,children:[(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(d,{children:`Active Incidents`}),(0,w.jsx)(u,{size:`display`,children:`7`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`+2 from yesterday`})})]}),(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(d,{children:`MTTR`}),(0,w.jsx)(u,{size:`display`,children:`14m`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`-3m improvement`})})]}),(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(d,{children:`Uptime`}),(0,w.jsx)(u,{size:`display`,children:`99.97%`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`Within SLA`})})]}),(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(d,{children:`Services`}),(0,w.jsx)(u,{size:`display`,children:`42`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`3 degraded`})})]})]})})}),(0,w.jsxs)(n,{id:`compact-signal`,label:`compact signal cards`,children:[(0,w.jsx)(v,{title:`Compact Signal Cards`,description:`size='sm' уплотняет карточку, signal задаёт диагностический контур. Для KPI сначала используй MetricRecipe.`,code:`<Card size="sm" signal="ok">
  <CardHeader>
    <CardTitle>Иконки</CardTitle>
    <CardDescription>Sidebar navigation</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>Векторные знаки Lucide.</CardDescription>
    <CardDescription>Штрих 1.5, круглые окончания.</CardDescription>
  </CardContent>
</Card>`,layout:`block`,children:(0,w.jsxs)(y,{columns:2,children:[(0,w.jsxs)(f,{size:`sm`,signal:`ok`,children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`Иконки`}),(0,w.jsx)(d,{children:`Sidebar navigation`})]}),(0,w.jsxs)(a,{children:[(0,w.jsx)(d,{children:`Векторные знаки Lucide.`}),(0,w.jsx)(d,{children:`Штрих 1.5, круглые окончания.`})]})]}),(0,w.jsxs)(f,{size:`sm`,signal:`info`,children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`Semantic aliases`}),(0,w.jsx)(d,{children:`Content area icons`})]}),(0,w.jsxs)(a,{children:[(0,w.jsx)(d,{children:`Tables, forms and toolbars.`}),(0,w.jsx)(d,{children:`Actions outside sidebar.`})]})]})]})}),(0,w.jsxs)(r,{children:[(0,w.jsx)(g,{href:`/components/card-title-signal`,children:`Card Title Signal`}),` — проп signal у CardTitle в тон сигнальной рамки.`]})]}),(0,w.jsxs)(n,{id:`status`,label:`Карточка со статусом`,children:[(0,w.jsx)(v,{title:`Card + Badge`,description:`Badge в CardHeader для обозначения статуса.`,code:`<Card>
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
</Card>`,layout:`block`,children:(0,w.jsxs)(y,{columns:2,children:[(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`api-gateway`}),(0,w.jsx)(s,{children:(0,w.jsx)(m,{variant:`ok`,children:`Healthy`})}),(0,w.jsx)(d,{children:`us-east-1 / production`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`p99: 45ms / Error rate: 0.02%`})})]}),(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`auth-service`}),(0,w.jsx)(s,{children:(0,w.jsx)(m,{variant:`destructive`,children:`Degraded`})}),(0,w.jsx)(d,{children:`eu-west-1 / production`})]}),(0,w.jsx)(a,{children:(0,w.jsx)(d,{children:`p99: 340ms / Error rate: 2.4%`})})]})]})}),(0,w.jsx)(v,{title:`Шапка chrome`,description:`Вариант chrome у CardHeader: полоса цвета хрома (--chrome) на всю ширину у верхнего края карточки с рамкой снизу. Высота не меньше --bar-h (32px), название и действия в одну строку.`,code:`<Card>
  <CardHeader variant="chrome">
    <CardTitle>Решение</CardTitle>
    <CardAction><Button variant="ghost" size="xs">Изменить</Button></CardAction>
  </CardHeader>
  <CardContent>Перенести релиз на четверг.</CardContent>
</Card>`,layout:`block`,children:(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{variant:`chrome`,children:[(0,w.jsx)(u,{children:`Решение`}),(0,w.jsx)(s,{children:(0,w.jsx)(t,{variant:`ghost`,size:`xs`,children:`Изменить`})})]}),(0,w.jsx)(a,{children:`Перенести релиз на четверг.`})]})})]}),(0,w.jsx)(n,{id:`composition`,label:`Полная карточка`,children:(0,w.jsx)(v,{title:`Full Card Example`,description:`Header + rich content + footer с actions.`,code:`<Card>
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
</Card>`,layout:`block`,children:(0,w.jsxs)(f,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(u,{children:`INC-4012`}),(0,w.jsx)(s,{children:(0,w.jsx)(m,{variant:`destructive`,children:`SEV-2`})}),(0,w.jsx)(d,{children:`API gateway timeout in us-east-1`})]}),(0,w.jsxs)(a,{children:[(0,w.jsx)(i,{label:`Duration`,children:`14m 32s`}),(0,w.jsx)(i,{label:`Affected`,children:`3 services`}),(0,w.jsx)(i,{label:`Commander`,children:`@alice`}),(0,w.jsx)(i,{label:`Started`,children:`14:23 UTC`})]}),(0,w.jsx)(p,{children:(0,w.jsxs)(b,{children:[(0,w.jsx)(m,{variant:`warn`,children:`Active`}),(0,w.jsx)(t,{variant:`ghost`,size:`sm`,children:`Escalate`}),(0,w.jsx)(t,{size:`sm`,children:`Resolve`})]})})]})})}),(0,w.jsx)(n,{id:`api`,label:`API`,children:(0,w.jsx)(_,{title:`Card API and Slots`,props:[{name:`Card.size`,type:`"default" | "sm"`,defaultValue:`"default"`,description:`Плотность контейнера. sm уменьшает gap и вертикальный padding.`},{name:`Card.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Диагностический контур через data-signal. Используй для статуса блока.`},{name:`CardTitle.size`,type:`"default" | "display"`,defaultValue:`"default"`,description:`display включает крупное tabular-nums значение для KPI.`},{name:`CardTitle.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет заголовка. Обычно совпадает с Card.signal.`},{name:`Card`,type:`div`,defaultValue:`—`,description:`Root container. data-slot='card'. border + padding.`},{name:`CardHeader`,type:`div`,defaultValue:`—`,description:`Title + description area. padding-inline: 0.75rem.`},{name:`CardHeader.variant`,type:`"default" | "chrome"`,defaultValue:`"default"`,description:`chrome — полоса цвета --chrome с рамкой снизу на всю ширину карточки, высота от 32px, название и действия в одну строку.`},{name:`CardTitle`,type:`div`,defaultValue:`—`,description:`SF Pro (font-heading), card-title slot.`},{name:`CardDescription`,type:`div`,defaultValue:`—`,description:`Muted text below title.`},{name:`CardAction`,type:`div`,defaultValue:`—`,description:`Action area in the header's top-right corner: badge or button.`},{name:`CardContent`,type:`div`,defaultValue:`—`,description:`Main content area. padding-inline: 0.75rem.`},{name:`CardFooter`,type:`div`,defaultValue:`—`,description:`Footer with actions. flex layout, рамка сверху, без заливки.`}]})})]})})})}export{E as default};