import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{ft as r}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Jt as i,Kt as a,Qt as o,Xt as s,Yt as c,Zt as l,en as u,nn as d,qr as f,qt as p,tn as m,ws as h}from"./useLabelableId-Ck49MOKz.js";import{c as g,d as _,l as v,u as y}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{v as b}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as x,J as S,M as C,Ot as w,St as T,X as E,Y as D,kt as O,pt as k,q as A,rt as j,tn as M}from"./index-DnsCB0LC.js";var N=e(t(),1),P=n(),F=`Назови инцидент: без названия дежурный не найдёт его в очереди.`,I=`use anikin_lab_gpui::design_system::{DsDialog, DsDialogHost};

let dialog = DsDialog::new("create-incident", "Создать инцидент")
    .description("Инцидент получит номер и попадёт в очередь дежурного.")
    .cancel_label("Отменить")
    .confirm_label("Создать")
    .on_confirm(|_event, _window, _cx| {
        // Выполни подтверждённое действие.
    });

DsDialogHost::mount(dialog, restore_focus, window, cx);`,L=`import { useState } from "react"

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
}`,R=`import { useState, type FormEvent } from "react"

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
}`,z=`import { SubsectionHeader, Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

function IntegrationSettingsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Настройки интеграции</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Настройки интеграции</DialogTitle>
          <DialogDescription>Подключение и ограничения для запуска агента.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="limits">
          <DialogSubheader>
            <TabsList>
              <TabsTrigger value="limits">Ограничения</TabsTrigger>
              <TabsTrigger value="secrets">Секреты</TabsTrigger>
            </TabsList>
          </DialogSubheader>
          <DialogBody>
            <TabsContent value="limits">
              <SubsectionHeader title="Лимиты запуска" description="Ограничения на один запуск." />
              <FieldRecipe label="Лимит ходов" optional htmlFor="dlg-turns">
                <Input id="dlg-turns" type="number" defaultValue="40" />
              </FieldRecipe>
            </TabsContent>
            <TabsContent value="secrets">
              <SubsectionHeader title="Ключи доступа" description="Хранятся локально в связке ключей." />
              <FieldRecipe label="Токен API" htmlFor="dlg-token">
                <Input id="dlg-token" mono placeholder="sk-..." />
              </FieldRecipe>
            </TabsContent>
          </DialogBody>
        </Tabs>
        <DialogFooter>
          <DialogClose render={<Button tone="neutral" variant="outline" />}>Закрыть</DialogClose>
          <DialogClose render={<Button />}>Сохранить</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,B=`<Dialog>
  <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Что нового</DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Что нового в версии 9</DialogTitle>
      <DialogDescription>Единый стиль и новая композиция экранов.</DialogDescription>
    </DialogHeader>
    <DialogFooter><DialogClose render={<Button />}>Понятно</DialogClose></DialogFooter>
  </DialogContent>
</Dialog>`,V=`<Dialog>
  <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Широкое окно</DialogTrigger>
  <DialogContent size="lg">
    <DialogHeader>
      <DialogTitle>Широкое окно (lg)</DialogTitle>
      <DialogDescription>Максимальная ширина 42rem для двухколоночных форм.</DialogDescription>
    </DialogHeader>
    <DialogFooter><DialogClose render={<Button />}>Закрыть</DialogClose></DialogFooter>
  </DialogContent>
</Dialog>`,H=`import { useState } from "react"
import { FieldGroup, SegmentedControl, Select } from "@chucky23/design-system/react"

