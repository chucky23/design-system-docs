import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{as as t}from"./useLabelableId-C6GEk9LR.js";import{n}from"./chunk-YSSK2NCY-BYUmzvtW.js";import{A as r,Fi as i,Jn as a,Qn as o,Ut as s,X as c,Yn as l,_t as u,dt as d,nn as f,rt as p,vn as m}from"./index-BX5CNJVf.js";import{t as h}from"./chunk-WEBXSJ6N-BnUa0vLk.js";var g=e();function _(){return(0,g.jsxs)(d,{kind:`component`,route:`/recipes/entity-row`,description:`Строка записи в плоском списке: значок, заголовок, описание, метаданные и действия. Бери её, когда у записей нет вложенности и колонок для сравнения.`,example:(0,g.jsx)(c,{layout:`block`,code:`<EntityRowRecipe
  leading={<WorkflowIcon status="progress" />}
  title="Выгрузка отчёта в CSV"
  description="Кнопка в шапке реестра, формат и кодировка выбираются в диалоге."
  meta={
    <MetaClusterRecipe>
      <InlineMetaRecipe value="2 дня" label="до срока" />
      <InlineMetaRecipe value={5} label="комментариев" />
    </MetaClusterRecipe>
  }
  trailing={<Button size="xs" tone="neutral" variant="outline">Открыть</Button>}
/>`,children:(0,g.jsx)(o,{leading:(0,g.jsx)(n,{status:`progress`}),title:`Выгрузка отчёта в CSV`,description:`Кнопка в шапке реестра, формат и кодировка выбираются в диалоге.`,meta:(0,g.jsxs)(a,{children:[(0,g.jsx)(l,{value:`2 дня`,label:`до срока`}),(0,g.jsx)(l,{value:5,label:`комментариев`})]}),trailing:(0,g.jsx)(t,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Открыть`})})}),imports:(0,g.jsx)(p,{code:`import { Button, WorkflowIcon, StatusTag } from "@chucky23/design-system/react"
import { EntityKeyRecipe } from "@chucky23/design-system/recipes/entity-key"
import { EntityRowRecipe } from "@chucky23/design-system/recipes/entity-row"
import { InlineMetaRecipe } from "@chucky23/design-system/recipes/inline-meta"
import { MetaClusterRecipe } from "@chucky23/design-system/recipes/meta-cluster"`}),usage:(0,g.jsx)(m,{placement:[{screen:{href:`/screens/registry`,label:`Реестр`},slot:`children`},{screen:{href:`/screens/overview`,label:`Обзор`},slot:`sections[].content`},{screen:{href:`/screens/document`,label:`Документ`},slot:`context`}],use:[`Плоский список задач, спринтов или сборок, где каждая запись открывается целиком.`,`Последние записи в разделе обзора: «Мои задачи», «Упавшие сборки».`,`Связанные задачи в колонке контекста документа.`],avoid:[{text:`У записей есть родитель и подзадачи, ветки сворачиваются.`,instead:{href:`/recipes/hierarchy-row`,label:`HierarchyRowRecipe`}},{text:`Записи сравнивают по колонкам и сортируют.`,instead:{href:`/components/table`,label:`Table`}},{text:`Запись лежит в колонке доски и переносится между статусами.`,instead:{href:`/recipes/board-card`,label:`BoardCardRecipe`}}]}),api:(0,g.jsx)(r,{items:[{name:`EntityRowRecipe`,props:[{name:`title`,type:`ReactNode`,required:!0,description:`Название записи или EntityKeyRecipe с ключом. Длинный текст переносится.`},{name:`description`,type:`ReactNode`,description:`Одна строка пояснения под заголовком: что сделать или что случилось.`},{name:`leading`,type:`ReactNode`,description:`Значок статуса или аватар исполнителя слева, выровнен по первой строке.`},{name:`meta`,type:`ReactNode`,description:`Метаданные под описанием, обычно MetaClusterRecipe.`},{name:`trailing`,type:`ReactNode`,description:`Действия справа. Кнопки в слоте переносятся вместе с подписью.`},{name:`className`,type:`string`,description:`Классы раскладки снаружи: отступы и ширина. Цвет и типографику не меняет.`}]}]}),related:(0,g.jsx)(u,{links:[{href:`/recipes/entity-key`,label:`EntityKeyRecipe`,description:`Ключ записи для слота title.`},{href:`/recipes/meta-cluster`,label:`MetaClusterRecipe`,description:`Ряд метаданных для слота meta.`},{href:`/recipes/board-card`,label:`BoardCardRecipe`,description:`Та же запись карточкой на доске.`},{href:`/recipes/hierarchy-row`,label:`HierarchyRowRecipe`,description:`Строка дерева с вложенностью.`}]}),children:[(0,g.jsx)(s,{id:`minimal`,label:`Заголовок и действие`,description:`Для коротких списков, где запись узнают по названию и сразу открывают.`,children:(0,g.jsx)(c,{layout:`block`,code:`<>
  <EntityRowRecipe title="Спринт 14" trailing={<Button size="xs" tone="neutral" variant="outline">Открыть</Button>} />
  <EntityRowRecipe title="Спринт 13" trailing={<Button size="xs" tone="neutral" variant="outline">Открыть</Button>} />
</>`,children:(0,g.jsxs)(f,{gap:`sm`,children:[(0,g.jsx)(o,{title:`Спринт 14`,trailing:(0,g.jsx)(t,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Открыть`})}),(0,g.jsx)(o,{title:`Спринт 13`,trailing:(0,g.jsx)(t,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Открыть`})})]})})}),(0,g.jsx)(s,{id:`key`,label:`Ключ и статус`,description:`Когда задачу ищут по ключу, а статус нужен словом в строке метаданных.`,children:(0,g.jsx)(c,{layout:`block`,code:`<>
  <EntityRowRecipe
    title={<EntityKeyRecipe value="TM-0138" description="Экран ввода ключа доступа" />}
    meta={<MetaClusterRecipe><StatusTag status="closed" label="Готово" /><InlineMetaRecipe value="8 ноя" label="закрыта" /></MetaClusterRecipe>}
  />
  <EntityRowRecipe
    title={<EntityKeyRecipe value="TM-0151" description="Выдача ключей в API" />}
    meta={<MetaClusterRecipe><StatusTag status="blocked" label="Заблокирована" /><InlineMetaRecipe value={1} label="блокер" /></MetaClusterRecipe>}
  />
</>`,children:(0,g.jsxs)(f,{gap:`sm`,children:[(0,g.jsx)(o,{title:(0,g.jsx)(h,{value:`TM-0138`,description:`Экран ввода ключа доступа`}),meta:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{status:`closed`,label:`Готово`}),(0,g.jsx)(l,{value:`8 ноя`,label:`закрыта`})]})}),(0,g.jsx)(o,{title:(0,g.jsx)(h,{value:`TM-0151`,description:`Выдача ключей в API`}),meta:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{status:`blocked`,label:`Заблокирована`}),(0,g.jsx)(l,{value:1,label:`блокер`})]})})]})})}),(0,g.jsx)(s,{id:`actions`,label:`Несколько действий`,description:`Когда у записи две или три команды: при нехватке места они переносятся под заголовок.`,children:(0,g.jsx)(c,{layout:`block`,code:`<EntityRowRecipe
  title="Релиз 9.0.0: проверка эталонных снимков во всех темах и на всех поддерживаемых разрешениях"
  description="Расхождения собираются в один отчёт."
  trailing={<>
    <Button size="xs" tone="neutral" variant="ghost">Пропустить</Button>
    <Button size="xs" tone="neutral" variant="outline">Открыть отчёт</Button>
    <Button size="xs">Принять снимки</Button>
  </>}
/>`,children:(0,g.jsx)(o,{title:`Релиз 9.0.0: проверка эталонных снимков во всех темах и на всех поддерживаемых разрешениях`,description:`Расхождения собираются в один отчёт.`,trailing:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{size:`xs`,tone:`neutral`,variant:`ghost`,children:`Пропустить`}),(0,g.jsx)(t,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Открыть отчёт`}),(0,g.jsx)(t,{size:`xs`,children:`Принять снимки`})]})})})})]})}export{_ as default};