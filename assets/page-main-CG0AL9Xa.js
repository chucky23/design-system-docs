import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{An as t,Gn as n,I as r,Nn as i,O as a,On as o,Pn as s,Rn as c,ar as l,br as u,jn as d}from"./chunk-5DUEG3R3-896u-HpP.js";import{j as f,r as p}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as m,t as h}from"./docs-article-DBNRC-Xz.js";var g=e(),_=[{id:`usage`,label:`Использование`},{id:`prose`,label:`Плотность prose`},{id:`migration`,label:`Миграция`},{id:`api`,label:`API`}];function v(){return(0,g.jsx)(r,{title:`PageMain`,description:`Устаревшая оболочка страницы с автоматическим padding поверх SidebarInset. Новые страницы собирай из WorkspacePage внутри WorkspaceShell.`,breadcrumbs:h(`/components/page-main`),children:(0,g.jsx)(a,{presentation:`article`,label:`PageMain`,inspector:m(_),document:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{title:`Default density`,description:`px-4 py-4 — плотная раскладка для дашбордов, таблиц и служебных страниц.`,code:`<SidebarProvider>
  <Sidebar>...</Sidebar>
  <PageMain>
    <PageHeader title="Dashboard" description="..." />
    {content}
  </PageMain>
</SidebarProvider>`,layout:`grid`,children:(0,g.jsxs)(o,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{children:`Sample card`}),(0,g.jsx)(d,{children:`Контент рендерится с автопаддингом.`})]}),(0,g.jsxs)(t,{children:[`density: `,(0,g.jsx)(l,{children:`default`})]})]})}),(0,g.jsx)(c,{children:`PageMain устарел: в пакете одна страничная оболочка — WorkspacePage внутри WorkspaceShell. Существующий код продолжает работать до следующего мажорного выпуска, а новые страницы используют замену.`}),(0,g.jsxs)(c,{children:[`Компонент задавал отступы страницы поверх SidebarInset, поэтому содержимое достаточно было обернуть в`,` `,(0,g.jsx)(l,{children:`<PageMain>`}),`. Плотность регулируется пропом density — default для дашбордов и таблиц, prose для длинного текста.`]}),(0,g.jsx)(u,{id:`usage`,label:`Использование`,children:(0,g.jsx)(n,{copyLabel:`Скопировать код: использование PageMain`,language:`tsx`,code:`// Устарело: новые страницы собирай из WorkspacePage
import { PageMain } from "@chucky23/design-system/react"

<PageMain density="default">{content}</PageMain>`})}),(0,g.jsx)(u,{id:`prose`,label:`Плотность prose`,children:(0,g.jsx)(p,{title:`Prose density`,description:`px-6 py-4 — для changelog, settings и страниц с длинным текстом.`,code:`<PageMain density="prose">
  <PageHeader title="Changelog" description="..." />
  {longTextContent}
</PageMain>`,layout:`grid`,children:(0,g.jsxs)(o,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{children:`Sample card`}),(0,g.jsx)(d,{children:`Контент рендерится с автопаддингом.`})]}),(0,g.jsxs)(t,{children:[`density: `,(0,g.jsx)(l,{children:`prose`})]})]})})}),(0,g.jsxs)(u,{id:`migration`,label:`Миграция`,children:[(0,g.jsx)(c,{children:`Заголовок и описание из PageHeader переходят в WorkspacePage, а сайдбар и навигацию рисует WorkspaceShell. Отступы задаёт оболочка, поэтому проп density больше не нужен. Ручная связка SidebarProvider и SidebarInset пока не помечена устаревшей, но страницу на ней тоже не собирают: её заменяет WorkspaceShell.`}),(0,g.jsx)(n,{copyLabel:`Скопировать код: переход на WorkspaceShell`,language:`tsx`,code:`// Было
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
</WorkspaceShell>`})]}),(0,g.jsx)(u,{id:`api`,label:`API`,children:(0,g.jsx)(f,{title:`PageMain Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Содержимое страницы. Обычно PageHeader + контент.`},{name:`density`,type:`"default" | "prose"`,defaultValue:`"default"`,description:`Режим плотности. default: px-4 py-4, prose: px-6 py-4.`}]})})]})})})}export{v as default};