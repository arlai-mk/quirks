import type { Chain, AssetList, Versions } from '../types';

export const comdex: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'comdex',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://comdex.one/',
  pretty_name: 'Comdex',
  chain_id: 'comdex-1',
  bech32_prefix: 'comdex',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ucmdx',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ucmdx',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/comdex-official/comdex',
    recommended_version: 'v13.4.0',
    compatible_versions: ['v13.4.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/comdex-official/comdex/releases/download/v13.4.0/comdex-linux-amd64.tar.gz',
    },
    cosmos_sdk_version: 'v0.47.5',
    consensus: {
      type: 'cometbft',
      version: '0.37.2',
    },
    cosmwasm_version: 'v0.41.0',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json',
    },
    versions: [
      {
        name: 'v9.0.0',
        recommended_version: 'v9.0.0',
        compatible_versions: ['v9.0.0'],
        cosmwasm_enabled: true,
        next_version_name: 'v10.0.0',
      },
      {
        name: 'v10.0.0',
        recommended_version: 'v10.0.0',
        compatible_versions: ['v10.0.0'],
        cosmwasm_enabled: true,
        next_version_name: 'v11.5.0',
      },
      {
        name: 'v11.5.0',
        height: 8184000,
        proposal: 154,
        recommended_version: 'v11.5.2',
        compatible_versions: ['v11.5.2'],
        cosmwasm_enabled: true,
        next_version_name: 'v13.3.0',
      },
      {
        name: 'v13.3.0',
        proposal: 216,
        height: 10981900,
        recommended_version: 'v13.4.0',
        compatible_versions: ['v13.4.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/comdex-official/comdex/releases/download/v13.4.0/comdex-linux-amd64.tar.gz',
        },
        cosmos_sdk_version: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        cosmwasm_version: 'v0.41.0',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  daemon_name: 'comdex',
  node_home: '$HOME/.comdex',
  key_algos: ['secp256k1'],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
  },
  peers: {
    seeds: [
      {
        id: '7ca14a1d156299999eba9c394ca060368022d52f',
        address: '54.194.178.110:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13156',
        provider: 'Polkachu',
      },
      {
        id: 'c30dacf15e97a30b78792c7fa817fd2ef529b820',
        address: 'comdex.seed.stavr.tech:2026',
        provider: '🔥STAVR🔥',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:13156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'comdex-mainnet-seed.autostake.com:26776',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '6596d143fd128b2394b27cd7846bda099ca5a193',
        address: 'seeds.goldenratiostaking.net:1621',
        provider: 'Golden Ratio Staking',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:13156',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '88ba33fbdf0279efaf27cff629f3cf72814d4069',
        address: 'seed-comdex-01.stakeflow.io:10007',
        provider: 'Stakeflow',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10456',
        provider: 'StakerHouse',
      },
    ],
    persistent_peers: [
      {
        id: 'd478882a80674fa10a32da63cc20cae13e3a2a57',
        address: '43.204.0.243:26656',
      },
      {
        id: 'd8b74791ee56f1b345d822f62bd9bc969668d8df',
        address: '194.163.128.55:36656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'comdex-mainnet-peer.autostake.com:26776',
        provider: 'AutoStake 🛡️ Slash Protecteds',
      },
      {
        id: '88ba33fbdf0279efaf27cff629f3cf72814d4069',
        address: 'peer-comdex-01.stakeflow.io:10007',
        provider: 'Stakeflow',
      },
      {
        id: '5092d03f63852a7712ac5061bcfcbd96f00a4e0c',
        address: 'peer-comdex.blockval.io:33656',
        provider: 'Blockval',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.comdex.one',
        provider: 'comdex',
      },
      {
        address: 'https://comdex-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://comdex.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc.comdex.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://comdex-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://rpc-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://comdex-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://comdex-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://comdex-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://comdex-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-comdex-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://comdex-rpc.validatornode.com',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://rpc-comdex.blockval.io',
        provider: 'Blockval',
      },
    ],
    rest: [
      {
        address: 'https://rest.comdex.one',
        provider: 'comdex',
      },
      {
        address: 'https://api.comdex.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://comdex-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://comdex.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://comdex-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://lcd-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://comdex-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://comdex-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://comdex-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api-comdex-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://comdex-api.validatornode.com',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://api-comdex.blockval.io',
        provider: 'Blockval',
      },
    ],
    grpc: [
      {
        address: 'grpc-comdex-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'comdex.grpcui.chaintools.host:443',
        provider: 'ChainTools',
      },
      {
        address: 'comdex-grpc.polkachu.com:13190',
        provider: 'Polkachu',
      },
      {
        address: 'comdex.grpc.m.stavr.tech:104',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'grpc-comdex.cosmos-spaces.cloud:2300',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'comdex-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'comdex-grpc.w3coins.io:13190',
        provider: 'w3coins',
      },
      {
        address: 'comdex-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-comdex-01.stakeflow.io:10002',
        provider: 'Stakeflow',
      },
      {
        address: 'comdex-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'https://grpc-comdex.blockval.io:443',
        provider: 'Blockval',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/comdex',
      tx_page: 'https://ezstaking.app/comdex/txs/${txHash}',
      account_page: 'https://ezstaking.app/comdex/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/comdex',
      tx_page: 'https://www.mintscan.io/comdex/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/comdex/accounts/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Comdex-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Comdex-Mainnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Comdex-Mainnet/accounts/${accountAddress}',
    },
    {
      kind: 'aneka',
      url: 'https://comdex.aneka.io/',
      tx_page: 'https://comdex.aneka.io/txs/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/comdex',
      tx_page: 'https://ping.pub/comdex/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/comdex',
      tx_page: 'https://atomscan.com/comdex/transactions/${txHash}',
      account_page: 'https://atomscan.com/comdex/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/comdex',
      account_page: 'https://stakeflow.io/comdex/accounts/${accountAddress}',
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/comdex',
      tx_page: 'https://explorer.validatornode.com/comdex/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
    },
  ],
};

export const comdexAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'comdex',
  assets: [
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom: 'ucmdx',
          exponent: 0,
        },
        {
          denom: 'cmdx',
          exponent: 6,
        },
      ],
      base: 'ucmdx',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
      },
      coingecko_id: 'comdex',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
        },
      ],
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom: 'uharbor',
          exponent: 0,
        },
        {
          denom: 'harbor',
          exponent: 6,
        },
      ],
      base: 'uharbor',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
      },
      coingecko_id: 'harbor-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
        },
      ],
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [
        {
          denom: 'ucmst',
          exponent: 0,
        },
        {
          denom: 'cmst',
          exponent: 6,
        },
      ],
      base: 'ucmst',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
      },
      coingecko_id: 'composite',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
        },
      ],
    },
  ],
};
