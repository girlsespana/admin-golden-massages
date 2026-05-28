import NiceModal, {NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {Button, Modal} from "@components";
import {ModelNode} from "@types";
import {FC, useState} from "react";
import {GraphQLError, GraphQLFormattedError} from "graphql/index";
import {useMutation} from "@apollo/client";
import activateModelMutation from "@/modules/models/mutations/activateModelMutation";
import deactivateModelMutation from "@/modules/models/mutations/deactivateModelMutation";
import modelsQuery from "@/modules/models/queries/ModelsQuery";
import {HiPlay, HiStop} from "react-icons/hi2";
import modelQuery from "@/modules/models/queries/ModelQuery";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const ToggleModelActivationModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

  const modal = useModal()

  const [activateModel, { loading: activating }] = useMutation(activateModelMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [modelQuery, modelsQuery]
  })

  const [deactivateModel, { loading: deactivating }] = useMutation(deactivateModelMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [modelQuery, modelsQuery]
  })

  const isActive = node.isActive
  const loading = activating || deactivating

  const handleToggleBtn = () => {
    if (isActive) {
      deactivateModel({
        variables: {
          modelId: node.id
        }
      })
    } else {
      activateModel({
        variables: {
          modelId: node.id
        }
      })
    }
  }

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        {isActive ? 'Desactivar modelo' : 'Activar modelo'}
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de {isActive ? 'desactivar' : 'activar'} a <span className="text-white font-medium">{node.name}</span>{' '}
          <span className="text-neutral-500">({node.user.name})</span>.
        </p>

        {isActive ? (
          <div className="flex gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
            <span className="mt-0.5 shrink-0">⚠️</span>
            <span>
              Una vez desactivada, la modelo quedará marcada como <strong className="text-red-100">DESACTIVADA</strong> y{' '}
              <strong className="text-red-100">NO VERIFICADA</strong> en el sistema,
              y perderá la fecha de activación actual.
            </span>
          </div>
        ) : (
          <div className="flex gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm">
            <span className="mt-0.5 shrink-0">ℹ️</span>
            <span>
              Una vez activada, la modelo quedará marcada como <strong className="text-emerald-100">ACTIVA</strong> en el sistema.
            </span>
          </div>
        )}

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
        <Button
          color={isActive ? "error" : "success"}
          isLoading={loading}
          onClick={handleToggleBtn}
        >
          {isActive ? <HiStop className="text-base" /> : <HiPlay className="text-base" />}
          {isActive ? 'Desactivar' : 'Activar'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default ToggleModelActivationModal
