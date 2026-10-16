import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Bn as t,Gn as n,Hn as r,Rn as i,Un as a,Vn as o,Wn as s,br as c,d as l,f as u,fn as d,m as f,ni as p,o as m,p as h,rr as g,u as _,zn as v}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{j as y,r as b}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as x,t as S}from"./docs-article-BUNGnjgF.js";import"./patterns-u-K9g2dB.js";var C=e(),w=[{id:`usage`,label:`Использование`},{id:`tabs`,label:`Tabs`},{id:`tabs-line`,label:`Tabs: вариант line`},{id:`section-divider`,label:`Разделитель разделов`},{id:`separator`,label:`Separator`},{id:`crt-sidebar`,label:`CRT-сайдбар`},{id:`api`,label:`API`}];function T(){return(0,C.jsx)(f,{title:`Navigation`,description:`CRT Sidebar на Pixelify Sans и pixelarticons, Signal Header высотой 42px, Breadcrumb, Tabs и section-разделители.`,breadcrumbs:S(`/components/navigation`),children:(0,C.jsx)(m,{presentation:`article`,label:`Navigation`,inspector:x(w),document:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b,{title:`Breadcrumb`,description:`Навигационная цепочка в header. Текущая страница без ссылки.`,code:`<Breadcrumb aria-label="Incident path">
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
</Breadcrumb>`,layout:`stack`,children:[(0,C.jsx)(v,{"aria-label":`Incident path`,children:(0,C.jsxs)(r,{children:[(0,C.jsx)(t,{children:(0,C.jsx)(o,{href:`#`,children:`Dashboard`})}),(0,C.jsx)(s,{}),(0,C.jsx)(t,{children:(0,C.jsx)(o,{href:`#`,children:`Incidents`})}),(0,C.jsx)(s,{}),(0,C.jsx)(t,{children:(0,C.jsx)(a,{children:`INC-4012`})})]})}),(0,C.jsx)(v,{"aria-label":`Service path`,children:(0,C.jsxs)(r,{children:[(0,C.jsx)(t,{children:(0,C.jsx)(o,{href:`#`,children:`Services`})}),(0,C.jsx)(s,{}),(0,C.jsx)(t,{children:(0,C.jsx)(a,{children:`api-gateway`})})]})})]}),(0,C.jsx)(i,{children:`Навигация живёт на двух уровнях. Глобальный — CRT-сайдбар слева с ретро-шрифтом и pixel-иконками. Локальный — Breadcrumb показывает место в иерархии, Tabs переключают контексты внутри экрана, SectionBlock разделяет смысловые зоны страницы.`}),(0,C.jsx)(c,{id:`usage`,label:`Использование`,children:(0,C.jsx)(n,{copyLabel:`Скопировать код: Breadcrumb и Tabs`,language:`tsx`,code:`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
</Tabs>`})}),(0,C.jsx)(c,{id:`tabs`,label:`Tabs`,children:(0,C.jsx)(b,{title:`Tabs — default variant`,description:`Боксовые табы с активным фоном. Подходит для основных панелей переключения контента.`,code:`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
    <TabsTrigger value="postmortem">Postmortem</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
  <TabsContent value="postmortem">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,C.jsxs)(_,{defaultValue:`overview`,children:[(0,C.jsxs)(u,{children:[(0,C.jsx)(h,{value:`overview`,children:`Overview`}),(0,C.jsx)(h,{value:`timeline`,children:`Timeline`}),(0,C.jsx)(h,{value:`postmortem`,children:`Postmortem`})]}),(0,C.jsx)(l,{value:`overview`,children:(0,C.jsx)(i,{children:`Incident overview with severity, affected services, and current status.`})}),(0,C.jsx)(l,{value:`timeline`,children:(0,C.jsx)(i,{children:`Chronological event log from detection to resolution.`})}),(0,C.jsx)(l,{value:`postmortem`,children:(0,C.jsx)(i,{children:`Root cause analysis, action items, and prevention measures.`})})]})})}),(0,C.jsx)(c,{id:`tabs-line`,label:`Tabs: вариант line`,children:(0,C.jsx)(b,{title:`Tabs — line variant`,description:`Минималистичный underline-индикатор вместо фона. Используется в ComponentPreview и подобных плотных layout-ах.`,code:`<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,C.jsxs)(_,{defaultValue:`preview`,children:[(0,C.jsxs)(u,{variant:`line`,children:[(0,C.jsx)(h,{value:`preview`,children:`Preview`}),(0,C.jsx)(h,{value:`code`,children:`Code`})]}),(0,C.jsx)(l,{value:`preview`,children:(0,C.jsx)(i,{children:`Рендер компонента в iframe preview.`})}),(0,C.jsx)(l,{value:`code`,children:(0,C.jsx)(i,{children:`Исходный код примера.`})})]})})}),(0,C.jsx)(c,{id:`section-divider`,label:`Разделитель разделов`,children:(0,C.jsx)(b,{title:`Section Divider`,description:`Signature element: label + горизонтальная линия. CSS ::after с flex: 1.`,code:`<SectionBlock label="active incidents">
  <Body>Open issues grouped by service.</Body>
</SectionBlock>

<SectionBlock label="resolved today">
  <Body>Closed incidents from the current operational day.</Body>
</SectionBlock>

<SectionBlock label="service health">
  <Body>Signal summary for monitored services.</Body>
</SectionBlock>`,layout:`block`,children:(0,C.jsxs)(d,{children:[(0,C.jsx)(c,{label:`active incidents`,headingLevel:3,children:(0,C.jsx)(i,{children:`Open issues grouped by service.`})}),(0,C.jsx)(c,{label:`resolved today`,headingLevel:3,children:(0,C.jsx)(i,{children:`Closed incidents from the current operational day.`})}),(0,C.jsx)(c,{label:`service health`,headingLevel:3,children:(0,C.jsx)(i,{children:`Signal summary for monitored services.`})})]})})}),(0,C.jsxs)(c,{id:`separator`,label:`Separator`,children:[(0,C.jsx)(b,{title:`Separator — horizontal`,description:`Простая горизонтальная линия-разделитель.`,code:`<Separator />`,layout:`block`,children:(0,C.jsx)(p,{})}),(0,C.jsxs)(b,{title:`Separator — vertical`,description:`Вертикальная линия-разделитель в flex-контексте.`,code:`<Separator orientation="vertical" className="h-4" />`,children:[(0,C.jsx)(g,{tone:`muted`,children:`Incidents`}),(0,C.jsx)(p,{orientation:`vertical`,className:`h-4`}),(0,C.jsx)(g,{tone:`muted`,children:`Services`}),(0,C.jsx)(p,{orientation:`vertical`,className:`h-4`}),(0,C.jsx)(g,{tone:`muted`,children:`Metrics`})]})]}),(0,C.jsxs)(c,{id:`crt-sidebar`,label:`CRT-сайдбар`,children:[(0,C.jsx)(i,{children:`CRT-sidebar — отдельный мир от контентной области. Pixelify Sans pixel font, pixelarticons, scanline-эффекты, 0px radius. Смотри страницу Motion для деталей CRT-эффектов.`}),(0,C.jsx)(n,{copyLabel:`Скопировать код: параметры CRT-сайдбара`,language:`text`,code:`CRT Sidebar (210px, left)
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
  Border: border-t border-border`})]}),(0,C.jsxs)(c,{id:`api`,label:`API`,children:[(0,C.jsx)(y,{title:`Breadcrumb Slots`,props:[{name:`Breadcrumb`,type:`nav`,defaultValue:`—`,description:`Root nav element with aria-label='breadcrumb'`},{name:`BreadcrumbList`,type:`ol`,defaultValue:`—`,description:`Ordered list of breadcrumb items`},{name:`BreadcrumbItem`,type:`li`,defaultValue:`—`,description:`Single breadcrumb item`},{name:`BreadcrumbLink`,type:`a`,defaultValue:`—`,description:`Clickable link. Not for current page.`},{name:`BreadcrumbPage`,type:`span`,defaultValue:`—`,description:`Current page. Not a link, aria-current='page'`},{name:`BreadcrumbSeparator`,type:`li`,defaultValue:`ChevronRight`,description:`Separator between items`}]}),(0,C.jsx)(y,{title:`TabsList Props`,props:[{name:`variant`,type:`"default" | "line"`,defaultValue:`"default"`,description:`default — бокс с активным фоном. line — underline-индикатор для плотных layout.`}]}),(0,C.jsx)(y,{title:`Tabs Slots`,props:[{name:`Tabs`,type:`div`,defaultValue:`—`,description:`Root. Принимает defaultValue и orientation.`},{name:`TabsList`,type:`div`,defaultValue:`—`,description:`Контейнер триггеров. variant управляет визуалом.`},{name:`TabsTrigger`,type:`button`,defaultValue:`—`,description:`Кнопка активации вкладки. value обязателен.`},{name:`TabsContent`,type:`div`,defaultValue:`—`,description:`Панель содержимого. value привязывает к триггеру.`},{name:`TabsIndicator`,type:`span`,defaultValue:`—`,description:`Автопозиционируемый underline. Рендерится внутри TabsList при variant=line.`}]})]})]})})})}export{T as default};