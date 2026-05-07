import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { Button, Modal } from "@components";
import { ModelNode } from "@types";
import { FC, useState } from "react";
import { GraphQLError, GraphQLFormattedError } from "graphql/index";
import { useMutation } from "@apollo/client";
import modelQuery from "@/modules/models/queries/ModelQuery";
import modelsQuery from "@/modules/models/queries/ModelsQuery";
import featuredModelMutation from "@/modules/models/mutations/featuredModelMutation";
import { FaStar } from "react-icons/fa";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const FeaturedModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

  const modal = useModal()

  const [featuredModal, { loading }] = useMutation(featuredModelMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [modelQuery, modelsQuery]
  })

  const handleFeaturedModelBtn = async () => {
    await featuredModal({
      variables: {
        input: {
          modelId: node.id
        }
      }
    })
  }

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        Destacar modelo
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de destacar a <span className="text-white font-medium">{node.name}</span>{' '}
          <span className="text-neutral-500">({node.user.name})</span>.
        </p>

        <div className="flex gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary/90 text-sm">
          <span className="mt-0.5 shrink-0">⭐</span>
          <span>
            Una vez destacada, la modelo quedará marcada como <strong className="text-primary">DESTACADA</strong> en el sistema
            y aparecerá en las secciones de novedades durante una semana.
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
        <Button color="primary" isLoading={loading} onClick={handleFeaturedModelBtn}>
          <FaStar className="text-sm" />
          Destacar
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default FeaturedModelModal
