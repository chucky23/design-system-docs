import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{H as r,U as i,l as a}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Yn as o}from"./useLabelableId-Ck49MOKz.js";import{Fn as s,M as c,Ot as l,St as u,pt as d,rt as f,tn as p}from"./index-DnsCB0LC.js";var m=e(t(),1),h=n(),g=[`Портал`,`Каталог`,`Отчёты`];function _(){let[e,t]=(0,m.useState)(``),[n,_]=(0,m.useState)(``),v=n.trim().toLowerCase(),y=g.filter(e=>e.toLowerCase().includes(v));return(0,h.jsxs)(u,{kind:`component`,route:`/components/expandable-search`,description:`Поиск, свёрнутый в лупу: раскрывается в тихое поле в строке заголовка. Escape очищает запрос, затем сворачивает поле.`,usage:(0,h.jsx)(s,{use:[`Поиск по странице в строке заголовка, где поле нужно не всегда.`],avoid:[{text:`Поиск в панели коллекции: реестр и доска уже собирают его сами.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Поиск, который всегда виден.`,instead:{href:`/components/input`,label:`Input`}},{text:`Поиск команд и страниц.`,instead:{href:`/components/command`,label:`Command`}}]}),example:(0,h.jsx)(f,{code:`import { useState } from "react"

function AssigneeSearch() {
  const [query, setQuery] = useState("")
  return <ExpandableSearch label="Найти исполнителя" placeholder="Найти" value={query} onValueChange={setQuery} />
}`,children:(0,h.jsx)(o,{label:`Найти исполнителя`,placeholder:`Найти`,value:e,onValueChange:t})}),imports:(0,h.jsx)(d,{from:`@chucky23/design-system/react`,names:[`ExpandableSearch`,`List`,`ListItem`,`Body`]}),api:(0,h.jsx)(c,{items:[{name:`ExpandableSearch`,props:[{name:`value`,type:`string`,required:!0,description:`Запрос. Непустой запрос держит поле раскрытым.`},{name:`onValueChange`,type:`(value: string) => void`,required:!0,description:`Вызывается при вводе и очистке.`},{name:`label`,type:`string`,required:!0,description:`Имя лупы и поля, например «Найти исполнителя».`},{name:`placeholder`,type:`string`,description:`Подсказка в раскрытом поле.`},{name:`width`,type:`string`,defaultValue:`"15rem"`,description:`Ширина раскрытого поля, CSS-длина, не шире контейнера.`},{name:`defaultExpanded`,type:`boolean`,defaultValue:`false`,description:`Начать раскрытым, например в поповере, открытом ради поиска.`},{name:`findShortcut`,type:`boolean`,defaultValue:`false`,description:`Для поиска по всему экрану приложения. Раскрывает поле по / и ⌘F (Ctrl+F) вне полей ввода и диалогов. Перехватывает сочетание встроенного поиска браузера.`},{name:`ref`,type:`Ref<ExpandableSearchHandle>`,description:`Методы focus() и expand() для управления снаружи.`}]}]}),related:(0,h.jsx)(l,{links:[{href:`/components/input`,label:`Input`,description:`Тихое поле variant="quiet" без сворачивания.`},{href:`/components/command`,label:`Command`,description:`Палитра команд с поиском.`}]}),children:[(0,h.jsx)(p,{id:`expanded`,label:`Раскрытый сразу`,description:`Когда окно открыли ради поиска, например поповер выбора метки: поле раскрыто с первого кадра.`,children:(0,h.jsx)(f,{fragment:!0,code:`<ExpandableSearch defaultExpanded label="Найти метку" placeholder="Найти метку" value={query} onValueChange={setQuery} />`,children:(0,h.jsx)(o,{defaultExpanded:!0,label:`Найти метку`,placeholder:`Найти метку`,value:e,onValueChange:t})})}),(0,h.jsx)(p,{id:`shortcut`,label:`Поиск по списку`,description:`Когда запрос фильтрует короткий список рядом. Пустой результат называет текст «Совпадений нет».`,children:(0,h.jsxs)(f,{layout:`stack`,code:`import { useState } from "react"

const projects = ["Портал", "Каталог", "Отчёты"]

function ProjectSearch() {
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLowerCase()
  const matches = projects.filter((project) => project.toLowerCase().includes(normalizedQuery))
  return (
    <>
      <ExpandableSearch width="12rem" label="Найти проект" placeholder="Найти проект" value={query} onValueChange={setQuery} />
      {matches.length > 0 ? (
        <List>
          {matches.map((project) => <ListItem key={project}>{project}</ListItem>)}
        </List>
      ) : <Body>Совпадений нет</Body>}
    </>
  )
}`,children:[(0,h.jsx)(o,{width:`12rem`,label:`Найти проект`,placeholder:`Найти проект`,value:n,onValueChange:_}),y.length>0?(0,h.jsx)(r,{children:y.map(e=>(0,h.jsx)(i,{children:e},e))}):(0,h.jsx)(a,{children:`Совпадений нет`})]})})]})}export{_ as default};