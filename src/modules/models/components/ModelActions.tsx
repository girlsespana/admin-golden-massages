import {Button} from "@components";
import {ModelNode} from "@types";
import {FC} from "react";
import NiceModal from "@ebay/nice-modal-react";
import ActivateModelModal from "@/modules/models/components/ActivateModelModal";
import DeactivateModelModal from "@/modules/models/components/DeactivateModelModal";

interface Props {
  model: ModelNode
}

const ModelActions: FC<Props> = ({model}) => {
  return (
    <div className="w-full flex justify-center gap-x-4">
      <Button
        disabled={ model.isActive}
        onClick={() => NiceModal.show(ActivateModelModal, {node: model})}>
        Activar
      </Button>
      <Button
        disabled={!model.isActive}
        onClick={() => NiceModal.show(DeactivateModelModal, {node:model})}>
        Desactivar
      </Button>
    </div>
  )
}

export default ModelActions;