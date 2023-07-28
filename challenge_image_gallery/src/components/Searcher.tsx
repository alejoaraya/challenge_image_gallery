import { useContext } from "react";
import { ImageContext } from "../App";
import { useForm } from "react-hook-form";


function Sercher() {

  const { register, handleSubmit } = useForm()

  const [keyword, setKeyword] = useContext(ImageContext)

  const onSubmit = (data) => {
    setKeyword(data.search)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center py-4">

      <input {...register('search')} placeholder="Buscar..." type="search" className="w-full rounded-s-full input input-bordered" maxLength={30} />

      <button className="px-6 py-3 text-gray-700 bg-gray-300 focus:ring-2 focus:ring-gray-400 rounded-e-3xl">Buscar</button>

    </form>
  );
}

export default Sercher;