import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{L as t,b as n,l as r}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Ot as i,St as a,f as o,gt as s,tn as c,xn as l}from"./index-DnsCB0LC.js";import{r as u}from"./_virtual_docs-changelog-BK8pg0M4.js";var d=e(),f=[[`ChartAreaRecipe: signal у серии обязателен и красит её`,`signal необязателен и на цвет не влияет: серии красятся палитрой по порядку или color. Код с signal работает, план — color="plan" или прежний signal="neutral"`],[`StatusTag по умолчанию рисовал плашку default`,`Значок и слово, формат icon-label. Плашка осталась форматом default`],[`Строка таблицы реестра 37 px`,`28 px по шкале плотности, статус в строке набран 13 px со значком 14 px`],[`Тост ошибки исчезал через 4 с`,`Висит до закрытия и получает кнопку закрытия. Прежнее поведение — Toaster errorDuration={4000}`],[`DatePicker во всю ширину контейнера`,`Шириной ожидаемого значения, 10rem. Во всю ширину — проп fullWidth`],[`Кнопка в колонке формы растягивалась`,`Кнопки и триггеры шириной содержимого. Во всю ширину — fullWidth, только в узкой колонке`],[`Заголовок рабочего экрана 32/40`,`20/28: шапка реестра, доски, документа, настроек и обзора компактнее`],[`Серии графиков пакета красили сигналы`,`Палитра --chart-*. Свой график с color: var(--signal-ok) переведи на var(--chart-1) и следующие по порядку`]],p=`- <Button variant="default" size="default">Сохранить</Button>
- <Button variant="secondary">Отменить</Button>
- <Button variant="destructive">Удалить</Button>
- <Button size="icon" aria-label="Закрыть"><CloseIcon /></Button>
+ <Button tone="primary" variant="solid" size="sm">Сохранить</Button>
+ <Button tone="neutral" variant="soft">Отменить</Button>
+ <Button tone="danger" variant="soft">Удалить</Button>
+ <IconButton label="Закрыть"><CloseIcon /></IconButton>`,m=`- <StatusTag status="progress" format="dot" label="В работе" />
- <Badge variant="destructive">Сбой</Badge>
+ <StatusTag status="progress" label="В работе" />
+ <Badge variant="err">Сбой</Badge>`,h=`- <ChartAreaRecipe
-   data={points}
-   series={[
-     { key: "actual", label: "Факт", signal: "ok" },
-     { key: "plan", label: "План", signal: "neutral" },
-   ]}
- />
+ <ChartAreaRecipe
+   data={points}
+   series={[
+     { key: "actual", label: "Факт" },
+     { key: "plan", label: "План", color: "plan" },
+   ]}
+ />`,g=`const actions: WorkspaceAction[] = [
  {
    id: "delete",
    label: "Удалить задачу",
-   tone: "destructive",
+   tone: "danger",
+   group: "Опасные действия",
    onSelect: handleDelete,
  },
]`;function _(){return(0,d.jsxs)(a,{kind:`guide`,route:`/migration`,description:`Что сделать в коде приложения при переходе на 11.x: убрать удалённое в 11.0.0, заменить устаревшее и проверить экраны с изменённым поведением.`,related:(0,d.jsx)(i,{links:[{href:`/changelog`,label:`Журнал изменений`,description:`Все изменения выпусков по порядку.`},{href:`/deprecated`,label:`Устаревшие экспорты`,description:`Устаревшие экспорты и значения с заменами.`},{href:`/eslint`,label:`ESLint и проверка проекта`,description:`Проверка проекта после обновления.`}]}),children:[(0,d.jsx)(c,{id:`order`,label:`С чего начать`,description:`Чтобы ничего не пропустить: обнови пакет, убери удалённое, замени устаревшее, проверь экраны.`,children:(0,d.jsxs)(r,{children:[`Обнови `,(0,d.jsx)(t,{children:`@chucky23/design-system`}),`. Если приложение было на 10.x, сначала пройди раздел «С 10.x на 11.0»: удалённое в 11.0.0 ломает сборку. Затем замени устаревшее по таблице`,` `,(0,d.jsx)(s,{href:`/deprecated#values-11`,children:`«Значения и токены 11.x»`}),`: старые значения пока работают, редактор с TypeScript показывает пометку `,(0,d.jsx)(t,{children:`@deprecated`}),` у экспорта. Устаревшие строковые значения пропсов, например`,` `,(0,d.jsx)(t,{children:`variant="secondary"`}),`, находит `,(0,d.jsx)(t,{children:`npm run lint`}),`: правило`,` `,(0,d.jsx)(s,{href:`/eslint#rules`,children:`no-deprecated-prop-value`}),` называет замену. В конце проверь экраны по разделу «Изменённое поведение».`]})}),(0,d.jsx)(o,{source:`## С 10.x на 11.0\n\n${u}`}),(0,d.jsxs)(c,{id:`diff-examples`,label:`Ключевые замены API`,description:`Типовые правки в коде приложения для Button, StatusTag, ChartAreaRecipe и WorkspaceAction.`,children:[(0,d.jsx)(n,{language:`diff`,title:`Button и IconButton`,copyLabel:`Скопировать diff для Button`,code:p}),(0,d.jsx)(n,{language:`diff`,title:`StatusTag и Badge`,copyLabel:`Скопировать diff для StatusTag`,code:m}),(0,d.jsx)(n,{language:`diff`,title:`ChartAreaRecipe`,copyLabel:`Скопировать diff для ChartAreaRecipe`,code:h}),(0,d.jsx)(n,{language:`diff`,title:`WorkspaceAction`,copyLabel:`Скопировать diff для WorkspaceAction`,code:g})]}),(0,d.jsx)(c,{id:`deprecated`,label:`Замена устаревшего`,description:`Устаревшее продолжает работать, новый код берёт замену. Удаление требует мажорного выпуска.`,children:(0,d.jsxs)(r,{children:[`Замены собраны в одном месте — на странице `,(0,d.jsx)(s,{href:`/deprecated#values-11`,children:`«Устаревшие экспорты»`}),`: значения`,` `,(0,d.jsx)(t,{children:`Button`}),`, `,(0,d.jsx)(t,{children:`Badge variant="destructive"`}),`, формат точки у`,` `,(0,d.jsx)(t,{children:`StatusTag`}),`, тон `,(0,d.jsx)(t,{children:`destructive`}),` у пунктов меню и действий, серии графиков и токены`,` `,(0,d.jsx)(t,{children:`--chart-4`}),`, `,(0,d.jsx)(t,{children:`--chart-5`}),`.`]})}),(0,d.jsxs)(c,{id:`behaviour`,label:`Изменённое поведение`,description:`Код менять не обязательно, но экраны выглядят иначе: проверь их после обновления.`,children:[(0,d.jsx)(l,{label:`Изменённое поведение`,columns:[{label:`Было`,width:`40%`},{label:`Стало`}],rows:f}),(0,d.jsxs)(r,{children:[`Подробности каждого изменения — в `,(0,d.jsx)(s,{href:`/changelog`,children:`журнале изменений`}),`.`]})]})]})}export{_ as default};