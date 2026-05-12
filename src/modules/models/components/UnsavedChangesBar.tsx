import clsx from 'clsx'
import { useFormikContext } from 'formik'
import { HiExclamationCircle } from 'react-icons/hi2'
import { Button } from '@components'

interface Props {
  submitLabel?: string
  showDiscard?: boolean
}

const UnsavedChangesBar = ({
  submitLabel = 'Guardar cambios',
  showDiscard = true,
}: Props) => {
  const { dirty, isSubmitting, resetForm } = useFormikContext()

  return (
    <div
      className={clsx(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4',
        'transition-all duration-300 ease-out',
        dirty
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 pointer-events-none',
      )}
    >
      <div className="rounded-2xl border border-white/[0.12] bg-card-dark/90 backdrop-blur-md shadow-2xl shadow-black/70 overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-2">
            <HiExclamationCircle className="text-primary text-lg shrink-0" />
            <span className="text-sm text-neutral-300">Cambios sin guardar</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {showDiscard && (
              <Button
                type="button"
                color="light"
                disabled={isSubmitting}
                onClick={() => resetForm()}
              >
                Descartar
              </Button>
            )}
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
              {isSubmitting ? 'Guardando...' : submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnsavedChangesBar
