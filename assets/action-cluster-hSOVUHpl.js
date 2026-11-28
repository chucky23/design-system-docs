import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{ws as t}from"./useLabelableId-Ck49MOKz.js";import{Fn as n,M as r,Ot as i,St as a,fr as o,mr as s,pt as c,rt as l,tn as u}from"./index-DnsCB0LC.js";var d=e();function f(){return(0,d.jsxs)(a,{kind:`component`,route:`/recipes/action-cluster`,description:`Группа команд с общим расстоянием и вторичной подписью справа. Бери её под формой или в блоке решения, где рядом с кнопками нужна строка о состоянии.`,example:(0,d.jsx)(l,{layout:`block`,code:`<ActionClusterRecipe
  actions={<>
    <Button>Сохранить</Button>
    <Button tone="neutral" variant="ghost">Отменить</Button>
  </>}
  trailingMeta="Черновик сохранён в 10:42"
/>`,children:(0,d.jsx)(o,{actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{children:`Сохранить`}),(0,d.jsx)(t,{tone:`neutral`,variant:`ghost`,children:`Отменить`})]}),trailingMeta:`Черновик сохранён в 10:42`})}),imports:(0,d.jsx)(c,{code:`import { Button } from "@chucky23/design-system/react"
import { ActionClusterRecipe } from "@chucky23/design-system/recipes/action-cluster"
import { InlineMetaRecipe } from "@chucky23/design-system/recipes/inline-meta"`}),usage:(0,d.jsx)(n,{placement:[{screen:{href:`/screens/document`,label:`Документ`},slot:`decision.actions`},{screen:{href:`/screens/settings`,label:`Конструктор настроек`},slot:`sections[].content`},{screen:{href:`/recipes/entity-row`,label:`EntityRowRecipe`},slot:`trailing`}],use:[`Кнопки под формой с временем сохранения черновика.`,`Команды ревью: «Принять» и «Вернуть на доработку».`,`Шаги мастера: «Назад» слева и «Шаг 2 из 3» справа.`],avoid:[{text:`Действия всей страницы рядом с заголовком.`,instead:{href:`/screens/shell`,label:`WorkspacePage`}},{text:`Ряд признаков без команд: статус, срок, счётчики.`,instead:{href:`/recipes/meta-cluster`,label:`MetaClusterRecipe`}},{text:`Панель с названием и фильтрами над списком.`,instead:{href:`/recipes/toolbar`,label:`ToolbarRecipe`}}]}),api:(0,d.jsx)(r,{items:[{name:`ActionClusterRecipe`,props:[{name:`actions`,type:`ReactNode`,required:!0,description:`Команды группы. Стоят слева, между ними расстояние 8 px.`},{name:`trailingMeta`,type:`ReactNode`,description:`Вторичная подпись у правого края, например время сохранения или счётчик.`},{name:`align`,type:`"start" | "end" | "between"`,defaultValue:`"start"`,description:`Выравнивание команд по ширине группы.`},{name:`flow`,type:`"source" | "primary-end"`,defaultValue:`"source"`,description:`source оставляет порядок из кода. primary-end ставит первую команду к правому краю, как в форме.`},{name:`className`,type:`string`,description:`Классы раскладки снаружи: отступы и ширина. Цветовые классы вызывают предупреждение в режиме разработки.`},{name:`style`,type:`SafeStyle`,description:`Встроенные стили без цветовых свойств.`}]}]}),related:(0,d.jsx)(i,{links:[{href:`/components/button`,label:`Button`,description:`Команды внутри группы.`},{href:`/recipes/toolbar`,label:`ToolbarRecipe`,description:`Панель команд над содержимым.`},{href:`/recipes/meta-cluster`,label:`MetaClusterRecipe`,description:`Ряд вторичных признаков для trailingMeta.`}]}),children:[(0,d.jsxs)(u,{id:`align`,label:`Выравнивание`,description:`Под формой команды прижимают вправо, в мастере шагов разводят по краям.`,children:[(0,d.jsx)(l,{layout:`block`,title:`align=end`,code:`<ActionClusterRecipe
  align="end"
  actions={<>
    <Button tone="neutral" variant="ghost">Отменить</Button>
    <Button>Опубликовать</Button>
  </>}
/>`,children:(0,d.jsx)(o,{align:`end`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{tone:`neutral`,variant:`ghost`,children:`Отменить`}),(0,d.jsx)(t,{children:`Опубликовать`})]})})}),(0,d.jsx)(l,{layout:`block`,title:`align=between`,code:`<ActionClusterRecipe
  align="between"
  actions={<Button tone="neutral" variant="outline">Назад</Button>}
  trailingMeta="Шаг 2 из 3"
/>`,children:(0,d.jsx)(o,{align:`between`,actions:(0,d.jsx)(t,{tone:`neutral`,variant:`outline`,children:`Назад`}),trailingMeta:`Шаг 2 из 3`})})]}),(0,d.jsx)(u,{id:`primary-end`,label:`Главная команда справа`,description:`Когда главная команда должна быть первой для клавиатуры и скринридера, но стоять справа, как в диалоге.`,children:(0,d.jsx)(l,{layout:`block`,code:`<ActionClusterRecipe
  align="end"
  flow="primary-end"
  actions={<>
    <Button>Создать задачу</Button>
    <Button tone="neutral" variant="ghost">Отменить</Button>
  </>}
/>`,children:(0,d.jsx)(o,{align:`end`,flow:`primary-end`,actions:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{children:`Создать задачу`}),(0,d.jsx)(t,{tone:`neutral`,variant:`ghost`,children:`Отменить`})]})})})}),(0,d.jsx)(u,{id:`meta`,label:`Подпись со счётчиком`,description:`Когда пользователь должен видеть, к чему применится команда: сколько задач уйдёт в выгрузку.`,children:(0,d.jsx)(l,{layout:`block`,code:`<ActionClusterRecipe
  actions={<Button tone="neutral" variant="outline">Экспортировать</Button>}
  trailingMeta={<InlineMetaRecipe value={12} label="задач в выгрузке" />}
/>`,children:(0,d.jsx)(o,{actions:(0,d.jsx)(t,{tone:`neutral`,variant:`outline`,children:`Экспортировать`}),trailingMeta:(0,d.jsx)(s,{value:12,label:`задач в выгрузке`})})})})]})}export{f as default};