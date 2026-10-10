import{$n as e,Hn as t,Mo as n,_n as r,fn as i,hn as a,mn as o,vn as s}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as c,M as l,r as u,s as d}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var f=n();function p(){return(0,f.jsxs)(d,{className:`flex flex-col gap-6`,children:[(0,f.jsx)(t,{title:`CardTitle Signal`,description:`Парный проп signal для CardTitle: красит текст заголовка в тон сигнальной рамки карточки (ok/warn/err/info).`}),(0,f.jsx)(l,{className:`max-w-prose`,"data-body":!0,children:`Signal на CardTitle нужен там, где цвет рамки должен читаться и в самом заголовке, а не только по периметру. Это одна из четырёх семантик системы: ok — всё в норме, warn — деградация, err — инцидент, info — нейтральная подсветка. Signal принимается ровно в тех же четырёх значениях, что и signal на Card, чтобы пары всегда совпадали.`}),(0,f.jsx)(e,{label:`четыре сигнала`,children:(0,f.jsx)(u,{title:`Card signal + CardTitle signal`,description:`Рамка Card и текст CardTitle в одном тоне. Держи пары signal одинаковыми — иначе заголовок спорит с рамкой.`,code:`<Card signal="ok">
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
</Card>`,children:(0,f.jsxs)(d,{className:`grid w-full grid-cols-1 gap-3 md:grid-cols-2`,children:[(0,f.jsxs)(i,{signal:`ok`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{signal:`ok`,children:`All Systems Operational`}),(0,f.jsx)(a,{children:`Last check: 14:23 UTC`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(l,{className:`font-mono text-xs text-muted-foreground`,children:`42 services / 0 incidents`})})]}),(0,f.jsxs)(i,{signal:`warn`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{signal:`warn`,children:`Degraded Performance`}),(0,f.jsx)(a,{children:`auth-service / eu-west-1`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(l,{className:`font-mono text-xs text-muted-foreground`,children:`p99 latency 340ms (+280%)`})})]}),(0,f.jsxs)(i,{signal:`err`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{signal:`err`,children:`Connection Lost`}),(0,f.jsx)(a,{children:`api-gateway / us-east-1`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(l,{className:`font-mono text-xs text-muted-foreground`,children:`SEV-2 incident opened`})})]}),(0,f.jsxs)(i,{signal:`info`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{signal:`info`,children:`Scheduled Maintenance`}),(0,f.jsx)(a,{children:`Tonight at 02:00 UTC`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(l,{className:`font-mono text-xs text-muted-foreground`,children:`Expected downtime: 12 minutes`})})]})]})})}),(0,f.jsx)(e,{label:`standalone signal`,children:(0,f.jsx)(u,{title:`CardTitle signal без Card signal`,description:`Допустимо — но обычно слабее: рамка остаётся нейтральной, только заголовок подсвечен. Используй, когда сигнал вторичный.`,code:`<Card>
  <CardHeader>
    <CardTitle signal="warn">Quota nearing limit</CardTitle>
    <CardDescription>Storage bucket: assets-prod</CardDescription>
  </CardHeader>
  <CardContent>8.4 GB of 10 GB used</CardContent>
</Card>`,children:(0,f.jsxs)(i,{className:`w-full max-w-sm`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(s,{signal:`warn`,children:`Quota nearing limit`}),(0,f.jsx)(a,{children:`Storage bucket: assets-prod`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(l,{className:`font-mono text-xs text-muted-foreground`,children:`8.4 GB of 10 GB used`})})]})})}),(0,f.jsx)(e,{label:`api reference`,children:(0,f.jsx)(c,{title:`CardTitle signal`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`--`,description:`Сигнальный цвет заголовка через text-signal-* utility. Обычно совпадает с signal на Card.`}]})})]})}export{p as default};