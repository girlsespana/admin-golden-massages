import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { Button, Modal } from "@components";
import { ModelNode } from "@types";
import { FC, useState } from "react";
import { GraphQLError, GraphQLFormattedError } from "graphql/index";
import { useMutation } from "@apollo/client";
import deactivateModelMutation from "@/modules/models/mutations/deactivateModelMutation";
import modelQuery from "@/modules/models/queries/ModelQuery";
import modelsQuery from "@/modules/models/queries/ModelsQuery";
import { HiStop } from "react-icons/hi2";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const DeactivateModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

  const modal = useModal()

  const [deactivateModel, { loading }] = useMutation(deactivateModelMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [modelQuery, modelsQuery]
  })

  const handleDeactivateModelBtn = () => {
    deactivateModel({
      variables: {
        modelId: node.id
      }
    })
  }

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        Desactivar modelo
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de desactivar a <span className="text-white font-medium">{node.name}</span>{' '}
          <span className="text-neutral-500">({node.user.name})</span>.
        </p>

        <div className="flex gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>
            Una vez desactivada, la modelo quedará marcada como <strong className="text-red-100">DESACTIVADA</strong> y{' '}
            <strong className="text-red-100">NO VERIFICADA</strong> en el sistema,
            y perderá la fecha de activación actual.
          </span>
        </div>

        {errors && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
            {errors.map((err) => err.message).join(", ")}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button color="light" onClick={() => modal.remove()}>
          Cancelar
        </Button>
        <Button color="error" isLoading={loading} onClick={handleDeactivateModelBtn}>
          <HiStop className="text-base" />
          Desactivar
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default DeactivateModelModal
