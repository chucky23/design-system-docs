import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{Ot as r,l as i}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{K as a}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as o,M as s,Ot as c,St as l,pt as u,rt as d,tn as f}from"./index-DnsCB0LC.js";var p=e(t(),1),m=n();function h(){let[e,t]=(0,p.useState)([!0,!1,!1]),n=e.filter(Boolean).length,h=n>0&&n<e.length;return(0,m.jsxs)(l,{kind:`component`,route:`/components/checkbox`,description:`Флажок для выбора с подтверждением: значение применяется кнопкой «Сохранить», а не сразу. Мгновенную настройку делает Switch.`,usage:(0,m.jsx)(o,{use:[`Согласие или признак, который применяется кнопкой «Сохранить».`,`Несколько независимых вариантов из списка.`,`Выбор строк таблицы, в том числе частичный: indeterminate.`],avoid:[{text:`Настройка, которая применяется сразу.`,instead:{href:`/components/switch`,label:`Switch`}},{text:`Один вариант из нескольких.`,instead:{href:`/components/radio-group`,label:`RadioGroup`}}]}),example:(0,m.jsxs)(d,{layout:`stack`,code:`<Checkbox defaultChecked>Закрыть автоматически через 30 минут</Checkbox>
<Checkbox description="Задача закрывается сама без ответа">Автозакрытие</Checkbox>
<Checkbox indeterminate>Все сервисы</Checkbox>
<Checkbox disabled>Недоступный вариант</Checkbox>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let auto_close = DsCheckbox::new("auto-close")
    .checked(true)
    .label("Закрыть автоматически через 30 минут")
    .description("Задача закрывается сама без ответа");
let all_services = DsCheckbox::new("all-services")
    .state(DsCheckboxState::Indeterminate)
    .label("Все сервисы")
    .on_change(|next_state, _window, _cx| {
        let _ = next_state;
    });
let disabled = DsCheckbox::new("disabled-option")
    .disabled(true)
    .label("Недоступный вариант");`,children:[(0,m.jsx)(r,{defaultChecked:!0,children:`Закрыть автоматически через 30 минут`}),(0,m.jsx)(r,{description:`Задача закрывается сама без ответа`,children:`Автозакрытие`}),(0,m.jsx)(r,{indeterminate:!0,children:`Все сервисы`}),(0,m.jsx)(r,{disabled:!0,children:`Недоступный вариант`})]}),imports:(0,m.jsx)(u,{from:`@chucky23/design-system/react`,names:[`Checkbox`,`Label`,`Body`]}),api:(0,m.jsx)(s,{items:[{name:`Checkbox`,props:[{name:`children`,type:`ReactNode`,description:`Подпись. Без неё подпись даёт внешний Label с htmlFor.`},{name:`description`,type:`ReactNode`,description:`Пояснение под подписью, связано через aria-describedby. Нужна подпись children.`},{name:`checked`,type:`boolean`,description:`Управляемое состояние, вместе с onCheckedChange.`},{name:`defaultChecked`,type:`boolean`,description:`Начальное состояние без управления.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,description:`Вызывается при смене состояния.`},{name:`indeterminate`,type:`boolean`,defaultValue:`false`,description:`Смешанное состояние: выбрана часть вариантов.`},{name:`disabled`,type:`boolean`,description:`Отключает флажок, по умолчанию наследуется от формы.`}]}]}),related:(0,m.jsx)(c,{links:[{href:`/components/switch`,label:`Switch`,description:`Настройка с немедленным действием.`},{href:`/components/radio-group`,label:`RadioGroup`,description:`Один вариант из нескольких.`},{href:`/components/label`,label:`Label`,description:`Внешняя подпись флажка.`},{href:`/components/field-help`,label:`FieldHelp`,description:`Справка рядом с подписью.`}]}),children:[(0,m.jsx)(f,{id:`external-label`,label:`Внешняя подпись`,description:`Когда подпись стоит отдельно от флажка, например в другой колонке. Щелчок по Label переключает значение.`,children:(0,m.jsxs)(d,{code:`<Checkbox id="notify" />
<Label htmlFor="notify">Уведомить дежурную команду</Label>`,children:[(0,m.jsx)(r,{id:`checkbox-notify`}),(0,m.jsx)(a,{htmlFor:`checkbox-notify`,children:`Уведомить дежурную команду`})]})}),(0,m.jsx)(f,{id:`states`,label:`Состояния`,description:`Когда флажок нельзя менять или без него форму не отправить: ошибку называет текст под флажком.`,children:(0,m.jsxs)(d,{layout:`stack`,code:`<Checkbox disabled defaultChecked>Отключённый и выбранный</Checkbox>
<Checkbox id="terms" aria-invalid="true" aria-describedby="terms-error">Принимаю условия</Checkbox>
<Body id="terms-error" tone="err">Нужно согласие</Body>`,children:[(0,m.jsx)(r,{disabled:!0,defaultChecked:!0,children:`Отключённый и выбранный`}),(0,m.jsx)(r,{id:`checkbox-terms`,"aria-invalid":`true`,"aria-describedby":`checkbox-terms-error`,children:`Принимаю условия`}),(0,m.jsx)(i,{id:`checkbox-terms-error`,tone:`err`,children:`Нужно согласие`})]})}),(0,m.jsx)(f,{id:`mixed`,label:`Выбрать все`,description:`Когда список можно отметить целиком. Родитель смешанный, пока отмечена часть вариантов.`,children:(0,m.jsxs)(d,{layout:`stack`,code:`import { useState } from "react"

function ServicePicker() {
  const [items, setItems] = useState([true, false, false])
  const selected = items.filter(Boolean).length
  return (
    <>
      <Checkbox indeterminate={selected > 0 && selected < items.length} checked={selected === items.length}
        onCheckedChange={(next) => setItems(items.map(() => next))}>Все сервисы</Checkbox>
      {items.map((value, index) => (
        <Checkbox key={index} checked={value}
          onCheckedChange={(next) => setItems(items.map((v, i) => (i === index ? next : v)))}>
          Сервис {index + 1}
        </Checkbox>
      ))}
    </>
  )
}`,children:[(0,m.jsx)(r,{indeterminate:h,checked:n===e.length,onCheckedChange:n=>{t(e.map(()=>n))},children:`Все сервисы`}),e.map((n,i)=>(0,m.jsxs)(r,{checked:n,onCheckedChange:n=>t(e.map((e,t)=>t===i?n:e)),children:[`Сервис `,i+1]},i))]})})]})}export{h as default};