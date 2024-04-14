import { DragDropContext } from 'react-beautiful-dnd';
import { useBoards } from '@/context/BoardContext';
import Column from "./Column";
import Task from "./Task";
import EmptyBoard from "./EmptyBoard";
import NewColumn from './NewColumn';
import NoBoardsFound from './NoBoardsFound';
import TaskChangesComment from '../modals/task/TaskChangesComment';
import { useState } from 'react';

const Board = () => {
  const { currentBoard, boards, dragTask } = useBoards();
  const [showTaskCommentModel, setShowTaskCommentModel] = useState(false);

  function handleOnDragEnd(result) {
    const { source, destination } = result;
    if (destination) {
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      ) {
        console.log("same same but difflent")
      }
      else {
        setShowTaskCommentModel(true);
        dragTask(source, destination);
      }
    }
  }

  if (!boards.length) return <NoBoardsFound />
  if (!currentBoard.columns.length) return <EmptyBoard />

  return (
    <main className='flex  h-[calc(100vh-15rem]  w-[calc(100vw-21rem)]  '>
      <DragDropContext
        onDragEnd={handleOnDragEnd}
      >
        <TaskChangesComment
          visible={showTaskCommentModel}
          onClose={() => setShowTaskCommentModel(false)}
        />
        <div className='flex gap-[1rem] justify-start overflow-x-auto w-[100%] ' >
          {
            currentBoard.columns.map((column, i) => (
              <Column data={column} key={i}>
                {
                  column.tasks.map((taskId, j) => {
                    const task = currentBoard.tasks.filter(task => task.id === taskId)[0];
                    return <Task data={task} index={j} key={taskId} />
                  })
                }
              </Column>
            ))
          }
        </div>
      </DragDropContext>
      {/* <NewColumn /> */}
    </main>
  )
}
export default Board