import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{An as t,En as n,Gn as r,I as i,Nn as a,O as o,On as s,Pn as c,R as l,Rn as u,S as d,Tn as f,ar as p,br as m,ei as h,gi as g,i as _,jn as v}from"./chunk-5DUEG3R3-896u-HpP.js";import{nt as y,r as b,rt as x}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{t as S}from"./chunk-7JMDTHET-C3W7LtsP.js";import{n as C,t as w}from"./docs-article-DBNRC-Xz.js";import"./action-cluster-COFTH1JR.js";import"./section-stack-DwDGfLsk.js";var T=e(),E=[{value:`ready`,label:`Ready`,tone:`ok`},{value:`review`,label:`Needs review`,tone:`warn`},{value:`blocked`,label:`Blocked`,tone:`err`}],D=[{id:`root`,label:`Корень приложения`},{id:`curated-api`,label:`Ограниченный Ant API`},{id:`component-tokens`,label:`Токены компонентов`}];function O(){return(0,T.jsx)(i,{title:`Ant theme preset`,description:`Каноничный путь 4.0: AnikinLabProvider, preset.css и ограниченный @chucky23/design-system/ant вместо прямых импортов из antd.`,breadcrumbs:w(`/ant-theme-preset`),children:(0,T.jsx)(o,{presentation:`article`,label:`Ant theme preset`,inspector:C(D),document:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(u,{children:[`Эта страница проверяет первую партию Ant-first витрины. Provider включает Ant theme, App context и popup policy.`,` `,(0,T.jsx)(p,{children:`preset.css`}),` подключает переменные, Tailwind bridge и шрифты одним импортом.`]}),(0,T.jsx)(m,{id:`root`,label:`Корень приложения`,children:(0,T.jsx)(r,{copyLabel:`Скопировать код: корень приложения`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

export function Root() {
  return (
    <AnikinLabProvider defaultTheme="system">
      <App />
    </AnikinLabProvider>
  )
}`})}),(0,T.jsx)(m,{id:`curated-api`,label:`Ограниченный Ant API`,children:(0,T.jsx)(b,{title:`Форма на DS-owned Ant API`,description:`Потребитель импортирует ограниченный набор из @chucky23/design-system/ant. Настройки Ant остаются внутри AnikinLabProvider.`,code:`import { Button, Form, Input, Select } from "@chucky23/design-system/ant"

<Form layout="vertical">
  <Form.Item label="Sprint" required>
    <Input placeholder="Sprint 24" />
  </Form.Item>
  <Form.Item label="Status">
    <Select defaultValue="ready" options={statusOptions} />
  </Form.Item>
  <Button tone="primary" variant="solid">Create slice</Button>
</Form>`,layout:`block`,children:(0,T.jsxs)(s,{children:[(0,T.jsxs)(a,{children:[(0,T.jsx)(c,{"data-label":!0,children:`$ Sprint slice`}),(0,T.jsx)(v,{children:`Форма использует Ant runtime, но внешний контракт остаётся в Anikin Lab.`})]}),(0,T.jsx)(t,{children:(0,T.jsxs)(y,{layout:`vertical`,name:`ant-theme-preset-demo`,children:[(0,T.jsx)(y.Item,{label:`Sprint`,required:!0,children:(0,T.jsx)(h,{placeholder:`Sprint 24`})}),(0,T.jsx)(y.Item,{label:`Status`,children:(0,T.jsx)(l,{defaultValue:`ready`,options:E,ariaLabel:`Статус slice`})}),(0,T.jsx)(S,{actions:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g,{tone:`primary`,variant:`solid`,children:`Create slice`}),(0,T.jsx)(g,{tone:`neutral`,variant:`outline`,children:`Save draft`})]})})]})})]})})}),(0,T.jsx)(m,{id:`component-tokens`,label:`Токены компонентов`,children:(0,T.jsx)(b,{title:`Сигналы, вкладки и прогресс`,description:`Тоны ok, warn и err приходят из токенов Anikin Lab. Ant blue не участвует в первом визуальном пакете.`,code:`<Tabs
  defaultActiveKey="health"
  items={[
    { key: "health", label: "Health", children: <Tag color="ok">ready</Tag> },
    { key: "risk", label: "Risk", children: <Progress value={68} signal="warn" aria-label="Risk" /> },
  ]}
/>`,layout:`block`,children:(0,T.jsx)(s,{children:(0,T.jsx)(t,{children:(0,T.jsx)(x,{defaultActiveKey:`health`,items:[{key:`health`,label:`Health`,children:(0,T.jsxs)(d,{children:[(0,T.jsxs)(n,{children:[(0,T.jsx)(f,{color:`ok`,format:`bracket`,children:`ready`}),(0,T.jsx)(f,{color:`warn`,format:`bracket`,children:`review`}),(0,T.jsx)(f,{color:`err`,format:`bracket`,children:`blocked`})]}),(0,T.jsx)(_,{value:86,signal:`ok`,"aria-label":`Готовность релиза`})]})},{key:`risk`,label:`Risk`,children:(0,T.jsxs)(d,{children:[(0,T.jsx)(_,{value:68,signal:`warn`,"aria-label":`Риск миграции`}),(0,T.jsx)(_,{value:112,signal:`err`,"aria-label":`Превышение лимита`})]})}]})})})})})]})})})}export{O as default};