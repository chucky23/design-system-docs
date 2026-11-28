import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{s as t,u as n}from"./chunk-QFMPRPBF-DmZ5KIb1.js";import{H as r,Lt as i,R as a,Ts as o,W as s,et as c,ft as l,m as u,ws as d}from"./useLabelableId-Ck49MOKz.js";import{Fn as f,Jn as p,M as m,Ot as h,St as g,Tt as _,Xn as v,Yn as y,jt as b,pt as x,rt as S,sn as C,tn as w,xn as T}from"./index-DnsCB0LC.js";var E=e(),D=`"primary" | "neutral" | "danger" | "ok" | "warn" | "err" | "info"`,O=[[`primary`,`Главное действие экрана, одно на экран: «Создать задачу», «Сохранить»`],[`neutral`,`Остальные действия: настроить, отменить, экспортировать`],[`danger`,`Опасное действие: удаление и другое необратимое действие. Перед ним спроси подтверждение в AlertDialog`],[`err`,`Действие над ошибкой системы: «Остановить процесс», «Откатить выкладку». Не удаление. Тональная: нейтральная плашка и красная подпись`],[`ok, warn, info`,`Действие над статусом системы: закрыть инцидент, эскалировать, начать расследование`]],k=[[`solid`,`Главное действие экрана или диалога. С tone="danger" — подтверждение «Удалить» в AlertDialog`],[`outline`,`Второе по важности действие рядом с главным`],[`soft`,`Действие с тоном рядом с другими действиями, не спорит с главным: «Удалить» в строке или меню, «Эскалировать»`],[`ghost`,`Действие в плотной строке, панели инструментов или отмена в подвале диалога`],[`link`,`Переход к справке или подробностям внутри текста`]],A=[[`xs`,`20 px`,`В строке таблицы и на карточке`],[`sm`,`24 px`,`По умолчанию: форма, панель инструментов, подвал`],[`md`,`28 px`,`Главное действие диалога и шапки страницы`]],j=`"solid" | "outline" | "soft" | "ghost" | "link"`,M=`import { Button } from "@chucky23/design-system/react"
import type { MouseEvent } from "react"
import { useHref, useNavigate } from "react-router"

function OpenTasksLink() {
  const navigate = useNavigate()
  const href = useHref("/apps/tasks")
  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    // Средняя кнопка и ⌘, Ctrl, Shift, Alt оставляют браузеру новую вкладку или окно.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate("/apps/tasks")
  }
  return <Button href={href} onClick={open} tone="neutral" variant="outline">Открыть задачи</Button>
}`;function N(){let e=n(),N=t(`/apps/tasks`);return(0,E.jsxs)(g,{kind:`component`,route:`/components/button`,description:`Запускает действие: сохранить, создать, отправить. Тон говорит, что за действие, вариант — насколько оно важно на экране. IconButton — то же действие без текста.`,usage:(0,E.jsx)(f,{use:[`Действие с подписью: сохранить, создать, отправить.`,`Главное действие экрана: одна бирюзовая кнопка на экран.`,`Действие без подписи: IconButton с обязательным label.`,`Переход на другой экран в форме кнопки: href рисует ссылку.`],avoid:[{text:`Режим, который остаётся включённым.`,instead:{href:`/components/toggle`,label:`Toggle`}},{text:`Пять и больше действий у одной сущности.`,instead:{href:`/components/dropdown-menu`,label:`DropdownMenu`}}]}),example:(0,E.jsxs)(S,{code:`<Button>Сохранить</Button>
<Button tone="neutral" variant="outline">Настроить</Button>
<Button tone="neutral" variant="soft">Экспортировать</Button>
<Button tone="neutral" variant="ghost">Отменить</Button>
<Button tone="danger" variant="solid">Удалить</Button>
<Button variant="link">Открыть справку</Button>`,gpuiCode:`use anikin_lab_gpui::design_system::{DsButton, DsButtonTone, DsButtonVariant};

let save = DsButton::new("save")
    .label("Сохранить")
    .variant(DsButtonVariant::Solid)
    .tone(DsButtonTone::Primary);
let configure = DsButton::new("configure")
    .label("Настроить")
    .variant(DsButtonVariant::Outline);
let export = DsButton::new("export")
    .label("Экспортировать")
    .variant(DsButtonVariant::Soft);
let cancel = DsButton::new("cancel")
    .label("Отменить")
    .variant(DsButtonVariant::Ghost);
let delete = DsButton::new("delete")
    .label("Удалить")
    .variant(DsButtonVariant::Solid)
    .tone(DsButtonTone::Danger);`,children:[(0,E.jsx)(d,{"data-release-state":`button-hover`,children:`Сохранить`}),(0,E.jsx)(d,{"data-release-state":`button-focus`,tone:`neutral`,variant:`outline`,children:`Настроить`}),(0,E.jsx)(d,{tone:`neutral`,variant:`soft`,children:`Экспортировать`}),(0,E.jsx)(d,{tone:`neutral`,variant:`ghost`,children:`Отменить`}),(0,E.jsx)(d,{tone:`danger`,variant:`solid`,children:`Удалить`}),(0,E.jsx)(d,{variant:`link`,children:`Открыть справку`})]}),imports:(0,E.jsx)(x,{from:`@chucky23/design-system/react`,names:[`Button`,`IconButton`]}),api:(0,E.jsx)(m,{items:[{name:`Button`,props:[{name:`tone`,type:D,defaultValue:`"primary"`,description:`Смысл действия. primary — у solid и soft, у outline, ghost и link по умолчанию neutral.`},{name:`variant`,type:j,defaultValue:`"solid"`,description:`Вес действия.`},{name:`size`,type:`"xs" | "sm" | "md"`,defaultValue:`"sm"`,description:`Высота 20, 24 или 28 px.`},{name:`shortcut`,type:`string`,description:`Сочетание показывается после подписи; с onClick обычная кнопка также привязывает действие. У submit и без onClick это только подсказка.`},{name:`fullWidth`,type:`boolean`,defaultValue:`false`,description:`Ширина контейнера.`},{name:`loading`,type:`boolean | { delay?: number }`,defaultValue:`false`,description:`Spinner перед подписью и блокировка нажатия.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает действие.`},{name:`href`,type:`string`,description:`Ссылочная форма для перехода на другой экран: кнопка рисуется ссылкой <a> того же вида. onClick вызывается до перехода, роутер может отменить его через preventDefault и перейти сам. Атрибуты кнопки и формы — type, form, name, value — ссылке запрещены типами.`},{name:`target`,type:`string`,description:`Окно перехода ссылочной формы, например _blank. Без href не действует.`},{name:`rel`,type:`string`,description:`Отношение ссылочной формы к целевой странице, например noopener. Без href не действует.`},{name:`className`,type:`string`,description:`Место кнопки на экране: отступы снаружи, ширина, место во flex и grid. Высоту, поля и цвет задают size, variant и tone. Остальные атрибуты <button> — type, form, aria-*, onClick — кнопка передаёт элементу.`},{name:`ref`,type:`Ref<HTMLButtonElement | HTMLAnchorElement>`,description:`Ссылка на элемент: фокус, измерение, якорь всплывающего окна. Без href — Ref<HTMLButtonElement> на <button>, с href — Ref<HTMLAnchorElement> на <a>.`}]},{name:`IconButton`,props:[{name:`label`,type:`string`,required:!0,description:`Доступное имя. Пустая строка вызывает ошибку.`},{name:`children`,type:`ReactNode`,required:!0,description:`Один значок из /icons без своего aria-label: имя кнопке даёт label.`},{name:`tone`,type:D,defaultValue:`"neutral"`,description:`Смысл действия.`},{name:`variant`,type:`${j} | "bare"`,defaultValue:`"ghost"`,description:`Вес действия. bare — без рамки и фона, для действия внутри элемента.`},{name:`size`,type:`"xs" | "sm" | "md"`,defaultValue:`"sm"`,description:`Квадрат 20, 24 или 28 px.`},{name:`loading`,type:`boolean | { delay?: number }`,defaultValue:`false`,description:`Spinner вместо значка и блокировка нажатия.`}]}]}),related:(0,E.jsx)(h,{links:[{href:`/components/toggle`,label:`Toggle`,description:`Кнопка с нажатым состоянием.`},{href:`/components/copy-button`,label:`CopyButton`,description:`Копирует текст и подтверждает значком.`},{href:`/components/dropdown-menu`,label:`DropdownMenu`,description:`Меню из кнопки с действиями.`},{href:`/screens/shell`,label:`Действия страницы`,description:`Главное действие экрана живёт в WorkspacePage.actions.`}]}),children:[(0,E.jsx)(w,{id:`variants`,label:`Варианты`,description:`Вариант задаёт вес. Чем важнее действие, тем плотнее кнопка.`,children:(0,E.jsx)(T,{label:`Когда какой вариант`,columns:[{label:`variant`,kind:`name`,width:`18%`},{label:`Когда брать`,kind:`muted`}],rows:k})}),(0,E.jsxs)(w,{id:`sizes`,label:`Размеры`,description:`Размер берут по месту, а не по важности: важность задают тон и вариант.`,children:[(0,E.jsxs)(S,{code:`<Button size="xs" tone="neutral" variant="ghost">Назначить</Button>
<Button size="sm" tone="neutral" variant="outline">Отменить</Button>
<Button size="md">Создать задачу</Button>`,gpuiCode:`use anikin_lab_gpui::design_system::{DsButton, DsButtonTone, DsButtonVariant, DsSize};

let assign = DsButton::new("assign")
    .label("Назначить")
    .size(DsSize::Xs)
    .variant(DsButtonVariant::Ghost);
let cancel = DsButton::new("cancel")
    .label("Отменить")
    .size(DsSize::Sm)
    .variant(DsButtonVariant::Outline);
let create = DsButton::new("create")
    .label("Создать задачу")
    .size(DsSize::Md)
    .variant(DsButtonVariant::Solid)
    .tone(DsButtonTone::Primary);`,children:[(0,E.jsx)(d,{size:`xs`,tone:`neutral`,variant:`ghost`,children:`Назначить`}),(0,E.jsx)(d,{size:`sm`,tone:`neutral`,variant:`outline`,children:`Отменить`}),(0,E.jsx)(d,{size:`md`,children:`Создать задачу`})]}),(0,E.jsx)(T,{label:`Когда какой размер`,columns:[{label:`size`,kind:`name`,width:`18%`},{label:`Высота`,kind:`code`,width:`14%`},{label:`Где`,kind:`muted`}],rows:A})]}),(0,E.jsxs)(w,{id:`tones`,label:`Тона`,description:`Тон говорит, что за действие. Одна главная кнопка primary на экран.`,children:[(0,E.jsx)(T,{label:`Когда какой тон`,columns:[{label:`tone`,kind:`name`,width:`18%`},{label:`Когда брать`,kind:`muted`}],rows:O}),(0,E.jsxs)(S,{title:`Главное, обычное и опасное действие`,code:`<Button>Создать задачу</Button>
<Button tone="neutral" variant="outline">Настроить</Button>
<Button tone="danger" variant="solid">Удалить задачу</Button>`,children:[(0,E.jsx)(d,{children:`Создать задачу`}),(0,E.jsx)(d,{tone:`neutral`,variant:`outline`,children:`Настроить`}),(0,E.jsx)(d,{tone:`danger`,variant:`solid`,children:`Удалить задачу`})]}),(0,E.jsxs)(S,{title:`Действия над статусом системы`,code:`<Button tone="ok" variant="soft">Закрыть инцидент</Button>
<Button tone="warn" variant="soft">Эскалировать</Button>
<Button tone="err" variant="soft">Остановить процесс</Button>
<Button tone="info" variant="soft">Расследовать</Button>`,children:[(0,E.jsx)(d,{tone:`ok`,variant:`soft`,children:`Закрыть инцидент`}),(0,E.jsx)(d,{tone:`warn`,variant:`soft`,children:`Эскалировать`}),(0,E.jsx)(d,{tone:`err`,variant:`soft`,children:`Остановить процесс`}),(0,E.jsx)(d,{tone:`info`,variant:`soft`,children:`Расследовать`})]})]}),(0,E.jsx)(w,{id:`with-icon`,label:`Значок и подпись`,description:`Когда значок помогает быстрее найти действие: «Создать» с плюсом, «Продолжить» со стрелкой. Значок декоративен, имя даёт подпись.`,children:(0,E.jsxs)(S,{code:`import { AddIcon, ForwardIcon } from "@chucky23/design-system/icons"

<Button><AddIcon aria-hidden="true" />Создать задачу</Button>
<Button tone="neutral" variant="outline">Продолжить<ForwardIcon aria-hidden="true" /></Button>
<Button tone="neutral" variant="outline">Отправить</Button>`,children:[(0,E.jsxs)(d,{children:[(0,E.jsx)(u,{"aria-hidden":`true`}),`Создать задачу`]}),(0,E.jsxs)(d,{tone:`neutral`,variant:`outline`,children:[`Продолжить`,(0,E.jsx)(c,{"aria-hidden":`true`})]}),(0,E.jsx)(d,{tone:`neutral`,variant:`outline`,children:`Отправить`})]})}),(0,E.jsxs)(w,{id:`shortcuts`,label:`Сочетания клавиш`,description:`Когда действием пользуются часто. Сочетание привязано к действию, если у обычной кнопки есть onClick. У submit и без onClick оно только показывается.`,children:[(0,E.jsx)(S,{title:`Действие по сочетанию`,code:`function create() {
  // Здесь приложение создаёт запись.
}

<Button shortcut="Meta+B" onClick={create}>Создать запись</Button>`,children:(0,E.jsx)(p,{})}),(0,E.jsx)(S,{title:`Отправка формы`,layout:`stack`,code:`<Button type="submit" shortcut="Meta+Enter">Сохранить</Button>`,children:(0,E.jsx)(v,{})}),(0,E.jsx)(S,{title:`Только подсказка`,code:`<Button shortcut="Meta+I">Экспортировать</Button>`,children:(0,E.jsx)(y,{})})]}),(0,E.jsx)(w,{id:`icon-button`,label:`IconButton`,description:`Когда места мало и значок понятен без слов: в строке таблицы, в панели инструментов. Подпись обязательна, она становится доступным именем.`,children:(0,E.jsxs)(S,{code:`import { DeleteIcon, DownloadIcon, EditIcon, MoreIcon, WarningIcon } from "@chucky23/design-system/icons"

<IconButton label="Другие действия" size="xs"><MoreIcon /></IconButton>
<IconButton label="Скачать отчёт" variant="outline"><DownloadIcon /></IconButton>
<IconButton label="Редактировать" size="md" tone="primary" variant="soft"><EditIcon /></IconButton>
<IconButton label="Удалить" tone="danger" variant="soft"><DeleteIcon /></IconButton>
<IconButton label="Показать предупреждения" size="md" tone="warn" variant="outline"><WarningIcon /></IconButton>`,gpuiCode:`use anikin_lab_gpui::components::IconName;
use anikin_lab_gpui::design_system::{DsButtonTone, DsButtonVariant, DsIconButton, DsSize};

let settings = DsIconButton::new("settings", IconName::Settings)
    .size(DsSize::Xs)
    .variant(DsButtonVariant::Ghost)
    .accessibility_label("Настройки");
let add = DsIconButton::new("add", IconName::Plus)
    .size(DsSize::Md)
    .tone(DsButtonTone::Primary)
    .variant(DsButtonVariant::Soft)
    .accessibility_label("Добавить");
let close = DsIconButton::new("close", IconName::Close)
    .tone(DsButtonTone::Danger)
    .variant(DsButtonVariant::Soft)
    .accessibility_label("Удалить");`,children:[(0,E.jsx)(o,{label:`Другие действия`,size:`xs`,children:(0,E.jsx)(l,{})}),(0,E.jsx)(o,{label:`Скачать отчёт`,variant:`outline`,children:(0,E.jsx)(r,{})}),(0,E.jsx)(o,{label:`Редактировать`,size:`md`,tone:`primary`,variant:`soft`,children:(0,E.jsx)(s,{})}),(0,E.jsx)(o,{label:`Удалить`,tone:`danger`,variant:`soft`,children:(0,E.jsx)(a,{})}),(0,E.jsx)(o,{label:`Показать предупреждения`,size:`md`,tone:`warn`,variant:`outline`,children:(0,E.jsx)(i,{})})]})}),(0,E.jsx)(w,{id:`states`,label:`Состояния`,description:`Когда действие сейчас недоступно или ждёт ответа сервера: loading блокирует повторное нажатие.`,children:(0,E.jsxs)(S,{code:`<Button disabled>Сохранить</Button>
<Button tone="neutral" variant="outline" disabled>Настроить</Button>
<Button loading>Сохраняю…</Button>
<Button loading={{ delay: 300 }}>Отправляю</Button>`,children:[(0,E.jsx)(d,{"data-release-state":`button-disabled`,disabled:!0,children:`Сохранить`}),(0,E.jsx)(d,{tone:`neutral`,variant:`outline`,disabled:!0,children:`Настроить`}),(0,E.jsx)(d,{"data-release-state":`button-loading`,loading:!0,children:`Сохраняю…`}),(0,E.jsx)(d,{loading:{delay:300},children:`Отправляю`})]})}),(0,E.jsx)(w,{id:`retry`,label:`Ошибка и повтор`,description:`Когда запрос может не пройти: ошибка видна рядом, введённое остаётся в поле. Здесь первый запрос падает, второй проходит, фокус остаётся на кнопке.`,children:(0,E.jsx)(S,{code:`import { useState } from "react"
import { SaveIcon } from "@chucky23/design-system/icons"

function SaveTaskActions({ onSave }: { onSave: () => Promise<void> }) {
  const [pending, setPending] = useState(false)
  const save = async () => {
    setPending(true)
    try {
      await onSave()
    } finally {
      setPending(false)
    }
  }
  return (
    <>
      <Button loading={pending} onClick={save}>Сохранить задачу</Button>
      <IconButton label="Сохранить срок" loading={pending} onClick={save}><SaveIcon /></IconButton>
    </>
  )
}`,children:(0,E.jsxs)(b,{gap:`lg`,children:[(0,E.jsx)(_,{}),(0,E.jsx)(_,{iconOnly:!0})]})})}),(0,E.jsxs)(w,{id:`link`,label:`Ссылка: href`,description:`Когда кнопка ведёт на другой экран, а не выполняет действие. С href кнопка рисуется ссылкой <a> того же вида: её можно открыть в новой вкладке, диктор читает её как ссылку. В приложении с роутером onClick отменяет обычный переход и вызывает navigate, а клик с модификатором оставляет браузеру.`,children:[(0,E.jsxs)(S,{code:`import { ForwardIcon } from "@chucky23/design-system/icons"

<Button href="/apps/tasks" tone="neutral" variant="outline">Открыть задачи</Button>
<Button href="/components/tag" tone="neutral" variant="ghost">Метки<ForwardIcon aria-hidden="true" /></Button>`,children:[(0,E.jsx)(d,{href:`/apps/tasks`,tone:`neutral`,variant:`outline`,children:`Открыть задачи`}),(0,E.jsxs)(d,{href:`/components/tag`,tone:`neutral`,variant:`ghost`,children:[`Метки`,(0,E.jsx)(c,{"aria-hidden":`true`})]})]}),(0,E.jsx)(S,{title:`Переход через роутер`,code:M,children:(0,E.jsx)(d,{href:N,onClick:t=>{t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(t.preventDefault(),e(`/apps/tasks`))},tone:`neutral`,variant:`outline`,children:`Открыть задачи`})})]}),(0,E.jsx)(w,{id:`full-width`,label:`На всю ширину`,description:`Только в узкой колонке, где кнопки стоят друг под другом: подвал боковой или выдвижной панели. В строке, диалоге, шапке и форме кнопка остаётся по ширине подписи.`,children:(0,E.jsx)(S,{layout:`block`,code:`import { Button, SheetContent, SheetFooter } from "@chucky23/design-system/react"

<SheetContent>
  …
  <SheetFooter>
    <Button fullWidth>Сохранить</Button>
    <Button tone="neutral" variant="outline" fullWidth>Отменить</Button>
  </SheetFooter>
</SheetContent>`,children:(0,E.jsx)(C,{fullWidthActions:!0})})})]})}export{N as default};