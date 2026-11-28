import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{pt as r}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Fn as i,M as a,Ot as o,St as s,pt as c,rt as l,tn as u}from"./index-DnsCB0LC.js";var d=e(t(),1),f=n();function p(){let[e,t]=(0,d.useState)(!0);return(0,f.jsxs)(s,{kind:`component`,route:`/components/switch`,description:`Переключатель настройки, которая применяется сразу. Если значение сохраняется кнопкой «Сохранить», бери Checkbox.`,usage:(0,f.jsx)(i,{use:[`Настройка, которая применяется сразу, без кнопки «Сохранить».`,`Включение и выключение функции в списке настроек.`],avoid:[{text:`Значение формы, которое применяется кнопкой «Сохранить».`,instead:{href:`/components/checkbox`,label:`Checkbox`}},{text:`Режим в панели инструментов.`,instead:{href:`/components/toggle`,label:`Toggle`}}]}),example:(0,f.jsxs)(l,{layout:`stack`,code:`<Switch defaultChecked>Автопринятие</Switch>
<Switch>Уведомлять агента</Switch>
<Switch disabled>Недоступная настройка</Switch>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let auto_accept = DsSwitch::new("auto-accept")
    .checked(is_enabled)
    .label("Автопринятие")
    .on_change(|next, _window, _cx| {
        let _ = next;
    });
let notify = DsSwitch::new("notify-agent")
    .checked(false)
    .label("Уведомлять агента")
    .description("Отправлять уведомление при завершении прогона");
let locked = DsSwitch::new("locked")
    .disabled(true)
    .label("Недоступная настройка");`,children:[(0,f.jsx)(r,{defaultChecked:!0,children:`Автопринятие`}),(0,f.jsx)(r,{children:`Уведомлять агента`}),(0,f.jsx)(r,{disabled:!0,children:`Недоступная настройка`})]}),imports:(0,f.jsx)(c,{from:`@chucky23/design-system/react`,names:[`Switch`]}),api:(0,f.jsx)(a,{items:[{name:`Switch`,props:[{name:`children`,type:`ReactNode`,description:`Подпись справа, щелчок по ней переключает. Без неё имя даёт aria-label или внешний Label.`},{name:`description`,type:`ReactNode`,description:`Пояснение под подписью, дорожка стоит против первой строки. Нужна подпись children.`},{name:`checked`,type:`boolean`,description:`Управляемое состояние, вместе с onCheckedChange.`},{name:`defaultChecked`,type:`boolean`,description:`Начальное состояние без управления.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,description:`Вызывается при смене состояния.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает переключатель.`}]}]}),related:(0,f.jsx)(o,{links:[{href:`/components/checkbox`,label:`Checkbox`,description:`Выбор, который подтверждают кнопкой.`},{href:`/components/toggle`,label:`Toggle`,description:`Кнопка с нажатым состоянием.`}]}),children:[(0,f.jsx)(u,{id:`description`,label:`С пояснением`,description:`Когда последствия настройки неочевидны: description объясняет, что изменится.`,children:(0,f.jsx)(l,{layout:`stack`,code:`<Switch description="Агент не запускается сам после перехода">Без автозапуска</Switch>`,children:(0,f.jsx)(r,{description:`Агент не запускается сам после перехода`,children:`Без автозапуска`})})}),(0,f.jsx)(u,{id:`controlled`,label:`Управляемое состояние`,description:`Когда настройку нужно сразу отправить на сервер: значение хранит приложение.`,children:(0,f.jsx)(l,{layout:`stack`,code:`import { useState } from "react"

function AutoAccept() {
  const [auto, setAuto] = useState(true)
  return <Switch checked={auto} onCheckedChange={setAuto}>Автопринятие</Switch>
}`,children:(0,f.jsx)(r,{checked:e,onCheckedChange:t,children:`Автопринятие`})})}),(0,f.jsx)(u,{id:`no-label`,label:`Без видимой подписи`,description:`Когда подпись стоит в соседней колонке таблицы: имя для скринридера задаёт aria-label.`,children:(0,f.jsx)(l,{code:`<Switch aria-label="Уведомлять агента" defaultChecked />`,children:(0,f.jsx)(r,{"aria-label":`Уведомлять агента`,defaultChecked:!0})})})]})}export{p as default};