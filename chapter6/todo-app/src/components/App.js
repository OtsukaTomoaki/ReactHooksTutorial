import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({ title, as }) => {
  //asがh1ならばタイトルはh2タグ
  if (as === "h1") return <h1>{title}</h1>;

  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  );
};

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo}/>
        );
      })}
    </ul>
  );
};

function App() {
  const { todoList } = useTodo();

  //console.logでコンソールに取得したTODOリストの情報を表示してみる
  console.log(todoList);

  const todoInCompletedList = todoList.filter((todo) => !todo.done);
  console.log("未完了リスト", todoInCompletedList);//未完了リスト
  const todoCompletedList = todoList.filter((todo) => todo.done);
  console.log("完了リスト", todoCompletedList);//完了リスト

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1"/>
      <textarea></textarea>
      <button>+ TODOを追加</button>
      <TodoTitle title="未完了TODOリスト" as="h2"/>
      <TodoList todoList={todoInCompletedList} />

      <TodoTitle title="完了TODOリスト" as="h2"/>
      <TodoList todoList={todoCompletedList} />
    </>
  );
}

export default App;
