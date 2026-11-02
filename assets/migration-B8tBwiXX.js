import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Fr as t,Ir as n,Qr as r,Sr as i,cr as a,j as o,kr as s,lr as c,or as l,rr as u,x as d}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{h as f}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{r as p,t as m}from"./docs-article-CV9v0E7s.js";var h=e(),g=[{id:`steps`,label:`Шаги миграции`},{id:`before-after`,label:`Было и стало`},{id:`imports`,label:`Импорты`}];function _(){return(0,h.jsx)(o,{title:`Migration path 4.0`,description:`Переход на 4.0: provider, preset.css и curated Ant API.`,breadcrumbs:m(`/migration`),children:(0,h.jsx)(d,{presentation:`article`,label:`Migration path 4.0`,inspector:p(g),document:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Новые consumer-примеры не настраивают Ant напрямую и не импортируют компоненты из `,(0,h.jsx)(n,{children:`antd`}),`.`]}),(0,h.jsx)(r,{id:`steps`,label:`Шаги миграции`,children:(0,h.jsxs)(f,{columns:3,children:[(0,h.jsx)(u,{size:`sm`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(c,{children:`1. Root provider`}),(0,h.jsx)(l,{children:`Замени старый ThemeProvider на AnikinLabProvider. Provider владеет Ant ConfigProvider, App context и popup policy.`})]})}),(0,h.jsx)(u,{size:`sm`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(c,{children:`2. CSS preset`}),(0,h.jsx)(l,{children:`Оставь один импорт @chucky23/design-system/preset.css. Он собирает theme.css, tailwind.css и fonts.css.`})]})}),(0,h.jsx)(u,{size:`sm`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(c,{children:`3. Curated Ant`}),(0,h.jsx)(l,{children:`Импортируй первую волну из @chucky23/design-system/ant. Прямой antd import остаётся вне consumer path.`})]})})]})}),(0,h.jsxs)(r,{id:`before-after`,label:`Было и стало`,children:[(0,h.jsx)(t,{children:`Было`}),(0,h.jsx)(i,{children:`Старый docs root подключал provider и CSS по нескольким путям.`}),(0,h.jsx)(s,{copyLabel:`Скопировать код: подключение до 4.0`,language:`tsx`,code:`import { ThemeProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/theme.css"
import "@chucky23/design-system/tailwind.css"
import "@chucky23/design-system/fonts.css"

<ThemeProvider defaultTheme="dark">
  <App />
</ThemeProvider>`}),(0,h.jsx)(t,{children:`Стало`}),(0,h.jsx)(i,{children:`Каноничный root 4.0 использует один provider и один CSS entrypoint.`}),(0,h.jsx)(s,{copyLabel:`Скопировать код: подключение в 4.0`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

<AnikinLabProvider defaultTheme="system">
  <App />
</AnikinLabProvider>`})]}),(0,h.jsx)(r,{id:`imports`,label:`Импорты`,children:(0,h.jsx)(s,{copyLabel:`Скопировать код: импорты`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import { Button, Form, Input, Select, Tabs, Tag, Progress } from "@chucky23/design-system/ant"
import { Page, Toolbar, MetricCard, StatusTag } from "@chucky23/design-system/patterns"
import { DataTablePattern } from "@chucky23/design-system/patterns/data-table-pattern"
import "@chucky23/design-system/preset.css"`})})]})})})}export{_ as default};