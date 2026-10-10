import{$n as e,D as t,Hn as n,Ki as r,Mo as i,Sn as a,Xn as o,_n as s,c,fn as l,gn as u,hn as d,mn as f,pn as p,vn as m}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as h,n as g,r as _,vt as v}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./patterns-B6WWsS5X.js";import"./recipes-AK0s17ns.js";var y=i();function b(){return(0,y.jsxs)(t,{children:[(0,y.jsx)(n,{title:`Cards`,description:`Radius 3px, без box-shadow (borders-only), компактный padding 0.75rem. Структура Header → Content → Footer.`}),(0,y.jsx)(t,{className:`max-w-prose`,children:(0,y.jsx)(a,{children:`Карточка — контейнер для группы связанного контента: метрика, сущность, превью. Граница заменяет тень, subtle surface-shift отделяет слой от фона. Фиксированная структура Header → Content → Footer упрощает композицию и сохраняет ритм между карточками на одном экране.`})}),(0,y.jsx)(e,{label:`basic card`,children:(0,y.jsx)(_,{title:`Card Structure`,description:`CardHeader (title + description) -> CardContent -> CardFooter.`,code:`<Card>
  <CardHeader>
    <CardTitle>Incident Summary</CardTitle>
    <CardDescription>Last 24 hours overview</CardDescription>
  </CardHeader>
  <CardContent>
    <Body>12 incidents resolved, 3 active, 1 critical.</Body>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View All</Button>
  </CardFooter>
</Card>`,children:(0,y.jsxs)(l,{className:`w-full max-w-sm`,children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{children:`Incident Summary`}),(0,y.jsx)(d,{children:`Last 24 hours overview`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(a,{children:`12 incidents resolved, 3 active, 1 critical.`})}),(0,y.jsx)(u,{children:(0,y.jsx)(r,{variant:`outline`,size:`sm`,children:`View All`})})]})})}),(0,y.jsx)(e,{label:`metric cards`,children:(0,y.jsx)(_,{title:`Metric Card Grid`,description:`Compact cards для KPI. Числа — tabular-nums, JetBrains Mono.`,code:`<ComponentGrid columns={4}>
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
</ComponentGrid>`,children:(0,y.jsxs)(g,{columns:4,children:[(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(d,{children:`Active Incidents`}),(0,y.jsx)(m,{size:`display`,children:`7`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`+2 from yesterday`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(d,{children:`MTTR`}),(0,y.jsx)(m,{size:`display`,children:`14m`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`-3m improvement`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(d,{children:`Uptime`}),(0,y.jsx)(m,{size:`display`,children:`99.97%`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`Within SLA`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(d,{children:`Services`}),(0,y.jsx)(m,{size:`display`,children:`42`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`3 degraded`})})]})]})})}),(0,y.jsx)(e,{label:`compact signal cards`,children:(0,y.jsx)(_,{title:`Compact Signal Cards`,description:`size='sm' уплотняет карточку, signal задаёт диагностический контур. Для KPI сначала используй MetricRecipe.`,code:`<Card size="sm" signal="ok">
  <CardHeader>
    <CardTitle>pixelarticons</CardTitle>
    <CardDescription>CRT sidebar navigation</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>Retro sections with Pixelify Sans.</CardDescription>
    <CardDescription>Pixel art context.</CardDescription>
  </CardContent>
</Card>`,children:(0,y.jsxs)(g,{columns:2,children:[(0,y.jsxs)(l,{size:`sm`,signal:`ok`,children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{children:`pixelarticons`}),(0,y.jsx)(d,{children:`CRT sidebar navigation`})]}),(0,y.jsxs)(f,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(d,{children:`Retro sections with Pixelify Sans.`}),(0,y.jsx)(d,{children:`Pixel art context.`})]})]}),(0,y.jsxs)(l,{size:`sm`,signal:`info`,children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{children:`lucide-react`}),(0,y.jsx)(d,{children:`Content area icons`})]}),(0,y.jsxs)(f,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(d,{children:`Tables, forms and toolbars.`}),(0,y.jsx)(d,{children:`Actions outside CRT sidebar.`})]})]})]})})}),(0,y.jsx)(e,{label:`card with status`,children:(0,y.jsx)(_,{title:`Card + Badge`,description:`Badge в CardHeader для обозначения статуса.`,code:`<Card>
  <CardHeader>
    <CardTitle>api-gateway</CardTitle>
    <CardAction>
      <Badge variant="outline">Healthy</Badge>
    </CardAction>
    <CardDescription>us-east-1 / production</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>Response time: 45ms p99</CardDescription>
  </CardContent>
