import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Fn as t,M as n,Ot as r,St as i,an as a,on as o,pt as s,rt as c,tn as l}from"./index-DnsCB0LC.js";var u=e();function d(){return(0,u.jsx)(i,{kind:`component`,route:`/components/separator`,description:`Тонкая линия между соседними блоками одной поверхности: горизонтальная в колонке, вертикальная в ряду.`,usage:(0,u.jsx)(t,{use:[`Граница между соседними блоками одной поверхности: группами действий, пунктами меню, колонками ряда.`],avoid:[{text:`Граница между разделами страницы: ритм задают отступы.`,instead:{href:`/patterns/section-stack`,label:`SectionStack`}},{text:`Отдельный блок с рамкой.`,instead:{href:`/components/card`,label:`Card`}}]}),example:(0,u.jsx)(c,{layout:`stack`,code:`<Body>Критичные инциденты</Body>
<Separator />
<Body>Закрытые за сегодня</Body>`,gpuiCode:`use anikin_lab_gpui::design_system::DsSeparator;

let divider = DsSeparator::new();`,children:(0,u.jsx)(o,{})}),imports:(0,u.jsx)(s,{from:`@chucky23/design-system/react`,names:[`Separator`,`Body`]}),api:(0,u.jsx)(n,{items:[{name:`Separator`,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Горизонтальная линия 1 px на всю ширину или вертикальная 1 px по высоте ряда.`}]}]}),related:(0,u.jsx)(r,{links:[{href:`/recipes/section-header`,label:`SectionHeaderRecipe`,description:`Заголовок раздела с линией.`},{href:`/patterns/section-stack`,label:`SectionStack`,description:`Колонка разделов с ритмом отступов.`}]}),children:(0,u.jsx)(l,{id:`vertical`,label:`Вертикальная`,description:`Когда в одном ряду стоят группы ссылок или действий. Высоту линии задаёт ряд.`,children:(0,u.jsx)(c,{code:`<div className="flex h-5 items-center gap-3">
  <span>Задачи</span>
  <Separator orientation="vertical" />
  <span>Проекты</span>
  <Separator orientation="vertical" />
  <span>Метрики</span>
</div>`,gpuiCode:`use anikin_lab_gpui::design_system::{DsSeparator, DsSeparatorOrientation};

let divider = DsSeparator::new()
    .orientation(DsSeparatorOrientation::Vertical);`,children:(0,u.jsx)(a,{})})})})}export{d as default};