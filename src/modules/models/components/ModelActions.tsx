import {Button} from "@components";
import {ModelNode} from "@types";
import {FC} from "react";
import NiceModal from "@ebay/nice-modal-react";
import VerifiedModelModal from "@/modules/models/components/VerifiedModelModal";
import ActivateModelModal from "@/modules/models/components/ActivateModelModal";
import DeactivateModelModal from "@/modules/models/components/DeactivateModelModal";
import FeaturedModelModal from "@/modules/models/components/FeaturedModelModal";

interface Props {
  model: ModelNode
}

const ModelActions: FC<Props> = ({model}) => {
  return (
    <div className="w-full flex justify-center gap-x-4">
       <Button
         disabled={model.isVerified}
         onClick={() => NiceModal.show(VerifiedModelModal, {node: model})}>
        Verificar
      </Button>
      <Button
        disabled={!model.isVerified || model.isActive}
        onClick={() => NiceModal.show(ActivateModelModal, {node: model})}
      >
        Activar
      </Button>
      <Button
        disabled={!model.isVerified}
        onClick={() => NiceModal.show(DeactivateModelModal, {node:model})}>
        Desactivar
      </Button>
      <Button
        disabled={model.isFeatured}
        onClick={() => NiceModal.show(FeaturedModelModal, {node: model})}>
        Destacar
      </Button>
    </div>
  )
}

export default ModelActions;