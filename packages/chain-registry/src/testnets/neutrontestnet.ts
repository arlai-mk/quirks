import type { Chain, AssetLists } from '../types';

export const neutrontestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'neutrontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Neutron Testnet',
  chain_id: 'pion-1',
  bech32_prefix: 'neutron',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.02,
        average_gas_price: 0.02,
        high_gas_price: 0.02,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    cosmos_sdk_version: '0.47',
    consensus: {
      type: 'cometbft',
      version: '0.37.2',
    },
    cosmwasm_version: '0.45',
    cosmwasm_enabled: true,
    ibc_go_version: '7.3.1',
    genesis: {
      genesis_url:
        'https://github.com/cosmos/testnets/raw/master/replicated-security/pion-1/pion-1-genesis.json',
    },
    versions: [
      {
        name: 'v0.4.3',
        next_version_name: 'v1.0.4',
        recommended_version: 'v0.4.3',
        compatible_versions: ['v0.4.3'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
      },
      {
        name: 'v1.0.4',
        next_version_name: 'v2.0.0',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'cometbft',
          version: '0.34.27',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
      },
      {
        name: 'v2.0.0',
        next_version_name: '',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        cosmwasm_version: '0.45',
        cosmwasm_enabled: true,
        ibc_go_version: '7.3.1',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg',
  },
  peers: {
    seeds: [
      {
        id: '0de4d730b5341d3a83721e1cbb5ce7772e26a400',
        address: 'p2p-falcron.pion-1.ntrn.tech:26656',
        provider: 'Neutron',
      },
    ],
    persistent_peers: [
      {
        id: '49d75c6094c006b6f2758e45457c1f3d6002ce7a',
        address: 'pion-banana.rs-testnet.polypore.xyz:26656',
        provider: 'Hypha',
      },
      {
        id: 'f2520026fb9086f1b2f09e132d209cbe88064ec1',
        address: 'pion-cherry.rs-testnet.polypore.xyz:26656',
        provider: 'Hypha',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-falcron.pion-1.ntrn.tech',
        provider: 'Neutron',
      },
      {
        address: 'https://neutron-testnet-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://rest-falcron.pion-1.ntrn.tech',
        provider: 'Neutron',
      },
      {
        address: 'https://api.pion.remedy.tm.p2p.org',
        provider: 'P2P.ORG',
      },
      {
        address: 'https://rest.baryon-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha',
      },
    ],
    grpc: [
      {
        address: 'grpc-falcron.pion-1.ntrn.tech:80',
        provider: 'Neutron',
      },
      {
        address: 'grpc.baryon.remedy.tm.p2p.org:443',
        provider: 'P2P.ORG',
      },
    ],
  },
  explorers: [
    {
      kind: 'Ping.pub Explorer from Hypha',
      url: 'https://explorer.rs-testnet.polypore.xyz/pion-1',
      tx_page: 'https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}',
      account_page:
        'https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}',
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/neutron-testnet',
      tx_page: 'https://testnet.mintscan.io/neutron-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/neutron-testnet/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg',
    },
  ],
};

export const neutrontestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'neutrontestnet',
  assets: [
    {
      description: 'The native token of Neutron chain',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0,
        },
        {
          denom: 'ntrn',
          exponent: 6,
        },
      ],
      base: 'untrn',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.svg',
        },
      ],
    },
  ],
};
