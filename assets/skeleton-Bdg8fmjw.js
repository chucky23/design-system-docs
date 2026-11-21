import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Qt as n,Ut as r,X as i,Xt as a,Zt as o,_t as s,dt as c,rt as l,vn as u}from"./index-BX5CNJVf.js";var d=e();function f(){return(0,d.jsxs)(c,{kind:`component`,route:`/components/skeleton`,description:`Заглушка на месте содержимого с известной формой, пока оно грузится: строки списка, карточка, абзац.`,usage:(0,d.jsx)(u,{use:[`Заглушка на месте содержимого, форма которого известна: строки списка, карточка, абзац.`],avoid:[{text:`Ожидание без известной формы.`,instead:{href:`/components/spinner`,label:`Spinner`}},{text:`Состояния загрузки в типе экрана: они передаются данными.`,instead:{href:`/screens`,label:`Как устроен экран`}}]}),example:(0,d.jsx)(i,{layout:`stack`,code:`<Skeleton className="h-5 w-40" />
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />`,children:(0,d.jsx)(n,{})}),imports:(0,d.jsx)(l,{from:`@chucky23/design-system/react`,names:[`Skeleton`,`Card`,`CardAction`,`CardContent`,`CardFooter`,`CardHeader`,`Table`,`TableBody`,`TableCell`,`TableRow`]}),api:(0,d.jsx)(t,{items:[{name:`Skeleton`,props:[{name:`className`,type:`string`,description:`Ширина, высота и радиус. Фон bg-muted и aria-hidden заданы компонентом.`}]}]}),related:(0,d.jsx)(s,{links:[{href:`/components/spinner`,label:`Spinner`,description:`Загрузка без известной формы.`},{href:`/components/card`,label:`Card`,description:`Контейнер карточки.`},{href:`/components/table`,label:`Table`,description:`Таблица, чьи строки заменяет заглушка.`}]}),children:[(0,d.jsx)(r,{id:`card`,label:`Карточка`,description:`Когда грузится карточка: заглушка повторяет её структуру, заголовок, метку, строку и действия.`,children:(0,d.jsx)(i,{layout:`stack`,code:`<Card>
  <CardHeader>
    <Skeleton className="h-5 w-32" />
    <CardAction><Skeleton className="h-5 w-14" /></CardAction>
  </CardHeader>
  <CardContent><Skeleton className="h-4 w-full" /></CardContent>
  <CardFooter className="gap-2">
    <Skeleton className="h-6 w-20" />
    <Skeleton className="h-6 w-20" />
  </CardFooter>
</Card>`,children:(0,d.jsx)(a,{})})}),(0,d.jsx)(r,{id:`table`,label:`Строки таблицы`,description:`Когда грузится таблица: строки держат ширины колонок, и таблица не прыгает после загрузки.`,children:(0,d.jsx)(i,{layout:`block`,code:`<Table aria-label="Загрузка задач">
  <TableBody>
    {[1, 2, 3].map((row) => (
      <TableRow key={row}>
        <TableCell><Skeleton className="h-4 w-16" /></TableCell>
        <TableCell><Skeleton className="h-4 w-48" /></TableCell>
        <TableCell><Skeleton className="h-4 w-20" /></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,children:(0,d.jsx)(o,{})})})]})}export{f as default};