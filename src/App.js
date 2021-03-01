
const App = () => {
  return (
    // <div>App组件</div> 相当于React.createElement()
    <div>App组件
      <Component numbers={[1, 2, 3, 4]} />
    </div>
    // React.createElement("div", null, "App组件")
  )
}
const Component = (props) => {
  const array = []
  for (let i = 0; i < props.numbers.length; i++) {
    array.push(<div>下标为{i}，值为{props.numbers[i]}</div>)
  }
  return (<div>{array}</div>)
}
/* 上面并不是标准JS的写法 */
export default App;

