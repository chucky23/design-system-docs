import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{G as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Fn as n,M as r,Ot as i,St as a,pt as o,rt as s,tn as c}from"./index-DnsCB0LC.js";var l=e();function u(){return(0,l.jsx)(a,{kind:`component`,route:`/components/markdown`,description:`Показывает готовый текст из Markdown: описание задачи, справку, заметку. HTML в тексте не исполняется.`,usage:(0,l.jsx)(n,{use:[`Показ готового текста документа: описание задачи, справка, заметка.`],avoid:[{text:`Редактирование документа.`,instead:{href:`/integrations/milkdown`,label:`Milkdown`}},{text:`Листинг кода с подсветкой.`,instead:{href:`/components/code-block`,label:`CodeBlock`}},{text:`Короткая подпись или абзац интерфейса.`,instead:{href:`/components/typography`,label:`Typography`}}]}),example:(0,l.jsx)(s,{layout:`block`,code:`<Markdown>{"## Контекст\\nПосле **повторной оплаты** приходит второе уведомление.\\n\\n- шаг 1\\n  - подшаг\\n- шаг 2\\n\\n> Пока не воспроизводится на тестовом стенде."}</Markdown>`,children:(0,l.jsx)(t,{children:`## Контекст
После **повторной оплаты** приходит второе уведомление.

- шаг 1
  - подшаг
- шаг 2

> Пока не воспроизводится на тестовом стенде.`})}),imports:(0,l.jsx)(o,{from:`@chucky23/design-system/react`,names:[`Markdown`]}),api:(0,l.jsx)(r,{items:[{name:`Markdown`,props:[{name:`children`,type:`string`,required:!0,description:`Текст в Markdown. Заголовки # и ## становятся h3, остальные h4.`},{name:`copyLabel`,type:`string`,description:`Доступное имя кнопки копирования в блоках кода.`},{name:`copiedLabel`,type:`string`,description:`Доступное имя после копирования.`},{name:`className`,type:`string`,description:`Класс обёртки.`}]}]}),related:(0,l.jsx)(i,{links:[{href:`/components/typography`,label:`Typography`,description:`Абзацы и списки без разметки.`},{href:`/components/code-block`,label:`CodeBlock`,description:`Блок кода, который Markdown рисует сам.`},{href:`/integrations/milkdown`,label:`Milkdown`,description:`Редактор Markdown.`}]}),children:(0,l.jsx)(c,{id:`code-table`,label:`Код и таблицы`,description:`Когда в описании задачи есть команда или таблица шагов: код получает подсветку по языку, таблицу рисует Table пакета.`,children:(0,l.jsx)(s,{layout:`block`,code:'<Markdown>{"| Шаг | Итог |\\n| --- | :---: |\\n| тесты | готово |\\n| сборка | в работе |\\n\\n```bash\\nnpm test\\n```"}</Markdown>',children:(0,l.jsx)(t,{copyLabel:`Скопировать код`,copiedLabel:`Скопировано`,children:`| Шаг | Итог |
| --- | :---: |
| тесты | готово |
| сборка | в работе |

\`\`\`bash
npm test
\`\`\``})})})})}export{u as default};