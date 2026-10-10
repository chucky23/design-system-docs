import{$n as e,Cn as t,D as n,Dn as r,En as i,Hn as a,Mo as o,On as s,Sn as c,T as l,Tn as u,Vn as d,dr as f,fr as p,kn as m,lr as h,pi as g,ur as _,wn as v}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as y,r as b}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./patterns-B6WWsS5X.js";var x=o();function S(){return(0,x.jsxs)(n,{children:[(0,x.jsx)(a,{title:`Navigation`,description:`CRT Sidebar на Pixelify Sans и pixelarticons, Signal Header высотой 42px, Breadcrumb, Tabs и section-разделители.`}),(0,x.jsx)(n,{className:`max-w-prose`,children:(0,x.jsx)(c,{children:`Навигация живёт на двух уровнях. Глобальный — CRT-сайдбар слева с ретро-шрифтом и pixel-иконками. Локальный — Breadcrumb показывает место в иерархии, Tabs переключают контексты внутри экрана, SectionBlock разделяет смысловые зоны страницы.`})}),(0,x.jsx)(e,{label:`breadcrumb`,children:(0,x.jsxs)(b,{title:`Breadcrumb`,description:`Навигационная цепочка в header. Текущая страница без ссылки.`,previewClassName:`flex-col items-start gap-4`,code:`<Breadcrumb aria-label="Incident path">
  <BreadcrumbList className="text-xs">
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="text-xs" data-body>Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/incidents" className="text-xs" data-body>Incidents</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="font-mono text-xs font-medium">INC-4012</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:[(0,x.jsx)(t,{"aria-label":`Incident path`,children:(0,x.jsxs)(i,{className:`text-xs`,children:[(0,x.jsx)(v,{children:(0,x.jsx)(u,{href:`#`,className:`text-xs`,"data-body":!0,children:`Dashboard`})}),(0,x.jsx)(s,{}),(0,x.jsx)(v,{children:(0,x.jsx)(u,{href:`#`,className:`text-xs`,"data-body":!0,children:`Incidents`})}),(0,x.jsx)(s,{}),(0,x.jsx)(v,{children:(0,x.jsx)(r,{className:`font-mono text-xs font-medium`,children:`INC-4012`})})]})}),(0,x.jsx)(t,{"aria-label":`Service path`,children:(0,x.jsxs)(i,{className:`text-xs`,children:[(0,x.jsx)(v,{children:(0,x.jsx)(u,{href:`#`,className:`text-xs`,"data-body":!0,children:`Services`})}),(0,x.jsx)(s,{}),(0,x.jsx)(v,{children:(0,x.jsx)(r,{className:`font-mono text-xs font-medium`,children:`api-gateway`})})]})})]})}),(0,x.jsx)(e,{label:`tabs`,children:(0,x.jsx)(b,{title:`Tabs — default variant`,description:`Боксовые табы с активным фоном. Подходит для основных панелей переключения контента.`,previewClassName:`block`,code:`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
    <TabsTrigger value="postmortem">Postmortem</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
  <TabsContent value="postmortem">...</TabsContent>
</Tabs>`,children:(0,x.jsxs)(h,{defaultValue:`overview`,children:[(0,x.jsxs)(f,{children:[(0,x.jsx)(p,{value:`overview`,children:`Overview`}),(0,x.jsx)(p,{value:`timeline`,children:`Timeline`}),(0,x.jsx)(p,{value:`postmortem`,children:`Postmortem`})]}),(0,x.jsx)(_,{value:`overview`,className:`rounded-sm border p-4`,children:(0,x.jsx)(c,{children:`Incident overview with severity, affected services, and current status.`})}),(0,x.jsx)(_,{value:`timeline`,className:`rounded-sm border p-4`,children:(0,x.jsx)(c,{children:`Chronological event log from detection to resolution.`})}),(0,x.jsx)(_,{value:`postmortem`,className:`rounded-sm border p-4`,children:(0,x.jsx)(c,{children:`Root cause analysis, action items, and prevention measures.`})})]})})}),(0,x.jsx)(e,{label:`tabs / line variant`,children:(0,x.jsx)(b,{title:`Tabs — line variant`,description:`Минималистичный underline-индикатор вместо фона. Используется в ComponentPreview и подобных плотных layout-ах.`,previewClassName:`block`,code:`<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>`,children:(0,x.jsxs)(h,{defaultValue:`preview`,children:[(0,x.jsxs)(f,{variant:`line`,children:[(0,x.jsx)(p,{value:`preview`,children:`Preview`}),(0,x.jsx)(p,{value:`code`,children:`Code`})]}),(0,x.jsx)(_,{value:`preview`,className:`p-4`,children:(0,x.jsx)(c,{children:`Рендер компонента в iframe preview.`})}),(0,x.jsx)(_,{value:`code`,className:`p-4`,children:(0,x.jsx)(c,{children:`Исходный код примера.`})})]})})}),(0,x.jsx)(e,{label:`section divider`,children:(0,x.jsx)(b,{title:`Section Divider`,description:`Signature element: label + горизонтальная линия. CSS ::after с flex: 1.`,previewClassName:`block`,code:`<SectionBlock label="active incidents">
  <Body>Open issues grouped by service.</Body>
