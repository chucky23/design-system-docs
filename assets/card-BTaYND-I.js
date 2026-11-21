import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Q as t}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{as as n}from"./useLabelableId-C6GEk9LR.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{A as u,Pi as d,Ut as f,X as p,_t as m,dt as h,rt as g,tr as _,vn as v}from"./index-BX5CNJVf.js";var y=e(),b=`"ok" | "warn" | "err" | "info"`;function x(){return(0,y.jsxs)(h,{kind:`component`,route:`/components/card`,description:`Собирает связанное содержимое в отдельный блок: шапка, тело, подвал. Бери её для сводки или настройки на странице без типа экрана.`,usage:(0,y.jsx)(v,{use:[`Отдельный блок связанного содержимого на странице без типа экрана: сводка, настройка, превью.`],avoid:[{text:`Содержимое слота типа экрана: слот уже задаёт поверхность.`,instead:{href:`/screens`,label:`Как устроен экран`}},{text:`Карточка задачи на доске.`,instead:{href:`/recipes/board-card`,label:`BoardCardRecipe`}},{text:`Показатель с числом.`,instead:{href:`/recipes/metric`,label:`MetricRecipe`}}]}),example:(0,y.jsx)(p,{layout:`stack`,code:`<Card>
  <CardHeader>
    <CardTitle>Сводка по инцидентам</CardTitle>
    <CardDescription>Последние 24 часа</CardDescription>
  </CardHeader>
  <CardContent>Решено 12, активно 3, критичный 1.</CardContent>
  <CardFooter>
    <Button tone="neutral" variant="outline" size="xs">Показать все</Button>
  </CardFooter>
</Card>`,children:(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`Сводка по инцидентам`}),(0,y.jsx)(i,{children:`Последние 24 часа`})]}),(0,y.jsx)(s,{children:`Решено 12, активно 3, критичный 1.`}),(0,y.jsx)(r,{children:(0,y.jsx)(n,{tone:`neutral`,variant:`outline`,size:`xs`,children:`Показать все`})})]})}),imports:(0,y.jsx)(g,{code:`import { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, PropertyField } from "@chucky23/design-system/react"
import { SeverityRecipe } from "@chucky23/design-system/recipes/severity"`}),api:(0,y.jsx)(u,{items:[{name:`Card`,props:[{name:`size`,type:`"default" | "sm"`,defaultValue:`"default"`,description:`sm уменьшает отступы и промежутки.`},{name:`signal`,type:b,description:`Сигнальный контур рамки для статуса блока.`}]},{name:`CardHeader`,props:[{name:`variant`,type:`"default" | "chrome"`,defaultValue:`"default"`,description:`chrome — полоса фона оболочки (--chrome) с рамкой снизу, высота от 32 px, название и действия в одну строку.`}]},{name:`CardTitle`,props:[{name:`size`,type:`"default" | "display"`,defaultValue:`"default"`,description:`display — число метрики: 32/40, вес 500, tabular-nums.`},{name:`signal`,type:b,description:`Окрашивает заголовок в тон сигнала. Обычно совпадает с signal у Card.`}]},{name:`CardDescription`,props:[{name:`children`,type:`ReactNode`,description:`Приглушённая строка под заголовком.`}]},{name:`CardAction`,props:[{name:`children`,type:`ReactNode`,description:`Действие или Badge в правом верхнем углу шапки.`}]},{name:`CardContent`,props:[{name:`children`,type:`ReactNode`,description:`Основное содержимое.`}]},{name:`CardFooter`,props:[{name:`children`,type:`ReactNode`,description:`Действия под телом, рамка сверху.`}]}]}),related:(0,y.jsx)(m,{links:[{href:`/recipes/metric`,label:`MetricRecipe`,description:`Готовая карточка метрики вместо ручной.`},{href:`/recipes/meta-cluster`,label:`MetaClusterRecipe`,description:`Ряд статуса и действий в подвале.`},{href:`/patterns/kpi-grid`,label:`KpiGrid`,description:`Сетка карточек метрик.`},{href:`/components/badge`,label:`Badge`,description:`Статус в CardAction.`}]}),children:[(0,y.jsx)(f,{id:`metric`,label:`Метрика`,description:`Когда главное в блоке — одно число. CardTitle size=display набирает его крупно.`,children:(0,y.jsxs)(p,{layout:`grid`,code:`<Card>
  <CardHeader>
    <CardDescription>Активные инциденты</CardDescription>
    <CardTitle size="display">7</CardTitle>
  </CardHeader>
  <CardContent><CardDescription>на 2 больше, чем вчера</CardDescription></CardContent>
