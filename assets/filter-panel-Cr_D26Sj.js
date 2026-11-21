import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{n as r}from"./chunk-YSSK2NCY-BYUmzvtW.js";import{A as i,Ut as a,X as o,_t as s,dt as c,rt as l,vn as u}from"./index-BX5CNJVf.js";import{n as d,r as f,t as p}from"./filter-panel-bL9h-2Qk.js";var m=e(t(),1),h=n();function g(){let[e,t]=(0,m.useState)(!0),[n,g]=(0,m.useState)(!1);return(0,h.jsx)(c,{kind:`component`,route:`/components/filter-panel`,description:`Панель фильтров с группами флажков: статус, приоритет, тип. Бери её для таблицы или списка вне типа экрана.`,usage:(0,h.jsx)(u,{use:[`Несколько групп фильтров с флажками для таблицы или реестра.`],avoid:[{text:`Один фильтр по одному признаку.`,instead:{href:`/components/select`,label:`Select`}},{text:`Фильтры в панели коллекции: их место в слоте filters типа экрана.`,instead:{href:`/screens/registry`,label:`Реестр`}}]}),example:(0,h.jsx)(o,{layout:`stack`,code:`<FilterPanel>
  <FilterGroup title="Статус">
    <FilterCheckbox label="Открыта" defaultChecked indicator={<WorkflowIcon status="open" size="sm" />} />
    <FilterCheckbox label="В работе" defaultChecked indicator={<WorkflowIcon status="progress" size="sm" />} />
    <FilterCheckbox label="Заблокирована" indicator={<WorkflowIcon status="blocked" size="sm" />} />
    <FilterCheckbox label="Готово" indicator={<WorkflowIcon status="closed" size="sm" />} />
  </FilterGroup>
  <FilterGroup title="Приоритет">
    <FilterCheckbox label="P0 — критический" defaultChecked />
    <FilterCheckbox label="P1 — высокий" defaultChecked />
    <FilterCheckbox label="P2 — средний" />
  </FilterGroup>
</FilterPanel>`,children:(0,h.jsxs)(f,{children:[(0,h.jsxs)(d,{title:`Статус`,children:[(0,h.jsx)(p,{label:`Открыта`,defaultChecked:!0,indicator:(0,h.jsx)(r,{status:`open`,size:`sm`})}),(0,h.jsx)(p,{label:`В работе`,defaultChecked:!0,indicator:(0,h.jsx)(r,{status:`progress`,size:`sm`})}),(0,h.jsx)(p,{label:`Заблокирована`,indicator:(0,h.jsx)(r,{status:`blocked`,size:`sm`})}),(0,h.jsx)(p,{label:`Готово`,indicator:(0,h.jsx)(r,{status:`closed`,size:`sm`})})]}),(0,h.jsxs)(d,{title:`Приоритет`,children:[(0,h.jsx)(p,{label:`P0 — критический`,defaultChecked:!0}),(0,h.jsx)(p,{label:`P1 — высокий`,defaultChecked:!0}),(0,h.jsx)(p,{label:`P2 — средний`})]})]})}),imports:(0,h.jsx)(l,{code:`import { FilterCheckbox, FilterGroup, FilterPanel } from "@chucky23/design-system/extended/filter-panel"
import { WorkflowIcon } from "@chucky23/design-system/react"`}),api:(0,h.jsx)(i,{items:[{name:`FilterPanel`,props:[{name:`className`,type:`string`,description:`Колонка групп с отступом 16 px и интервалом между группами.`}]},{name:`FilterGroup`,props:[{name:`title`,type:`string`,required:!0,description:`Подпись группы. Именует role group через aria-labelledby.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,description:`Уровень заголовка подписи. Без него подпись — абзац.`}]},{name:`FilterCheckbox`,props:[{name:`label`,type:`string`,required:!0,description:`Подпись фильтра.`},{name:`indicator`,type:`ReactNode`,description:`Маркер перед подписью, например WorkflowIcon.`},{name:`checked`,type:`boolean`,description:`Контролируемое состояние, вместе с onCheckedChange.`},{name:`defaultChecked`,type:`boolean`,description:`Начальное состояние без управления.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,description:`Вызывается при смене состояния.`}]}]}),related:(0,h.jsx)(s,{links:[{href:`/components/checkbox`,label:`Checkbox`,description:`Флажок внутри FilterCheckbox.`},{href:`/screens/registry`,label:`Реестр`,description:`Панель фильтров стоит рядом с таблицей записей.`},{href:`/components/table`,label:`Table`,description:`Таблица, к которой относятся фильтры.`}]}),children:(0,h.jsx)(a,{id:`controlled`,label:`Управляемые фильтры`,description:`Когда фильтр хранится в адресе или настройках: checked и onCheckedChange связывают флажок с состоянием приложения.`,children:(0,h.jsx)(o,{layout:`stack`,code:`import { useState } from "react"

function TypeFilter() {
  const [bug, setBug] = useState(true)
  const [improvement, setImprovement] = useState(false)
  return (
    <FilterPanel>
      <FilterGroup title="Тип" headingLevel={3}>
        <FilterCheckbox label="Ошибка" checked={bug} onCheckedChange={setBug} />
        <FilterCheckbox label="Улучшение" checked={improvement} onCheckedChange={setImprovement} />
      </FilterGroup>
    </FilterPanel>
  )
}`,children:(0,h.jsx)(f,{children:(0,h.jsxs)(d,{title:`Тип`,headingLevel:3,children:[(0,h.jsx)(p,{label:`Ошибка`,checked:e,onCheckedChange:t}),(0,h.jsx)(p,{label:`Улучшение`,checked:n,onCheckedChange:g})]})})})})})}export{g as default};