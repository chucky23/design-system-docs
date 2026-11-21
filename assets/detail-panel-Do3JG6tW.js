import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Q as t}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{as as n}from"./useLabelableId-C6GEk9LR.js";import{A as r,Fi as i,H as a,U as o,Ut as s,X as c,_t as l,dt as u,rt as d,vn as f}from"./index-BX5CNJVf.js";var p=e();function m(){return(0,p.jsxs)(u,{kind:`component`,route:`/components/detail-panel`,description:`Панель справа со свойствами задачи или другой записи: заголовок, кнопка удаления и секции. Бери её на экране, который не собран из типа экрана.`,usage:(0,p.jsx)(f,{use:[`Свойства сущности справа на экране, который не собран из типа экрана.`],avoid:[{text:`Инспектор реестра или документа: его рисует тип экрана.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Форма вне коллекции.`,instead:{href:`/components/sheet`,label:`Sheet`}}]}),example:(0,p.jsx)(c,{fragment:!0,layout:`block`,code:`import { useState } from "react"

function TaskPanel() {
  const [open, setOpen] = useState(false)
  return (
    <DetailPanel open={open} onOpenChange={setOpen} title="Задача TASK-128" onDelete={requestDelete}>
      <DetailPanelSection title="Свойства">
        <DetailPanelProperties>
          <PropertyField label="Статус"><StatusTag status="progress" label="В работе" /></PropertyField>
          <PropertyField label="Приоритет">P1</PropertyField>
          <PropertyField label="Исполнитель">anikin</PropertyField>
        </DetailPanelProperties>
      </DetailPanelSection>
      <DetailPanelSection title="Описание">
        <p>Перенести проверку токена в шлюз API и убрать повторный запрос из клиента.</p>
      </DetailPanelSection>
    </DetailPanel>
  )
}`,children:(0,p.jsx)(o,{})}),imports:(0,p.jsx)(d,{code:`import {
  DetailPanel,
  DetailPanelProperties,
  DetailPanelSection,
} from "@chucky23/design-system/extended/detail-panel"
import { Button, PropertyField, StatusTag } from "@chucky23/design-system/react"`}),api:(0,p.jsx)(r,{items:[{name:`DetailPanel`,props:[{name:`open`,type:`boolean`,required:!0,description:`Состояние открытия.`},{name:`onOpenChange`,type:`(open: boolean) => void`,required:!0,description:`Вызывается при открытии и закрытии.`},{name:`title`,type:`string`,required:!0,description:`Заголовок панели, он же имя для скринридера.`},{name:`onDelete`,type:`() => void`,description:`Кнопка удаления в шапке. Без неё кнопки нет. Подтверждение запрашивает приложение.`},{name:`children`,type:`ReactNode`,required:!0,description:`Секции панели.`}]},{name:`DetailPanelSection`,props:[{name:`title`,type:`string`,required:!0,description:`Подпись секции над разделителем.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,defaultValue:`3 в DetailPanel, иначе 4`,description:`Уровень заголовка: на один ниже заголовка панели или инспектора.`}]},{name:`DetailPanelProperties`,props:[{name:`className`,type:`string`,description:`Строки PropertyField с разделителями между ними.`}]},{name:`PropertyField`,props:[{name:`label`,type:`string`,required:!0,description:`Подпись свойства.`},{name:`hint`,type:`ReactNode`,description:`Пояснение под значением. Связывается с полем через aria-describedby.`}]}]}),related:(0,p.jsx)(l,{links:[{href:`/screens/registry`,label:`Реестр`,description:`Выбранную запись показывает инспектор экрана.`},{href:`/screens/board`,label:`Доска`,description:`Инспектор карточки рядом с колонками.`},{href:`/components/sheet`,label:`Sheet`,description:`Панель общего назначения.`},{href:`/components/comment`,label:`Comment`,description:`Ветка комментариев в секции панели.`}]}),children:[(0,p.jsx)(s,{id:`open`,label:`Открытие по кнопке`,description:`Когда детали открывают из кнопки на отдельной странице. На экранах коллекций роль панели играет инспектор типа экрана.`,children:(0,p.jsx)(c,{code:`import { useState } from "react"

function TaskDetails() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть детали</Button>
      <DetailPanel open={open} onOpenChange={setOpen} title="Задача TASK-128" onDelete={() => setOpen(false)}>
        <DetailPanelSection title="Свойства">
          <DetailPanelProperties>
            <PropertyField label="Статус"><StatusTag status="progress" label="В работе" /></PropertyField>
          </DetailPanelProperties>
        </DetailPanelSection>
      </DetailPanel>
    </>
  )
}`,children:(0,p.jsx)(a,{})})}),(0,p.jsx)(s,{id:`properties`,label:`Свойства`,description:`Когда у записи много свойств: PropertyField ставит подпись и значение в строку. Значением может быть текст, статус или кнопка.`,children:(0,p.jsxs)(c,{layout:`stack`,code:`<PropertyField label="Статус"><StatusTag status="progress" label="В работе" /></PropertyField>
<PropertyField label="Срок" hint="Виден исполнителю">12.11.2026</PropertyField>
<PropertyField label="Действие"><Button size="xs" tone="neutral" variant="outline">Назначить</Button></PropertyField>`,children:[(0,p.jsx)(t,{label:`Статус`,children:(0,p.jsx)(i,{status:`progress`,label:`В работе`})}),(0,p.jsx)(t,{label:`Срок`,hint:`Виден исполнителю`,children:`12.11.2026`}),(0,p.jsx)(t,{label:`Действие`,children:(0,p.jsx)(n,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Назначить`})})]})})]})}export{m as default};