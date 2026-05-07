import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { Button, Modal } from "@components";
import { FC, useState } from "react";
import { ModelNode } from "@types";
import { useMutation } from "@apollo/client";
import { GraphQLError, GraphQLFormattedError } from "graphql"
import verifyModelMutation from "@/modules/models/mutations/verifyModelMutation";
import ModelsQuery from "@/modules/models/queries/ModelsQuery";
import ModelQuery from "@/modules/models/queries/ModelQuery";
import { HiCheckBadge } from "react-icons/hi2";

interface Props extends NiceModalHocProps {
  node: ModelNode;
}

const VerifiedModelModal: FC<Props> = NiceModal.create(({ node }) => {
  const [errors, setErrors] = useState<GraphQLFormattedError[] | null>(null)

  const modal = useModal();

  const [verifyModel, { loading }] = useMutation(verifyModelMutation, {
    onCompleted: () => {
      modal.remove();
    },
    onError: (e) => {
      console.error(e.graphQLErrors);
      setErrors([...e.graphQLErrors] as GraphQLError[]);
    },
    refetchQueries: [
      { query: ModelsQuery },
      { query: ModelQuery, variables: { id: node.id } },
    ],
  });

  const handleVerifyModelBtn = () => {
    verifyModel({
      variables: {
        modelId: node.id,
      },
    });
  };

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()}>
      <Modal.Header>
        Verificar modelo
      </Modal.Header>

      <Modal.Body className="space-y-4">
        <p className="text-neutral-300">
          Estás a punto de verificar a <span className="text-white font-medium">{node.name}</span>{' '}
          <span className="text-neutral-500">({node.user.name})</span>.
        </p>

        <div className="flex gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>
            Una vez verificada, la modelo quedará marcada como <strong className="text-amber-100">VERIFICADA</strong> en el sistema.
            Asegúrate de haber revisado toda su información antes de confirmar esta acción.
          </span>
        </div>

        {node.isVerified && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
            <HiCheckBadge className="text-base shrink-0" />
            <span>La modelo ya está verificada.</span>
          </div>
        )}

        {errors && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
            {errors.some((err) => err.message.includes("already verified"))
              ? "Esta modelo ya está verificada."
              : errors.map((err) => err.message).join(", ")}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button color="light" onClick={() => modal.remove()}>
          Cancelar
        </Button>
        {!node.isVerified && (
          <Button color="success" isLoading={loading} onClick={handleVerifyModelBtn}>
            <HiCheckBadge className="text-base" />
            Verificar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
});

export default VerifiedModelModal;