</Card>`,children:[(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(i,{children:`Активные инциденты`}),(0,y.jsx)(c,{size:`display`,children:`7`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`на 2 больше, чем вчера`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(i,{children:`Среднее время решения`}),(0,y.jsx)(c,{size:`display`,children:`14 мин`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`на 3 мин быстрее`})})]})]})}),(0,y.jsx)(f,{id:`signal`,label:`Сигнал`,description:`Когда блок сообщает итог проверки: сервис работает, квота кончается. Рамка Card и заголовок CardTitle берут один тон, а вторичный сигнал красит только заголовок.`,children:(0,y.jsxs)(p,{layout:`grid`,code:`<Card signal="ok">
  <CardHeader>
    <CardTitle signal="ok">Всё работает</CardTitle>
    <CardDescription>Проверено в 14:23</CardDescription>
  </CardHeader>
  <CardContent>42 сервиса, 0 инцидентов</CardContent>
</Card>
<Card signal="warn">…</Card>
<Card signal="err">…</Card>
<Card signal="info">…</Card>
<Card>
  <CardHeader><CardTitle signal="warn">Квота почти исчерпана</CardTitle></CardHeader>
</Card>`,children:[(0,y.jsxs)(l,{signal:`ok`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{signal:`ok`,children:`Всё работает`}),(0,y.jsx)(i,{children:`Проверено в 14:23`})]}),(0,y.jsx)(s,{children:`42 сервиса, 0 инцидентов`})]}),(0,y.jsxs)(l,{signal:`warn`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{signal:`warn`,children:`Деградация`}),(0,y.jsx)(i,{children:`auth-service, eu-west-1`})]}),(0,y.jsx)(s,{children:`p99 340 мс, на 280 % выше нормы`})]}),(0,y.jsxs)(l,{signal:`err`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{signal:`err`,children:`Связь потеряна`}),(0,y.jsx)(i,{children:`api-gateway, us-east-1`})]}),(0,y.jsx)(s,{children:`Открыт инцидент SEV-2`})]}),(0,y.jsxs)(l,{signal:`info`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{signal:`info`,children:`Плановые работы`}),(0,y.jsx)(i,{children:`Сегодня в 02:00`})]}),(0,y.jsx)(s,{children:`Простой около 12 минут`})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{signal:`warn`,children:`Квота почти исчерпана`}),(0,y.jsx)(i,{children:`Хранилище assets-prod`})]}),(0,y.jsx)(s,{children:`Занято 8,4 из 10 ГБ`})]})]})}),(0,y.jsx)(f,{id:`compact`,label:`Компактная`,description:`Для плотной сетки из многих карточек: size=sm уменьшает отступы.`,children:(0,y.jsxs)(p,{layout:`grid`,code:`<Card size="sm" signal="ok">
  <CardHeader>
    <CardTitle>Иконки</CardTitle>
    <CardDescription>Боковая навигация</CardDescription>
  </CardHeader>
  <CardContent><CardDescription>Штрих 1,5, круглые окончания.</CardDescription></CardContent>
