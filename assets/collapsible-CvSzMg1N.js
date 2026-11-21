import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,L as n,Ut as r,X as i,_t as a,dt as o,rt as s,vn as c}from"./index-BX5CNJVf.js";var l=e();function u(){return(0,l.jsx)(o,{kind:`component`,route:`/components/collapsible`,description:`Прячет детали до запроса: триггер раскрывает и сворачивает панель. Бери его для дополнительных параметров и технических сведений.`,usage:(0,l.jsx)(c,{use:[`Одна панель деталей, которую раскрывают по запросу: дополнительные параметры, технические сведения.`],avoid:[{text:`Несколько панелей, из которых открыта одна.`,instead:{href:`/components/disclosure-button-group`,label:`DisclosureButtonGroup`}},{text:`Ветки иерархии.`,instead:{href:`/components/tree-view`,label:`TreeView`}}]}),example:(0,l.jsx)(i,{code:`<Collapsible>
  <CollapsibleTrigger className="group">
    <ForwardIcon className="size-4 group-data-[panel-open]:rotate-90" />
    Детали инцидента
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Body>Таймаут шлюза API в us-east-1, длительность 14 минут.</Body>
  </CollapsibleContent>
</Collapsible>`,children:(0,l.jsx)(n,{})}),imports:(0,l.jsx)(s,{code:`import { Body, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@chucky23/design-system/react"
import { ForwardIcon } from "@chucky23/design-system/icons"`}),api:(0,l.jsx)(t,{items:[{name:`Collapsible`,props:[{name:`open`,type:`boolean`,description:`Раскрытие в управляемом режиме.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние в неуправляемом режиме.`},{name:`onOpenChange`,type:`(open: boolean, eventDetails) => void`,description:`Вызывается при раскрытии и сворачивании.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Игнорирует действия пользователя.`}]},{name:`CollapsibleTrigger`,props:[{name:`render`,type:`ReactElement`,description:`Заменяет элемент триггера, например кнопкой. Триггер тогда не растягивается на строку.`}]},{name:`CollapsibleContent`,props:[{name:`keepMounted`,type:`boolean`,defaultValue:`false`,description:`Оставляет свёрнутую панель в дереве.`}]}]}),related:(0,l.jsx)(a,{links:[{href:`/components/disclosure-button-group`,label:`DisclosureButtonGroup`,description:`Ряд кнопок с одной открытой панелью.`},{href:`/components/tree-view`,label:`TreeView`,description:`Иерархия с раскрытием узлов.`}]}),children:(0,l.jsx)(r,{id:`nested`,label:`Вложенные блоки`,description:`Когда детали сами делятся на части: блок вкладывается в блок. Отступа у CollapsibleContent нет, уровень читается по значку и порядку.`,children:(0,l.jsx)(i,{code:`<Collapsible defaultOpen>
  <CollapsibleTrigger>Рабочие сервисы</CollapsibleTrigger>
  <CollapsibleContent>
    <Collapsible>
      <CollapsibleTrigger>api-gateway</CollapsibleTrigger>
      <CollapsibleContent>Исправен, p99 45 мс.</CollapsibleContent>
    </Collapsible>
    <Collapsible>
      <CollapsibleTrigger>auth-service</CollapsibleTrigger>
      <CollapsibleContent>Деградация, p99 340 мс.</CollapsibleContent>
    </Collapsible>
  </CollapsibleContent>
</Collapsible>`,children:(0,l.jsx)(n,{nested:!0})})})})}export{u as default};