import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "@/hooks/useLocalStorage";
import data from "../data.json";
import stringToSlug from "@/utils/stringToSlug";


const BoardContext = createContext();

function BoardProvider({ children }) {
  const [boards, setBoards] = useLocalStorage("boards", data.boards);
  const [activeBoard, setActiveBoard] = useState(0);

  const currentBoard = boards[activeBoard];

  const columns = currentBoard?.columns;


  const createTask = (task) => {
    task.id = uuidv4();
    const column = columns.find((column) => column.name === task.status);
    console.log("Found column:", column);
    console.log("columns value in context", columns)
    task.status = column.name;
    task.subtasks = task.subtasks.map((subtask) => {
      return {
        ...subtask,
        isCompleted: false,
      };
    });
    task.slug = stringToSlug(task.title);
    console.log(task);
    column.tasks.push(task.id);
    currentBoard.tasks.push(task);
    setBoards([...boards]);
  };

  const dragTask = (source, destination) => {
    // dropped outside a column
    if (!destination) {
      return;
    }

    // if the source and destination are the same, do nothing
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // If the card is moved within the same column and just needs an index change
    if (source.droppableId === destination.droppableId) {
      const column = columns.find(
        (column) => column.name === source.droppableId
      );
      const taskId = column.tasks[source.index];
      column.tasks.splice(source.index, 1);
      column.tasks.splice(destination.index, 0, taskId);
      setBoards([...boards]);
    }
    //If the card has been moved to a different column
    else {
      const column = columns.find(
        (column) => column.name === source.droppableId
      );
      const taskId = column.tasks[source.index];
      const draggedTask = currentBoard.tasks.find((task) => task.id === taskId);
      draggedTask.status = destination.droppableId;
      column.tasks.splice(source.index, 1);
      const newColumn = columns.find(
        (column) => column.name === destination.droppableId
      );
      newColumn.tasks.splice(destination.index, 0, taskId);
      setBoards([...boards]);
    }
  };

  const value = {
    boards,
    setBoards,
    currentBoard,
    columns,
    dragTask,
    setActiveBoard,
    createTask,
  };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}

const useBoards = () => {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoards must be used within a BoardProvider");
  }
  return context;
};

export { BoardProvider, useBoards };