function ScheduledCheckDialog() {
  const [mode, setMode] = useState<"manual" | "schedule">("manual")
  const [cadence, setCadence] = useState("daily")
  return (
    <Dialog>
      <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Настроить запуск</DialogTrigger>
      <DialogContent size="md" anchor="top">
        <DialogHeader>
          <DialogTitle>Настройка запуска проверки</DialogTitle>
          <DialogDescription>Условные поля раскрываются вниз без смещения шапки.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <FieldGroup>
            <FieldRecipe layout="horizontal" label="Режим запуска" labelId="mode-label">
              <SegmentedControl
                aria-labelledby="mode-label"
                width="md"
                value={mode}
                onValueChange={setMode}
                options={[
                  { value: "manual", label: "Вручную" },
                  { value: "schedule", label: "По расписанию" },
                ]}
              />
            </FieldRecipe>
            {mode === "schedule" && (
              <FieldRecipe layout="horizontal" label="Периодичность" htmlFor="dlg-cadence">
                <Select
                  id="dlg-cadence"
                  value={cadence}
                  onValueChange={setCadence}
                  options={[
                    { value: "hourly", label: "Каждый час" },
                    { value: "daily", label: "Ежедневно" },
                  ]}
                />
              </FieldRecipe>
            )}
          </FieldGroup>
        </DialogBody>
        <DialogFooter>
          <DialogClose render={<Button tone="neutral" variant="outline" />}>Отменить</DialogClose>
          <DialogClose render={<Button />}>Сохранить</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,U=`import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, DialogSplit, FieldGroup, SegmentedControl } from "@chucky23/design-system/react"

function SplitRuleDialog() {
  const [name, setName] = useState("Контроль слотов в формах")
  const [severity, setSeverity] = useState<"warn" | "error">("error")
  return (
    <Dialog>
      <DialogTrigger render={<Button tone="neutral" variant="outline" />}>Новое правило</DialogTrigger>
      <DialogContent size="lg" anchor="top">
        <DialogHeader>
          <DialogTitle>Новое правило проверки</DialogTitle>
          <DialogDescription>Верхнее поле выровнено по первичной колонке, справа живой предпросмотр.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <DialogSplit
            topAlign="primary"
            ratio="form-preview"
            top={
              <FieldRecipe label="Название правила" htmlFor="split-rule-name">
                <Input id="split-rule-name" value={name} onChange={(event) => setName(event.target.value)} />
              </FieldRecipe>
            }
            primary={
              <FieldGroup>
                <FieldRecipe layout="horizontal" label="Строгость" labelId="split-sev">
                  <SegmentedControl
                    aria-labelledby="split-sev"
                    width="md"
                    value={severity}
                    onValueChange={setSeverity}
                    options={[
                      { value: "warn", label: "Предупреждение" },
                      { value: "error", label: "Ошибка" },
                    ]}
                  />
                </FieldRecipe>
              </FieldGroup>
            }
            asideLabel="Предпросмотр"
            aside={
              <Card size="sm">
                <CardHeader><CardTitle>{name || "Без названия"}</CardTitle></CardHeader>
                <CardContent>{severity === "error" ? "Блокирует сборку" : "Предупреждение"}</CardContent>
              </Card>
            }
          />
        </DialogBody>
        <DialogFooter>
          <DialogClose render={<Button tone="neutral" variant="outline" />}>Отменить</DialogClose>
          <DialogClose render={<Button />}>Создать правило</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,W=`import {
  Button, Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogSubheader, DialogBody, DialogSplit, DialogTitle, DialogDescription,
  DialogFooter, DialogClose, Input,
} from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`,G=[{name:`Dialog`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`},{name:`modal`,type:`boolean`,defaultValue:`true`,description:`Блокирует страницу под окном и держит фокус внутри.`}]},{name:`DialogContent`,props:[{name:`size`,type:`"sm" | "md" | "lg"`,defaultValue:`"md"`,description:`Максимальная ширина окна: sm 28rem, md 32rem, lg 42rem.`},{name:`anchor`,type:`"center" | "top"`,defaultValue:`"center"`,description:`Вертикальная привязка: top закрепляет верх окна (min(12vh, 6rem)), чтобы условные поля раскрывались вниз без скачка шапки.`},{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Крестик в правом верхнем углу.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя крестика для скринридера на языке приложения.`}]},{name:`DialogSubheader`,props:[{name:`children`,type:`ReactNode`,description:`Закреплённая подшапка под DialogHeader (например TabsList или строка фильтров) с нижней границей.`}]},{name:`DialogBody`,props:[{name:`divider`,type:`"auto" | "always" | "none"`,defaultValue:`"auto"`,description:`Горизонтальные разделители на границах прокрутки: auto показывает линию только при скрытом содержимом.`},{name:`children`,type:`ReactNode`,description:`Прокручиваемое тело диалога между шапкой/подшапкой и DialogFooter.`}]},{name:`DialogSplit`,props:[{name:`primary`,type:`ReactNode`,required:!0,description:`Основная левая колонка с полями формы.`},{name:`aside`,type:`ReactNode`,required:!0,description:`Боковая правая колонка: живой предпросмотр, сводка или контекст.`},{name:`top`,type:`ReactNode`,description:`Необязательный верхний блок над колонками (например, поле названия).`},{name:`topAlign`,type:`"full" | "primary"`,defaultValue:`"full"`,description:`Ширина верхнего блока: full на обе колонки или primary строго по ширине левой колонки без ручных calc().`},{name:`ratio`,type:`"balanced" | "form-preview"`,defaultValue:`"balanced"`,description:`Пропорция колонок на широком контейнере: balanced 1fr / 1fr или form-preview 1.25fr / 1fr.`},{name:`asideLabel`,type:`string`,description:`Доступное имя и тихая подпись области предпросмотра.`}]},{name:`DialogTrigger, DialogClose`,props:[{name:`render`,type:`ReactElement`,description:`Элемент вместо кнопки по умолчанию: render={<Button />}. Button не вкладывается в children.`}]}],K=[{href:`/components/alert-dialog`,label:`AlertDialog`,description:`Подтверждение опасного действия.`},{href:`/components/sheet`,label:`Sheet`,description:`Панель у края для длинной формы.`},{href:`/components/popover`,label:`Popover`,description:`Небольшое окно у элемента без затемнения.`},{href:`/components/command`,label:`Command`,description:`Палитра команд в окне.`}];function q(){let[e,t]=(0,N.useState)(!1),[n,q]=(0,N.useState)(`Таймаут шлюза API`),[J,Y]=(0,N.useState)();return(0,P.jsxs)(T,{kind:`component`,route:`/components/dialog`,description:`Окно для короткой формы, которую нужно закончить или отменить, прежде чем вернуться к экрану. Закрывается крестиком, Escape или щелчком мимо окна.`,usage:(0,P.jsx)(x,{use:[`Короткая форма или задача, которую нужно закончить или отменить.`,`Действие, требующее внимания до возврата к экрану.`],avoid:[{text:`Подтверждение опасного действия.`,instead:{href:`/components/alert-dialog`,label:`AlertDialog`}},{text:`Форма рядом с коллекцией, которую нужно видеть.`,instead:{href:`/components/sheet`,label:`Sheet`}},{text:`Пояснение или поле без затемнения страницы.`,instead:{href:`/components/popover`,label:`Popover`}}]}),example:(0,P.jsx)(j,{code:L,gpuiCode:I,children:(0,P.jsx)(S,{})}),imports:(0,P.jsx)(k,{code:W}),api:(0,P.jsx)(C,{items:G}),related:(0,P.jsx)(w,{links:K}),children:[(0,P.jsx)(M,{id:`open`,label:`Открытие по кнопке`,description:`Когда окно открывает кнопка на странице. Заголовок обязателен: он становится именем окна. Пустое обязательное поле не закрывает окно: ошибка встаёт под полем.`,children:(0,P.jsx)(j,{title:`С триггером`,code:L,children:(0,P.jsxs)(a,{open:e,onOpenChange:t,children:[(0,P.jsx)(d,{render:(0,P.jsx)(h,{tone:`neutral`,variant:`outline`}),children:`Создать инцидент`}),(0,P.jsxs)(c,{children:[(0,P.jsxs)(o,{children:[(0,P.jsx)(m,{children:`Создать инцидент`}),(0,P.jsx)(s,{children:`Инцидент получит номер и попадёт в очередь дежурного.`})]}),(0,P.jsx)(b,{label:`Название`,htmlFor:`incident-title`,error:J,children:(0,P.jsx)(f,{id:`incident-title`,value:n,onChange:e=>{q(e.target.value),Y(void 0)}})}),(0,P.jsxs)(l,{children:[(0,P.jsx)(i,{render:(0,P.jsx)(h,{tone:`neutral`,variant:`outline`}),children:`Отменить`}),(0,P.jsx)(h,{onClick:()=>{if(!n.trim())return Y(F);t(!1)},children:`Создать`})]})]})]})})}),(0,P.jsx)(M,{id:`controlled`,label:`Управляемое открытие`,description:`Когда окно должно закрыться только после сохранения: состояние открытия хранит приложение.`,children:(0,P.jsx)(j,{code:R,children:(0,P.jsx)(O,{})})}),(0,P.jsx)(M,{id:`body-tabs`,label:`Прокручиваемое тело и вкладки`,description:`Когда внутри окна несколько вкладок или длинный список настроек: DialogSubheader держит TabsList закреплённым под шапкой, а DialogBody прокручивает только содержимое с границами переполнения.`,children:(0,P.jsx)(j,{code:z,children:(0,P.jsxs)(a,{children:[(0,P.jsx)(d,{render:(0,P.jsx)(h,{tone:`neutral`,variant:`outline`}),children:`Настройки интеграции`}),(0,P.jsxs)(c,{children:[(0,P.jsxs)(o,{children:[(0,P.jsx)(m,{children:`Настройки интеграции`}),(0,P.jsx)(s,{children:`Подключение и ограничения для запуска агента.`})]}),(0,P.jsxs)(g,{defaultValue:`limits`,children:[(0,P.jsx)(u,{children:(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{value:`limits`,children:`Ограничения`}),(0,P.jsx)(_,{value:`secrets`,children:`Секреты`})]})}),(0,P.jsxs)(p,{children:[(0,P.jsxs)(v,{value:`limits`,children:[(0,P.jsx)(r,{title:`Лимиты запуска`,description:`Ограничения на один запуск.`}),(0,P.jsx)(b,{label:`Лимит ходов`,optional:!0,htmlFor:`dlg-turns`,children:(0,P.jsx)(f,{id:`dlg-turns`,type:`number`,defaultValue:`40`})})]}),(0,P.jsxs)(v,{value:`secrets`,children:[(0,P.jsx)(r,{title:`Ключи доступа`,description:`Хранятся локально в связке ключей.`}),(0,P.jsx)(b,{label:`Токен API`,htmlFor:`dlg-token`,children:(0,P.jsx)(f,{id:`dlg-token`,mono:!0,placeholder:`sk-...`})})]})]})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(i,{render:(0,P.jsx)(h,{tone:`neutral`,variant:`outline`}),children:`Закрыть`}),(0,P.jsx)(i,{render:(0,P.jsx)(h,{}),children:`Сохранить`})]})]})]})})}),(0,P.jsx)(M,{id:`sizes`,label:`Размеры окна`,description:`Три ширины из контракта вместо произвольных max-w-[…]: sm (28rem) для короткого запроса, md (32rem) по умолчанию и lg (42rem) для двухколоночных форм.`,children:(0,P.jsx)(j,{code:V,children:(0,P.jsx)(D,{})})}),(0,P.jsx)(M,{id:`anchor-top`,label:`Фиксация сверху без прыжка шапки`,description:`При anchor="top" верхняя граница окна остаётся на месте: переключи режим запуска на «По расписанию», и условные поля раскроются вниз без смещения заголовка.`,children:(0,P.jsx)(j,{code:H,children:(0,P.jsx)(A,{})})}),(0,P.jsx)(M,{id:`split`,label:`Две колонки и предпросмотр (DialogSplit)`,description:`DialogSplit внутри DialogBody делит окно на форму и живой предпросмотр, а topAlign="primary" выравнивает верхнее поле по ширине левой колонки без ручных вычислений.`,children:(0,P.jsx)(j,{code:U,children:(0,P.jsx)(E,{})})}),(0,P.jsx)(M,{id:`no-close`,label:`Без крестика`,description:`Когда в окне одно действие, например «Понятно» после новостей версии: крестик лишний, выход через кнопку в подвале.`,children:(0,P.jsx)(j,{code:B,children:(0,P.jsxs)(a,{children:[(0,P.jsx)(d,{render:(0,P.jsx)(h,{tone:`neutral`,variant:`outline`}),children:`Что нового`}),(0,P.jsxs)(c,{showCloseButton:!1,children:[(0,P.jsxs)(o,{children:[(0,P.jsx)(m,{children:`Что нового в версии 9`}),(0,P.jsx)(s,{children:`Единый стиль и новая композиция экранов.`})]}),(0,P.jsx)(l,{children:(0,P.jsx)(i,{render:(0,P.jsx)(h,{}),children:`Понятно`})})]})]})})})]})}export{q as default};