import type { Chain, AssetList, Versions } from '../types';

export const kyvedevnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kyvedevnet',
  chain_id: 'korellia-2',
  pretty_name: 'KYVE Korellia',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'kyve',
  daemon_name: 'chaind',
  node_home: '$HOME/.kyve',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'tkyve',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/KYVENetwork/chain',
    recommended_version: 'v0.6.3',
    compatible_versions: ['v0.6.3'],
    binaries: {
      'linux/amd64':
        'https://github.com/KYVENetwork/chain/releases/download/v0.6.3/chain_linux_amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://github.com/KYVENetwork/chain/releases/download/v0.0.1/genesis.json',
    },
    versions: [
      {
        name: 'v0.6.3',
        recommended_version: 'v0.6.3',
        compatible_versions: ['v0.6.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/KYVENetwork/chain/releases/download/v0.6.3/chain_linux_amd64.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '02dd2c26948ea758a25d3dbc91744f8897681652',
        address: '3.73.27.185:26656',
      },
    ],
    persistent_peers: [
      {
        id: '70556c82352b9919fb6f339b9da0ebc587e9148c',
        address: '3.68.232.117:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.korellia.kyve.network',
        provider: 'kyve',
      },
    ],
    rest: [
      {
        address: 'https://api.korellia.kyve.network',
        provider: 'kyve',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://kyve.explorers.guru/',
      tx_page: 'https://kyve.explorers.guru/transaction/${txHash}',
    },
  ],
};

export const kyvedevnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kyvedevnet',
  assets: [
    {
      description:
        'The native utility token of the Korellia devnet version of KYVE.',
      denom_units: [
        {
          denom: 'tkyve',
          exponent: 0,
        },
        {
          denom: 'kyve',
          exponent: 6,
        },
      ],
      base: 'tkyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
          },
          provider: 'Kyve',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
          },
        },
      ],
    },
  ],
};
