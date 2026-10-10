import{$n as e,C as t,Hn as n,Ki as r,Mo as i,_n as a,fi as o,fn as s,hn as c,kn as l,ln as u,mn as d,s as f,vn as p}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{E as m,M as h,k as g,mt as _,pt as v,r as y}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var b=i(),x=[{value:`ready`,label:`Ready`,tone:`ok`},{value:`review`,label:`Needs review`,tone:`warn`},{value:`blocked`,label:`Blocked`,tone:`err`}];function S(){return(0,b.jsxs)(g,{gap:`lg`,children:[(0,b.jsx)(n,{title:`Ant theme preset`,description:`Каноничный путь 4.0: AnikinLabProvider, preset.css и ограниченный @chucky23/design-system/ant вместо прямых импортов из antd.`}),(0,b.jsx)(h,{className:`max-w-prose`,"data-body":!0,children:"Эта страница проверяет первую партию Ant-first витрины. Provider включает Ant theme, App context и popup policy. `preset.css` подключает переменные, Tailwind bridge и шрифты одним импортом."}),(0,b.jsx)(e,{label:`canonical root`,children:(0,b.jsx)(l,{language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

export function Root() {
  return (
    <AnikinLabProvider defaultTheme="system">
      <App />
    </AnikinLabProvider>
  )
}`})}),(0,b.jsx)(e,{label:`curated ant API`,children:(0,b.jsx)(y,{title:`Форма на DS-owned Ant API`,description:`Потребитель импортирует ограниченный набор из @chucky23/design-system/ant. Настройки Ant остаются внутри AnikinLabProvider.`,code:`import { Button, Form, Input, Select } from "@chucky23/design-system/ant"

<Form layout="vertical">
  <Form.Item label="Sprint" required>
    <Input placeholder="Sprint 24" />
  </Form.Item>
  <Form.Item label="Status">
    <Select defaultValue="ready" options={statusOptions} />
  </Form.Item>
  <Button tone="primary" variant="solid">Create slice</Button>
</Form>`,previewClassName:`items-stretch`,children:(0,b.jsxs)(s,{className:`w-full max-w-xl`,children:[(0,b.jsxs)(a,{children:[(0,b.jsx)(p,{"data-label":!0,children:`$ Sprint slice`}),(0,b.jsx)(c,{children:`Форма использует Ant runtime, но внешний контракт остаётся в Anikin Lab.`})]}),(0,b.jsx)(d,{children:(0,b.jsxs)(v,{layout:`vertical`,name:`ant-theme-preset-demo`,children:[(0,b.jsx)(v.Item,{label:`Sprint`,required:!0,children:(0,b.jsx)(o,{placeholder:`Sprint 24`})}),(0,b.jsx)(v.Item,{label:`Status`,children:(0,b.jsx)(t,{defaultValue:`ready`,options:x,ariaLabel:`Статус slice`})}),(0,b.jsxs)(m,{children:[(0,b.jsx)(r,{tone:`primary`,variant:`solid`,children:`Create slice`}),(0,b.jsx)(r,{tone:`neutral`,variant:`outline`,children:`Save draft`})]})]})})]})})}),(0,b.jsx)(e,{label:`component tokens`,children:(0,b.jsx)(y,{title:`Сигналы, вкладки и прогресс`,description:`Тоны ok, warn и err приходят из токенов Anikin Lab. Ant blue не участвует в первом визуальном пакете.`,code:`<Tabs
  defaultActiveKey="health"
  items={[
    { key: "health", label: "Health", children: <Tag color="ok">ready</Tag> },
    { key: "risk", label: "Risk", children: <Progress value={68} signal="warn" aria-label="Risk" /> },
  ]}
/>`,previewClassName:`items-stretch`,children:(0,b.jsx)(s,{className:`w-full max-w-xl`,children:(0,b.jsx)(d,{className:`pt-4`,children:(0,b.jsx)(_,{defaultActiveKey:`health`,items:[{key:`health`,label:`Health`,children:(0,b.jsxs)(g,{className:`gap-3 pt-2`,children:[(0,b.jsxs)(m,{children:[(0,b.jsx)(u,{color:`ok`,format:`bracket`,children:`ready`}),(0,b.jsx)(u,{color:`warn`,format:`bracket`,children:`review`}),(0,b.jsx)(u,{color:`err`,format:`bracket`,children:`blocked`})]}),(0,b.jsx)(f,{value:86,signal:`ok`,"aria-label":`Готовность релиза`})]})},{key:`risk`,label:`Risk`,children:(0,b.jsxs)(g,{className:`gap-3 pt-2`,children:[(0,b.jsx)(f,{value:68,signal:`warn`,"aria-label":`Риск миграции`}),(0,b.jsx)(f,{value:112,signal:`err`,"aria-label":`Превышение лимита`})]})}]})})})})})]})}export{S as default};