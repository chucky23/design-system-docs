import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Bn as t,F as n,Gn as r,Hn as i,I as a,M as o,N as s,O as c,P as l,Rn as u,S as d,Un as f,Vn as p,Wn as m,br as h,rr as g,ti as _,zn as v}from"./chunk-5DUEG3R3-896u-HpP.js";import{j as y,r as b}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as x,t as S}from"./docs-article-DBNRC-Xz.js";import"./patterns-ZX3-PV1G.js";var C=e(),w=[{id:`usage`,label:`Использование`},{id:`tabs`,label:`Tabs`},{id:`tabs-line`,label:`Tabs: вариант line`},{id:`section-divider`,label:`Разделитель разделов`},{id:`separator`,label:`Separator`},{id:`crt-sidebar`,label:`CRT-сайдбар`},{id:`api`,label:`API`}];function T(){return(0,C.jsx)(a,{title:`Navigation`,description:`CRT Sidebar на Pixelify Sans и pixelarticons, Signal Header высотой 42px, Breadcrumb, Tabs и section-разделители.`,breadcrumbs:S(`/components/navigation`),children:(0,C.jsx)(c,{presentation:`article`,label:`Navigation`,inspector:x(w),document:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b,{title:`Breadcrumb`,description:`Навигационная цепочка в header. Текущая страница без ссылки.`,code:`<Breadcrumb aria-label="Incident path">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/incidents">Incidents</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>INC-4012</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,layout:`stack`,children:[(0,C.jsx)(v,{"aria-label":`Incident path`,children:(0,C.jsxs)(i,{children:[(0,C.jsx)(t,{children:(0,C.jsx)(p,{href:`#`,children:`Dashboard`})}),(0,C.jsx)(m,{}),(0,C.jsx)(t,{children:(0,C.jsx)(p,{href:`#`,children:`Incidents`})}),(0,C.jsx)(m,{}),(0,C.jsx)(t,{children:(0,C.jsx)(f,{children:`INC-4012`})})]})}),(0,C.jsx)(v,{"aria-label":`Service path`,children:(0,C.jsxs)(i,{children:[(0,C.jsx)(t,{children:(0,C.jsx)(p,{href:`#`,children:`Services`})}),(0,C.jsx)(m,{}),(0,C.jsx)(t,{children:(0,C.jsx)(f,{children:`api-gateway`})})]})})]}),(0,C.jsx)(u,{children:`Навигация живёт на двух уровнях. Глобальный — CRT-сайдбар слева с ретро-шрифтом и pixel-иконками. Локальный — Breadcrumb показывает место в иерархии, Tabs переключают контексты внутри экрана, SectionBlock разделяет смысловые зоны страницы.`}),(0,C.jsx)(h,{id:`usage`,label:`Использование`,children:(0,C.jsx)(r,{copyLabel:`Скопировать код: Breadcrumb и Tabs`,language:`tsx`,code:`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
</Tabs>`})}),(0,C.jsx)(h,{id:`tabs`,label:`Tabs`,children:(0,C.jsx)(b,{title:`Tabs — default variant`,description:`Боксовые табы с активным фоном. Подходит для основных панелей переключения контента.`,code:`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
    <TabsTrigger value="postmortem">Postmortem</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
  <TabsContent value="postmortem">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,C.jsxs)(o,{defaultValue:`overview`,children:[(0,C.jsxs)(l,{children:[(0,C.jsx)(n,{value:`overview`,children:`Overview`}),(0,C.jsx)(n,{value:`timeline`,children:`Timeline`}),(0,C.jsx)(n,{value:`postmortem`,children:`Postmortem`})]}),(0,C.jsx)(s,{value:`overview`,children:(0,C.jsx)(u,{children:`Incident overview with severity, affected services, and current status.`})}),(0,C.jsx)(s,{value:`timeline`,children:(0,C.jsx)(u,{children:`Chronological event log from detection to resolution.`})}),(0,C.jsx)(s,{value:`postmortem`,children:(0,C.jsx)(u,{children:`Root cause analysis, action items, and prevention measures.`})})]})})}),(0,C.jsx)(h,{id:`tabs-line`,label:`Tabs: вариант line`,children:(0,C.jsx)(b,{title:`Tabs — line variant`,description:`Минималистичный underline-индикатор вместо фона. Используется в ComponentPreview и подобных плотных layout-ах.`,code:`<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,C.jsxs)(o,{defaultValue:`preview`,children:[(0,C.jsxs)(l,{variant:`line`,children:[(0,C.jsx)(n,{value:`preview`,children:`Preview`}),(0,C.jsx)(n,{value:`code`,children:`Code`})]}),(0,C.jsx)(s,{value:`preview`,children:(0,C.jsx)(u,{children:`Рендер компонента в iframe preview.`})}),(0,C.jsx)(s,{value:`code`,children:(0,C.jsx)(u,{children:`Исходный код примера.`})})]})})}),(0,C.jsx)(h,{id:`section-divider`,label:`Разделитель разделов`,children:(0,C.jsx)(b,{title:`Section Divider`,description:`Signature element: label + горизонтальная линия. CSS ::after с flex: 1.`,code:`<SectionBlock label="active incidents">
  <Body>Open issues grouped by service.</Body>
</SectionBlock>

<SectionBlock label="resolved today">
  <Body>Closed incidents from the current operational day.</Body>
</SectionBlock>

<SectionBlock label="service health">
  <Body>Signal summary for monitored services.</Body>
</SectionBlock>`,layout:`block`,children:(0,C.jsxs)(d,{children:[(0,C.jsx)(h,{label:`active incidents`,children:(0,C.jsx)(u,{children:`Open issues grouped by service.`})}),(0,C.jsx)(h,{label:`resolved today`,children:(0,C.jsx)(u,{children:`Closed incidents from the current operational day.`})}),(0,C.jsx)(h,{label:`service health`,children:(0,C.jsx)(u,{children:`Signal summary for monitored services.`})})]})})}),(0,C.jsxs)(h,{id:`separator`,label:`Separator`,children:[(0,C.jsx)(b,{title:`Separator — horizontal`,description:`Простая горизонтальная линия-разделитель.`,code:`<Separator />`,layout:`block`,children:(0,C.jsx)(_,{})}),(0,C.jsxs)(b,{title:`Separator — vertical`,description:`Вертикальная линия-разделитель в flex-контексте.`,code:`<Separator orientation="vertical" className="h-4" />`,children:[(0,C.jsx)(g,{tone:`muted`,children:`Incidents`}),(0,C.jsx)(_,{orientation:`vertical`,className:`h-4`}),(0,C.jsx)(g,{tone:`muted`,children:`Services`}),(0,C.jsx)(_,{orientation:`vertical`,className:`h-4`}),(0,C.jsx)(g,{tone:`muted`,children:`Metrics`})]})]}),(0,C.jsxs)(h,{id:`crt-sidebar`,label:`CRT-сайдбар`,children:[(0,C.jsx)(u,{children:`CRT-sidebar — отдельный мир от контентной области. Pixelify Sans pixel font, pixelarticons, scanline-эффекты, 0px radius. Смотри страницу Motion для деталей CRT-эффектов.`}),(0,C.jsx)(r,{copyLabel:`Скопировать код: параметры CRT-сайдбара`,language:`text`,code:`CRT Sidebar (210px, left)
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
  Border: border-t border-border`})]}),(0,C.jsxs)(h,{id:`api`,label:`API`,children:[(0,C.jsx)(y,{title:`Breadcrumb Slots`,props:[{name:`Breadcrumb`,type:`nav`,defaultValue:`—`,description:`Root nav element with aria-label='breadcrumb'`},{name:`BreadcrumbList`,type:`ol`,defaultValue:`—`,description:`Ordered list of breadcrumb items`},{name:`BreadcrumbItem`,type:`li`,defaultValue:`—`,description:`Single breadcrumb item`},{name:`BreadcrumbLink`,type:`a`,defaultValue:`—`,description:`Clickable link. Not for current page.`},{name:`BreadcrumbPage`,type:`span`,defaultValue:`—`,description:`Current page. Not a link, aria-current='page'`},{name:`BreadcrumbSeparator`,type:`li`,defaultValue:`ChevronRight`,description:`Separator between items`}]}),(0,C.jsx)(y,{title:`TabsList Props`,props:[{name:`variant`,type:`"default" | "line"`,defaultValue:`"default"`,description:`default — бокс с активным фоном. line — underline-индикатор для плотных layout.`}]}),(0,C.jsx)(y,{title:`Tabs Slots`,props:[{name:`Tabs`,type:`div`,defaultValue:`—`,description:`Root. Принимает defaultValue и orientation.`},{name:`TabsList`,type:`div`,defaultValue:`—`,description:`Контейнер триггеров. variant управляет визуалом.`},{name:`TabsTrigger`,type:`button`,defaultValue:`—`,description:`Кнопка активации вкладки. value обязателен.`},{name:`TabsContent`,type:`div`,defaultValue:`—`,description:`Панель содержимого. value привязывает к триггеру.`},{name:`TabsIndicator`,type:`span`,defaultValue:`—`,description:`Автопозиционируемый underline. Рендерится внутри TabsList при variant=line.`}]})]})]})})})}export{T as default};