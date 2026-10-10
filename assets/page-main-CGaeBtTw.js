import{$n as e,Hn as t,Mo as n,_n as r,fn as i,hn as a,kn as o,mn as s,vn as c}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as l,M as u,c as d,r as f,s as p}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var m=n();function h(){return(0,m.jsxs)(p,{className:`flex flex-col gap-6`,children:[(0,m.jsx)(t,{title:`PageMain`,description:`Page shell с автоматическим padding'ом — обёртка над SidebarInset, заменяет ручной паттерн SidebarInset + div.`}),(0,m.jsxs)(u,{className:`max-w-prose`,"data-body":!0,children:[`Компонент устраняет бойлерплейт: вместо явного`,` <SidebarInset><div className="px-4 py-4">`,` достаточно обернуть содержимое в `,`<PageMain>`,`. Плотность регулируется пропом density — default для дашбордов и таблиц, prose для длинного текста.`]}),(0,m.jsx)(e,{label:`default density`,children:(0,m.jsx)(f,{title:`Default density`,description:`px-4 py-4 — плотный dev-dense layout для дашбордов, таблиц, дев-страниц.`,code:`<SidebarProvider>
  <Sidebar>...</Sidebar>
  <PageMain>
    <PageHeader title="Dashboard" description="..." />
    {content}
  </PageMain>
</SidebarProvider>`,children:(0,m.jsx)(p,{surface:`background`,className:`rounded-lg border`,children:(0,m.jsxs)(i,{className:`m-3`,children:[(0,m.jsxs)(r,{children:[(0,m.jsx)(c,{children:`Sample card`}),(0,m.jsx)(a,{children:`Контент рендерится с автопаддингом.`})]}),(0,m.jsxs)(s,{children:[`density: `,(0,m.jsx)(d,{children:`default`})]})]})})})}),(0,m.jsx)(e,{label:`prose density`,children:(0,m.jsx)(f,{title:`Prose density`,description:`px-6 py-4 — для changelog, settings и страниц с длинным текстом.`,code:`<PageMain density="prose">
  <PageHeader title="Changelog" description="..." />
  {longTextContent}
</PageMain>`,children:(0,m.jsx)(p,{surface:`background`,className:`rounded-lg border`,children:(0,m.jsxs)(i,{className:`m-3`,children:[(0,m.jsxs)(r,{children:[(0,m.jsx)(c,{children:`Sample card`}),(0,m.jsx)(a,{children:`Контент рендерится с автопаддингом.`})]}),(0,m.jsxs)(s,{children:[`density: `,(0,m.jsx)(d,{children:`prose`})]})]})})})}),(0,m.jsxs)(e,{label:`sidebar-inset direct`,children:[(0,m.jsx)(u,{className:`mb-3 max-w-prose`,"data-body":!0,children:`PageMain — закрытый API без className и HTML-атрибутов. Если нужен полный контроль над padding и layout — используй SidebarInset напрямую.`}),(0,m.jsx)(o,{language:`tsx`,code:`import { SidebarInset } from "@chucky23/design-system/extended/sidebar"

<SidebarInset>
  <div className="custom-layout p-0">
    {content}
  </div>
</SidebarInset>`})]}),(0,m.jsx)(e,{label:`api reference`,children:(0,m.jsx)(l,{title:`PageMain Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`--`,description:`Содержимое страницы. Обычно PageHeader + контент.`},{name:`density`,type:`"default" | "prose"`,defaultValue:`"default"`,description:`Режим плотности. default: px-4 py-4, prose: px-6 py-4.`}]})})]})}export{h as default};