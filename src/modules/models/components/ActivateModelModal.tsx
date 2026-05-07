import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { Button, Modal } from "@components";
import { ModelActivationDays, ModelNode, ModelRangeType } from "@types";
import { FC, useState } from "react";
import RangeModelSelect from "@/modules/models/components/forms/RangeModelSelect";
import ModelActivationDaysSelect from "@/modules/models/components/forms/ModelActivationDaysSelect";
import { SingleValue } from "react-select";
import { SelectOption } from "@/components/forms/Select/types";
import { GraphQLError, GraphQLFormattedError } from "graphql/index";
import { useMutation } from "@apollo/client";
import activateModelMutation from "@/modules/models/mutations/activateModelMutation";
import modelQuery from "@/modules/models/queries/ModelQuery";
import modelsQuery from "@/modules/models/queries/ModelsQuery";
import { HiPlay } from "react-icons/hi2";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const ActivateModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)
  const [selectError, setSelectError] = useState<string | null>(null)
  const [daysError, setDaysError] = useState<string | null>(null)
  const [rangeType, setRangeType] = useState<ModelRangeType | null>(null)
  const [days, setDays] = useState<ModelActivationDays | null>(null)

  const modal = useModal()
  const [activateModal, { loading }] = useMutation(activateModelMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [modelQuery, modelsQuery]
  })

  const handleRangeSelectChange = (value: SingleValue<SelectOption>) => {
    if (value) {
      setSelectError(null)
      setRangeType(value.value as ModelRangeType)
    } else {
      setRangeType(null)
    }
  }

  const handleDaysSelectChange = (value: SingleValue<SelectOption>) => {
    if (value) {
      setDaysError(null)
      setDays(value.value as ModelActivationDays)
    } else {
      setDays(null)
    }
  }

  const handleActivateModelBtn = () => {
    if (!rangeType) {
      setSelectError("Debes seleccionar un rango para activar la modelo")
      return
    }
    if (!days) {
      setDaysError("Debes seleccionar el número de días para activar la modelo")
      return
    }
    activateModal({
      variables: {
        modelId: node.id,
        rangeType: rangeType,
        days: days
      }
    })
  }

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        Activar modelo
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de activar a <span className="text-white font-medium">{node.name}</span>{' '}
          <span className="text-neutral-500">({node.user.name})</span>.
        </p>

        <div className="flex gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm">
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>
            Una vez activada, la modelo quedará marcada como <strong className="text-emerald-100">ACTIVA</strong> en el sistema.
            Selecciona la categoría y el período de activación.
          </span>
        </div>

        <div className="space-y-1">
          <RangeModelSelect onChange={handleRangeSelectChange} />
          {selectError && (
            <p className="text-red-400 text-xs px-1">{selectError}</p>
          )}
        </div>

        <div className="space-y-1">
          <ModelActivationDaysSelect onChange={handleDaysSelectChange} />
          {daysError && (
            <p className="text-red-400 text-xs px-1">{daysError}</p>
          )}
        </div>

        {errors && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
            {errors.some((err) => err.message.includes("already activate"))
              ? "Esta modelo ya está activada."
              : errors.map((err) => err.message).join(", ")}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button color="light" onClick={() => modal.remove()}>
          Cancelar
        </Button>
        <Button color="success" isLoading={loading} onClick={handleActivateModelBtn}>
          <HiPlay className="text-base" />
          Activar
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default ActivateModelModal