</SectionBlock>

<SectionBlock label="resolved today">
  <Body>Closed incidents from the current operational day.</Body>
</SectionBlock>

<SectionBlock label="service health">
  <Body>Signal summary for monitored services.</Body>
</SectionBlock>`,children:(0,x.jsxs)(l,{children:[(0,x.jsx)(e,{label:`active incidents`,children:(0,x.jsx)(c,{children:`Open issues grouped by service.`})}),(0,x.jsx)(e,{label:`resolved today`,children:(0,x.jsx)(c,{children:`Closed incidents from the current operational day.`})}),(0,x.jsx)(e,{label:`service health`,children:(0,x.jsx)(c,{children:`Signal summary for monitored services.`})})]})})}),(0,x.jsxs)(e,{label:`separator`,children:[(0,x.jsx)(b,{title:`Separator — horizontal`,description:`Простая горизонтальная линия-разделитель.`,previewClassName:`block`,code:`<Separator />`,children:(0,x.jsx)(g,{})}),(0,x.jsxs)(b,{title:`Separator — vertical`,description:`Вертикальная линия-разделитель в flex-контексте.`,previewClassName:`items-center gap-3`,code:`<Separator orientation="vertical" className="h-4" />`,children:[(0,x.jsx)(d,{tone:`muted`,children:`Incidents`}),(0,x.jsx)(g,{orientation:`vertical`,className:`h-4`}),(0,x.jsx)(d,{tone:`muted`,children:`Services`}),(0,x.jsx)(g,{orientation:`vertical`,className:`h-4`}),(0,x.jsx)(d,{tone:`muted`,children:`Metrics`})]})]}),(0,x.jsxs)(e,{label:`crt sidebar`,children:[(0,x.jsx)(c,{children:`CRT-sidebar — отдельный мир от контентной области. Pixelify Sans pixel font, pixelarticons, scanline-эффекты, 0px radius. Смотри страницу Motion для деталей CRT-эффектов.`}),(0,x.jsx)(m,{language:`text`,code:`CRT Sidebar (210px, left)
  Font: Pixelify Sans, monospace
  Icons: pixelarticons
  Radius: 0px
  Effects: crt-interlace, crt-tremor, phosphor glow
  Classes: .crt-sidebar, .crt-item, .crt-item-active

Header (42px, top)
  Font: JetBrains Mono
  Content: Breadcrumb + actions
  Border: border-b border-border

Footer (26px, bottom)
  Font: JetBrains Mono, 9px
  Border: border-t border-border`})]}),(0,x.jsxs)(e,{label:`api reference`,children:[(0,x.jsx)(y,{title:`Breadcrumb Slots`,props:[{name:`Breadcrumb`,type:`nav`,defaultValue:`--`,description:`Root nav element with aria-label='breadcrumb'`},{name:`BreadcrumbList`,type:`ol`,defaultValue:`--`,description:`Ordered list of breadcrumb items`},{name:`BreadcrumbItem`,type:`li`,defaultValue:`--`,description:`Single breadcrumb item`},{name:`BreadcrumbLink`,type:`a`,defaultValue:`--`,description:`Clickable link. Not for current page.`},{name:`BreadcrumbPage`,type:`span`,defaultValue:`--`,description:`Current page. Not a link, aria-current='page'`},{name:`BreadcrumbSeparator`,type:`li`,defaultValue:`ChevronRight`,description:`Separator between items`}]}),(0,x.jsx)(y,{title:`TabsList Props`,props:[{name:`variant`,type:`"default" | "line"`,defaultValue:`"default"`,description:`default — бокс с активным фоном. line — underline-индикатор для плотных layout.`}]}),(0,x.jsx)(y,{title:`Tabs Slots`,props:[{name:`Tabs`,type:`div`,defaultValue:`--`,description:`Root. Принимает defaultValue и orientation.`},{name:`TabsList`,type:`div`,defaultValue:`--`,description:`Контейнер триггеров. variant управляет визуалом.`},{name:`TabsTrigger`,type:`button`,defaultValue:`--`,description:`Кнопка активации вкладки. value обязателен.`},{name:`TabsContent`,type:`div`,defaultValue:`--`,description:`Панель содержимого. value привязывает к триггеру.`},{name:`TabsIndicator`,type:`span`,defaultValue:`--`,description:`Автопозиционируемый underline. Рендерится внутри TabsList при variant=line.`}]})]})]})}export{S as default};