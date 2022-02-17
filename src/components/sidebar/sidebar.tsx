
function Sidebar(props: {className: string}){
  const { className } = props;
  const cls = 'sidebar '+ className;
  return <aside className={cls}>
    sidebar
  </aside>
}

export default Sidebar