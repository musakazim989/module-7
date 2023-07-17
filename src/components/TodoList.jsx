import { useEffect, useState } from "react"
import { BsFillTrashFill } from "react-icons/bs"

export default function TodoList() {
  const [inputdata, setInputdata] = useState("")
  const [infoData, setInfoData] = useState({})
  const [todo, setTodo] = useState([])

  useEffect(() => {
    setInfoData({
      _id: Date.now() + 1,
      title: inputdata,
    })
  }, [inputdata])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodo([...todo, infoData])
    setInputdata("")
  }

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item._id !== id))
  }

  return (
    <div>
      <form>
        <div className="mb-6">
          <input
            onChange={(e) => setInputdata(e.target.value)}
            type="text"
            id="email"
            value={inputdata}
            className=" mt-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add todo here..."
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>

      {todo.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  My To-Do
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>

                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <BsFillTrashFill onClick={() => handleDelete(item._id)} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
