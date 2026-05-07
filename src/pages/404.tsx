import { useNavigate } from 'react-router-dom'
import { Button } from '@components'
import { GrPrevious } from 'react-icons/gr'

const Page404 = () => {
  const navigate = useNavigate()

  return (
      <div className="relative min-h-screen flex bg-[url('/images/burger-wallpaper.jpg')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col items-center m-auto text-center text-white">
          <p className="text-[10rem] md:text-[12rem] font-bold">
            404
          </p>
          <p className="text-6xl">
            Whoops!
          </p>
          <p className="text-xl">
            Algo salió mal
          </p>
          <p className="mt-8 mb-4 text-xl">
            No se pudo encontrar la página, te recomendamos volver al inicio.
          </p>
          <Button onClick={() => navigate('/')}>
            <GrPrevious/>
            Volver al inicio
          </Button>
        </div>
      </div>
  )
}

export default Page404