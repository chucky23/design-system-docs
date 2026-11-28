import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,k as n}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Ct as r,qr as i}from"./useLabelableId-Ck49MOKz.js";import{v as a}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as o,M as s,Ot as c,St as l,ct as u,pt as d,rt as f,st as p,tn as m}from"./index-DnsCB0LC.js";var h=e(),g=`import { SettingsIcon } from "@chucky23/design-system/icons"

<FieldGroup>
  <FieldRecipe label="Название правила" htmlFor="fd-name">
    <Input id="fd-name" defaultValue="Проверка контракта форм" />
  </FieldRecipe>
  <FormDisclosure
    label="Дополнительные параметры"
    icon={<SettingsIcon size="xs" aria-hidden="true" />}
    selectedLabel="30 с · Входящие"
  >
    <FieldGroup>
      <FieldRecipe layout="horizontal" label="Таймаут, с" htmlFor="fd-timeout">
        <Input id="fd-timeout" type="number" defaultValue="30" />
      </FieldRecipe>
      <FieldRecipe label="Ответственный" htmlFor="fd-owner">
        <Input id="fd-owner" defaultValue="Дежурный" />
      </FieldRecipe>
    </FieldGroup>
  </FormDisclosure>
</FieldGroup>`,_=`import { useState } from "react"
import { Button } from "@chucky23/design-system/react"

function ControlledDisclosure() {
  const [expanded, setExpanded] = useState(false)
  return (
    <FieldGroup>
      <Button type="button" size="xs" tone="neutral" variant="outline" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Свернуть параметры" : "Раскрыть параметры"}
      </Button>
      <FormDisclosure
        label="Ответственные и наблюдатели"
        selectedLabel="2 участника"
        expanded={expanded}
        onExpandedChange={setExpanded}
      >
        <FieldGroup>
          <FieldRecipe label="Владелец" htmlFor="fd-ctrl-owner">
            <Input id="fd-ctrl-owner" defaultValue="Анна Королёва" />
          </FieldRecipe>
        </FieldGroup>
      </FormDisclosure>
    </FieldGroup>
  )
}`,v=`<FormDisclosure
  label="Расширенные ограничения"
  selectedLabel="Задано политикой"
  disabled
>
  <FieldRecipe label="Лимит памяти" htmlFor="fd-disabled-mem">
    <Input id="fd-disabled-mem" defaultValue="512 MB" />
  </FieldRecipe>
</FormDisclosure>`,y=[{name:`FormDisclosure`,props:[{name:`label`,type:`ReactNode`,required:!0,description:`Заголовок сворачиваемой секции дополнительных параметров.`},{name:`children`,type:`ReactNode`,required:!0,description:`Второстепенные поля формы внутри раскрытой секции.`},{name:`icon`,type:`ReactNode`,description:`Необязательный значок слева от заголовка.`},{name:`selectedLabel`,type:`ReactNode`,description:`Тихая сводка текущих значений справа от заголовка в свёрнутом состоянии.`},{name:`defaultExpanded`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние раскрытия в неуправляемом режиме.`},{name:`expanded`,type:`boolean`,description:`Управляемое состояние раскрытия вместе с onExpandedChange.`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,description:`Вызывается при раскрытии и сворачивании секции.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Блокирует раскрытие секции.`},{name:`className`,type:`string`,description:`Дополнительные классы раскладки корня.`},{name:`id`,type:`string`,description:`Идентификатор корня.`}]}],b=[{href:`/components/field-group`,label:`FieldGroup`,description:`Колонка полей формы с единым ритмом и проверкой ошибок.`},{href:`/recipes/field`,label:`FieldRecipe`,description:`Вертикальные и горизонтальные строки полей.`},{href:`/components/collapsible`,label:`Collapsible`,description:`Произвольный сворачиваемый блок вне формы.`},{href:`/components/accordion`,label:`Accordion`,description:`Группа сворачиваемых секций инспектора.`}];function x(){return(0,h.jsxs)(l,{kind:`component`,route:`/components/form-disclosure`,description:`Сворачиваемая секция дополнительных параметров формы: показывает тихую сводку выбранных значений справа и раскрывает вторичные поля по запросу.`,usage:(0,h.jsx)(o,{use:[`Группа из двух и более второстепенных параметров формы (таймауты, повторы, уведомления, фильтры).`,`Показ текущих значений в свёрнутой строке через selectedLabel без загромождения диалога.`],avoid:[{text:`Скрытие одиночного булевого переключателя — покажи Switch сразу строкой.`,instead:{href:`/components/switch`,label:`Switch`}},{text:`Сворачивание технических деталей вне формы.`,instead:{href:`/components/collapsible`,label:`Collapsible`}},{text:`Несколько сворачиваемых разделов бокового инспектора.`,instead:{href:`/components/accordion`,label:`Accordion`}}]}),example:(0,h.jsx)(f,{layout:`stack`,code:g,children:(0,h.jsx)(u,{})}),imports:(0,h.jsx)(d,{code:`import { FieldGroup, FormDisclosure, Input } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,h.jsx)(s,{items:y}),related:(0,h.jsx)(c,{links:b}),children:[(0,h.jsx)(m,{id:`controlled`,label:`Управляемое раскрытие`,description:`Когда раскрытие секции зависит от внешнего действия или состояния валидации: передай expanded и onExpandedChange.`,children:(0,h.jsx)(f,{layout:`stack`,code:_,children:(0,h.jsx)(p,{})})}),(0,h.jsx)(m,{id:`disabled`,label:`Отключённая секция`,description:`Когда параметры заданы политикой проекта и сейчас недоступны для правки: сводка справа остаётся видимой.`,children:(0,h.jsx)(f,{layout:`stack`,code:v,children:(0,h.jsx)(t,{label:`Расширенные ограничения`,icon:(0,h.jsx)(r,{size:`xs`,"aria-hidden":`true`}),selectedLabel:`Задано политикой`,disabled:!0,children:(0,h.jsx)(n,{children:(0,h.jsx)(a,{label:`Лимит памяти`,htmlFor:`docs-fd-disabled-mem`,children:(0,h.jsx)(i,{id:`docs-fd-disabled-mem`,defaultValue:`512 MB`})})})})})})]})}export{x as default};