import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { Modal } from "@components";
import { type ModelSubscriptionNode } from "@/gql/graphql";
import { FC } from "react";

interface Props extends NiceModalHocProps {
  subscriptions: ModelSubscriptionNode[];
}

const SubscriptionsModal: FC<Props> = NiceModal.create(({ subscriptions }) => {
  const modal = useModal();

  const formatDate = (date?: string | null) => {
    if (!date) return '-';
    return date.split('T')[0];
  };

  return (
    <Modal show={modal.visible} onClose={() => modal.remove()} size="2xl">
      <Modal.Header>
        Historial de suscripciones
      </Modal.Header>
      <Modal.Body>
        {subscriptions.length === 0 ? (
          <div className="text-center text-neutral-500 py-8 text-sm">
            No hay suscripciones registradas
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Tipo</th>
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Inicio</th>
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Fin</th>
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Días</th>
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Estado</th>
                  <th className="text-left py-2 px-3 text-neutral-400 font-medium">Creada</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((subscription) => (
                  <tr
                    key={subscription.id}
                    className="border-b border-neutral-800/60 hover:bg-neutral-800/40 transition-colors"
                  >
                    <td className="py-2.5 px-3 text-neutral-300">{subscription.rangeType}</td>
                    <td className="py-2.5 px-3 text-neutral-300">{formatDate(subscription.startDate)}</td>
                    <td className="py-2.5 px-3 text-neutral-300">{formatDate(subscription.endDate)}</td>
                    <td className="py-2.5 px-3 text-neutral-300">{subscription.daysPurchased}</td>
                    <td className="py-2.5 px-3">
                      {subscription.isActive ? (
                        <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full text-xs font-medium">
                          Activa
                        </span>
                      ) : (
                        <span className="bg-neutral-800/60 text-neutral-400 border border-white/[0.06] px-2 py-0.5 rounded-full text-xs font-medium">
                          Inactiva
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-neutral-300">{formatDate(subscription.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
});

export default SubscriptionsModal;
