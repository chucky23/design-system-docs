import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{b as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Fn as n,M as r,Ot as i,St as a,pt as o,rt as s,tn as c}from"./index-DnsCB0LC.js";var l=e(),u=[{name:`CodeBlock`,props:[{name:`code`,type:`string`,required:!0,description:`Исходный текст.`},{name:`language`,type:`"tsx" | "jsx" | "html" | "xml" | "ts" | "typescript" | "js" | "javascript" | "css" | "json" | "jsonc" | "yaml" | "yml" | "diff" | "patch"`,description:`Язык подсветки. С ним сверху появляется полоса высотой --bar-h с названием языка и копированием. Для diff и patch строки подсвечиваются построчно сигнальными цветами.`},{name:`maxHeight`,type:`number | string`,description:`Ограничение высоты области кода с внутренней вертикальной прокруткой. Число трактуется как пиксели.`},{name:`copy`,type:`boolean`,defaultValue:`true`,description:`Кнопка копирования внутри блока. false — копирование стоит снаружи.`},{name:`copyLabel`,type:`string`,defaultValue:`"Скопировать код"`,description:`Имя кнопки до копирования.`},{name:`copiedLabel`,type:`string`,defaultValue:`"Скопировано"`,description:`Имя кнопки после копирования.`},{name:`fragment`,type:`boolean`,defaultValue:`false`,description:`Код только выдержка: данные, состояние и обработчики не объявлены. В полосе рядом с языком стоит подпись «Фрагмент».`},{name:`aria-label`,type:`string`,description:`Имя области кода. Без него берётся «Пример кода: язык».`}]}],d=[{href:`/components/copy-button`,label:`CopyButton`,description:`Кнопка копирования, на которой стоит блок.`},{href:`/components/markdown`,label:`Markdown`,description:`Блоки кода внутри разобранного текста.`}],f=`<CodeBlock
  language="ts"
  code={'const open = tasks.filter((task) => task.status === "open")'}
/>`,p=`diff --git a/src/dialog.tsx b/src/dialog.tsx
--- a/src/dialog.tsx
+++ b/src/dialog.tsx
@@ -12,4 +12,4 @@
 export function DialogTitle() {
-  return <h2 className="font-medium" />
+  return <h2 className="font-semibold" />
 }`,m=`<CodeBlock
  language="diff"
  maxHeight={220}
  code={\`diff --git a/src/dialog.tsx b/src/dialog.tsx
--- a/src/dialog.tsx
+++ b/src/dialog.tsx
@@ -12,4 +12,4 @@
-  font-medium
+  font-semibold\`}
/>`,h=`{
  "name": "tasks",
  "maxTurns": 40,
  "enabled": true
}`,g=`name: deploy
steps:
  - run: npm test # проверка`;function _(){return(0,l.jsxs)(a,{kind:`component`,route:`/components/code-block`,description:`Показывает листинг кода с подсветкой и кнопкой копирования. Бери его для команды или конфигурации, которую читатель перенесёт к себе.`,usage:(0,l.jsx)(n,{use:[`Листинг кода, конфигурации или команды, которые читают и копируют.`],avoid:[{text:`Короткий фрагмент в строке текста: его набирают как код внутри абзаца.`},{text:`Ввод команды или пути.`,instead:{href:`/components/input`,label:`Input`}}]}),example:(0,l.jsx)(s,{layout:`block`,code:f,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: открытые задачи`,language:`ts`,code:`const open = tasks.filter((task) => task.status === "open")`})}),imports:(0,l.jsx)(o,{from:`@chucky23/design-system/react`,names:[`CodeBlock`]}),api:(0,l.jsx)(r,{items:u}),related:(0,l.jsx)(i,{links:d}),children:[(0,l.jsx)(c,{id:`no-language`,label:`Без языка`,description:`Для команды терминала, которую подсвечивать не нужно. Копирование появляется в углу при наведении и фокусе.`,children:(0,l.jsx)(s,{layout:`block`,code:`<CodeBlock code="npm install @chucky23/design-system" />`,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: команда установки`,code:`npm install @chucky23/design-system`})})}),(0,l.jsxs)(c,{id:`css`,label:`CSS и скрипты`,description:`Укажи language, чтобы подсветка различала ключевые слова, строки и числа.`,children:[(0,l.jsx)(s,{layout:`block`,title:`CSS`,code:`<CodeBlock language="css" code={'.card {\\n  border: 1px solid var(--border);\\n}'} />`,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: CSS`,language:`css`,code:`.card {
  border: 1px solid var(--border);
}`})}),(0,l.jsx)(s,{layout:`block`,title:`TypeScript`,code:`<CodeBlock language="ts" code={'const total = items.length'} />`,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: TypeScript`,language:`ts`,code:`const total = items.length`})})]}),(0,l.jsx)(c,{id:`diff`,label:`Дифф и прокрутка`,description:`Для unified diff: добавленные и удалённые строки подсвечиваются сигнальными токенами на всю ширину блока, а maxHeight ограничивает высоту прокрутки.`,children:(0,l.jsx)(s,{layout:`block`,title:`Diff`,code:m,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: diff`,language:`diff`,maxHeight:220,code:p})})}),(0,l.jsxs)(c,{id:`config`,label:`JSON и YAML`,description:`Для конфигураций, ответов API и сценариев автоматизации.`,children:[(0,l.jsx)(s,{layout:`block`,title:`JSON`,code:`<CodeBlock language="json" code={'{\\n  "name": "tasks",\\n  "maxTurns": 40,\\n  "enabled": true\\n}'} />`,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: JSON`,language:`json`,code:h})}),(0,l.jsx)(s,{layout:`block`,title:`YAML`,code:`<CodeBlock language="yaml" code={'name: deploy\\nsteps:\\n  - run: npm test # проверка'} />`,children:(0,l.jsx)(t,{copyLabel:`Скопировать код: YAML`,language:`yaml`,code:g})})]})]})}export{_ as default};