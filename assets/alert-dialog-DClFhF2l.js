import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{as as r}from"./useLabelableId-C6GEk9LR.js";import{a as i,c as a,d as o,f as s,l as c,o as l,p as u,s as d,u as f}from"./chunk-XANDBWJ2-rTxCz50_.js";import{A as p,Ut as m,X as h,_t as g,dt as _,k as v,rt as y,vn as b}from"./index-BX5CNJVf.js";var x=e(t(),1),S=n();function C(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(_,{kind:`component`,route:`/components/alert-dialog`,description:`Просит подтвердить опасное действие: удаление, сброс, отзыв доступа. Закрывается только кнопкой или Escape, щелчок мимо окна его не закрывает.`,usage:(0,S.jsx)(b,{use:[`Подтверждение необратимого действия: удаление, сброс, отзыв доступа.`,`Выбор, который нельзя закрыть щелчком мимо окна.`],avoid:[{text:`Обычная форма или задача.`,instead:{href:`/components/dialog`,label:`Dialog`}},{text:`Действие, которое можно отменить: удали сразу и предложи отмену в тосте.`,instead:{href:`/components/sonner`,label:`Toaster`}}]}),example:(0,S.jsx)(h,{code:`<AlertDialog>
  <AlertDialogTrigger render={<Button tone="danger" variant="soft" />}>Удалить</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Удалить задачу TASK-128?</AlertDialogTitle>
      <AlertDialogDescription>Задача исчезнет из доски и реестра. Действие нельзя отменить.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Отменить</AlertDialogCancel>
      <AlertDialogAction>Удалить</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,children:(0,S.jsx)(v,{})}),imports:(0,S.jsx)(y,{code:`import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from "@chucky23/design-system/react"`}),api:(0,S.jsx)(p,{items:[{name:`AlertDialog`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`},{name:`modal`,type:`boolean`,defaultValue:`true`,description:`Блокирует страницу под окном и держит фокус внутри.`}]},{name:`AlertDialogTrigger`,props:[{name:`render`,type:`ReactElement`,description:`Элемент-триггер: render={<Button />}. Button не вкладывается в children.`}]},{name:`AlertDialogAction`,props:[{name:`tone`,type:`"primary" | "neutral" | "danger" | "ok" | "warn" | "err" | "info"`,defaultValue:`"danger"`,description:`Смысл кнопки подтверждения, как у Button. Нажатие выполняет действие и закрывает окно.`},{name:`variant`,type:`"solid" | "soft" | "outline" | "ghost" | "link"`,defaultValue:`"solid"`,description:`Вес кнопки, как у Button. По умолчанию сплошная: AlertDialog подтверждает только необратимое действие. Прежний мягкий вид — явный soft. Прежние значения destructive и default работают как алиасы.`}]},{name:`AlertDialogCancel`,props:[{name:`variant`,type:`ButtonProps["variant"]`,defaultValue:`"outline"`,description:`Кнопка отказа. Закрывает окно без действия.`}]},{name:`AlertDialogContent`,props:[{name:`className`,type:`string`,description:`Дополнительные классы окна. Роль alertdialog и ловушка фокуса уже заданы.`}]}]}),related:(0,S.jsx)(g,{links:[{href:`/components/dialog`,label:`Dialog`,description:`Окно с формой, которое закрывается кликом по затемнению.`},{href:`/components/sheet`,label:`Sheet`,description:`Боковая панель для длинной формы.`},{href:`/components/dropdown-menu`,label:`DropdownMenu`,description:`Меню действий, из которого вызывается подтверждение.`}]}),children:[(0,S.jsx)(m,{id:`confirm`,label:`Подтверждение действия`,description:`Приложение удаляет только после AlertDialogAction. Отмена и Escape ничего не меняют.`,children:(0,S.jsx)(h,{code:`<AlertDialog>
  <AlertDialogTrigger render={<Button tone="danger" variant="soft" />}>Удалить задачу</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Удалить задачу?</AlertDialogTitle>
      <AlertDialogDescription>Её не получится вернуть.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Отменить</AlertDialogCancel>
      <AlertDialogAction>Удалить</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,children:(0,S.jsxs)(i,{children:[(0,S.jsx)(u,{render:(0,S.jsx)(r,{tone:`danger`,variant:`soft`}),children:`Удалить задачу`}),(0,S.jsxs)(a,{children:[(0,S.jsxs)(o,{children:[(0,S.jsx)(s,{children:`Удалить задачу?`}),(0,S.jsx)(c,{children:`Её не получится вернуть.`})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(d,{children:`Отменить`}),(0,S.jsx)(l,{children:`Удалить`})]})]})]})})}),(0,S.jsx)(m,{id:`controlled`,label:`Управляемое открытие`,description:`Меню или строка таблицы открывают окно через состояние, триггер не нужен.`,children:(0,S.jsxs)(h,{code:`import { useState } from "react"

function ArchiveProject() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button tone="neutral" variant="outline" onClick={() => setOpen(true)}>Архивировать</Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Архивировать проект?</AlertDialogTitle>
            <AlertDialogDescription>Проект пропадёт из списка, задачи сохранятся.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отменить</AlertDialogCancel>
            <AlertDialogAction tone="primary" variant="solid">Архивировать</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`,children:[(0,S.jsx)(r,{tone:`neutral`,variant:`outline`,onClick:()=>t(!0),children:`Архивировать`}),(0,S.jsx)(i,{open:e,onOpenChange:t,children:(0,S.jsxs)(a,{children:[(0,S.jsxs)(o,{children:[(0,S.jsx)(s,{children:`Архивировать проект?`}),(0,S.jsx)(c,{children:`Проект пропадёт из списка, задачи сохранятся.`})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(d,{children:`Отменить`}),(0,S.jsx)(l,{tone:`primary`,variant:`solid`,children:`Архивировать`})]})]})})]})})]})}export{C as default};