import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdAssignmentAdd } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { useBoards } from "@/context/BoardContext";
import { TestPoliceImage } from "@/public/assetsManager";
import Image from "next/image"
import AddSubTask from "../modals/task/AddSubTask";
import AssignTask from "../modals/task/AssignTask";
import AddTask from "../modals/task/AddTask";

const Task = ({ data, index }) => {
  console.log("data in task ", data)
  const [addSubTaskModel, setSubAddTaskModel] = useState(false)
  const [assignTaskModel, setAssignTaskModel] = useState(false)
  const [addTaskModel, setAddTaskModel] = useState(false)

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "#445174" : "",
    ...draggableStyle
  });

  const testUserData = [
    1, 2, 3, 4, 5, 6
  ]

  const completedSubtasks = data.subtasks.reduce((acc, subtask) => subtask.isCompleted ? acc + 1 : acc, 0);
  return (
    <>
      <AddSubTask
        visible={addSubTaskModel}
        onClose={() => setSubAddTaskModel(false)}
        data={data}
      />
      <AssignTask
        visible={assignTaskModel}
        onClose={() => setAssignTaskModel(false)}
        data={data}
      />

      <Draggable draggableId={String(data.id)} index={index} >
        {(provided, snapshot) => (
          <>
            <div className="cursor-pointer select-none flex flex-col justify-between gap-[.5rem] w-[100%] max-h-[7rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[1rem] shadow-xl shadow-[#20263b] "
              {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <div className=" flex gap-[1rem] w-[100%] " >
                <div className=" w-[70%] text-[.92rem] " >
                  <h4 className=" line-clamp-3">{data.title}</h4>
                </div>

                <div className=" flex flex-wrap  w-[23%] h-[3.5rem] " >
                  {
                    testUserData.map((data, index) => {
                      return (
                        <Image
                          src={TestPoliceImage}
                          height={100}
                          width={100}
                          alt="user"
                          className="w-[1.25rem] ml-[-.6rem] h-[1.25rem] border-[1px] border-[#292441]   opacity-[.75] rounded-full"
                        />
                      )
                    })
                  }
                </div>
              </div>

              <div className="flex justify-between gap-[1rem] w-[100%] " >
                <div onClick={() => setSubAddTaskModel(true)} className=" cursor-pointer flex gap-[.2rem] items-center w-[70%] opacity-[.5] hover:opacity-[.9] duration-300" >
                  <MdAssignmentAdd />
                  <h2 className=" text-[.85rem] " >Add Subtask</h2>
                </div>

                <div onClick={() => setAssignTaskModel(true)} className=" cursor-pointer flex gap-[.2rem] items-center w-[30%] opacity-[.5] hover:opacity-[.9] duration-300 " >
                  <MdGroupAdd />
                  <h2 className=" text-[.85rem] " >Assign</h2>
                </div>

              </div>
            </div>
          </>
        )}
      </Draggable>
    </>
  )
}
export default Task