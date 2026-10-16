import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cn as t,Gn as n,Rn as r,Sn as i,_i as a,_n as o,ar as s,bn as c,br as l,fn as u,hn as d,i as f,ln as p,m,o as h,ti as g,vn as _,xn as v}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{X as y,Y as b,r as x}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{t as S}from"./chunk-7JMDTHET-CfVjciau.js";import{n as C,t as w}from"./docs-article-BUNGnjgF.js";import"./action-cluster-LvUy94y7.js";import"./section-stack-U7J61_C-.js";var T=e(),E=[{value:`ready`,label:`Ready`,tone:`ok`},{value:`review`,label:`Needs review`,tone:`warn`},{value:`blocked`,label:`Blocked`,tone:`err`}],D=[{id:`root`,label:`Корень приложения`},{id:`curated-api`,label:`Ограниченный Ant API`},{id:`component-tokens`,label:`Токены компонентов`}];function O(){return(0,T.jsx)(m,{title:`Ant theme preset`,description:`Каноничный путь 4.0: AnikinLabProvider, preset.css и ограниченный @chucky23/design-system/ant вместо прямых импортов из antd.`,breadcrumbs:w(`/ant-theme-preset`),children:(0,T.jsx)(h,{presentation:`article`,label:`Ant theme preset`,inspector:C(D),document:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(r,{children:[`Эта страница проверяет первую партию Ant-first витрины. Provider включает Ant theme, App context и popup policy.`,` `,(0,T.jsx)(s,{children:`preset.css`}),` подключает переменные, Tailwind bridge и шрифты одним импортом.`]}),(0,T.jsx)(l,{id:`root`,label:`Корень приложения`,children:(0,T.jsx)(n,{copyLabel:`Скопировать код: корень приложения`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

export function Root() {
  return (
    <AnikinLabProvider defaultTheme="system">
      <App />
    </AnikinLabProvider>
  )
}`})}),(0,T.jsx)(l,{id:`curated-api`,label:`Ограниченный Ant API`,children:(0,T.jsx)(x,{title:`Форма на DS-owned Ant API`,description:`Потребитель импортирует ограниченный набор из @chucky23/design-system/ant. Настройки Ant остаются внутри AnikinLabProvider.`,code:`import { Button, Form, Input, Select } from "@chucky23/design-system/ant"

<Form layout="vertical">
  <Form.Item label="Sprint" required>
    <Input placeholder="Sprint 24" />
  </Form.Item>
  <Form.Item label="Status">
    <Select defaultValue="ready" options={statusOptions} />
  </Form.Item>
  <Button tone="primary" variant="solid">Create slice</Button>
</Form>`,layout:`block`,children:(0,T.jsxs)(d,{children:[(0,T.jsxs)(c,{children:[(0,T.jsx)(v,{"data-label":!0,children:`$ Sprint slice`}),(0,T.jsx)(_,{children:`Форма использует Ant runtime, но внешний контракт остаётся в Anikin Lab.`})]}),(0,T.jsx)(o,{children:(0,T.jsxs)(b,{layout:`vertical`,name:`ant-theme-preset-demo`,children:[(0,T.jsx)(b.Item,{label:`Sprint`,required:!0,children:(0,T.jsx)(g,{placeholder:`Sprint 24`})}),(0,T.jsx)(b.Item,{label:`Status`,children:(0,T.jsx)(p,{defaultValue:`ready`,options:E,ariaLabel:`Статус slice`})}),(0,T.jsx)(S,{actions:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{tone:`primary`,variant:`solid`,children:`Create slice`}),(0,T.jsx)(a,{tone:`neutral`,variant:`outline`,children:`Save draft`})]})})]})})]})})}),(0,T.jsx)(l,{id:`component-tokens`,label:`Токены компонентов`,children:(0,T.jsx)(x,{title:`Сигналы, вкладки и прогресс`,description:`Тоны ok, warn и err приходят из токенов Anikin Lab. Ant blue не участвует в первом визуальном пакете.`,code:`<Tabs
  defaultActiveKey="health"
  items={[
    { key: "health", label: "Health", children: <Tag color="ok">ready</Tag> },
    { key: "risk", label: "Risk", children: <Progress value={68} signal="warn" aria-label="Risk" /> },
  ]}
/>`,layout:`block`,children:(0,T.jsx)(d,{children:(0,T.jsx)(o,{children:(0,T.jsx)(y,{defaultActiveKey:`health`,items:[{key:`health`,label:`Health`,children:(0,T.jsxs)(u,{children:[(0,T.jsxs)(t,{children:[(0,T.jsx)(i,{color:`ok`,format:`bracket`,children:`ready`}),(0,T.jsx)(i,{color:`warn`,format:`bracket`,children:`review`}),(0,T.jsx)(i,{color:`err`,format:`bracket`,children:`blocked`})]}),(0,T.jsx)(f,{value:86,signal:`ok`,"aria-label":`Готовность релиза`})]})},{key:`risk`,label:`Risk`,children:(0,T.jsxs)(u,{children:[(0,T.jsx)(f,{value:68,signal:`warn`,"aria-label":`Риск миграции`}),(0,T.jsx)(f,{value:112,signal:`err`,"aria-label":`Превышение лимита`})]})}]})})})})})]})})})}export{O as default};