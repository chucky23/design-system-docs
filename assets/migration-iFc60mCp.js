import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,ar as r,bn as i,br as a,hn as o,ir as s,m as c,o as l,vn as u,xn as d}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{n as f}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as p,t as m}from"./docs-article-BUNGnjgF.js";var h=e(),g=[{id:`steps`,label:`Шаги миграции`},{id:`before-after`,label:`Было и стало`},{id:`imports`,label:`Импорты`}];function _(){return(0,h.jsx)(c,{title:`Migration path 4.0`,description:`Переход на 4.0: provider, preset.css и curated Ant API.`,breadcrumbs:m(`/migration`),children:(0,h.jsx)(l,{presentation:`article`,label:`Migration path 4.0`,inspector:p(g),document:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n,{children:[`Новые consumer-примеры не настраивают Ant напрямую и не импортируют компоненты из `,(0,h.jsx)(r,{children:`antd`}),`.`]}),(0,h.jsx)(a,{id:`steps`,label:`Шаги миграции`,children:(0,h.jsxs)(f,{columns:3,children:[(0,h.jsx)(o,{size:`sm`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(d,{children:`1. Root provider`}),(0,h.jsx)(u,{children:`Замени старый ThemeProvider на AnikinLabProvider. Provider владеет Ant ConfigProvider, App context и popup policy.`})]})}),(0,h.jsx)(o,{size:`sm`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(d,{children:`2. CSS preset`}),(0,h.jsx)(u,{children:`Оставь один импорт @chucky23/design-system/preset.css. Он собирает theme.css, tailwind.css и fonts.css.`})]})}),(0,h.jsx)(o,{size:`sm`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(d,{children:`3. Curated Ant`}),(0,h.jsx)(u,{children:`Импортируй первую волну из @chucky23/design-system/ant. Прямой antd import остаётся вне consumer path.`})]})})]})}),(0,h.jsxs)(a,{id:`before-after`,label:`Было и стало`,children:[(0,h.jsx)(s,{children:`Было`}),(0,h.jsx)(n,{children:`Старый docs root подключал provider и CSS по нескольким путям.`}),(0,h.jsx)(t,{copyLabel:`Скопировать код: подключение до 4.0`,language:`tsx`,code:`import { ThemeProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/theme.css"
import "@chucky23/design-system/tailwind.css"
import "@chucky23/design-system/fonts.css"

<ThemeProvider defaultTheme="dark">
  <App />
</ThemeProvider>`}),(0,h.jsx)(s,{children:`Стало`}),(0,h.jsx)(n,{children:`Каноничный root 4.0 использует один provider и один CSS entrypoint.`}),(0,h.jsx)(t,{copyLabel:`Скопировать код: подключение в 4.0`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import "@chucky23/design-system/preset.css"

<AnikinLabProvider defaultTheme="system">
  <App />
</AnikinLabProvider>`})]}),(0,h.jsx)(a,{id:`imports`,label:`Импорты`,children:(0,h.jsx)(t,{copyLabel:`Скопировать код: импорты`,language:`tsx`,code:`import { AnikinLabProvider } from "@chucky23/design-system/react"
import { Button, Form, Input, Select, Tabs, Tag, Progress } from "@chucky23/design-system/ant"
import { Page, Toolbar, MetricCard, StatusTag } from "@chucky23/design-system/patterns"
import { DataTablePattern } from "@chucky23/design-system/patterns/data-table-pattern"
import "@chucky23/design-system/preset.css"`})})]})})})}export{_ as default};