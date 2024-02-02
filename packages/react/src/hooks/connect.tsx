import { ConnectionStates } from '@quirks/store';
import { useQuirks } from '../providers';

export const useConnect = () => {
  const store = useQuirks();

  return {
    connect: store.use.connect(),
    disconnect: store.use.disconnect(),
    status: store.use.status(),
    setupStatus: store.use.setupStatus(),
    reconnectionStatus: store.use.reconnectionStatus(),
    connected: store.use.status() === ConnectionStates.CONNECTED,
    waiting: store.use.isConnecting(),
    isConnecting: store.use.isConnecting(),
    disconnected: store.use.status() === ConnectionStates.DISCONNECTED,
    rejected: store.use.status() === ConnectionStates.REJECTED,
    wallet: store.use.wallet ? store.use.wallet() : undefined,
    walletName: store.use.walletName ? store.use.walletName() : undefined,
  };
};
