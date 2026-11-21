import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$ as t,A as n,Q as r,Ut as i,X as a,_t as o,ct as s,dt as c,et as l,rt as u,st as d,vn as f}from"./index-BX5CNJVf.js";var p=e(),m=`import { useRef, useState, type FormEvent } from "react"
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, FieldGroup, Input } from "@chucky23/design-system/react"
import { DatePicker } from "@chucky23/design-system/extended/date-picker"
import { FeedbackRecipe, FieldRecipe } from "@chucky23/design-system/recipes"
import { useFocusFirstInvalid } from "@chucky23/design-system/hooks"

type SprintErrors = { name?: string; ends?: string }

export function SprintCreateDialog({ onCreate }: { onCreate: (name: string, ends: Date) => Promise<void> }) {
  const formRef = useRef<HTMLFormElement>(null)
  const focusFirstInvalid = useFocusFirstInvalid(formRef)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [ends, setEnds] = useState<Date>()
  const [errors, setErrors] = useState<SprintErrors>({})
  const [pending, setPending] = useState(false)
  const [failure, setFailure] = useState<string>()

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    const next: SprintErrors = {}
    if (!name.trim()) next.name = "Укажи название спринта"
    if (!ends) next.ends = "Выбери дату окончания"
    setErrors(next)
    setFailure(undefined)
    if (!ends || next.name) return focusFirstInvalid()
    setPending(true)
    try {
      await onCreate(name.trim(), ends)
      setIsOpen(false)
    } catch (error) {
      // Ввод остаётся, причина видна в форме, повтор — та же кнопка.
      setFailure(error instanceof Error ? error.message : "Сервер не ответил. Отправь форму ещё раз.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(next) => { if (!pending) setIsOpen(next) }}>
      <DialogTrigger render={<Button />}>Новый спринт</DialogTrigger>
      <DialogContent>
        <form ref={formRef} noValidate onSubmit={submit}>
          <DialogHeader>
            <DialogTitle>Новый спринт</DialogTitle>
            <DialogDescription>Заполни сведения о спринте.</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <FieldRecipe label="Название" htmlFor="sprint-name" error={errors.name}>
              <Input id="sprint-name" name="name" required value={name}
                onChange={(event) => { setName(event.target.value); setErrors((current) => ({ ...current, name: undefined })) }} />
            </FieldRecipe>
            <FieldRecipe label="Окончание" htmlFor="sprint-ends" error={errors.ends}>
              <DatePicker id="sprint-ends" name="ends" required value={ends}
                onChange={(date) => { setEnds(date); setErrors((current) => ({ ...current, ends: undefined })) }} />
            </FieldRecipe>
            {failure && <FeedbackRecipe size="compact" tone="err" title="Спринт не создан" description={failure} />}
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" type="button" disabled={pending} />}>Отменить</DialogClose>
            <Button type="submit" loading={pending}>Создать</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}`;function h(){return(0,p.jsxs)(c,{kind:`component`,route:`/components/field-group`,description:`Колонка полей формы и сводка ошибок. Вместе с FieldRecipe и useFocusFirstInvalid задают одно поведение формы: проверка при отправке, ошибка под полем, фокус на первой ошибке.`,usage:(0,p.jsx)(f,{use:[`Форма в диалоге или листе.`,`Форма на странице вне SettingsWorkspace.`,`Сводка ошибок длинной формы, где первая ошибка может уйти за экран.`],avoid:[{text:`Длинная форма настроек: ритм полей задаёт тип экрана.`,instead:{href:`/screens/settings`,label:`SettingsWorkspace`}},{text:`Ошибка проверки тостом: тост исчезает и не ведёт к полю.`}]}),example:(0,p.jsx)(a,{layout:`stack`,code:m,children:(0,p.jsx)(r,{})}),imports:(0,p.jsx)(u,{code:`import { FieldGroup, FormErrorSummary } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes"
import { useFocusFirstInvalid } from "@chucky23/design-system/hooks"`}),api:(0,p.jsx)(n,{items:[{name:`FieldGroup`,props:[{name:`children`,type:`ReactNode`,description:`Поля FieldRecipe, сводка ошибок, сообщение о сбое записи.`},{name:`aria-label`,type:`string`,description:`Имя группы: с ним или с aria-labelledby колонка получает роль group.`}]},{name:`FormErrorSummary`,props:[{name:`errors`,type:`ReadonlyArray<{ fieldId: string; message: ReactNode }>`,required:!0,description:`Ошибки в порядке полей. Пустой список сводку не рисует.`},{name:`title`,type:`ReactNode`,defaultValue:`"Исправь ошибки в форме"`,description:`Заголовок сводки.`}]},{name:`useFocusFirstInvalid`,props:[{name:`rootRef`,type:`RefObject<ParentNode | null>`,required:!0,description:`Форма или её часть. Возвращает функцию: вызови её в submit после записи ошибок, фокус перейдёт после отрисовки.`}]}]}),related:(0,p.jsx)(o,{links:[{href:`/recipes/field`,label:`FieldRecipe`,description:`Подпись, подсказка, контрол и ошибка одного поля.`},{href:`/components/dialog`,label:`Dialog`,description:`Окно короткой формы.`},{href:`/components/date-picker`,label:`DatePicker`,description:`Поле даты с теми же состояниями, что у Input.`}]}),children:[(0,p.jsx)(i,{id:`behavior`,label:`Как форма ведёт себя при ошибке`,description:`Одно поведение для всех полей: Input, Textarea, Select, DatePicker, Checkbox, RadioGroup и Switch.`,children:(0,p.jsxs)(d,{children:[(0,p.jsx)(s,{children:`Обязательность не помечается ни звёздочкой, ни словом «необязательно». Контрол получает required для программ экранного доступа, а пустое обязательное поле после отправки получает ошибку.`}),(0,p.jsx)(s,{children:`Проверка идёт при отправке и не блокирует кнопку: «Создать» доступна всегда, неполная форма отвечает ошибками, а не молчанием.`}),(0,p.jsx)(s,{children:`Ошибка стоит под полем текстом FieldRecipe error и красит рамку контрола. Тост для ошибки проверки не используется.`}),(0,p.jsx)(s,{children:`После отправки фокус переходит на первое неверное поле, в длинной форме — на сводку ошибок.`}),(0,p.jsx)(s,{children:`Пока идёт запись, главная кнопка показывает загрузку, ввод не теряется. Сбой записи — сообщение в форме, повтор — та же кнопка.`})]})}),(0,p.jsx)(i,{id:`errors`,label:`Ошибка у каждого вида поля`,description:`Рамка цвета ошибки у контрола и текст под полем. У отметок рамку получает неотмеченный контрол.`,children:(0,p.jsx)(a,{fragment:!0,layout:`stack`,code:`import { Checkbox, Input } from "@chucky23/design-system/react"

<FieldRecipe label="Название" htmlFor="name" error="Укажи название"><Input id="name" /></FieldRecipe>
<FieldRecipe label="Условия" htmlFor="terms" error="Подтверди условия"><Checkbox id="terms" /></FieldRecipe>`,children:(0,p.jsx)(t,{})})}),(0,p.jsx)(i,{id:`summary`,label:`Сводка ошибок длинной формы`,description:`Когда первая ошибка может оказаться за экраном: сводка над полями получает фокус, ссылки ведут к полям.`,children:(0,p.jsx)(a,{fragment:!0,layout:`stack`,code:`import { Input } from "@chucky23/design-system/react"

<FieldGroup>
  <FormErrorSummary errors={[{ fieldId: "key", message: "Укажи ключ проекта" }]} />
  <FieldRecipe label="Ключ" htmlFor="key" error={errors.key}><Input id="key" name="key" required /></FieldRecipe>
</FieldGroup>`,children:(0,p.jsx)(l,{})})})]})}export{h as default};