</Card>`,children:[(0,y.jsxs)(l,{size:`sm`,signal:`ok`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`Иконки`}),(0,y.jsx)(i,{children:`Боковая навигация`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`Штрих 1,5, круглые окончания.`})})]}),(0,y.jsxs)(l,{size:`sm`,signal:`info`,children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`Семантические значки`}),(0,y.jsx)(i,{children:`Область содержимого`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`Таблицы, формы и панели инструментов.`})})]})]})}),(0,y.jsx)(f,{id:`status`,label:`Статус в шапке`,description:`Когда итог проверки нужно видеть рядом с названием: Badge в CardAction.`,children:(0,y.jsxs)(p,{layout:`grid`,code:`<Card>
  <CardHeader>
    <CardTitle>api-gateway</CardTitle>
    <CardAction><Badge variant="ok">Исправен</Badge></CardAction>
    <CardDescription>us-east-1, рабочая среда</CardDescription>
  </CardHeader>
  <CardContent><CardDescription>p99 45 мс, ошибок 0,02 %</CardDescription></CardContent>
</Card>`,children:[(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`api-gateway`}),(0,y.jsx)(a,{children:(0,y.jsx)(d,{variant:`ok`,children:`Исправен`})}),(0,y.jsx)(i,{children:`us-east-1, рабочая среда`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`p99 45 мс, ошибок 0,02 %`})})]}),(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`auth-service`}),(0,y.jsx)(a,{children:(0,y.jsx)(d,{variant:`warn`,children:`Деградация`})}),(0,y.jsx)(i,{children:`eu-west-1, рабочая среда`})]}),(0,y.jsx)(s,{children:(0,y.jsx)(i,{children:`p99 340 мс, ошибок 2,4 %`})})]})]})}),(0,y.jsx)(f,{id:`chrome`,label:`Шапка-полоса`,description:`Когда у карточки есть действие в шапке: полоса фона оболочки отделяет шапку от тела, как заголовок окна.`,children:(0,y.jsx)(p,{layout:`stack`,code:`<Card>
  <CardHeader variant="chrome">
    <CardTitle>Решение</CardTitle>
    <CardAction><Button tone="neutral" variant="ghost" size="xs">Изменить</Button></CardAction>
  </CardHeader>
  <CardContent>Перенести релиз на четверг.</CardContent>
</Card>`,children:(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{variant:`chrome`,children:[(0,y.jsx)(c,{children:`Решение`}),(0,y.jsx)(a,{children:(0,y.jsx)(n,{tone:`neutral`,variant:`ghost`,size:`xs`,children:`Изменить`})})]}),(0,y.jsx)(s,{children:`Перенести релиз на четверг.`})]})})}),(0,y.jsx)(f,{id:`full`,label:`Полная карточка`,description:`Образец со всеми частями: шапка с меткой, свойства в теле, действия в подвале.`,children:(0,y.jsx)(p,{layout:`stack`,code:`<Card>
  <CardHeader>
    <CardTitle>INC-4012</CardTitle>
    <CardAction><SeverityRecipe level={2} /></CardAction>
    <CardDescription>Таймаут шлюза API в us-east-1</CardDescription>
  </CardHeader>
  <CardContent>
    <PropertyField label="Длительность">14 мин 32 с</PropertyField>
    <PropertyField label="Затронуто">3 сервиса</PropertyField>
    <PropertyField label="Командир">Алиса</PropertyField>
  </CardContent>
  <CardFooter>
    <Button tone="neutral" variant="ghost" size="xs">Эскалировать</Button>
    <Button size="xs">Закрыть</Button>
  </CardFooter>
</Card>`,children:(0,y.jsxs)(l,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(c,{children:`INC-4012`}),(0,y.jsx)(a,{children:(0,y.jsx)(_,{level:2})}),(0,y.jsx)(i,{children:`Таймаут шлюза API в us-east-1`})]}),(0,y.jsxs)(s,{children:[(0,y.jsx)(t,{label:`Длительность`,children:`14 мин 32 с`}),(0,y.jsx)(t,{label:`Затронуто`,children:`3 сервиса`}),(0,y.jsx)(t,{label:`Командир`,children:`Алиса`})]}),(0,y.jsxs)(r,{children:[(0,y.jsx)(n,{tone:`neutral`,variant:`ghost`,size:`xs`,children:`Эскалировать`}),(0,y.jsx)(n,{size:`xs`,children:`Закрыть`})]})]})})})]})}export{x as default};