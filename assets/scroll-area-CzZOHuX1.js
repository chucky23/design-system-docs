import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Ht as n,Ut as r,X as i,_t as a,dt as o,rt as s,vn as c}from"./index-BX5CNJVf.js";var l=e();function u(){return(0,l.jsxs)(o,{kind:`component`,route:`/components/scroll-area`,description:`Своя область с прокруткой внутри экрана: журнал в панели, широкая таблица. Прокручивается и с клавиатуры.`,usage:(0,l.jsx)(c,{use:[`Своя область с прокруткой внутри экрана: список в панели, широкая таблица.`],avoid:[{text:`Прокрутка всей страницы: её держит оболочка.`,instead:{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`}},{text:`Список во всплывающем окне: Select и Command прокручиваются сами.`,instead:{href:`/components/select`,label:`Select`}}]}),example:(0,l.jsx)(i,{fragment:!0,layout:`block`,code:`<ScrollArea className="h-40 rounded-md border border-border" aria-label="Журнал проверок">
  <List>
    {entries.map((entry) => <ListItem key={entry}>{entry}</ListItem>)}
  </List>
</ScrollArea>`,children:(0,l.jsx)(n,{})}),imports:(0,l.jsx)(s,{from:`@chucky23/design-system/react`,names:[`ScrollArea`,`List`,`ListItem`]}),api:(0,l.jsx)(t,{items:[{name:`ScrollArea`,props:[{name:`orientation`,type:`"vertical" | "horizontal" | "both"`,defaultValue:`"vertical"`,description:`Оси прокрутки.`},{name:`tabIndex`,type:`number`,defaultValue:`0`,description:`Область получает фокус и прокручивается с клавиатуры.`},{name:`aria-label`,type:`string`,description:`Имя области. С ним область получает role group.`},{name:`aria-labelledby`,type:`string`,description:`Идентификатор элемента с именем области.`}]}]}),related:(0,l.jsx)(a,{links:[{href:`/components/resizable`,label:`Resizable`,description:`Панели с изменяемой шириной, каждая со своей прокруткой.`},{href:`/components/table`,label:`Table`,description:`Таблица прокручивается по горизонтали сама.`}]}),children:[(0,l.jsx)(r,{id:`both`,label:`Две оси`,description:`Когда строки длиннее панели, например журнал с регионом и задержкой: orientation=both прокручивает по двум осям.`,children:(0,l.jsx)(i,{layout:`block`,code:`<ScrollArea orientation="both" className="h-40" aria-label="Широкий журнал">…</ScrollArea>`,children:(0,l.jsx)(n,{orientation:`both`})})}),(0,l.jsx)(r,{id:`fade`,label:`Затухание края`,description:`Когда последняя видимая строка обрезана и читатель должен понять, что список продолжается: нижний край области затухает маской. Рамку ставь на обёртку, иначе маска погасит и её.`,children:(0,l.jsx)(i,{layout:`block`,code:`const entries = ["Сборка 1480: тесты прошли", "Сборка 1481: тесты прошли", "Сборка 1482: тесты прошли", "Сборка 1483: тесты прошли", "Сборка 1484: тесты прошли"]

function BuildLog() {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <ScrollArea className="h-40 mask-b-from-70%" aria-label="Журнал проверок">
        <List>
          {entries.map((entry) => <ListItem key={entry}>{entry}</ListItem>)}
        </List>
      </ScrollArea>
    </div>
  )
}`,children:(0,l.jsx)(n,{fade:!0})})})]})}export{u as default};