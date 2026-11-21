import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{Gt as r,Ht as i,Jt as a,Kt as o,Mr as s,Ut as c,Wt as l,Yt as u,as as d,qt as f}from"./useLabelableId-C6GEk9LR.js";import{A as p,Er as m,Ut as h,W as g,X as _,_t as v,dt as y,rt as b,vn as x,vt as S}from"./index-BX5CNJVf.js";var C=e(t(),1),w=n(),T=`import { useState } from "react"

function CreateIncident() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("Таймаут шлюза API")
  const [error, setError] = useState<string>()
  const create = () => {
    if (!title.trim()) {
      setError("Назови инцидент: без названия дежурный не найдёт его в очереди.")
      return
    }
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Создать инцидент</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать инцидент</DialogTitle>
          <DialogDescription>Инцидент получит номер и попадёт в очередь дежурного.</DialogDescription>
        </DialogHeader>
        <FieldRecipe label="Название" htmlFor="incident-title" error={error}>
          <Input id="incident-title" value={title} onChange={(event) => { setTitle(event.target.value); setError(undefined) }} />
        </FieldRecipe>
        <DialogFooter>
          <DialogClose render={<Button tone="neutral" variant="outline" />}>Отменить</DialogClose>
          <Button onClick={create}>Создать</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,E=`Назови инцидент: без названия дежурный не найдёт его в очереди.`;function D(){let[e,t]=(0,C.useState)(!1),[n,D]=(0,C.useState)(`Таймаут шлюза API`),[O,k]=(0,C.useState)();return(0,w.jsxs)(y,{kind:`component`,route:`/components/dialog`,description:`Окно для короткой формы, которую нужно закончить или отменить, прежде чем вернуться к экрану. Закрывается крестиком, Escape или щелчком мимо окна.`,usage:(0,w.jsx)(x,{use:[`Короткая форма или задача, которую нужно закончить или отменить.`,`Действие, требующее внимания до возврата к экрану.`],avoid:[{text:`Подтверждение опасного действия.`,instead:{href:`/components/alert-dialog`,label:`AlertDialog`}},{text:`Форма рядом с коллекцией, которую нужно видеть.`,instead:{href:`/components/sheet`,label:`Sheet`}},{text:`Пояснение или поле без затемнения страницы.`,instead:{href:`/components/popover`,label:`Popover`}}]}),example:(0,w.jsx)(_,{code:T,children:(0,w.jsx)(g,{})}),imports:(0,w.jsx)(b,{code:`import {
  Button, Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose, Input,
} from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,w.jsx)(p,{items:[{name:`Dialog`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`},{name:`modal`,type:`boolean`,defaultValue:`true`,description:`Блокирует страницу под окном и держит фокус внутри.`}]},{name:`DialogContent`,props:[{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Крестик в правом верхнем углу.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя крестика для скринридера на языке приложения.`}]},{name:`DialogTrigger, DialogClose`,props:[{name:`render`,type:`ReactElement`,description:`Элемент вместо кнопки по умолчанию: render={<Button />}. Button не вкладывается в children.`}]}]}),related:(0,w.jsx)(v,{links:[{href:`/components/alert-dialog`,label:`AlertDialog`,description:`Подтверждение опасного действия.`},{href:`/components/sheet`,label:`Sheet`,description:`Панель у края для длинной формы.`},{href:`/components/popover`,label:`Popover`,description:`Небольшое окно у элемента без затемнения.`},{href:`/components/command`,label:`Command`,description:`Палитра команд в окне.`}]}),children:[(0,w.jsx)(h,{id:`open`,label:`Открытие по кнопке`,description:`Когда окно открывает кнопка на странице. Заголовок обязателен: он становится именем окна. Пустое обязательное поле не закрывает окно: ошибка встаёт под полем.`,children:(0,w.jsx)(_,{title:`С триггером`,code:T,children:(0,w.jsxs)(i,{open:e,onOpenChange:t,children:[(0,w.jsx)(u,{render:(0,w.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Создать инцидент`}),(0,w.jsxs)(l,{children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(a,{children:`Создать инцидент`}),(0,w.jsx)(r,{children:`Инцидент получит номер и попадёт в очередь дежурного.`})]}),(0,w.jsx)(m,{label:`Название`,htmlFor:`incident-title`,error:O,children:(0,w.jsx)(s,{id:`incident-title`,value:n,onChange:e=>{D(e.target.value),k(void 0)}})}),(0,w.jsxs)(o,{children:[(0,w.jsx)(c,{render:(0,w.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Отменить`}),(0,w.jsx)(d,{onClick:()=>{if(!n.trim())return k(E);t(!1)},children:`Создать`})]})]})]})})}),(0,w.jsx)(h,{id:`controlled`,label:`Управляемое открытие`,description:`Когда окно должно закрыться только после сохранения: состояние открытия хранит приложение.`,children:(0,w.jsx)(_,{code:`import { useState, type FormEvent } from "react"

function RenameProject() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("Платформа")
  const [error, setError] = useState<string>()
  const rename = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim()) {
      setError("Введи имя проекта: пустое имя участники не увидят в списке.")
      return
    }
    setOpen(false)
  }
  return (
    <>
      <Button tone="neutral" variant="outline" onClick={() => setOpen(true)}>Переименовать</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <form className="contents" onSubmit={rename} noValidate>
            <DialogHeader>
              <DialogTitle>Переименовать проект</DialogTitle>
              <DialogDescription>Новое имя увидят все участники.</DialogDescription>
            </DialogHeader>
            <FieldRecipe label="Имя проекта" htmlFor="project-name" error={error}>
              <Input id="project-name" value={name} onChange={(event) => { setName(event.target.value); setError(undefined) }} />
            </FieldRecipe>
            <DialogFooter><Button type="submit">Сохранить</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}`,children:(0,w.jsx)(S,{})})}),(0,w.jsx)(h,{id:`no-close`,label:`Без крестика`,description:`Когда в окне одно действие, например «Понятно» после новостей версии: крестик лишний, выход через кнопку в подвале.`,children:(0,w.jsx)(_,{code:`<Dialog>
  <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Что нового</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Что нового в версии 9</DialogTitle>
      <DialogDescription>Единый стиль и новая композиция экранов.</DialogDescription>
    </DialogHeader>
    <DialogFooter><DialogClose render={<Button />}>Понятно</DialogClose></DialogFooter>
  </DialogContent>
</Dialog>`,children:(0,w.jsxs)(i,{children:[(0,w.jsx)(u,{render:(0,w.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Что нового`}),(0,w.jsxs)(l,{showCloseButton:!1,children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(a,{children:`Что нового в версии 9`}),(0,w.jsx)(r,{children:`Единый стиль и новая композиция экранов.`})]}),(0,w.jsx)(o,{children:(0,w.jsx)(c,{render:(0,w.jsx)(d,{}),children:`Понятно`})})]})]})})})]})}export{D as default};