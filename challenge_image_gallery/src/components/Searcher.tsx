import { useContext } from "react";
import { ImageContext } from "../App";
import { useForm } from "react-hook-form";


function Sercher() {

  const { register, handleSubmit } = useForm()

  const [_keyword, setKeyword] = useContext(ImageContext)

  const onSubmit = (data) => {
    setKeyword(data.search)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center py-4">

      <input {...register('search')} placeholder="Buscar..." type="search" className="text-center w-[75%] py-1.5 px-3 text-gray-500 bg-gray-200 rounded-s-3xl border border-gray-100 transition focus:outline-none focus:bg-gray-100 focus:border-gray-200" />

      <button className="bg-gray-300 px-6 py-3 text-gray-700 focus:ring-2 focus:ring-gray-400 rounded-e-3xl">Buscar</button>

    </form>
  );
}

export default Sercher;