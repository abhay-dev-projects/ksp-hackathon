const NoBoardsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-lightGrey dark:bg-veryDarkGrey">
      <h2 className="text-center heading-lg text-mediumGrey">No Boards Found</h2>
      <button className="mt-6 btn btn__primary btn-lg">Create a Board</button>
    </div>
  )
}
export default NoBoardsFound