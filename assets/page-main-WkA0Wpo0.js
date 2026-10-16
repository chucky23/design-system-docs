import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,_n as r,ar as i,bn as a,br as o,hn as s,m as c,o as l,vn as u,xn as d}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{j as f,r as p}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as m,t as h}from"./docs-article-BUNGnjgF.js";var g=e(),_=[{id:`usage`,label:`Использование`},{id:`prose`,label:`Плотность prose`},{id:`migration`,label:`Миграция`},{id:`api`,label:`API`}];function v(){return(0,g.jsx)(c,{title:`PageMain`,description:`Устаревшая оболочка страницы с автоматическим padding поверх SidebarInset. Новые страницы собирай из WorkspacePage внутри WorkspaceShell.`,breadcrumbs:h(`/components/page-main`),children:(0,g.jsx)(l,{presentation:`article`,label:`PageMain`,inspector:m(_),document:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{title:`Default density`,description:`px-4 py-4 — плотная раскладка для дашбордов, таблиц и служебных страниц.`,code:`<SidebarProvider>
  <Sidebar>...</Sidebar>
  <PageMain>
    <PageHeader title="Dashboard" description="..." />
    {content}
  </PageMain>
</SidebarProvider>`,layout:`grid`,children:(0,g.jsxs)(s,{children:[(0,g.jsxs)(a,{children:[(0,g.jsx)(d,{children:`Sample card`}),(0,g.jsx)(u,{children:`Контент рендерится с автопаддингом.`})]}),(0,g.jsxs)(r,{children:[`density: `,(0,g.jsx)(i,{children:`default`})]})]})}),(0,g.jsx)(n,{children:`PageMain устарел: в пакете одна страничная оболочка — WorkspacePage внутри WorkspaceShell. Существующий код продолжает работать до следующего мажорного выпуска, а новые страницы используют замену.`}),(0,g.jsxs)(n,{children:[`Компонент задавал отступы страницы поверх SidebarInset, поэтому содержимое достаточно было обернуть в`,` `,(0,g.jsx)(i,{children:`<PageMain>`}),`. Плотность регулируется пропом density — default для дашбордов и таблиц, prose для длинного текста.`]}),(0,g.jsx)(o,{id:`usage`,label:`Использование`,children:(0,g.jsx)(t,{copyLabel:`Скопировать код: использование PageMain`,language:`tsx`,code:`// Устарело: новые страницы собирай из WorkspacePage
import { PageMain } from "@chucky23/design-system/react"

<PageMain density="default">{content}</PageMain>`})}),(0,g.jsx)(o,{id:`prose`,label:`Плотность prose`,children:(0,g.jsx)(p,{title:`Prose density`,description:`px-6 py-4 — для changelog, settings и страниц с длинным текстом.`,code:`<PageMain density="prose">
  <PageHeader title="Changelog" description="..." />
  {longTextContent}
</PageMain>`,layout:`grid`,children:(0,g.jsxs)(s,{children:[(0,g.jsxs)(a,{children:[(0,g.jsx)(d,{children:`Sample card`}),(0,g.jsx)(u,{children:`Контент рендерится с автопаддингом.`})]}),(0,g.jsxs)(r,{children:[`density: `,(0,g.jsx)(i,{children:`prose`})]})]})})}),(0,g.jsxs)(o,{id:`migration`,label:`Миграция`,children:[(0,g.jsx)(n,{children:`Заголовок и описание из PageHeader переходят в WorkspacePage, а сайдбар и навигацию рисует WorkspaceShell. Отступы задаёт оболочка, поэтому проп density больше не нужен. Ручная связка SidebarProvider и SidebarInset пока не помечена устаревшей, но страницу на ней тоже не собирают: её заменяет WorkspaceShell.`}),(0,g.jsx)(t,{copyLabel:`Скопировать код: переход на WorkspaceShell`,language:`tsx`,code:`// Было
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
</WorkspaceShell>`})]}),(0,g.jsx)(o,{id:`api`,label:`API`,children:(0,g.jsx)(f,{title:`PageMain Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Содержимое страницы. Обычно PageHeader + контент.`},{name:`density`,type:`"default" | "prose"`,defaultValue:`"default"`,description:`Режим плотности. default: px-4 py-4, prose: px-6 py-4.`}]})})]})})})}export{v as default};