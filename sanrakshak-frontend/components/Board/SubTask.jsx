import React, { useState } from 'react';

const SubTask = ({ coloumId }) => {
  const [subTaskData, setSubTaskData] = useState([{ task: '', completed: false }]);
  const [task, setTask] = useState('');

  const handleCompleteTask = (index) => {
    const updatedSubTaskData = subTaskData.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setSubTaskData(updatedSubTaskData);
  };

  const handleAddSubTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    const newSubTask = { task: task, completed: false };
    setSubTaskData([...subTaskData, newSubTask]);
    setTask('');
  };

  //TODO - Correct this sorting function for sorted data
  const sortedSubTaskData = [...subTaskData].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

  return (
    <>
      <div>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddSubTask(e);
          }}
          className='flex flex-col w-[100%] gap-[1rem]'
        >
          <input
            type='text'
            onChange={(e) => setTask(e.target.value)}
            value={task}
            id='subTask'
            placeholder='Add SubTask'
            className='bg-[#8C8C9A1F] text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] text-[1.12rem] text-center'
          ></input>
        </form>
      </div>

      <div className='flex justify-center h-[14rem] overflow-y-auto'>
        <div className='flex flex-col gap-[.5rem] border-[#292441] w-fit px-[1rem]'>
          {subTaskData.map((item, index) => (
            <div key={index} className='flex'>
              {index !== 0 && (
                <div onClick={() => handleCompleteTask(index)} className={`relative cursor-pointer select-none flex w-fit items-center gap-[.4rem] text-[.9rem] ${item.completed ? 'opacity-[.5] line-through ' : ''}`}>
                  <input
                    type='checkbox'
                    checked={item.completed}
                    onChange={() => handleCompleteTask(index)}
                    className='appearance-none border-[1px] border-[#6c71ff5c] checked:bg-green-500 flex gap-[.5rem] rounded-[.25rem] cursor-pointer px-[.4rem] py-[.4rem] text-[.85rem] items-center'
                  />
                  <span>{item.task}</span>
                  <hr className={` ${item.completed ? " hidden " : "hidden"}  w-[100%] h-[.2px] absolute top-[50%] bg-[#292441]`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubTask;
