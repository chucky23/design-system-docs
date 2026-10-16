import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,_n as r,bn as i,br as a,hn as o,m as s,o as c,vn as l,xn as u}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as d,j as f,r as p}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as m,t as h}from"./docs-article-BUNGnjgF.js";var g=e(),_=[{id:`usage`,label:`Использование`},{id:`standalone`,label:`Без сигнала карточки`},{id:`api`,label:`API`}];function v(){return(0,g.jsx)(s,{title:`CardTitle Signal`,description:`Парный проп signal для CardTitle: красит текст заголовка в тон сигнальной рамки карточки (ok/warn/err/info).`,breadcrumbs:h(`/components/card-title-signal`),children:(0,g.jsx)(c,{presentation:`article`,label:`CardTitle Signal`,inspector:m(_),document:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p,{title:`Card signal + CardTitle signal`,description:`Рамка Card и текст CardTitle в одном тоне. Держи пары signal одинаковыми — иначе заголовок спорит с рамкой.`,code:`<Card signal="ok">
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
</Card>`,layout:`grid`,children:[(0,g.jsxs)(o,{signal:`ok`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(u,{signal:`ok`,children:`All Systems Operational`}),(0,g.jsx)(l,{children:`Last check: 14:23 UTC`})]}),(0,g.jsx)(r,{children:`42 services / 0 incidents`})]}),(0,g.jsxs)(o,{signal:`warn`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(u,{signal:`warn`,children:`Degraded Performance`}),(0,g.jsx)(l,{children:`auth-service / eu-west-1`})]}),(0,g.jsx)(r,{children:`p99 latency 340ms (+280%)`})]}),(0,g.jsxs)(o,{signal:`err`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(u,{signal:`err`,children:`Connection Lost`}),(0,g.jsx)(l,{children:`api-gateway / us-east-1`})]}),(0,g.jsx)(r,{children:`SEV-2 incident opened`})]}),(0,g.jsxs)(o,{signal:`info`,children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(u,{signal:`info`,children:`Scheduled Maintenance`}),(0,g.jsx)(l,{children:`Tonight at 02:00 UTC`})]}),(0,g.jsx)(r,{children:`Expected downtime: 12 minutes`})]})]}),(0,g.jsx)(n,{children:`Signal на CardTitle нужен там, где цвет рамки должен читаться и в самом заголовке, а не только по периметру. Это одна из четырёх семантик системы: ok — всё в норме, warn — деградация, err — инцидент, info — нейтральная подсветка. Signal принимается ровно в тех же четырёх значениях, что и signal на Card, чтобы пары всегда совпадали.`}),(0,g.jsx)(a,{id:`usage`,label:`Использование`,children:(0,g.jsx)(t,{copyLabel:`Скопировать код: использование CardTitle`,language:`tsx`,code:`import { Card, CardHeader, CardTitle } from "@chucky23/design-system/react"

<Card signal="err">
  <CardHeader>
    <CardTitle signal="err">Connection Lost</CardTitle>
  </CardHeader>
</Card>`})}),(0,g.jsx)(a,{id:`standalone`,label:`Без сигнала карточки`,children:(0,g.jsx)(p,{title:`CardTitle signal без Card signal`,description:`Допустимо — но обычно слабее: рамка остаётся нейтральной, только заголовок подсвечен. Используй, когда сигнал вторичный.`,code:`<Card>
  <CardHeader>
    <CardTitle signal="warn">Quota nearing limit</CardTitle>
    <CardDescription>Storage bucket: assets-prod</CardDescription>
  </CardHeader>
  <CardContent>8.4 GB of 10 GB used</CardContent>
</Card>`,layout:`grid`,children:(0,g.jsxs)(o,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(u,{signal:`warn`,children:`Quota nearing limit`}),(0,g.jsx)(l,{children:`Storage bucket: assets-prod`})]}),(0,g.jsx)(r,{children:`8.4 GB of 10 GB used`})]})})}),(0,g.jsxs)(a,{id:`api`,label:`API`,children:[(0,g.jsx)(f,{title:`Пропсы CardTitle`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет заголовка через text-signal-* utility. Обычно совпадает с signal на Card.`}]}),(0,g.jsxs)(n,{children:[`Остальные пропсы карточки описаны на странице `,(0,g.jsx)(d,{href:`/components/cards`,children:`Cards`}),`.`]})]})]})})})}export{v as default};