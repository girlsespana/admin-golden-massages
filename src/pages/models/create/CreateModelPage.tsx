import CreateModelForm from '@/modules/models/components/CreateModelForm'
import {FaArrowLeft} from "react-icons/fa6"
import {useNavigate} from "react-router-dom"
import GoldAccent from '@/components/ui/GoldAccent'

const CreateModelPage = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
      >
        <FaArrowLeft className="text-xs" />
        Modelos
      </button>

      <div className="bg-card-dark rounded-2xl border border-white/[0.06] overflow-hidden">
        <GoldAccent />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">Crear modelo</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Completa los datos para registrar un nuevo modelo
          </p>
        </div>
      </div>

      <CreateModelForm/>
    </div>
  )
}

export default CreateModelPage
