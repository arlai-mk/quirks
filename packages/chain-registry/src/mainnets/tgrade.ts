import type { Chain, AssetLists } from '../types';

export const tgrade: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'tgrade',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://tgrade.finance/',
  pretty_name: 'Tgrade',
  chain_id: 'tgrade-mainnet-1',
  bech32_prefix: 'tgrade',
  daemon_name: 'tgrade',
  node_home: '$HOME/.tgrade',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utgd',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utgd',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/confio/tgrade',
    recommended_version: 'v2.0.4',
    compatible_versions: ['v2.0.4'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/confio/tgrade-networks/main/mainnet-1/config/genesis.json',
    },
    cosmwasm_enabled: true,
    versions: [
      {
        name: 'v2.0.4',
        recommended_version: 'v2.0.4',
        compatible_versions: ['v2.0.4'],
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '0a63421f67d02e7fb823ea6d6ceb8acf758df24d',
        address: '142.132.226.137:26656',
        provider: 'Confio',
      },
      {
        id: '4a319eead699418e974e8eed47c2de6332c3f825',
        address: '167.235.255.9:26656',
        provider: 'Confio',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet-1.tgrade.confio.run',
        provider: 'Confio',
      },
      {
        address: 'https://rpc.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS',
      },
    ],
    rest: [
      {
        address: 'https://api.mainnet-1.tgrade.confio.run',
        provider: 'Confio',
      },
      {
        address: 'https://lcd.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS',
      },
    ],
    grpc: [],
  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://tgrade.aneka.io',
      tx_page: 'https://tgrade.aneka.io/txs/${txHash}',
      account_page: 'https://tgrade.aneka.io/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
    },
  ],
};

export const tgradeAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'tgrade',
  assets: [
    {
      description: 'The native token of Tgrade',
      denom_units: [
        {
          denom: 'utgd',
          exponent: 0,
        },
        {
          denom: 'tgd',
          exponent: 6,
        },
      ],
      base: 'utgd',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
      },
      coingecko_id: 'tgrade',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
        },
      ],
    },
  ],
};
