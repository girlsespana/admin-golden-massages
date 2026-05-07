import {BsDatabaseFillX} from "react-icons/bs";

const NoTableData = () => {
  return (
    <div className="w-full  flex flex-col items-center p-8">
                  <span
                    className="mt-4 text-9xl p-6 rounded-full text-primary bg-neutral-800"
                  >
                    <BsDatabaseFillX className="text-primary"/>
                  </span>
      <h3 className="mt-8 font-bold text-xl text-gray-200">
        Ups!, parace que aun no tienes datos
      </h3>
      <p className="mt-2 text-sm text-gray-400">
        Empieza a agregar datos y podras ver tu información
      </p>
    </div>
  )
}

export default NoTableData