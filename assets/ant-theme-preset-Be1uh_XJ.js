import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$n as t,Ir as n,Oa as r,Qr as i,Sr as a,Xn as o,_a as s,ar as c,cr as l,dr as u,j as d,kr as f,lr as p,or as m,rr as h,ur as g,x as _,y as v}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{g as y,ot as b,st as x}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{i as S}from"./chunk-IUQGZ5MC-BCtlQ1k8.js";import{n as C,r as w,t as T}from"./docs-article-CV9v0E7s.js";import"./action-cluster-jwOpZ-Dy.js";import"./section-stack-E0gzpci-.js";var E=e(),D=[{value:`ready`,label:`Ready`,tone:`ok`},{value:`review`,label:`Needs review`,tone:`warn`},{value:`blocked`,label:`Blocked`,tone:`err`}],O=[{id:`root`,label:`Корень приложения`},{id:`curated-api`,label:`Ограниченный Ant API`},{id:`component-tokens`,label:`Токены компонентов`}];function k(){return(0,E.jsx)(d,{title:`Ant theme preset`,description:`Каноничный путь 4.0: AnikinLabProvider, preset.css и ограниченный @chucky23/design-system/ant вместо прямых импортов из antd.`,breadcrumbs:T(`/ant-theme-preset`),meta:C(`/ant-theme-preset`),children:(0,E.jsx)(_,{presentation:`article`,label:`Ant theme preset`,inspector:w(O),document:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(a,{children:[`Эта страница проверяет первую партию Ant-first витрины. Provider включает Ant theme, App context и popup policy.`,` `,(0,E.jsx)(n,{children:`preset.css`}),` подключает переменные, Tailwind bridge и шрифты одним импортом.`]}),(0,E.jsx)(i,{id:`root`,label:`Корень приложения`,children:(0,E.jsx)(f,{copyLabel:`Скопировать код: корень приложения`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

export function Root() {
  return (
    <AnikinLabProvider defaultTheme="system">
      <App />
    </AnikinLabProvider>
  )
}`})}),(0,E.jsx)(i,{id:`curated-api`,label:`Ограниченный Ant API`,children:(0,E.jsx)(y,{title:`Форма на DS-owned Ant API`,description:`Потребитель импортирует ограниченный набор из @chucky23/design-system/ant. Настройки Ant остаются внутри AnikinLabProvider.`,code:`import { Button, Form, Input, Select } from "@chucky23/design-system/ant"

<Form layout="vertical">
  <Form.Item label="Sprint" required>
    <Input placeholder="Sprint 24" />
  </Form.Item>
  <Form.Item label="Status">
    <Select defaultValue="ready" options={statusOptions} />
  </Form.Item>
  <Button tone="primary" variant="solid">Create slice</Button>
</Form>`,layout:`block`,children:(0,E.jsxs)(h,{children:[(0,E.jsxs)(l,{children:[(0,E.jsx)(p,{"data-label":!0,children:`$ Sprint slice`}),(0,E.jsx)(m,{children:`Форма использует Ant runtime, но внешний контракт остаётся в Anikin Lab.`})]}),(0,E.jsx)(c,{children:(0,E.jsxs)(b,{layout:`vertical`,name:`ant-theme-preset-demo`,children:[(0,E.jsx)(b.Item,{label:`Sprint`,required:!0,children:(0,E.jsx)(s,{placeholder:`Sprint 24`})}),(0,E.jsx)(b.Item,{label:`Status`,children:(0,E.jsx)(o,{defaultValue:`ready`,options:D,ariaLabel:`Статус slice`})}),(0,E.jsx)(S,{actions:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r,{tone:`primary`,variant:`solid`,children:`Create slice`}),(0,E.jsx)(r,{tone:`neutral`,variant:`outline`,children:`Save draft`})]})})]})})]})})}),(0,E.jsx)(i,{id:`component-tokens`,label:`Токены компонентов`,children:(0,E.jsx)(y,{title:`Сигналы, вкладки и прогресс`,description:`Тоны ok, warn и err приходят из токенов Anikin Lab. Ant blue не участвует в первом визуальном пакете.`,code:`<Tabs
  defaultActiveKey="health"
  items={[
    { key: "health", label: "Health", children: <Tag color="ok">ready</Tag> },
    { key: "risk", label: "Risk", children: <Progress value={68} signal="warn" aria-label="Risk" /> },
  ]}
/>`,layout:`block`,children:(0,E.jsx)(h,{children:(0,E.jsx)(c,{children:(0,E.jsx)(x,{defaultActiveKey:`health`,items:[{key:`health`,label:`Health`,children:(0,E.jsxs)(t,{children:[(0,E.jsxs)(u,{children:[(0,E.jsx)(g,{color:`ok`,format:`dot`,children:`ready`}),(0,E.jsx)(g,{color:`warn`,format:`dot`,children:`review`}),(0,E.jsx)(g,{color:`err`,format:`dot`,children:`blocked`})]}),(0,E.jsx)(v,{value:86,signal:`ok`,"aria-label":`Готовность релиза`})]})},{key:`risk`,label:`Risk`,children:(0,E.jsxs)(t,{children:[(0,E.jsx)(v,{value:68,signal:`warn`,"aria-label":`Риск миграции`}),(0,E.jsx)(v,{value:112,signal:`err`,"aria-label":`Превышение лимита`})]})}]})})})})})]})})})}export{k as default};