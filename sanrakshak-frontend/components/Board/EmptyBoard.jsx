

const EmptyBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-lightGrey dark:bg-veryDarkGrey">
      <h2 className="text-center heading-lg text-mediumGrey">This board is empty. Create a new column to get started.</h2>
      <button className="mt-6 btn btn__primary btn-lg">+ Add New Column</button>
    </div>
  )
}
export default EmptyBoard