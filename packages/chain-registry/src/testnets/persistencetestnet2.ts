import type { Chain, AssetList, Versions } from '../types';

export const persistencetestnet2: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'persistencetestnet2',
  chain_id: 'test-core-2',
  pretty_name: 'Persistence Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://persistence.one/',
  bech32_prefix: 'persistence',
  daemon_name: 'persistenceCore',
  node_home: '$HOME/.persistenceCore',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uxprt',
        fixed_min_gas_price: 0,
        low_gas_price: 0.05,
        average_gas_price: 0.125,
        high_gas_price: 0.2,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uxprt',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/persistenceOne/persistenceCore',
    recommended_version: 'v9.1.1',
    compatible_versions: ['v9.1.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/persistenceOne/persistenceCore/releases/download/v9.1.1/persistenceCore-v9.1.1-linux-amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/persistenceOne/networks/auditOne/test-core-2/test-core-2/genesis.json',
    },
    versions: [
      {
        name: 'v7.0.2',
        recommended_version: 'v7.0.2',
        compatible_versions: ['v7.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.2/persistenceCore-v7.0.2-linux-amd64.tar.gz',
        },
      },
      {
        name: 'v8',
        tag: 'v8.0.0',
        recommended_version: 'v8.0.0',
        compatible_versions: ['v8.0.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        ibc_go_version: 'v7.2.0',
        cosmwasm_version: '0.40',
        cosmwasm_enabled: true,
        next_version_name: 'v8.1.0',
      },
      {
        name: 'v8.1.0',
        tag: 'v8.1.0',
        recommended_version: 'v8.1.0',
        compatible_versions: ['v8.1.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        ibc_go_version: 'v7.2.0',
        cosmwasm_version: '0.40',
        cosmwasm_enabled: true,
        next_version_name: 'v9',
      },
      {
        name: 'v9',
        tag: 'v9.0.0',
        height: 1531570,
        proposal: 16,
        recommended_version: 'v8.0.0',
        compatible_versions: ['v8.0.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        ibc_go_version: 'v7.2.0',
        cosmwasm_version: '0.40',
        cosmwasm_enabled: true,
        next_version_name: 'v9.1.0',
      },
      {
        name: 'v9.1.0',
        tag: 'v9.1.1',
        height: 1543200,
        proposal: 17,
        recommended_version: 'v9.1.1',
        compatible_versions: ['v9.1.1', 'v9.1.0'],
        cosmos_sdk_version: 'v0.47.x-lsm',
        ibc_go_version: 'v7.2.0',
        ics_enabled: ['ics20-1', 'ics27-1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.40.2',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.persistenceCore/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v9.1.1/persistenceCore-v9.1.1-linux-amd64.tar.gz',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '3ce04530d850e727d092e9a81d9f580c7ff8db56',
        address: '141.94.97.77:26656',
        provider: 'Persistence',
      },
    ],
    persistent_peers: [
      {
        id: '171e837618d9ec0b5faf0c91edc0cc3edd1cf204',
        address: '188.172.228.225:26656',
        provider: 'YTWOFUND',
      },
      {
        id: 'cee6b94965f301e8b5ad905a65fa39c03cd193ce',
        address: '51.68.152.17.30:26656',
        provider: 'Persistence',
      },
      {
        id: '7f971fc5fc2ffedbaf32f3b4021645571461a712',
        address: '198.244.177.67:26656',
        provider: 'Persistence',
      },
      {
        id: '21ca0b996db604681fb73721ecb01d2c6410c628',
        address: '162.19.94.46:26656',
        provider: 'Persistence',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow',
      },
      {
        address: 'https://persistence-testnet-rpc.baryon.dev/',
        provider: 'Baryon',
      },
      {
        address: 'https://persistence-testnet-rpc.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes',
      },
      {
        address: 'https://rpc.testnet2.persistence.one/',
        provider: 'Persistence',
      },
      {
        address: 'https://persistence-testnet-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://persistencecoretest-rpc.ytwofund.pro/',
        provider: 'YTWOFUND',
      },
      {
        address: 'http://persistence-testnet.paranorm.pro:24657/',
        provider: 'Paranorm',
      },
    ],
    rest: [
      {
        address: 'https://api-persistence-testnet-01.stakeflow.io/',
        provider: 'StakeFlow',
      },
      {
        address: 'https://persistence-testnet-api.baryon.dev/',
        provider: 'Baryon',
      },
      {
        address: 'https://persistence-testnet-rest.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes',
      },
      {
        address: 'https://rest.testnet2.persistence.one/',
        provider: 'Persistence',
      },
      {
        address: 'https://persistence-testnet-api.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://persistenceCoreTest-rest.ytwofund.pro',
        provider: 'YTWOFUND',
      },
    ],
    grpc: [
      {
        address: 'persistence-testnet-grpc.polkachu.com:15490',
        provider: 'Polkachu',
      },
      {
        address: 'persistenceCoreTest-grpc.ytwofund.pro:9090',
        provider: 'YTWOFUND',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/persistence-testnet',
      tx_page: 'https://testnet.mintscan.io/persistence-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}',
    },
    {
      kind: 'StakeFlow',
      url: 'https://stakeflow.io/persistence-testnet',
      tx_page:
        'https://stakeflow.io/persistence-testnet/transactions/${txHash}',
      account_page:
        'https://stakeflow.io/persistence-testnet/accounts/${accountAddress}',
    },
    {
      kind: 'baryon',
      url: 'https://testnet-explorer.baryon.dev/test-core-2',
      tx_page: 'https://testnet-explorer.baryon.dev/test-core-2/tx/{txHash}',
      account_page:
        'https://testnet-explorer.baryon.dev/test-core-2/account/${accountAddress}',
    },
  ],
};

export const persistencetestnet2AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'persistencetestnet2',
  assets: [
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom: 'uxprt',
          exponent: 0,
        },
        {
          denom: 'xprt',
          exponent: 6,
        },
      ],
      base: 'uxprt',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
      },
      coingecko_id: 'persistence',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
        },
      ],
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom: 'stk/uatom',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom'],
        },
      ],
      base: 'stk/uatom',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
        },
      ],
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom: 'stk/uosmo',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo'],
        },
      ],
      base: 'stk/uosmo',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
        },
      ],
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [
        {
          denom: 'stk/adv4tnt',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt'],
        },
      ],
      base: 'stk/adv4tnt',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg',
        },
      ],
    },
  ],
};
