'use client';

import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { Config, ssrPersistOptions } from '@quirks/store';
import { keplrExtension, leapExtension } from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
  persistOptions: ssrPersistOptions,
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};
