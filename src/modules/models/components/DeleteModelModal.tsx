import NiceModal, {NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {Button, Modal} from "@components";
import {ModelNode} from "@types";
import {FC, useState} from "react";
import {GraphQLError, GraphQLFormattedError} from "graphql/index";
import {useMutation} from "@apollo/client";
import deleteModelMutation from "@/modules/models/mutations/deleteModelMutation";
import {HiOutlineTrash} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const DeleteModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

  const modal = useModal()
  const navigate = useNavigate()

  const [deleteModel, { loading }] = useMutation(deleteModelMutation, {
    onCompleted: () => {
      modal.remove()
      navigate('/')
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
  })

  const handleDeleteModelBtn = () => {
    deleteModel({
      variables: {
        modelId: node.id
      }
    })
  }

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        Eliminar modelo
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de eliminar a <span className="text-white font-medium">{node.name}</span>{' '}.
        </p>

        <div className="flex gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>
            Esta acción <strong className="text-red-100">NO SE PUEDE DESHACER</strong>.{' '}
            La modelo será eliminada permanentemente del sistema junto con todos sus datos.
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
        <Button color="error" isLoading={loading} onClick={handleDeleteModelBtn}>
          <HiOutlineTrash className="text-base" />
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default DeleteModelModal
