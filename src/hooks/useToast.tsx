import {Renderable, Toast, ToastOptions, ValueOrFunction} from 'react-hot-toast'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import {MdClose} from 'react-icons/md'
import {ToastType} from '@/components/toast/toasType'
import ToastIcon from '@/components/toast/ToasIcon'

const textColor: Record<ToastType, string> = {
  success: 'text-green-500',
  error: 'text-red-500',
  loading: 'text-neutral-400',
  info: 'text-blue-500',
}

const useToast = () => (message: ValueOrFunction<Renderable, Toast>, type: ToastType = 'success', options?: ToastOptions) => toast.custom((t) => (
    <div
      className={clsx(
        'relative flex items-start rounded-lg  backdrop-blur-sm p-4 pr-6',
        'shadow-md',
        textColor[type],
      )}
    >
      <ToastIcon type={type}/>
      <p className="text-sm">
        {
          typeof message === 'function' ? message(t) : message
        }
      </p>
      <button
        type="button"
        className="absolute top-0 right-0 p-1 transition-colors duration-300 hover:cursor-pointer hover:text-white"
        onClick={() => toast.remove(t.id)}
      >
        <MdClose/>
      </button>
    </div>
  ),
  {duration: type === 'loading' ? Infinity : 4000, ...options}
)

export default useToast