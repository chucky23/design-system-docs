import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{as as r}from"./useLabelableId-C6GEk9LR.js";import{D as i,O as a}from"./chunk-C6BK6UFJ-CUqnApcm.js";import{A as o,Ut as s,X as c,_t as l,dt as u,rt as d,vn as f}from"./index-BX5CNJVf.js";var p=e(t(),1),m=n(),h=`"neutral" | "ok" | "warn" | "err" | "info" | "accent" | "turn"`,g=[`дизайн`,`релиз`];function _(){let e=(0,p.useId)(),t=(0,p.useId)(),[n,_]=(0,p.useState)(!0),[v,y]=(0,p.useState)(g);function b(t){document.getElementById(e)?.focus(),_(t)}function x(e){document.getElementById(t)?.focus(),y(e)}return(0,m.jsxs)(u,{kind:`component`,route:`/components/tag`,description:`Метка признака, который задаёт пользователь: дизайн, релиз, Q2. TagGroup собирает метки в ряд.`,usage:(0,m.jsx)(f,{use:[`Категория или признак, который задаёт пользователь: фронтенд, Q2.`,`Выбранные значения фильтра с кнопкой снятия: removable.`],avoid:[{text:`Состояние, которое вычисляет система.`,instead:{href:`/components/badge`,label:`Badge`}},{text:`Статус задачи.`,instead:{href:`/components/status-tag`,label:`StatusTag`}},{text:`«Твой ход».`,instead:{href:`/components/status-tag#turn`,label:`StatusTag tone="turn"`}}]}),example:(0,m.jsxs)(c,{code:`function VersionTags() {
  const groupId = useId()
  const [showBackend, setShowBackend] = useState(true)

  function updateBackend(show: boolean) {
    document.getElementById(groupId)?.focus()
    setShowBackend(show)
  }

  return (
    <>
      <TagGroup id={groupId} tabIndex={-1} role="group" aria-label="Метки версии">
        <Tag>дизайн</Tag>
        <Tag variant="outline">v9.0.0</Tag>
        {showBackend && (
          <Tag removable removeLabel="Удалить метку «бэкенд»" onRemove={() => updateBackend(false)}>
            бэкенд
          </Tag>
        )}
      </TagGroup>
      {!showBackend && (
        <Button size="xs" variant="outline" onClick={() => updateBackend(true)}>Восстановить метки</Button>
      )}
    </>
  )
}`,children:[(0,m.jsxs)(a,{id:e,tabIndex:-1,role:`group`,"aria-label":`Метки версии`,children:[(0,m.jsx)(i,{children:`дизайн`}),(0,m.jsx)(i,{variant:`outline`,children:`v9.0.0`}),n&&(0,m.jsx)(i,{removable:!0,removeLabel:`Удалить метку «бэкенд»`,onRemove:()=>b(!1),children:`бэкенд`})]}),!n&&(0,m.jsx)(r,{size:`xs`,variant:`outline`,onClick:()=>b(!0),children:`Восстановить метки`})]}),imports:(0,m.jsx)(d,{code:`import { useId, useState } from "react"
import { Button, Tag, TagGroup } from "@chucky23/design-system/react"`}),api:(0,m.jsx)(o,{items:[{name:`Tag`,props:[{name:`variant`,type:`"default" | "outline" | "filled"`,defaultValue:`"default"`,description:`Приглушённый фон, рамка или фон primary.`},{name:`color`,type:h,defaultValue:`"neutral"`,description:`Цвет поверх варианта: neutral для обычной метки, accent выделяет одну категорию. Значения ok, warn, err и info для метки пользователя не бери: итог проверки показывает Badge. Значение turn устарело: «твой ход» показывает StatusTag с тоном turn.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота 16 или 18 px.`},{name:`format`,type:`"default" | "dot"`,defaultValue:`"default"`,description:`dot — цветная точка и слово без фона.`},{name:`removable`,type:`boolean`,defaultValue:`false`,description:`Добавляет кнопку удаления.`},{name:`onRemove`,type:`() => void`,description:`Вызывается по кнопке удаления.`},{name:`removeLabel`,type:`string`,defaultValue:`"Удалить"`,description:`Доступное имя кнопки удаления.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает кнопку удаления.`}]},{name:`TagGroup`,props:[{name:`children`,type:`ReactNode`,description:`Метки. Ряд переносится по ширине, зазор 4 px.`}]}]}),related:(0,m.jsx)(l,{links:[{href:`/components/status-tag`,label:`StatusTag`,description:`Метка статуса с готовой привязкой к WorkflowIcon.`},{href:`/components/badge`,label:`Badge`,description:`Плашка без удаления.`},{href:`/components/workflow-icon`,label:`WorkflowIcon`,description:`Значок статуса задачи.`}]}),children:[(0,m.jsx)(s,{id:`colors`,label:`Цвета`,description:`Метку ставит человек, поэтому она нейтральная. accent выделяет одну категорию в ряду. Итог проверки показывает Badge, статус задачи — StatusTag, «твой ход» — StatusTag с тоном turn.`,children:(0,m.jsxs)(c,{layout:`labels`,code:`<Tag>документация</Tag>
<Tag>исследование</Tag>
<Tag color="accent">дизайн</Tag>`,children:[(0,m.jsx)(i,{children:`документация`}),(0,m.jsx)(i,{children:`исследование`}),(0,m.jsx)(i,{color:`accent`,children:`дизайн`})]})}),(0,m.jsx)(s,{id:`variants`,label:`Варианты`,description:`Вариант задаёт вес: обычная метка, версия в рамке, выделенная метка. Размер sm — для плотной строки.`,children:(0,m.jsxs)(c,{code:`<Tag variant="default">дизайн</Tag>
<Tag variant="outline">v9.0.0</Tag>
<Tag variant="filled">релиз</Tag>
<Tag size="sm">бэкенд</Tag>`,children:[(0,m.jsx)(i,{variant:`default`,children:`дизайн`}),(0,m.jsx)(i,{variant:`outline`,children:`v9.0.0`}),(0,m.jsx)(i,{variant:`filled`,children:`релиз`}),(0,m.jsx)(i,{size:`sm`,children:`бэкенд`})]})}),(0,m.jsx)(s,{id:`dot`,label:`Точка`,description:`Когда признак стоит в плотной строке и фон лишний: точка и слово, accent выделяет одну категорию. Статус задачи показывает StatusTag значком и словом.`,children:(0,m.jsxs)(c,{layout:`labels-spaced`,code:`<Tag format="dot" color="accent">Дизайн</Tag>
<Tag format="dot">Фронтенд</Tag>
<Tag format="dot">Документация</Tag>`,children:[(0,m.jsx)(i,{format:`dot`,color:`accent`,children:`Дизайн`}),(0,m.jsx)(i,{format:`dot`,children:`Фронтенд`}),(0,m.jsx)(i,{format:`dot`,children:`Документация`})]})}),(0,m.jsx)(s,{id:`removable`,label:`С удалением`,description:`Когда метки правят на месте, например у задачи или в фильтре. Кнопка удаления не запускает щелчок по самой метке.`,children:(0,m.jsxs)(c,{code:`const initialTags = ["дизайн", "релиз"]

function TaskTags() {
  const groupId = useId()
  const [tags, setTags] = useState(initialTags)

  function updateTags(nextTags: string[]) {
    document.getElementById(groupId)?.focus()
    setTags(nextTags)
  }

  return (
    <>
      <TagGroup id={groupId} tabIndex={-1} role="group" aria-label="Метки задачи">
        {tags.map((tag) => (
          <Tag key={tag} removable
            removeLabel={tag === "дизайн" ? "Удалить метку «дизайн»" : "Убрать метку «релиз»"}
            onRemove={() => updateTags(tags.filter((item) => item !== tag))}
          >
            {tag}
          </Tag>
        ))}
        <Tag removable disabled removeLabel="Удалить закреплённую метку">закреплена</Tag>
      </TagGroup>
      {tags.length < initialTags.length && (
        <Button size="xs" variant="outline" onClick={() => updateTags(initialTags)}>Восстановить метки</Button>
      )}
    </>
  )
}`,children:[(0,m.jsxs)(a,{id:t,tabIndex:-1,role:`group`,"aria-label":`Метки задачи`,children:[v.map(e=>(0,m.jsx)(i,{removable:!0,removeLabel:e===`дизайн`?`Удалить метку «дизайн»`:`Убрать метку «релиз»`,onRemove:()=>x(v.filter(t=>t!==e)),children:e},e)),(0,m.jsx)(i,{removable:!0,disabled:!0,removeLabel:`Удалить закреплённую метку`,children:`закреплена`})]}),v.length<g.length&&(0,m.jsx)(r,{size:`xs`,variant:`outline`,onClick:()=>x(g),children:`Восстановить метки`})]})})]})}export{_ as default};