import { useState } from "react";

const NewColumn = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="heading-xl hover:bg-[#212c47] duration-300 h-[87vh] flex items-center justify-center min-w-[280px] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md  shadow-xl "
        onClick={() => setOpenModal(true)}>
        + New Column
      </button>
    </>
  )
}
export default NewColumn