</Card>`,children:(0,y.jsxs)(g,{columns:2,children:[(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{className:`text-sm`,children:`api-gateway`}),(0,y.jsx)(p,{children:(0,y.jsx)(c,{variant:`ok`,children:`Healthy`})}),(0,y.jsx)(d,{children:`us-east-1 / production`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`p99: 45ms / Error rate: 0.02%`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{className:`text-sm`,children:`auth-service`}),(0,y.jsx)(p,{children:(0,y.jsx)(c,{variant:`destructive`,children:`Degraded`})}),(0,y.jsx)(d,{children:`eu-west-1 / production`})]}),(0,y.jsx)(f,{children:(0,y.jsx)(d,{children:`p99: 340ms / Error rate: 2.4%`})})]})]})})}),(0,y.jsx)(e,{label:`composition patterns`,children:(0,y.jsx)(_,{title:`Full Card Example`,description:`Header + rich content + footer с actions.`,code:`<Card>
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
  <CardFooter className="justify-between">
    <Badge>Active</Badge>
    <MetaClusterRecipe>
      <Button variant="ghost" size="sm">Escalate</Button>
      <Button size="sm">Resolve</Button>
    </MetaClusterRecipe>
  </CardFooter>
</Card>`,children:(0,y.jsxs)(l,{className:`w-full max-w-md`,children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(m,{children:`INC-4012`}),(0,y.jsx)(p,{children:(0,y.jsx)(c,{variant:`destructive`,children:`SEV-2`})}),(0,y.jsx)(d,{children:`API gateway timeout in us-east-1`})]}),(0,y.jsxs)(f,{children:[(0,y.jsx)(o,{label:`Duration`,children:`14m 32s`}),(0,y.jsx)(o,{label:`Affected`,children:`3 services`}),(0,y.jsx)(o,{label:`Commander`,children:`@alice`}),(0,y.jsx)(o,{label:`Started`,children:`14:23 UTC`})]}),(0,y.jsxs)(u,{className:`justify-between`,children:[(0,y.jsx)(c,{variant:`warn`,children:`Active`}),(0,y.jsxs)(v,{children:[(0,y.jsx)(r,{variant:`ghost`,size:`sm`,children:`Escalate`}),(0,y.jsx)(r,{size:`sm`,children:`Resolve`})]})]})]})})}),(0,y.jsx)(e,{label:`api reference`,children:(0,y.jsx)(h,{title:`Card API and Slots`,props:[{name:`Card.size`,type:`"default" | "sm"`,defaultValue:`"default"`,description:`Плотность контейнера. sm уменьшает gap и вертикальный padding.`},{name:`Card.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`--`,description:`Диагностический контур через data-signal. Используй для статуса блока.`},{name:`CardTitle.size`,type:`"default" | "display"`,defaultValue:`"default"`,description:`display включает крупное tabular-nums значение для KPI.`},{name:`CardTitle.signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`--`,description:`Сигнальный цвет заголовка. Обычно совпадает с Card.signal.`},{name:`Card`,type:`div`,defaultValue:`--`,description:`Root container. data-slot='card'. border + padding.`},{name:`CardHeader`,type:`div`,defaultValue:`--`,description:`Title + description area. padding-inline: 0.75rem.`},{name:`CardTitle`,type:`div`,defaultValue:`--`,description:`JetBrains Mono, card-title slot.`},{name:`CardDescription`,type:`div`,defaultValue:`--`,description:`Muted text below title.`},{name:`CardContent`,type:`div`,defaultValue:`--`,description:`Main content area. padding-inline: 0.75rem.`},{name:`CardFooter`,type:`div`,defaultValue:`--`,description:`Footer with actions. flex layout.`}]})})]})}export{b as default};