import { useState } from "react";
import { setTodoDone, Todo } from "./api";

export function TodoItem({ todo }: { todo: Todo }) {
  const [done, setDone] = useState(todo.done);

  function toggle() {
    setDone(!done);
    setTodoDone(todo.id, !done).catch(() => {});
  }

  return (
    <label>
      <input type="checkbox" checked={done} onChange={toggle} />
      {todo.title}
    </label>
  );
}
