import TodoList from "./components/TodoList"

function App() {
  return (
    <>
      <div className=" border-blue-950 rounded-xl w-3/4 m-auto">
        <h1 className=" text-blue-700 font-bold text-[72px] text-center mt-6">
          Todo List
        </h1>
        <TodoList />
      </div>
    </>
  )
}

export default App
