import NiceModal, {NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {Button, Modal} from "@components";
import {ModelNode} from "@types";
import {FC, useState} from "react";
import {GraphQLError, GraphQLFormattedError} from "graphql/index";
import {useMutation} from "@apollo/client";
import activateModelMutation from "@/modules/models/mutations/activateModelMutation";
import modelsQuery from "@/modules/models/queries/ModelsQuery";
import {HiPlay} from "react-icons/hi2";
import modelQuery from "@/modules/models/queries/ModelQuery";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const ActivateModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

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


  const handleActivateModelBtn = () => {
    activateModal({
      variables: {
        modelId: node.id
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
