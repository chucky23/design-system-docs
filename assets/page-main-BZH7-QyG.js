import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Sr as r,ar as i,cr as a,j as o,kr as s,lr as c,or as l,rr as u,x as d}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{Q as f,g as p}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as m,r as h,t as g}from"./docs-article-CV9v0E7s.js";var _=e(),v=[{id:`usage`,label:`Использование`},{id:`prose`,label:`Плотность prose`},{id:`migration`,label:`Миграция`},{id:`api`,label:`API`}];function y(){return(0,_.jsx)(o,{title:`PageMain`,description:`Устаревшая оболочка страницы с автоматическим padding поверх SidebarInset. Новые страницы собирай из WorkspacePage внутри WorkspaceShell.`,breadcrumbs:g(`/components/page-main`),meta:m(`/components/page-main`),children:(0,_.jsx)(d,{presentation:`article`,label:`PageMain`,inspector:h(v),document:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{title:`Default density`,description:`px-4 py-4 — плотная раскладка для дашбордов, таблиц и служебных страниц.`,code:`<SidebarProvider>
  <Sidebar>...</Sidebar>
  <PageMain>
    <PageHeader title="Dashboard" description="..." />
    {content}
  </PageMain>
</SidebarProvider>`,layout:`grid`,children:(0,_.jsxs)(u,{children:[(0,_.jsxs)(a,{children:[(0,_.jsx)(c,{children:`Sample card`}),(0,_.jsx)(l,{children:`Контент рендерится с автопаддингом.`})]}),(0,_.jsxs)(i,{children:[`density: `,(0,_.jsx)(t,{children:`default`})]})]})}),(0,_.jsx)(r,{children:`PageMain устарел: в пакете одна страничная оболочка — WorkspacePage внутри WorkspaceShell. Существующий код продолжает работать до следующего мажорного выпуска, а новые страницы используют замену.`}),(0,_.jsxs)(r,{children:[`Компонент задавал отступы страницы поверх SidebarInset, поэтому содержимое достаточно было обернуть в`,` `,(0,_.jsx)(t,{children:`<PageMain>`}),`. Плотность регулируется пропом density — default для дашбордов и таблиц, prose для длинного текста.`]}),(0,_.jsx)(n,{id:`usage`,label:`Использование`,children:(0,_.jsx)(s,{copyLabel:`Скопировать код: использование PageMain`,language:`tsx`,code:`// Устарело: новые страницы собирай из WorkspacePage
import { PageMain } from "@chucky23/design-system/react"

<PageMain density="default">{content}</PageMain>`})}),(0,_.jsx)(n,{id:`prose`,label:`Плотность prose`,children:(0,_.jsx)(p,{title:`Prose density`,description:`px-6 py-4 — для changelog, settings и страниц с длинным текстом.`,code:`<PageMain density="prose">
  <PageHeader title="Changelog" description="..." />
  {longTextContent}
</PageMain>`,layout:`grid`,children:(0,_.jsxs)(u,{children:[(0,_.jsxs)(a,{children:[(0,_.jsx)(c,{children:`Sample card`}),(0,_.jsx)(l,{children:`Контент рендерится с автопаддингом.`})]}),(0,_.jsxs)(i,{children:[`density: `,(0,_.jsx)(t,{children:`prose`})]})]})})}),(0,_.jsxs)(n,{id:`migration`,label:`Миграция`,children:[(0,_.jsx)(r,{children:`Заголовок и описание из PageHeader переходят в WorkspacePage, а сайдбар и навигацию рисует WorkspaceShell. Отступы задаёт оболочка, поэтому проп density больше не нужен. Ручная связка SidebarProvider и SidebarInset пока не помечена устаревшей, но страницу на ней тоже не собирают: её заменяет WorkspaceShell.`}),(0,_.jsx)(s,{copyLabel:`Скопировать код: переход на WorkspaceShell`,language:`tsx`,code:`// Было
<SidebarProvider>
  <Sidebar>...</Sidebar>
  <PageMain>
    <PageHeader title="Dashboard" description="..." />
    {content}
  </PageMain>
</SidebarProvider>

// Стало
import { WorkspacePage, WorkspaceShell } from "@chucky23/design-system/patterns/workspace"

<WorkspaceShell brand="Ops" groups={groups} activeId={activeId}>
  <WorkspacePage title="Dashboard" description="...">
    {content}
  </WorkspacePage>
</WorkspaceShell>`})]}),(0,_.jsx)(n,{id:`api`,label:`API`,children:(0,_.jsx)(f,{title:`PageMain Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Содержимое страницы. Обычно PageHeader + контент.`},{name:`density`,type:`"default" | "prose"`,defaultValue:`"default"`,description:`Режим плотности. default: px-4 py-4, prose: px-6 py-4.`}]})})]})})})}export{y as default};