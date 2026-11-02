import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Qr as t,Sr as n,ar as r,cr as i,j as a,kr as o,lr as s,or as c,rr as l,x as u}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as d,Q as f,g as p}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as m,r as h,t as g}from"./docs-article-CV9v0E7s.js";var _=e(),v=[{id:`usage`,label:`Использование`},{id:`standalone`,label:`Без сигнала карточки`},{id:`api`,label:`API`}];function y(){return(0,_.jsx)(a,{title:`CardTitle Signal`,description:`Парный проп signal для CardTitle: красит текст заголовка в тон сигнальной рамки карточки (ok/warn/err/info).`,breadcrumbs:g(`/components/card-title-signal`),meta:m(`/components/card-title-signal`),children:(0,_.jsx)(u,{presentation:`article`,label:`CardTitle Signal`,inspector:h(v),document:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(p,{title:`Card signal + CardTitle signal`,description:`Рамка Card и текст CardTitle в одном тоне. Держи пары signal одинаковыми — иначе заголовок спорит с рамкой.`,code:`<Card signal="ok">
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
</Card>`,layout:`grid`,children:[(0,_.jsxs)(l,{signal:`ok`,children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(s,{signal:`ok`,children:`All Systems Operational`}),(0,_.jsx)(c,{children:`Last check: 14:23 UTC`})]}),(0,_.jsx)(r,{children:`42 services / 0 incidents`})]}),(0,_.jsxs)(l,{signal:`warn`,children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(s,{signal:`warn`,children:`Degraded Performance`}),(0,_.jsx)(c,{children:`auth-service / eu-west-1`})]}),(0,_.jsx)(r,{children:`p99 latency 340ms (+280%)`})]}),(0,_.jsxs)(l,{signal:`err`,children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(s,{signal:`err`,children:`Connection Lost`}),(0,_.jsx)(c,{children:`api-gateway / us-east-1`})]}),(0,_.jsx)(r,{children:`SEV-2 incident opened`})]}),(0,_.jsxs)(l,{signal:`info`,children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(s,{signal:`info`,children:`Scheduled Maintenance`}),(0,_.jsx)(c,{children:`Tonight at 02:00 UTC`})]}),(0,_.jsx)(r,{children:`Expected downtime: 12 minutes`})]})]}),(0,_.jsx)(n,{children:`Signal на CardTitle нужен там, где цвет рамки должен читаться и в самом заголовке, а не только по периметру. Это одна из четырёх семантик системы: ok — всё в норме, warn — деградация, err — инцидент, info — нейтральная подсветка. Signal принимается ровно в тех же четырёх значениях, что и signal на Card, чтобы пары всегда совпадали.`}),(0,_.jsx)(t,{id:`usage`,label:`Использование`,children:(0,_.jsx)(o,{copyLabel:`Скопировать код: использование CardTitle`,language:`tsx`,code:`import { Card, CardHeader, CardTitle } from "@chucky23/design-system/react"

<Card signal="err">
  <CardHeader>
    <CardTitle signal="err">Connection Lost</CardTitle>
  </CardHeader>
</Card>`})}),(0,_.jsx)(t,{id:`standalone`,label:`Без сигнала карточки`,children:(0,_.jsx)(p,{title:`CardTitle signal без Card signal`,description:`Допустимо — но обычно слабее: рамка остаётся нейтральной, только заголовок подсвечен. Используй, когда сигнал вторичный.`,code:`<Card>
  <CardHeader>
    <CardTitle signal="warn">Quota nearing limit</CardTitle>
    <CardDescription>Storage bucket: assets-prod</CardDescription>
  </CardHeader>
  <CardContent>8.4 GB of 10 GB used</CardContent>
</Card>`,layout:`grid`,children:(0,_.jsxs)(l,{children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(s,{signal:`warn`,children:`Quota nearing limit`}),(0,_.jsx)(c,{children:`Storage bucket: assets-prod`})]}),(0,_.jsx)(r,{children:`8.4 GB of 10 GB used`})]})})}),(0,_.jsxs)(t,{id:`api`,label:`API`,children:[(0,_.jsx)(f,{title:`Пропсы CardTitle`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет заголовка через text-signal-* utility. Обычно совпадает с signal на Card.`}]}),(0,_.jsxs)(n,{children:[`Остальные пропсы карточки описаны на странице `,(0,_.jsx)(d,{href:`/components/cards`,children:`Cards`}),`.`]})]})]})})})}export{y as default};