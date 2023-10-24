import type { MemoKeys } from '../types';

export const memoKeys: MemoKeys = {
  $schema: '../memo_keys.schema.json',
  memo_keys: [
    {
      key: 'wasm',
      description: 'To call a cosmwasm contract',
      git_repo:
        'https://github.com/osmosis-labs/osmosis/tree/main/x/ibc-hooks#ibc-hooks',
      memo: {
        wasm: {
          contract: 'osmo1contractAddr',
          msg: {
            raw_message_fields: 'raw_message_data',
          },
        },
      },
    },
    {
      key: 'ibc_callback',
      description:
        'Passing the ibc acknowledgement back to a cosmwasm smart contract',
      git_repo:
        'https://github.com/osmosis-labs/osmosis/tree/main/x/ibc-hooks#ibc-hooks',
      memo: {
        ibc_callback: 'osmo1contractAddr',
      },
    },
    {
      key: 'autopilot',
      description:
        'One click liquid staking using the stakeibc module_name or updating an airdrop address using the claim module_name',
      git_repo: 'https://github.com/Stride-Labs/stride/tree/main/x/autopilot',
      memo: {
        autopilot: {
          receiver: 'strideXXX',
          '{module_name}': {
            '{additiional_field}': '{value}',
          },
        },
      },
    },
    {
      key: 'forward',
      description:
        'To send a packet from a source to destination chain when there is at least one chain in between, the intermediate chain uses the middleware, and next specifies the subsequent chain to route the packet to, after the chain specified in forward',
      git_repo:
        'https://github.com/strangelove-ventures/packet-forward-middleware',
      memo: {
        forward: {
          receiver: 'chain-c-bech32-address',
          port: 'transfer',
          channel: 'channel-123',
          timeout: '10m',
          retries: 2,
          next: {
            forward: {
              receiver: 'chain-d-bech32-address',
              port: 'transfer',
              channel: 'channel-234',
              timeout: '10m',
              retries: 2,
            },
          },
        },
      },
    },
    {
      key: 'src_callback',
      description:
        'Passing the IBC SendPacket, AcknowledgementPacket, and TimeoutPacket events to a callback address on the source chain.',
      git_repo:
        'https://github.com/cosmos/ibc-go/tree/main/modules/apps/callbacks',
      memo: {
        src_callback: {
          address: 'src-chain-address',
          gas_limit: '100000',
        },
      },
    },
    {
      key: 'dest_callback',
      description:
        'Passing the IBC ReceivePacket event to a callback address on the destination chain on WriteAcknowledgement step.',
      git_repo:
        'https://github.com/cosmos/ibc-go/tree/main/modules/apps/callbacks',
      memo: {
        dest_callback: {
          address: 'dest-chain-address',
          gas_limit: '100000',
        },
      },
    },
  ],
};
