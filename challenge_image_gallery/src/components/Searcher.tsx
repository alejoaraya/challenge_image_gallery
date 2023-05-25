
const handleOnChange = (event:any) => {
console.log(event.target.value)
}  

function Sercher() {
  return (
    <div className="flex justify-center p-3 ">
      <input onSubmit={(event) => {handleOnChange(event)}} placeholder="Search Anything..." type="search" className="text-center w-[75%] py-1.5 px-4 text-gray-500 bg-gray-100 rounded-s-3xl border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-200" />
      <button className="bg-gray-300 px-6 py-2.5 text-gray rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 rounded-e-3xl">Search</button>
    </div>
  );
}

export default Sercher;