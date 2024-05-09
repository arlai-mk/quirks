import type { Chain, AssetList, Versions } from '../types';

export const okexchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'okexchain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'OKExChain',
  chain_id: 'exchain-66',
  bech32_prefix: 'ex',
  daemon_name: 'exchaind',
  node_home: '$HOME/.exchaind',
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'wei',
        low_gas_price: 200000000,
        average_gas_price: 250000000,
        high_gas_price: 400000000,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/okex/exchain',
    recommended_version: 'v1.6.1.1',
    compatible_versions: ['v1.2.2', 'v1.6.1.1'],
    binaries: {},
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/okx/mainnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v1.6.1.1',
        recommended_version: 'v1.6.1.1',
        compatible_versions: ['v1.2.2', 'v1.6.1.1'],
        binaries: {},
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
  },
  peers: {
    seeds: [
      {
        id: 'e926c8154a2af4390de02303f0977802f15eafe2',
        address: '3.16.103.80:26656',
        provider: 'Chillcrypto',
      },
      {
        id: '7fa5b1d1f1e48659fa750b6aec702418a0e75f13',
        address: '175.41.191.69:26656',
        provider: 'Unique farming',
      },
      {
        id: 'c8f32b793871b56a11d94336d9ce6472f893524b',
        address: '35.74.8.189:26656',
        provider: 'DeLab',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://exchaintmrpc.okex.org',
        provider: 'okx chain',
      },
    ],
    rest: [],
  },
  explorers: [
    {
      kind: 'OKLink',
      url: 'https://www.oklink.com/en/okc',
      tx_page: 'https://www.oklink.com/en/okc/tx/${txHash}',
      account_page: 'https://www.oklink.com/en/okc/address/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
    },
  ],
};

export const okexchainAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'okexchain',
  assets: [
    {
      description: 'The native token of OKExChain',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0,
        },
        {
          denom: 'okt',
          exponent: 18,
        },
      ],
      base: 'wei',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
      },
      coingecko_id: 'oec-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
        },
      ],
    },
  ],
};
