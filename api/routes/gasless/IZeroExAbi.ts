export const IZeroExAbi = {
  schemaVersion: "2.0.0",
  contractName: "IZeroEx",
  compilerOutput: {
    abi: [
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
        ],
        name: "ERC1155OrderCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc20FillAmount", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
          { indexed: false, internalType: "uint128", name: "erc1155FillAmount", type: "uint128" },
          { indexed: false, internalType: "address", name: "matcher", type: "address" },
        ],
        name: "ERC1155OrderFilled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "uint256", name: "expiry", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
          {
            components: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bytes", name: "feeData", type: "bytes" },
            ],
            indexed: false,
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            indexed: false,
            internalType: "contract IERC1155Token",
            name: "erc1155Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              { internalType: "bytes", name: "propertyData", type: "bytes" },
            ],
            indexed: false,
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc1155TokenProperties",
            type: "tuple[]",
          },
          { indexed: false, internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
        ],
        name: "ERC1155OrderPreSigned",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
        ],
        name: "ERC721OrderCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc721TokenId", type: "uint256" },
          { indexed: false, internalType: "address", name: "matcher", type: "address" },
        ],
        name: "ERC721OrderFilled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "enum LibNFTOrder.TradeDirection",
            name: "direction",
            type: "uint8",
          },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "uint256", name: "expiry", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "nonce", type: "uint256" },
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "erc20Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
          {
            components: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bytes", name: "feeData", type: "bytes" },
            ],
            indexed: false,
            internalType: "struct LibNFTOrder.Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          {
            indexed: false,
            internalType: "contract IERC721Token",
            name: "erc721Token",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "erc721TokenId", type: "uint256" },
          {
            components: [
              {
                internalType: "contract IPropertyValidator",
                name: "propertyValidator",
                type: "address",
              },
              { internalType: "bytes", name: "propertyData", type: "bytes" },
            ],
            indexed: false,
            internalType: "struct LibNFTOrder.Property[]",
            name: "erc721TokenProperties",
            type: "tuple[]",
          },
        ],
        name: "ERC721OrderPreSigned",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "address", name: "feeRecipient", type: "address" },
          { indexed: false, internalType: "address", name: "makerToken", type: "address" },
          { indexed: false, internalType: "address", name: "takerToken", type: "address" },
          {
            indexed: false,
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
          {
            indexed: false,
            internalType: "uint128",
            name: "makerTokenFilledAmount",
            type: "uint128",
          },
          {
            indexed: false,
            internalType: "uint128",
            name: "takerTokenFeeFilledAmount",
            type: "uint128",
          },
          { indexed: false, internalType: "uint256", name: "protocolFeePaid", type: "uint256" },
          { indexed: false, internalType: "bytes32", name: "pool", type: "bytes32" },
        ],
        name: "LimitOrderFilled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "inputToken",
            type: "address",
          },
          {
            indexed: false,
            internalType: "contract IERC20TokenV06",
            name: "outputToken",
            type: "address",
          },
          { indexed: false, internalType: "uint256", name: "inputTokenAmount", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "outputTokenAmount", type: "uint256" },
          {
            indexed: false,
            internalType: "contract ILiquidityProvider",
            name: "provider",
            type: "address",
          },
          { indexed: false, internalType: "address", name: "recipient", type: "address" },
        ],
        name: "LiquidityProviderSwap",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
          { indexed: true, internalType: "bytes4", name: "selector", type: "bytes4" },
          { indexed: false, internalType: "address", name: "signer", type: "address" },
          { indexed: false, internalType: "address", name: "sender", type: "address" },
        ],
        name: "MetaTransactionExecuted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "caller", type: "address" },
          { indexed: false, internalType: "address", name: "migrator", type: "address" },
          { indexed: false, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "Migrated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
        ],
        name: "OrderCancelled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "signer", type: "address" },
          { indexed: false, internalType: "bool", name: "allowed", type: "bool" },
        ],
        name: "OrderSignerRegistered",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "address", name: "makerToken", type: "address" },
          { indexed: false, internalType: "address", name: "takerToken", type: "address" },
          {
            indexed: false,
            internalType: "uint128",
            name: "makerTokenFilledAmount",
            type: "uint128",
          },
          { indexed: false, internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
        ],
        name: "OtcOrderFilled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
          { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "makerToken", type: "address" },
          { indexed: false, internalType: "address", name: "takerToken", type: "address" },
          { indexed: false, internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "PairCancelledLimitOrders",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "makerToken", type: "address" },
          { indexed: false, internalType: "address", name: "takerToken", type: "address" },
          { indexed: false, internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "PairCancelledRfqOrders",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "bytes4", name: "selector", type: "bytes4" },
          { indexed: false, internalType: "address", name: "oldImpl", type: "address" },
          { indexed: false, internalType: "address", name: "newImpl", type: "address" },
        ],
        name: "ProxyFunctionUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "address", name: "quoteSigner", type: "address" }],
        name: "QuoteSignerUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
          { indexed: false, internalType: "address", name: "maker", type: "address" },
          { indexed: false, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "address", name: "makerToken", type: "address" },
          { indexed: false, internalType: "address", name: "takerToken", type: "address" },
          {
            indexed: false,
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
          {
            indexed: false,
            internalType: "uint128",
            name: "makerTokenFilledAmount",
            type: "uint128",
          },
          { indexed: false, internalType: "bytes32", name: "pool", type: "bytes32" },
        ],
        name: "RfqOrderFilled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: "address", name: "origin", type: "address" },
          { indexed: false, internalType: "address[]", name: "addrs", type: "address[]" },
          { indexed: false, internalType: "bool", name: "allowed", type: "bool" },
        ],
        name: "RfqOrderOriginsAllowed",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "taker", type: "address" },
          { indexed: false, internalType: "address", name: "inputToken", type: "address" },
          { indexed: false, internalType: "address", name: "outputToken", type: "address" },
          { indexed: false, internalType: "uint256", name: "inputTokenAmount", type: "uint256" },
          { indexed: false, internalType: "uint256", name: "outputTokenAmount", type: "uint256" },
        ],
        name: "TransformedERC20",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, internalType: "address", name: "transformerDeployer", type: "address" }],
        name: "TransformerDeployerUpdated",
        type: "event",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
          { internalType: "address", name: "taker", type: "address" },
          { internalType: "address", name: "sender", type: "address" },
        ],
        name: "_fillLimitOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
          { internalType: "address", name: "taker", type: "address" },
          { internalType: "bool", name: "useSelfBalance", type: "bool" },
          { internalType: "address", name: "recipient", type: "address" },
        ],
        name: "_fillOtcOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
          { internalType: "address", name: "taker", type: "address" },
          { internalType: "bool", name: "useSelfBalance", type: "bool" },
          { internalType: "address", name: "recipient", type: "address" },
        ],
        name: "_fillRfqOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "encodedPath", type: "bytes" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "address", name: "recipient", type: "address" },
        ],
        name: "_sellHeldTokenForTokenToUniswapV3",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "address payable", name: "taker", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "inputToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "outputToken", type: "address" },
              { internalType: "uint256", name: "inputTokenAmount", type: "uint256" },
              { internalType: "uint256", name: "minOutputTokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "uint32", name: "deploymentNonce", type: "uint32" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                internalType: "struct ITransformERC20Feature.Transformation[]",
                name: "transformations",
                type: "tuple[]",
              },
              { internalType: "bool", name: "useSelfBalance", type: "bool" },
              { internalType: "address payable", name: "recipient", type: "address" },
            ],
            internalType: "struct ITransformERC20Feature.TransformERC20Args",
            name: "args",
            type: "tuple",
          },
        ],
        name: "_transformERC20",
        outputs: [{ internalType: "uint256", name: "outputTokenAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order[]",
            name: "sellOrders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          { internalType: "uint128[]", name: "erc1155TokenAmounts", type: "uint128[]" },
          { internalType: "bytes[]", name: "callbackData", type: "bytes[]" },
          { internalType: "bool", name: "revertIfIncomplete", type: "bool" },
        ],
        name: "batchBuyERC1155s",
        outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order[]",
            name: "sellOrders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          { internalType: "bytes[]", name: "callbackData", type: "bytes[]" },
          { internalType: "bool", name: "revertIfIncomplete", type: "bool" },
        ],
        name: "batchBuyERC721s",
        outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256[]", name: "orderNonces", type: "uint256[]" }],
        name: "batchCancelERC1155Orders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256[]", name: "orderNonces", type: "uint256[]" }],
        name: "batchCancelERC721Orders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder[]",
            name: "orders",
            type: "tuple[]",
          },
        ],
        name: "batchCancelLimitOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06[]", name: "makerTokens", type: "address[]" },
          { internalType: "contract IERC20TokenV06[]", name: "takerTokens", type: "address[]" },
          { internalType: "uint256[]", name: "minValidSalts", type: "uint256[]" },
        ],
        name: "batchCancelPairLimitOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "contract IERC20TokenV06[]", name: "makerTokens", type: "address[]" },
          { internalType: "contract IERC20TokenV06[]", name: "takerTokens", type: "address[]" },
          { internalType: "uint256[]", name: "minValidSalts", type: "uint256[]" },
        ],
        name: "batchCancelPairLimitOrdersWithSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06[]", name: "makerTokens", type: "address[]" },
          { internalType: "contract IERC20TokenV06[]", name: "takerTokens", type: "address[]" },
          { internalType: "uint256[]", name: "minValidSalts", type: "uint256[]" },
        ],
        name: "batchCancelPairRfqOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "contract IERC20TokenV06[]", name: "makerTokens", type: "address[]" },
          { internalType: "contract IERC20TokenV06[]", name: "takerTokens", type: "address[]" },
          { internalType: "uint256[]", name: "minValidSalts", type: "uint256[]" },
        ],
        name: "batchCancelPairRfqOrdersWithSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder[]",
            name: "orders",
            type: "tuple[]",
          },
        ],
        name: "batchCancelRfqOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "address payable", name: "signer", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "minGasPrice", type: "uint256" },
              { internalType: "uint256", name: "maxGasPrice", type: "uint256" },
              { internalType: "uint256", name: "expirationTimeSeconds", type: "uint256" },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "callData", type: "bytes" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "feeToken", type: "address" },
              { internalType: "uint256", name: "feeAmount", type: "uint256" },
            ],
            internalType: "struct IMetaTransactionsFeature.MetaTransactionData[]",
            name: "mtxs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
        ],
        name: "batchExecuteMetaTransactions",
        outputs: [{ internalType: "bytes[]", name: "returnResults", type: "bytes[]" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder[]",
            name: "orders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          { internalType: "uint128[]", name: "takerTokenFillAmounts", type: "uint128[]" },
          { internalType: "bool", name: "revertIfIncomplete", type: "bool" },
        ],
        name: "batchFillLimitOrders",
        outputs: [
          { internalType: "uint128[]", name: "takerTokenFilledAmounts", type: "uint128[]" },
          { internalType: "uint128[]", name: "makerTokenFilledAmounts", type: "uint128[]" },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder[]",
            name: "orders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          { internalType: "uint128[]", name: "takerTokenFillAmounts", type: "uint128[]" },
          { internalType: "bool", name: "revertIfIncomplete", type: "bool" },
        ],
        name: "batchFillRfqOrders",
        outputs: [
          { internalType: "uint128[]", name: "takerTokenFilledAmounts", type: "uint128[]" },
          { internalType: "uint128[]", name: "makerTokenFilledAmounts", type: "uint128[]" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder[]",
            name: "orders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "makerSignatures",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "takerSignatures",
            type: "tuple[]",
          },
          { internalType: "bool[]", name: "unwrapWeth", type: "bool[]" },
        ],
        name: "batchFillTakerSignedOtcOrders",
        outputs: [{ internalType: "bool[]", name: "successes", type: "bool[]" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder[]",
            name: "orders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
        ],
        name: "batchGetLimitOrderRelevantStates",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo[]",
            name: "orderInfos",
            type: "tuple[]",
          },
          { internalType: "uint128[]", name: "actualFillableTakerTokenAmounts", type: "uint128[]" },
          { internalType: "bool[]", name: "isSignatureValids", type: "bool[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder[]",
            name: "orders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
        ],
        name: "batchGetRfqOrderRelevantStates",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo[]",
            name: "orderInfos",
            type: "tuple[]",
          },
          { internalType: "uint128[]", name: "actualFillableTakerTokenAmounts", type: "uint128[]" },
          { internalType: "bool[]", name: "isSignatureValids", type: "bool[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order[]",
            name: "sellOrders",
            type: "tuple[]",
          },
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order[]",
            name: "buyOrders",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "sellOrderSignatures",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature[]",
            name: "buyOrderSignatures",
            type: "tuple[]",
          },
        ],
        name: "batchMatchERC721Orders",
        outputs: [
          { internalType: "uint256[]", name: "profits", type: "uint256[]" },
          { internalType: "bool[]", name: "successes", type: "bool[]" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "sellOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "erc1155BuyAmount", type: "uint128" },
          { internalType: "bytes", name: "callbackData", type: "bytes" },
        ],
        name: "buyERC1155",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "sellOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "bytes", name: "callbackData", type: "bytes" },
        ],
        name: "buyERC721",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "orderNonce", type: "uint256" }],
        name: "cancelERC1155Order",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "orderNonce", type: "uint256" }],
        name: "cancelERC721Order",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "cancelLimitOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
          { internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "cancelPairLimitOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
          { internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "cancelPairLimitOrdersWithSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
          { internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "cancelPairRfqOrders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
          { internalType: "uint256", name: "minValidSalt", type: "uint256" },
        ],
        name: "cancelPairRfqOrdersWithSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "cancelRfqOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "createTransformWallet",
        outputs: [{ internalType: "contract IFlashWallet", name: "wallet", type: "address" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "address payable", name: "signer", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "minGasPrice", type: "uint256" },
              { internalType: "uint256", name: "maxGasPrice", type: "uint256" },
              { internalType: "uint256", name: "expirationTimeSeconds", type: "uint256" },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "callData", type: "bytes" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "feeToken", type: "address" },
              { internalType: "uint256", name: "feeAmount", type: "uint256" },
            ],
            internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
            name: "mtx",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
        ],
        name: "executeMetaTransaction",
        outputs: [{ internalType: "bytes", name: "returnResult", type: "bytes" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "selector", type: "bytes4" },
          { internalType: "address", name: "impl", type: "address" },
        ],
        name: "extend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillLimitOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillOrKillLimitOrder",
        outputs: [{ internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillOrKillRfqOrder",
        outputs: [{ internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillOtcOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillOtcOrderForEth",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
        ],
        name: "fillOtcOrderWithEth",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint128", name: "takerTokenFillAmount", type: "uint128" },
        ],
        name: "fillRfqOrder",
        outputs: [
          { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
          { internalType: "uint128", name: "makerTokenFilledAmount", type: "uint128" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "takerSignature",
            type: "tuple",
          },
        ],
        name: "fillTakerSignedOtcOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "makerSignature",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "takerSignature",
            type: "tuple",
          },
        ],
        name: "fillTakerSignedOtcOrderForEth",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getERC1155OrderHash",
        outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getERC1155OrderInfo",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNFTOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "orderAmount", type: "uint128" },
              { internalType: "uint128", name: "remainingAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.OrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getERC721OrderHash",
        outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getERC721OrderStatus",
        outputs: [{ internalType: "enum LibNFTOrder.OrderStatus", name: "status", type: "uint8" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "uint248", name: "nonceRange", type: "uint248" },
        ],
        name: "getERC721OrderStatusBitVector",
        outputs: [{ internalType: "uint256", name: "bitVector", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getLimitOrderHash",
        outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getLimitOrderInfo",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerTokenFeeAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "feeRecipient", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.LimitOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
        ],
        name: "getLimitOrderRelevantState",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
          { internalType: "uint128", name: "actualFillableTakerTokenAmount", type: "uint128" },
          { internalType: "bool", name: "isSignatureValid", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "address payable", name: "signer", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "minGasPrice", type: "uint256" },
              { internalType: "uint256", name: "maxGasPrice", type: "uint256" },
              { internalType: "uint256", name: "expirationTimeSeconds", type: "uint256" },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "callData", type: "bytes" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "feeToken", type: "address" },
              { internalType: "uint256", name: "feeAmount", type: "uint256" },
            ],
            internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
            name: "mtx",
            type: "tuple",
          },
        ],
        name: "getMetaTransactionExecutedBlock",
        outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "address payable", name: "signer", type: "address" },
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "minGasPrice", type: "uint256" },
              { internalType: "uint256", name: "maxGasPrice", type: "uint256" },
              { internalType: "uint256", name: "expirationTimeSeconds", type: "uint256" },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "callData", type: "bytes" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "feeToken", type: "address" },
              { internalType: "uint256", name: "feeAmount", type: "uint256" },
            ],
            internalType: "struct IMetaTransactionsFeature.MetaTransactionData",
            name: "mtx",
            type: "tuple",
          },
        ],
        name: "getMetaTransactionHash",
        outputs: [{ internalType: "bytes32", name: "mtxHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes32", name: "mtxHash", type: "bytes32" }],
        name: "getMetaTransactionHashExecutedBlock",
        outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getOtcOrderHash",
        outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "uint256", name: "expiryAndNonce", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.OtcOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getOtcOrderInfo",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
            ],
            internalType: "struct LibNativeOrder.OtcOrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getProtocolFeeMultiplier",
        outputs: [{ internalType: "uint32", name: "multiplier", type: "uint32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getQuoteSigner",
        outputs: [{ internalType: "address", name: "signer", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getRfqOrderHash",
        outputs: [{ internalType: "bytes32", name: "orderHash", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
        ],
        name: "getRfqOrderInfo",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "contract IERC20TokenV06", name: "makerToken", type: "address" },
              { internalType: "contract IERC20TokenV06", name: "takerToken", type: "address" },
              { internalType: "uint128", name: "makerAmount", type: "uint128" },
              { internalType: "uint128", name: "takerAmount", type: "uint128" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "address", name: "txOrigin", type: "address" },
              { internalType: "bytes32", name: "pool", type: "bytes32" },
              { internalType: "uint64", name: "expiry", type: "uint64" },
              { internalType: "uint256", name: "salt", type: "uint256" },
            ],
            internalType: "struct LibNativeOrder.RfqOrder",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
        ],
        name: "getRfqOrderRelevantState",
        outputs: [
          {
            components: [
              { internalType: "bytes32", name: "orderHash", type: "bytes32" },
              { internalType: "enum LibNativeOrder.OrderStatus", name: "status", type: "uint8" },
              { internalType: "uint128", name: "takerTokenFilledAmount", type: "uint128" },
            ],
            internalType: "struct LibNativeOrder.OrderInfo",
            name: "orderInfo",
            type: "tuple",
          },
          { internalType: "uint128", name: "actualFillableTakerTokenAmount", type: "uint128" },
          { internalType: "bool", name: "isSignatureValid", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "selector", type: "bytes4" },
          { internalType: "uint256", name: "idx", type: "uint256" },
        ],
        name: "getRollbackEntryAtIndex",
        outputs: [{ internalType: "address", name: "impl", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
        name: "getRollbackLength",
        outputs: [{ internalType: "uint256", name: "rollbackLength", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTransformWallet",
        outputs: [{ internalType: "contract IFlashWallet", name: "wallet", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTransformerDeployer",
        outputs: [{ internalType: "address", name: "deployer", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "signer", type: "address" },
        ],
        name: "isValidOrderSigner",
        outputs: [{ internalType: "bool", name: "isAllowed", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "txOrigin", type: "address" },
          { internalType: "uint64", name: "nonceBucket", type: "uint64" },
        ],
        name: "lastOtcTxOriginNonce",
        outputs: [{ internalType: "uint128", name: "lastNonce", type: "uint128" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "sellOrder",
            type: "tuple",
          },
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "buyOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "sellOrderSignature",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "buyOrderSignature",
            type: "tuple",
          },
        ],
        name: "matchERC721Orders",
        outputs: [{ internalType: "uint256", name: "profit", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "migrate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "outputToken", type: "address" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "uint256", name: "sellAmount", type: "uint256" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexBatchSellEthForToken",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "inputToken", type: "address" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "uint256", name: "sellAmount", type: "uint256" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexBatchSellTokenForEth",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "inputToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "outputToken", type: "address" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "uint256", name: "sellAmount", type: "uint256" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.BatchSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexBatchSellTokenForToken",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "tokens", type: "address[]" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexMultiHopSellEthForToken",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "tokens", type: "address[]" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexMultiHopSellTokenForEth",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "tokens", type: "address[]" },
          {
            components: [
              {
                internalType: "enum IMultiplexFeature.MultiplexSubcall",
                name: "id",
                type: "uint8",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct IMultiplexFeature.MultiHopSellSubcall[]",
            name: "calls",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
        ],
        name: "multiplexMultiHopSellTokenForToken",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "address", name: "from", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "onERC1155Received",
        outputs: [{ internalType: "bytes4", name: "success", type: "bytes4" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "address", name: "from", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "onERC721Received",
        outputs: [{ internalType: "bytes4", name: "success", type: "bytes4" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "ownerAddress", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "preSignERC1155Order",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "order",
            type: "tuple",
          },
        ],
        name: "preSignERC721Order",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "signer", type: "address" },
          { internalType: "bool", name: "allowed", type: "bool" },
        ],
        name: "registerAllowedOrderSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "origins", type: "address[]" },
          { internalType: "bool", name: "allowed", type: "bool" },
        ],
        name: "registerAllowedRfqOrigins",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "selector", type: "bytes4" },
          { internalType: "address", name: "targetImpl", type: "address" },
        ],
        name: "rollback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "buyOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
          { internalType: "uint128", name: "erc1155SellAmount", type: "uint128" },
          { internalType: "bool", name: "unwrapNativeToken", type: "bool" },
          { internalType: "bytes", name: "callbackData", type: "bytes" },
        ],
        name: "sellERC1155",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "buyOrder",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
          { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
          { internalType: "bool", name: "unwrapNativeToken", type: "bool" },
          { internalType: "bytes", name: "callbackData", type: "bytes" },
        ],
        name: "sellERC721",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "encodedPath", type: "bytes" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "address", name: "recipient", type: "address" },
        ],
        name: "sellEthForTokenToUniswapV3",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "inputToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "outputToken", type: "address" },
          { internalType: "contract ILiquidityProvider", name: "provider", type: "address" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "bytes", name: "auxiliaryData", type: "bytes" },
        ],
        name: "sellToLiquidityProvider",
        outputs: [{ internalType: "uint256", name: "boughtAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06[]", name: "tokens", type: "address[]" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "enum IPancakeSwapFeature.ProtocolFork", name: "fork", type: "uint8" },
        ],
        name: "sellToPancakeSwap",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06[]", name: "tokens", type: "address[]" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "bool", name: "isSushi", type: "bool" },
        ],
        name: "sellToUniswap",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "encodedPath", type: "bytes" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "address payable", name: "recipient", type: "address" },
        ],
        name: "sellTokenForEthToUniswapV3",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes", name: "encodedPath", type: "bytes" },
          { internalType: "uint256", name: "sellAmount", type: "uint256" },
          { internalType: "uint256", name: "minBuyAmount", type: "uint256" },
          { internalType: "address", name: "recipient", type: "address" },
        ],
        name: "sellTokenForTokenToUniswapV3",
        outputs: [{ internalType: "uint256", name: "buyAmount", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "quoteSigner", type: "address" }],
        name: "setQuoteSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "transformerDeployer", type: "address" }],
        name: "setTransformerDeployer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
        name: "supportInterface",
        outputs: [{ internalType: "bool", name: "isSupported", type: "bool" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes32[]", name: "poolIds", type: "bytes32[]" }],
        name: "transferProtocolFeesForPools",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "erc20", type: "address" },
          { internalType: "uint256", name: "amountOut", type: "uint256" },
          { internalType: "address payable", name: "recipientWallet", type: "address" },
        ],
        name: "transferTrappedTokensTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "contract IERC20TokenV06", name: "inputToken", type: "address" },
          { internalType: "contract IERC20TokenV06", name: "outputToken", type: "address" },
          { internalType: "uint256", name: "inputTokenAmount", type: "uint256" },
          { internalType: "uint256", name: "minOutputTokenAmount", type: "uint256" },
          {
            components: [
              { internalType: "uint32", name: "deploymentNonce", type: "uint32" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct ITransformERC20Feature.Transformation[]",
            name: "transformations",
            type: "tuple[]",
          },
        ],
        name: "transformERC20",
        outputs: [{ internalType: "uint256", name: "outputTokenAmount", type: "uint256" }],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "int256", name: "amount0Delta", type: "int256" },
          { internalType: "int256", name: "amount1Delta", type: "int256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "uniswapV3SwapCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
        ],
        name: "validateERC1155OrderProperties",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC1155Token", name: "erc1155Token", type: "address" },
              { internalType: "uint256", name: "erc1155TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc1155TokenProperties",
                type: "tuple[]",
              },
              { internalType: "uint128", name: "erc1155TokenAmount", type: "uint128" },
            ],
            internalType: "struct LibNFTOrder.ERC1155Order",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
        ],
        name: "validateERC1155OrderSignature",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
        ],
        name: "validateERC721OrderProperties",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { internalType: "enum LibNFTOrder.TradeDirection", name: "direction", type: "uint8" },
              { internalType: "address", name: "maker", type: "address" },
              { internalType: "address", name: "taker", type: "address" },
              { internalType: "uint256", name: "expiry", type: "uint256" },
              { internalType: "uint256", name: "nonce", type: "uint256" },
              { internalType: "contract IERC20TokenV06", name: "erc20Token", type: "address" },
              { internalType: "uint256", name: "erc20TokenAmount", type: "uint256" },
              {
                components: [
                  { internalType: "address", name: "recipient", type: "address" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  { internalType: "bytes", name: "feeData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "contract IERC721Token", name: "erc721Token", type: "address" },
              { internalType: "uint256", name: "erc721TokenId", type: "uint256" },
              {
                components: [
                  {
                    internalType: "contract IPropertyValidator",
                    name: "propertyValidator",
                    type: "address",
                  },
                  { internalType: "bytes", name: "propertyData", type: "bytes" },
                ],
                internalType: "struct LibNFTOrder.Property[]",
                name: "erc721TokenProperties",
                type: "tuple[]",
              },
            ],
            internalType: "struct LibNFTOrder.ERC721Order",
            name: "order",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum LibSignature.SignatureType",
                name: "signatureType",
                type: "uint8",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            internalType: "struct LibSignature.Signature",
            name: "signature",
            type: "tuple",
          },
        ],
        name: "validateERC721OrderSignature",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
    ],
    devdoc: {
      details: "Interface for a fully featured Exchange Proxy.",
      kind: "dev",
      methods: {
        "_fillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,address)":
          {
            details:
              "Fill a limit order. Internal variant. ETH protocol fees can be      attached to this call. Any unspent ETH will be refunded to      `msg.sender` (not `sender`).",
            params: {
              order: "The limit order.",
              sender: "The order sender.",
              signature: "The order signature.",
              taker: "The order taker.",
              takerTokenFillAmount: "Maximum taker token to fill this order with.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much maker token was filled.",
            },
          },
        "_fillOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,bool,address)":
          {
            details: "Fill an OTC order for up to `takerTokenFillAmount` taker tokens.      Internal variant.",
            params: {
              makerSignature: "The order signature from the maker.",
              order: "The OTC order.",
              recipient: "The recipient of the bought maker tokens.",
              taker: "The address to fill the order in the context of.",
              takerTokenFillAmount: "Maximum taker token amount to fill this        order with.",
              useSelfBalance: "Whether to use the Exchange Proxy's balance        of input tokens.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much taker token was filled.",
            },
          },
        "_fillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128,address,bool,address)":
          {
            details: "Fill an RFQ order. Internal variant.",
            params: {
              order: "The RFQ order.",
              recipient: "The recipient of the maker tokens.",
              signature: "The order signature.",
              taker: "The order taker.",
              takerTokenFillAmount: "Maximum taker token to fill this order with.",
              useSelfBalance:
                "Whether to use the ExchangeProxy's transient        balance of taker tokens to fill the order.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much maker token was filled.",
            },
          },
        "_sellHeldTokenForTokenToUniswapV3(bytes,uint256,uint256,address)": {
          details:
            "Sell a token for another token directly against uniswap v3.      Private variant, uses tokens held by `address(this)`.",
          params: {
            encodedPath: "Uniswap-encoded path.",
            minBuyAmount: "Minimum amount of the last token in the path to buy.",
            recipient: "The recipient of the bought tokens. Can be zero for sender.",
            sellAmount: "amount of the first token in the path to sell.",
          },
          returns: { buyAmount: "Amount of the last token in the path bought." },
        },
        "_transformERC20((address,address,address,uint256,uint256,(uint32,bytes)[],bool,address))": {
          details: "Internal version of `transformERC20()`. Only callable from within.",
          params: { args: "A `TransformERC20Args` struct." },
          returns: { outputTokenAmount: "The amount of `outputToken` received by the taker." },
        },
        "batchBuyERC1155s((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bytes[],bool)":
          {
            details: "Buys multiple ERC1155 assets by filling the      given orders.",
            params: {
              callbackData:
                "The data (if any) to pass to the taker        callback for each order. Refer to the `callbackData`        parameter to for `buyERC1155`.",
              erc1155TokenAmounts: "The amounts of the ERC1155 assets        to buy for each order.",
              revertIfIncomplete: "If true, reverts if this        function fails to fill any individual order.",
              sellOrders: "The ERC1155 sell orders.",
              signatures: "The order signatures.",
            },
            returns: {
              successes:
                "An array of booleans corresponding to whether         each order in `orders` was successfully filled.",
            },
          },
        "batchBuyERC721s((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,uint8,bytes32,bytes32)[],bytes[],bool)":
          {
            details: "Buys multiple ERC721 assets by filling the      given orders.",
            params: {
              callbackData:
                "The data (if any) to pass to the taker        callback for each order. Refer to the `callbackData`        parameter to for `buyERC721`.",
              revertIfIncomplete: "If true, reverts if this        function fails to fill any individual order.",
              sellOrders: "The ERC721 sell orders.",
              signatures: "The order signatures.",
            },
            returns: {
              successes:
                "An array of booleans corresponding to whether         each order in `orders` was successfully filled.",
            },
          },
        "batchCancelERC1155Orders(uint256[])": {
          details:
            "Cancel multiple ERC1155 orders by their nonces. The caller      should be the maker of the orders. Silently succeeds if      an order with the same nonce has already been filled or      cancelled.",
          params: { orderNonces: "The order nonces." },
        },
        "batchCancelERC721Orders(uint256[])": {
          details:
            "Cancel multiple ERC721 orders by their nonces. The caller      should be the maker of the orders. Silently succeeds if      an order with the same nonce has already been filled or      cancelled.",
          params: { orderNonces: "The order nonces." },
        },
        "batchCancelLimitOrders((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[])":
          {
            details:
              "Cancel multiple limit orders. The caller must be the maker or a valid order signer.      Silently succeeds if the order has already been cancelled.",
            params: { orders: "The limit orders." },
          },
        "batchCancelPairLimitOrders(address[],address[],uint256[])": {
          details:
            "Cancel all limit orders for a given maker and pairs with salts less      than the values provided. The caller must be the maker. Subsequent      calls to this function with the same caller and pair require the      new salt to be >= the old salt.",
          params: {
            makerTokens: "The maker tokens.",
            minValidSalts: "The new minimum valid salts.",
            takerTokens: "The taker tokens.",
          },
        },
        "batchCancelPairLimitOrdersWithSigner(address,address[],address[],uint256[])": {
          details:
            "Cancel all limit orders for a given maker and pairs with salts less      than the values provided. The caller must be a signer registered to the maker.      Subsequent calls to this function with the same maker and pair require the      new salt to be >= the old salt.",
          params: {
            maker: "The maker for which to cancel.",
            makerTokens: "The maker tokens.",
            minValidSalts: "The new minimum valid salts.",
            takerTokens: "The taker tokens.",
          },
        },
        "batchCancelPairRfqOrders(address[],address[],uint256[])": {
          details:
            "Cancel all RFQ orders for a given maker and pairs with salts less      than the values provided. The caller must be the maker. Subsequent      calls to this function with the same caller and pair require the      new salt to be >= the old salt.",
          params: {
            makerTokens: "The maker tokens.",
            minValidSalts: "The new minimum valid salts.",
            takerTokens: "The taker tokens.",
          },
        },
        "batchCancelPairRfqOrdersWithSigner(address,address[],address[],uint256[])": {
          details:
            "Cancel all RFQ orders for a given maker and pairs with salts less      than the values provided. The caller must be a signer registered to the maker.      Subsequent calls to this function with the same maker and pair require the      new salt to be >= the old salt.",
          params: {
            maker: "The maker for which to cancel.",
            makerTokens: "The maker tokens.",
            minValidSalts: "The new minimum valid salts.",
            takerTokens: "The taker tokens.",
          },
        },
        "batchCancelRfqOrders((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[])": {
          details:
            "Cancel multiple RFQ orders. The caller must be the maker or a valid order signer.      Silently succeeds if the order has already been cancelled.",
          params: { orders: "The RFQ orders." },
        },
        "batchExecuteMetaTransactions((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256)[],(uint8,uint8,bytes32,bytes32)[])":
          {
            details: "Execute multiple meta-transactions.",
            params: {
              mtxs: "The meta-transactions.",
              signatures: "The signature by each respective `mtx.signer`.",
            },
            returns: { returnResults: "The ABI-encoded results of the underlying calls." },
          },
        "batchFillLimitOrders((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bool)":
          {
            details: "Fills multiple limit orders.",
            params: {
              orders: "Array of limit orders.",
              revertIfIncomplete:
                "If true, reverts if this function fails to        fill the full fill amount for any individual order.",
              signatures: "Array of signatures corresponding to each order.",
              takerTokenFillAmounts: "Array of desired amounts to fill each order.",
            },
            returns: {
              makerTokenFilledAmounts: "Array of amounts filled, in maker token.",
              takerTokenFilledAmounts: "Array of amounts filled, in taker token.",
            },
          },
        "batchFillRfqOrders((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[],uint128[],bool)":
          {
            details: "Fills multiple RFQ orders.",
            params: {
              orders: "Array of RFQ orders.",
              revertIfIncomplete:
                "If true, reverts if this function fails to        fill the full fill amount for any individual order.",
              signatures: "Array of signatures corresponding to each order.",
              takerTokenFillAmounts: "Array of desired amounts to fill each order.",
            },
            returns: {
              makerTokenFilledAmounts: "Array of amounts filled, in maker token.",
              takerTokenFilledAmounts: "Array of amounts filled, in taker token.",
            },
          },
        "batchFillTakerSignedOtcOrders((address,address,uint128,uint128,address,address,address,uint256)[],(uint8,uint8,bytes32,bytes32)[],(uint8,uint8,bytes32,bytes32)[],bool[])":
          {
            details: "Fills multiple taker-signed OTC orders.",
            params: {
              makerSignatures: "Array of maker signatures for each order.",
              orders: "Array of OTC orders.",
              takerSignatures: "Array of taker signatures for each order.",
              unwrapWeth:
                "Array of booleans representing whether or not         to unwrap bought WETH into ETH for each order. Should be set         to false if the maker token is not WETH.",
            },
            returns: {
              successes:
                "Array of booleans representing whether or not         each order in `orders` was filled successfully.",
            },
          },
        "batchGetLimitOrderRelevantStates((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[])":
          {
            details:
              "Batch version of `getLimitOrderRelevantState()`, without reverting.      Orders that would normally cause `getLimitOrderRelevantState()`      to revert will have empty results.",
            params: { orders: "The limit orders.", signatures: "The order signatures." },
            returns: {
              actualFillableTakerTokenAmounts:
                "How much of each order is fillable         based on maker funds, in taker tokens.",
              isSignatureValids: "Whether each signature is valid for the order.",
              orderInfos: "Info about the orders.",
            },
          },
        "batchGetRfqOrderRelevantStates((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256)[],(uint8,uint8,bytes32,bytes32)[])":
          {
            details:
              "Batch version of `getRfqOrderRelevantState()`, without reverting.      Orders that would normally cause `getRfqOrderRelevantState()`      to revert will have empty results.",
            params: { orders: "The RFQ orders.", signatures: "The order signatures." },
            returns: {
              actualFillableTakerTokenAmounts:
                "How much of each order is fillable         based on maker funds, in taker tokens.",
              isSignatureValids: "Whether each signature is valid for the order.",
              orderInfos: "Info about the orders.",
            },
          },
        "batchMatchERC721Orders((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[])[],(uint8,uint8,bytes32,bytes32)[],(uint8,uint8,bytes32,bytes32)[])":
          {
            details:
              "Matches pairs of complementary orders that have      non-negative spreads. Each order is filled at      their respective price, and the matcher receives      a profit denominated in the ERC20 token.",
            params: {
              buyOrderSignatures: "Signatures for the buy orders.",
              buyOrders: "Orders buying ERC721 assets.",
              sellOrderSignatures: "Signatures for the sell orders.",
              sellOrders: "Orders selling ERC721 assets.",
            },
            returns: {
              profits:
                "The amount of profit earned by the caller         of this function for each pair of matched orders         (denominated in the ERC20 token of the order pair).",
              successes:
                "An array of booleans corresponding to         whether each pair of orders was successfully matched.",
            },
          },
        "buyERC1155((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32),uint128,bytes)":
          {
            details: "Buys an ERC1155 asset by filling the given order.",
            params: {
              callbackData:
                "If this parameter is non-zero, invokes        `zeroExERC1155OrderCallback` on `msg.sender` after        the ERC1155 asset has been transferred to `msg.sender`        but before transferring the ERC20 tokens to the seller.        Native tokens acquired during the callback can be used        to fill the order.",
              erc1155BuyAmount: "The amount of the ERC1155 asset        to buy.",
              sellOrder: "The ERC1155 sell order.",
              signature: "The order signature.",
            },
          },
        "buyERC721((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),bytes)":
          {
            details: "Buys an ERC721 asset by filling the given order.",
            params: {
              callbackData:
                "If this parameter is non-zero, invokes        `zeroExERC721OrderCallback` on `msg.sender` after        the ERC721 asset has been transferred to `msg.sender`        but before transferring the ERC20 tokens to the seller.        Native tokens acquired during the callback can be used        to fill the order.",
              sellOrder: "The ERC721 sell order.",
              signature: "The order signature.",
            },
          },
        "cancelERC1155Order(uint256)": {
          details:
            "Cancel a single ERC1155 order by its nonce. The caller      should be the maker of the order. Silently succeeds if      an order with the same nonce has already been filled or      cancelled.",
          params: { orderNonce: "The order nonce." },
        },
        "cancelERC721Order(uint256)": {
          details:
            "Cancel a single ERC721 order by its nonce. The caller      should be the maker of the order. Silently succeeds if      an order with the same nonce has already been filled or      cancelled.",
          params: { orderNonce: "The order nonce." },
        },
        "cancelLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))":
          {
            details:
              "Cancel a single limit order. The caller must be the maker or a valid order signer.      Silently succeeds if the order has already been cancelled.",
            params: { order: "The limit order." },
          },
        "cancelPairLimitOrders(address,address,uint256)": {
          details:
            "Cancel all limit orders for a given maker and pair with a salt less      than the value provided. The caller must be the maker. Subsequent      calls to this function with the same caller and pair require the      new salt to be >= the old salt.",
          params: {
            makerToken: "The maker token.",
            minValidSalt: "The new minimum valid salt.",
            takerToken: "The taker token.",
          },
        },
        "cancelPairLimitOrdersWithSigner(address,address,address,uint256)": {
          details:
            "Cancel all limit orders for a given maker and pair with a salt less      than the value provided. The caller must be a signer registered to the maker.      Subsequent calls to this function with the same maker and pair require the      new salt to be >= the old salt.",
          params: {
            maker: "The maker for which to cancel.",
            makerToken: "The maker token.",
            minValidSalt: "The new minimum valid salt.",
            takerToken: "The taker token.",
          },
        },
        "cancelPairRfqOrders(address,address,uint256)": {
          details:
            "Cancel all RFQ orders for a given maker and pair with a salt less      than the value provided. The caller must be the maker. Subsequent      calls to this function with the same caller and pair require the      new salt to be >= the old salt.",
          params: {
            makerToken: "The maker token.",
            minValidSalt: "The new minimum valid salt.",
            takerToken: "The taker token.",
          },
        },
        "cancelPairRfqOrdersWithSigner(address,address,address,uint256)": {
          details:
            "Cancel all RFQ orders for a given maker and pair with a salt less      than the value provided. The caller must be a signer registered to the maker.      Subsequent calls to this function with the same maker and pair require the      new salt to be >= the old salt.",
          params: {
            maker: "The maker for which to cancel.",
            makerToken: "The maker token.",
            minValidSalt: "The new minimum valid salt.",
            takerToken: "The taker token.",
          },
        },
        "cancelRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))": {
          details:
            "Cancel a single RFQ order. The caller must be the maker or a valid order signer.      Silently succeeds if the order has already been cancelled.",
          params: { order: "The RFQ order." },
        },
        "createTransformWallet()": {
          details:
            "Deploy a new flash wallet instance and replace the current one with it.      Useful if we somehow break the current wallet instance.       Only callable by the owner.",
          returns: { wallet: "The new wallet instance." },
        },
        "executeMetaTransaction((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256),(uint8,uint8,bytes32,bytes32))":
          {
            details: "Execute a single meta-transaction.",
            params: { mtx: "The meta-transaction.", signature: "The signature by `mtx.signer`." },
            returns: { returnResult: "The ABI-encoded result of the underlying call." },
          },
        "extend(bytes4,address)": {
          details: "Register or replace a function.",
          params: {
            impl: "The implementation contract for the function.",
            selector: "The function selector.",
          },
        },
        "fillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details: "Fill a limit order. The taker and sender will be the caller.",
            params: {
              order:
                "The limit order. ETH protocol fees can be      attached to this call. Any unspent ETH will be refunded to      the caller.",
              signature: "The order signature.",
              takerTokenFillAmount: "Maximum taker token amount to fill this order with.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much maker token was filled.",
            },
          },
        "fillOrKillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details:
              "Fill an RFQ order for exactly `takerTokenFillAmount` taker tokens.      The taker will be the caller. ETH protocol fees can be      attached to this call. Any unspent ETH will be refunded to      the caller.",
            params: {
              order: "The limit order.",
              signature: "The order signature.",
              takerTokenFillAmount: "How much taker token to fill this order with.",
            },
            returns: { makerTokenFilledAmount: "How much maker token was filled." },
          },
        "fillOrKillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details:
              "Fill an RFQ order for exactly `takerTokenFillAmount` taker tokens.      The taker will be the caller.",
            params: {
              order: "The RFQ order.",
              signature: "The order signature.",
              takerTokenFillAmount: "How much taker token to fill this order with.",
            },
            returns: { makerTokenFilledAmount: "How much maker token was filled." },
          },
        "fillOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details: "Fill an OTC order for up to `takerTokenFillAmount` taker tokens.",
            params: {
              makerSignature: "The order signature from the maker.",
              order: "The OTC order.",
              takerTokenFillAmount: "Maximum taker token amount to fill this        order with.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much taker token was filled.",
            },
          },
        "fillOtcOrderForEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details:
              "Fill an OTC order for up to `takerTokenFillAmount` taker tokens.      Unwraps bought WETH into ETH before sending it to       the taker.",
            params: {
              makerSignature: "The order signature from the maker.",
              order: "The OTC order.",
              takerTokenFillAmount: "Maximum taker token amount to fill this        order with.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much taker token was filled.",
            },
          },
        "fillOtcOrderWithEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32))":
          {
            details: "Fill an OTC order whose taker token is WETH for up      to `msg.value`.",
            params: { makerSignature: "The order signature from the maker.", order: "The OTC order." },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much taker token was filled.",
            },
          },
        "fillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)":
          {
            details:
              "Fill an RFQ order for up to `takerTokenFillAmount` taker tokens.      The taker will be the caller.",
            params: {
              order: "The RFQ order.",
              signature: "The order signature.",
              takerTokenFillAmount: "Maximum taker token amount to fill this order with.",
            },
            returns: {
              makerTokenFilledAmount: "How much maker token was filled.",
              takerTokenFilledAmount: "How much maker token was filled.",
            },
          },
        "fillTakerSignedOtcOrder((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              'Fully fill an OTC order. "Meta-transaction" variant,      requires order to be signed by both maker and taker.',
            params: {
              makerSignature: "The order signature from the maker.",
              order: "The OTC order.",
              takerSignature: "The order signature from the taker.",
            },
          },
        "fillTakerSignedOtcOrderForEth((address,address,uint128,uint128,address,address,address,uint256),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              'Fully fill an OTC order. "Meta-transaction" variant,      requires order to be signed by both maker and taker.      Unwraps bought WETH into ETH before sending it to       the taker.',
            params: {
              makerSignature: "The order signature from the maker.",
              order: "The OTC order.",
              takerSignature: "The order signature from the taker.",
            },
          },
        "getERC1155OrderHash((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))":
          {
            details: "Get the EIP-712 hash of an ERC1155 order.",
            params: { order: "The ERC1155 order." },
            returns: { orderHash: "The order hash." },
          },
        "getERC1155OrderInfo((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))":
          {
            details: "Get the order info for an ERC1155 order.",
            params: { order: "The ERC1155 order." },
            returns: { orderInfo: "Infor about the order." },
          },
        "getERC721OrderHash((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))":
          {
            details: "Get the EIP-712 hash of an ERC721 order.",
            params: { order: "The ERC721 order." },
            returns: { orderHash: "The order hash." },
          },
        "getERC721OrderStatus((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))":
          {
            details: "Get the current status of an ERC721 order.",
            params: { order: "The ERC721 order." },
            returns: { status: "The status of the order." },
          },
        "getERC721OrderStatusBitVector(address,uint248)": {
          details: "Get the order status bit vector for the given      maker address and nonce range.",
          params: {
            maker: "The maker of the order.",
            nonceRange:
              "Order status bit vectors are indexed        by maker address and the upper 248 bits of the        order nonce. We define `nonceRange` to be these        248 bits.",
          },
          returns: {
            bitVector: "The order status bit vector for the         given maker and nonce range.",
          },
        },
        "getLimitOrderHash((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))":
          {
            details: "Get the canonical hash of a limit order.",
            params: { order: "The limit order." },
            returns: { orderHash: "The order hash." },
          },
        "getLimitOrderInfo((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))":
          {
            details: "Get the order info for a limit order.",
            params: { order: "The limit order." },
            returns: { orderInfo: "Info about the order." },
          },
        "getLimitOrderRelevantState((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              "Get order info, fillable amount, and signature validity for a limit order.      Fillable amount is determined using balances and allowances of the maker.",
            params: { order: "The limit order.", signature: "The order signature." },
            returns: {
              actualFillableTakerTokenAmount:
                "How much of the order is fillable         based on maker funds, in taker tokens.",
              isSignatureValid: "Whether the signature is valid.",
              orderInfo: "Info about the order.",
            },
          },
        "getMetaTransactionExecutedBlock((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))":
          {
            details: "Get the block at which a meta-transaction has been executed.",
            params: { mtx: "The meta-transaction." },
            returns: { blockNumber: "The block height when the meta-transactioin was executed." },
          },
        "getMetaTransactionHash((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))": {
          details: "Get the EIP712 hash of a meta-transaction.",
          params: { mtx: "The meta-transaction." },
          returns: { mtxHash: "The EIP712 hash of `mtx`." },
        },
        "getMetaTransactionHashExecutedBlock(bytes32)": {
          details: "Get the block at which a meta-transaction hash has been executed.",
          params: { mtxHash: "The meta-transaction hash." },
          returns: { blockNumber: "The block height when the meta-transactioin was executed." },
        },
        "getOtcOrderHash((address,address,uint128,uint128,address,address,address,uint256))": {
          details: "Get the canonical hash of an OTC order.",
          params: { order: "The OTC order." },
          returns: { orderHash: "The order hash." },
        },
        "getOtcOrderInfo((address,address,uint128,uint128,address,address,address,uint256))": {
          details: "Get the order info for an OTC order.",
          params: { order: "The OTC order." },
          returns: { orderInfo: "Info about the order." },
        },
        "getProtocolFeeMultiplier()": {
          details:
            "Get the protocol fee multiplier. This should be multiplied by the      gas price to arrive at the required protocol fee to fill a native order.",
          returns: { multiplier: "The protocol fee multiplier." },
        },
        "getQuoteSigner()": {
          details: "Return the optional signer for `transformERC20()` calldata.",
          returns: { signer: "The transform deployer address." },
        },
        "getRfqOrderHash((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))": {
          details: "Get the canonical hash of an RFQ order.",
          params: { order: "The RFQ order." },
          returns: { orderHash: "The order hash." },
        },
        "getRfqOrderInfo((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256))": {
          details: "Get the order info for an RFQ order.",
          params: { order: "The RFQ order." },
          returns: { orderInfo: "Info about the order." },
        },
        "getRfqOrderRelevantState((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              "Get order info, fillable amount, and signature validity for an RFQ order.      Fillable amount is determined using balances and allowances of the maker.",
            params: { order: "The RFQ order.", signature: "The order signature." },
            returns: {
              actualFillableTakerTokenAmount:
                "How much of the order is fillable         based on maker funds, in taker tokens.",
              isSignatureValid: "Whether the signature is valid.",
              orderInfo: "Info about the order.",
            },
          },
        "getRollbackEntryAtIndex(bytes4,uint256)": {
          details: "Retrieve an entry in the rollback history for a function.",
          params: { idx: "The index in the rollback history.", selector: "The function selector." },
          returns: { impl: "An implementation address for the function at         index `idx`." },
        },
        "getRollbackLength(bytes4)": {
          details: "Retrieve the length of the rollback history for a function.",
          params: { selector: "The function selector." },
          returns: {
            rollbackLength: "The number of items in the rollback history for         the function.",
          },
        },
        "getTransformWallet()": {
          details:
            "Return the current wallet instance that will serve as the execution      context for transformations.",
          returns: { wallet: "The wallet instance." },
        },
        "getTransformerDeployer()": {
          details: "Return the allowed deployer for transformers.",
          returns: { deployer: "The transform deployer address." },
        },
        "isValidOrderSigner(address,address)": {
          details: "checks if a given address is registered to sign on behalf of a maker address",
          params: {
            maker: "The maker address encoded in an order (can be a contract)",
            signer: "The address that is providing a signature",
          },
        },
        "lastOtcTxOriginNonce(address,uint64)": {
          details: "Get the last nonce used for a particular      tx.origin address and nonce bucket.",
          params: { nonceBucket: "The nonce bucket index.", txOrigin: "The address." },
          returns: { lastNonce: "The last nonce value used." },
        },
        "matchERC721Orders((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              "Matches a pair of complementary orders that have      a non-negative spread. Each order is filled at      their respective price, and the matcher receives      a profit denominated in the ERC20 token.",
            params: {
              buyOrder: "Order buying an ERC721 asset.",
              buyOrderSignature: "Signature for the buy order.",
              sellOrder: "Order selling an ERC721 asset.",
              sellOrderSignature: "Signature for the sell order.",
            },
            returns: {
              profit:
                "The amount of profit earned by the caller         of this function (denominated in the ERC20 token         of the matched orders).",
            },
          },
        "migrate(address,bytes,address)": {
          details:
            "Execute a migration function in the context of the ZeroEx contract.      The result of the function being called should be the magic bytes      0x2c64c5ef (`keccack('MIGRATE_SUCCESS')`). Only callable by the owner.      The owner will be temporarily set to `address(this)` inside the call.      Before returning, the owner will be set to `newOwner`.",
          params: {
            data: "The call data.",
            newOwner: "The address of the new owner.",
            target: "The migrator contract address.",
          },
        },
        "multiplexBatchSellEthForToken(address,(uint8,uint256,bytes)[],uint256)": {
          details: "Sells attached ETH for `outputToken` using the provided      calls.",
          params: {
            calls: "The calls to use to sell the attached ETH.",
            minBuyAmount:
              "The minimum amount of `outputToken` that        must be bought for this function to not revert.",
            outputToken: "The token to buy.",
          },
          returns: { boughtAmount: "The amount of `outputToken` bought." },
        },
        "multiplexBatchSellTokenForEth(address,(uint8,uint256,bytes)[],uint256,uint256)": {
          details: "Sells `sellAmount` of the given `inputToken` for ETH      using the provided calls.",
          params: {
            calls: "The calls to use to sell the input tokens.",
            inputToken: "The token to sell.",
            minBuyAmount: "The minimum amount of ETH that        must be bought for this function to not revert.",
            sellAmount: "The amount of `inputToken` to sell.",
          },
          returns: { boughtAmount: "The amount of ETH bought." },
        },
        "multiplexBatchSellTokenForToken(address,address,(uint8,uint256,bytes)[],uint256,uint256)": {
          details: "Sells `sellAmount` of the given `inputToken` for      `outputToken` using the provided calls.",
          params: {
            calls: "The calls to use to sell the input tokens.",
            inputToken: "The token to sell.",
            minBuyAmount:
              "The minimum amount of `outputToken`        that must be bought for this function to not revert.",
            outputToken: "The token to buy.",
            sellAmount: "The amount of `inputToken` to sell.",
          },
          returns: { boughtAmount: "The amount of `outputToken` bought." },
        },
        "multiplexMultiHopSellEthForToken(address[],(uint8,bytes)[],uint256)": {
          details:
            "Sells attached ETH via the given sequence of tokens      and calls. `tokens[0]` must be WETH.      The last token in `tokens` is the output token that      will ultimately be sent to `msg.sender`",
          params: {
            calls: "The sequence of calls to use for the sell.",
            minBuyAmount:
              "The minimum amount of output tokens that        must be bought for this function to not revert.",
            tokens:
              "The sequence of tokens to use for the sell,        i.e. `tokens[i]` will be sold for `tokens[i+1]` via        `calls[i]`.",
          },
          returns: { boughtAmount: "The amount of output tokens bought." },
        },
        "multiplexMultiHopSellTokenForEth(address[],(uint8,bytes)[],uint256,uint256)": {
          details:
            "Sells `sellAmount` of the input token (`tokens[0]`)      for ETH via the given sequence of tokens and calls.      The last token in `tokens` must be WETH.",
          params: {
            calls: "The sequence of calls to use for the sell.",
            minBuyAmount: "The minimum amount of ETH that        must be bought for this function to not revert.",
            tokens:
              "The sequence of tokens to use for the sell,        i.e. `tokens[i]` will be sold for `tokens[i+1]` via        `calls[i]`.",
          },
          returns: { boughtAmount: "The amount of ETH bought." },
        },
        "multiplexMultiHopSellTokenForToken(address[],(uint8,bytes)[],uint256,uint256)": {
          details:
            "Sells `sellAmount` of the input token (`tokens[0]`)      via the given sequence of tokens and calls.      The last token in `tokens` is the output token that      will ultimately be sent to `msg.sender`",
          params: {
            calls: "The sequence of calls to use for the sell.",
            minBuyAmount:
              "The minimum amount of output tokens that        must be bought for this function to not revert.",
            tokens:
              "The sequence of tokens to use for the sell,        i.e. `tokens[i]` will be sold for `tokens[i+1]` via        `calls[i]`.",
          },
          returns: { boughtAmount: "The amount of output tokens bought." },
        },
        "onERC1155Received(address,address,uint256,uint256,bytes)": {
          details:
            "Callback for the ERC1155 `safeTransferFrom` function.      This callback can be used to sell an ERC1155 asset if      a valid ERC1155 order, signature and `unwrapNativeToken`      are encoded in `data`. This allows takers to sell their      ERC1155 asset without first calling `setApprovalForAll`.",
          params: {
            data: "Additional data with no specified format. If a        valid ERC1155 order, signature and `unwrapNativeToken`        are encoded in `data`, this function will try to fill        the order using the received asset.",
            from: "The address which previously owned the token.",
            operator: "The address which called `safeTransferFrom`.",
            tokenId: "The ID of the asset being transferred.",
            value: "The amount being transferred.",
          },
          returns: {
            success: "The selector of this function (0xf23a6e61),         indicating that the callback succeeded.",
          },
        },
        "onERC721Received(address,address,uint256,bytes)": {
          details:
            "Callback for the ERC721 `safeTransferFrom` function.      This callback can be used to sell an ERC721 asset if      a valid ERC721 order, signature and `unwrapNativeToken`      are encoded in `data`. This allows takers to sell their      ERC721 asset without first calling `setApprovalForAll`.",
          params: {
            data: "Additional data with no specified format. If a        valid ERC721 order, signature and `unwrapNativeToken`        are encoded in `data`, this function will try to fill        the order using the received asset.",
            from: "The address which previously owned the token.",
            operator: "The address which called `safeTransferFrom`.",
            tokenId: "The ID of the asset being transferred.",
          },
          returns: {
            success: "The selector of this function (0x150b7a02),         indicating that the callback succeeded.",
          },
        },
        "owner()": {
          details: "The owner of this contract.",
          returns: { ownerAddress: "The owner address." },
        },
        "preSignERC1155Order((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128))":
          {
            details:
              "Approves an ERC1155 order on-chain. After pre-signing      the order, the `PRESIGNED` signature type will become      valid for that order and signer.",
            params: { order: "An ERC1155 order." },
          },
        "preSignERC721Order((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]))":
          {
            details:
              "Approves an ERC721 order on-chain. After pre-signing      the order, the `PRESIGNED` signature type will become      valid for that order and signer.",
            params: { order: "An ERC721 order." },
          },
        "registerAllowedOrderSigner(address,bool)": {
          details:
            "Register a signer who can sign on behalf of msg.sender      This allows one to sign on behalf of a contract that calls this function",
          params: {
            allowed: "True to register, false to unregister.",
            signer: "The address from which you plan to generate signatures",
          },
        },
        "registerAllowedRfqOrigins(address[],bool)": {
          details:
            "Mark what tx.origin addresses are allowed to fill an order that      specifies the message sender as its txOrigin.",
          params: {
            allowed: "True to register, false to unregister.",
            origins: "An array of origin addresses to update.",
          },
        },
        "rollback(bytes4,address)": {
          details: "Roll back to a prior implementation of a function.",
          params: {
            selector: "The function selector.",
            targetImpl: "The address of an older implementation of the function.",
          },
        },
        "sellERC1155((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32),uint256,uint128,bool,bytes)":
          {
            details: "Sells an ERC1155 asset to fill the given order.",
            params: {
              buyOrder: "The ERC1155 buy order.",
              callbackData:
                "If this parameter is non-zero, invokes        `zeroExERC1155OrderCallback` on `msg.sender` after        the ERC20 tokens have been transferred to `msg.sender`        but before transferring the ERC1155 asset to the buyer.",
              erc1155SellAmount: "The amount of the ERC1155 asset        to sell.",
              erc1155TokenId:
                "The ID of the ERC1155 asset being        sold. If the given order specifies properties,        the asset must satisfy those properties. Otherwise,        it must equal the tokenId in the order.",
              signature: "The order signature from the maker.",
              unwrapNativeToken:
                "If this parameter is true and the        ERC20 token of the order is e.g. WETH, unwraps the        token before transferring it to the taker.",
            },
          },
        "sellERC721((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32),uint256,bool,bytes)":
          {
            details: "Sells an ERC721 asset to fill the given order.",
            params: {
              buyOrder: "The ERC721 buy order.",
              callbackData:
                "If this parameter is non-zero, invokes        `zeroExERC721OrderCallback` on `msg.sender` after        the ERC20 tokens have been transferred to `msg.sender`        but before transferring the ERC721 asset to the buyer.",
              erc721TokenId:
                "The ID of the ERC721 asset being        sold. If the given order specifies properties,        the asset must satisfy those properties. Otherwise,        it must equal the tokenId in the order.",
              signature: "The order signature from the maker.",
              unwrapNativeToken:
                "If this parameter is true and the        ERC20 token of the order is e.g. WETH, unwraps the        token before transferring it to the taker.",
            },
          },
        "sellEthForTokenToUniswapV3(bytes,uint256,address)": {
          details: "Sell attached ETH directly against uniswap v3.",
          params: {
            encodedPath: "Uniswap-encoded path, where the first token is WETH.",
            minBuyAmount: "Minimum amount of the last token in the path to buy.",
            recipient: "The recipient of the bought tokens. Can be zero for sender.",
          },
          returns: { buyAmount: "Amount of the last token in the path bought." },
        },
        "sellToLiquidityProvider(address,address,address,address,uint256,uint256,bytes)": {
          details: "Sells `sellAmount` of `inputToken` to the liquidity provider      at the given `provider` address.",
          params: {
            auxiliaryData: "Auxiliary data supplied to the `provider` contract.",
            inputToken: "The token being sold.",
            minBuyAmount:
              "The minimum acceptable amount of `outputToken` to        buy. Reverts if this amount is not satisfied.",
            outputToken: "The token being bought.",
            provider: "The address of the on-chain liquidity provider        to trade with.",
            recipient:
              "The recipient of the bought tokens. If equal to        address(0), `msg.sender` is assumed to be the recipient.",
            sellAmount: "The amount of `inputToken` to sell.",
          },
          returns: { boughtAmount: "The amount of `outputToken` bought." },
        },
        "sellToPancakeSwap(address[],uint256,uint256,uint8)": {
          details: "Efficiently sell directly to PancakeSwap (and forks).",
          params: {
            fork: "The protocol fork to use.",
            minBuyAmount: "Minimum amount of `tokens[-1]` to buy.",
            sellAmount: "of `tokens[0]` Amount to sell.",
            tokens: "Sell path.",
          },
          returns: { buyAmount: "Amount of `tokens[-1]` bought." },
        },
        "sellToUniswap(address[],uint256,uint256,bool)": {
          details: "Efficiently sell directly to uniswap/sushiswap.",
          params: {
            isSushi: "Use sushiswap if true.",
            minBuyAmount: "Minimum amount of `tokens[-1]` to buy.",
            sellAmount: "of `tokens[0]` Amount to sell.",
            tokens: "Sell path.",
          },
          returns: { buyAmount: "Amount of `tokens[-1]` bought." },
        },
        "sellTokenForEthToUniswapV3(bytes,uint256,uint256,address)": {
          details: "Sell a token for ETH directly against uniswap v3.",
          params: {
            encodedPath: "Uniswap-encoded path, where the last token is WETH.",
            minBuyAmount: "Minimum amount of ETH to buy.",
            recipient: "The recipient of the bought tokens. Can be zero for sender.",
            sellAmount: "amount of the first token in the path to sell.",
          },
          returns: { buyAmount: "Amount of ETH bought." },
        },
        "sellTokenForTokenToUniswapV3(bytes,uint256,uint256,address)": {
          details: "Sell a token for another token directly against uniswap v3.",
          params: {
            encodedPath: "Uniswap-encoded path.",
            minBuyAmount: "Minimum amount of the last token in the path to buy.",
            recipient: "The recipient of the bought tokens. Can be zero for sender.",
            sellAmount: "amount of the first token in the path to sell.",
          },
          returns: { buyAmount: "Amount of the last token in the path bought." },
        },
        "setQuoteSigner(address)": {
          details: "Replace the optional signer for `transformERC20()` calldata.      Only callable by the owner.",
          params: { quoteSigner: "The address of the new calldata signer." },
        },
        "setTransformerDeployer(address)": {
          details: "Replace the allowed deployer for transformers.      Only callable by the owner.",
          params: {
            transformerDeployer: "The address of the new trusted deployer        for transformers.",
          },
        },
        "supportInterface(bytes4)": {
          details:
            "Indicates whether the 0x Exchange Proxy implements a particular      ERC165 interface. This function should use at most 30,000 gas.",
          params: { interfaceId: "The interface identifier, as specified in ERC165." },
          returns: {
            isSupported: "Whether the given interface is supported by the         0x Exchange Proxy.",
          },
        },
        "transferOwnership(address)": {
          details: "Transfers ownership of the contract to a new address.",
          params: { newOwner: "The address that will become the owner." },
        },
        "transferProtocolFeesForPools(bytes32[])": {
          details: "Transfers protocol fees from the `FeeCollector` pools into      the staking contract.",
          params: { poolIds: "Staking pool IDs" },
        },
        "transferTrappedTokensTo(address,uint256,address)": {
          details:
            "calledFrom FundRecoveryFeature.transferTrappedTokensTo() This will be delegatecalled in the context of the Exchange Proxy instance being used.",
          params: {
            amountOut: "Amount of tokens to withdraw.",
            erc20: "ERC20 Token Address.",
            recipientWallet: "Recipient wallet address.",
          },
        },
        "transformERC20(address,address,uint256,uint256,(uint32,bytes)[])": {
          details:
            "Executes a series of transformations to convert an ERC20 `inputToken`      to an ERC20 `outputToken`.",
          params: {
            inputToken:
              "The token being provided by the sender.        If `0xeee...`, ETH is implied and should be provided with the call.`",
            inputTokenAmount: "The amount of `inputToken` to take from the sender.",
            minOutputTokenAmount:
              "The minimum amount of `outputToken` the sender        must receive for the entire transformation to succeed.",
            outputToken: "The token to be acquired by the sender.        `0xeee...` implies ETH.",
            transformations: "The transformations to execute on the token balance(s)        in sequence.",
          },
          returns: { outputTokenAmount: "The amount of `outputToken` received by the sender." },
        },
        "uniswapV3SwapCallback(int256,int256,bytes)": {
          details:
            "The UniswapV3 pool swap callback which pays the funds requested      by the caller/pool to the pool. Can only be called by a valid      UniswapV3 pool.",
          params: {
            amount0Delta: "Token0 amount owed.",
            amount1Delta: "Token1 amount owed.",
            data: "Arbitrary data forwarded from swap() caller. An ABI-encoded        struct of: inputToken, outputToken, fee, payer",
          },
        },
        "validateERC1155OrderProperties((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),uint256)":
          {
            details:
              "If the given order is buying an ERC1155 asset, checks      whether or not the given token ID satisfies the required      properties specified in the order. If the order does not      specify any properties, this function instead checks      whether the given token ID matches the ID in the order.      Reverts if any checks fail, or if the order is selling      an ERC1155 asset.",
            params: { erc1155TokenId: "The ID of the ERC1155 asset.", order: "The ERC1155 order." },
          },
        "validateERC1155OrderSignature((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[],uint128),(uint8,uint8,bytes32,bytes32))":
          {
            details:
              "Checks whether the given signature is valid for the      the given ERC1155 order. Reverts if not.",
            params: { order: "The ERC1155 order.", signature: "The signature to validate." },
          },
        "validateERC721OrderProperties((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),uint256)":
          {
            details:
              "If the given order is buying an ERC721 asset, checks      whether or not the given token ID satisfies the required      properties specified in the order. If the order does not      specify any properties, this function instead checks      whether the given token ID matches the ID in the order.      Reverts if any checks fail, or if the order is selling      an ERC721 asset.",
            params: { erc721TokenId: "The ID of the ERC721 asset.", order: "The ERC721 order." },
          },
        "validateERC721OrderSignature((uint8,address,address,uint256,uint256,address,uint256,(address,uint256,bytes)[],address,uint256,(address,bytes)[]),(uint8,uint8,bytes32,bytes32))":
          {
            details: "Checks whether the given signature is valid for the      the given ERC721 order. Reverts if not.",
            params: { order: "The ERC721 order.", signature: "The signature to validate." },
          },
      },
      version: 1,
    },
    evm: { bytecode: { object: "0x" }, deployedBytecode: { immutableReferences: {}, object: "0x" } },
  },
  compiler: {
    name: "solc",
    version: "0.6.12+commit.27d51765",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
        details: { yul: true, deduplicate: true, cse: true, constantOptimizer: true },
      },
      outputSelection: {
        "*": {
          "*": [
            "abi",
            "devdoc",
            "evm.bytecode.object",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.object",
            "evm.deployedBytecode.sourceMap",
            "evm.methodIdentifiers",
          ],
        },
      },
      evmVersion: "istanbul",
    },
  },
  chains: {},
};