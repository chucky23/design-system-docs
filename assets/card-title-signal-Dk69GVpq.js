import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{An as t,Gn as n,I as r,Nn as i,O as a,On as o,Pn as s,Rn as c,br as l,jn as u}from"./chunk-5DUEG3R3-896u-HpP.js";import{h as d,j as f,r as p}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as m,t as h}from"./docs-article-DBNRC-Xz.js";var g=e(),_=[{id:`usage`,label:`Использование`},{id:`standalone`,label:`Без сигнала карточки`},{id:`api`,label:`API`}];function v(){return(0,g.jsx)(r,{title:`CardTitle Signal`,description:`Парный проп signal для CardTitle: красит текст заголовка в тон сигнальной рамки карточки (ok/warn/err/info).`,breadcrumbs:h(`/components/card-title-signal`),children:(0,g.jsx)(a,{presentation:`article`,label:`CardTitle Signal`,inspector:m(_),document:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p,{title:`Card signal + CardTitle signal`,description:`Рамка Card и текст CardTitle в одном тоне. Держи пары signal одинаковыми — иначе заголовок спорит с рамкой.`,code:`<Card signal="ok">
  <CardHeader>
    <CardTitle signal="ok">All Systems Operational</CardTitle>
    <CardDescription>Last check: 14:23 UTC</CardDescription>
  </CardHeader>
  <CardContent>42 services / 0 incidents</CardContent>
</Card>

<Card signal="warn">
  <CardHeader>
    <CardTitle signal="warn">Degraded Performance</CardTitle>
    <CardDescription>auth-service / eu-west-1</CardDescription>
  </CardHeader>
  <CardContent>p99 latency 340ms (+280%)</CardContent>
</Card>

<Card signal="err">
  <CardHeader>
    <CardTitle signal="err">Connection Lost</CardTitle>
    <CardDescription>api-gateway / us-east-1</CardDescription>
  </CardHeader>
  <CardContent>SEV-2 incident opened</CardContent>
</Card>

<Card signal="info">
  <CardHeader>
    <CardTitle signal="info">Scheduled Maintenance</CardTitle>
    <CardDescription>Tonight at 02:00 UTC</CardDescription>
  </CardHeader>
  <CardContent>Expected downtime: 12 minutes</CardContent>
</Card>`,layout:`grid`,children:[(0,g.jsxs)(o,{signal:`ok`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{signal:`ok`,children:`All Systems Operational`}),(0,g.jsx)(u,{children:`Last check: 14:23 UTC`})]}),(0,g.jsx)(t,{children:`42 services / 0 incidents`})]}),(0,g.jsxs)(o,{signal:`warn`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{signal:`warn`,children:`Degraded Performance`}),(0,g.jsx)(u,{children:`auth-service / eu-west-1`})]}),(0,g.jsx)(t,{children:`p99 latency 340ms (+280%)`})]}),(0,g.jsxs)(o,{signal:`err`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{signal:`err`,children:`Connection Lost`}),(0,g.jsx)(u,{children:`api-gateway / us-east-1`})]}),(0,g.jsx)(t,{children:`SEV-2 incident opened`})]}),(0,g.jsxs)(o,{signal:`info`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{signal:`info`,children:`Scheduled Maintenance`}),(0,g.jsx)(u,{children:`Tonight at 02:00 UTC`})]}),(0,g.jsx)(t,{children:`Expected downtime: 12 minutes`})]})]}),(0,g.jsx)(c,{children:`Signal на CardTitle нужен там, где цвет рамки должен читаться и в самом заголовке, а не только по периметру. Это одна из четырёх семантик системы: ok — всё в норме, warn — деградация, err — инцидент, info — нейтральная подсветка. Signal принимается ровно в тех же четырёх значениях, что и signal на Card, чтобы пары всегда совпадали.`}),(0,g.jsx)(l,{id:`usage`,label:`Использование`,children:(0,g.jsx)(n,{copyLabel:`Скопировать код: использование CardTitle`,language:`tsx`,code:`import { Card, CardHeader, CardTitle } from "@chucky23/design-system/react"

<Card signal="err">
  <CardHeader>
    <CardTitle signal="err">Connection Lost</CardTitle>
  </CardHeader>
</Card>`})}),(0,g.jsx)(l,{id:`standalone`,label:`Без сигнала карточки`,children:(0,g.jsx)(p,{title:`CardTitle signal без Card signal`,description:`Допустимо — но обычно слабее: рамка остаётся нейтральной, только заголовок подсвечен. Используй, когда сигнал вторичный.`,code:`<Card>
  <CardHeader>
    <CardTitle signal="warn">Quota nearing limit</CardTitle>
    <CardDescription>Storage bucket: assets-prod</CardDescription>
  </CardHeader>
  <CardContent>8.4 GB of 10 GB used</CardContent>
</Card>`,layout:`grid`,children:(0,g.jsxs)(o,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(s,{signal:`warn`,children:`Quota nearing limit`}),(0,g.jsx)(u,{children:`Storage bucket: assets-prod`})]}),(0,g.jsx)(t,{children:`8.4 GB of 10 GB used`})]})})}),(0,g.jsxs)(l,{id:`api`,label:`API`,children:[(0,g.jsx)(f,{title:`Пропсы CardTitle`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет заголовка через text-signal-* utility. Обычно совпадает с signal на Card.`}]}),(0,g.jsxs)(c,{children:[`Остальные пропсы карточки описаны на странице `,(0,g.jsx)(d,{href:`/components/cards`,children:`Cards`}),`.`]})]})]})})})}export{v as default};