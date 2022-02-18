// package: cs3.tx.v1beta1
// file: cs3/tx/v1beta1/tx_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_ocm_v1beta1_resources_pb from '../../../cs3/sharing/ocm/v1beta1/resources_pb';
import * as cs3_tx_v1beta1_resources_pb from '../../../cs3/tx/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

export class PullTransferRequest extends jspb.Message {
  getSrcTargetUri(): string;
  setSrcTargetUri(value: string): void;

  getDestTargetUri(): string;
  setDestTargetUri(value: string): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullTransferRequest): PullTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullTransferRequest;
  static deserializeBinaryFromReader(message: PullTransferRequest, reader: jspb.BinaryReader): PullTransferRequest;
}

export namespace PullTransferRequest {
  export type AsObject = {
    srcTargetUri: string,
    destTargetUri: string,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class PullTransferResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullTransferResponse): PullTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PullTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullTransferResponse;
  static deserializeBinaryFromReader(message: PullTransferResponse, reader: jspb.BinaryReader): PullTransferResponse;
}

export namespace PullTransferResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetTransferStatusRequest extends jspb.Message {
  hasTxId(): boolean;
  clearTxId(): void;
  getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
  setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusRequest): GetTransferStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusRequest;
  static deserializeBinaryFromReader(message: GetTransferStatusRequest, reader: jspb.BinaryReader): GetTransferStatusRequest;
}

export namespace GetTransferStatusRequest {
  export type AsObject = {
    txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class GetTransferStatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusResponse): GetTransferStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusResponse;
  static deserializeBinaryFromReader(message: GetTransferStatusResponse, reader: jspb.BinaryReader): GetTransferStatusResponse;
}

export namespace GetTransferStatusResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CancelTransferRequest extends jspb.Message {
  hasTxId(): boolean;
  clearTxId(): void;
  getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
  setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransferRequest): CancelTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransferRequest;
  static deserializeBinaryFromReader(message: CancelTransferRequest, reader: jspb.BinaryReader): CancelTransferRequest;
}

export namespace CancelTransferRequest {
  export type AsObject = {
    txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class CancelTransferResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransferResponse): CancelTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransferResponse;
  static deserializeBinaryFromReader(message: CancelTransferResponse, reader: jspb.BinaryReader): CancelTransferResponse;
}

export namespace CancelTransferResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class ListTransfersRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListTransfersRequest.Filter>;
  setFiltersList(value: Array<ListTransfersRequest.Filter>): void;
  addFilters(value?: ListTransfersRequest.Filter, index?: number): ListTransfersRequest.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransfersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransfersRequest): ListTransfersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransfersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransfersRequest;
  static deserializeBinaryFromReader(message: ListTransfersRequest, reader: jspb.BinaryReader): ListTransfersRequest;
}

export namespace ListTransfersRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<ListTransfersRequest.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getType(): ListTransfersRequest.Filter.Type;
    setType(value: ListTransfersRequest.Filter.Type): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): cs3_tx_v1beta1_resources_pb.Status;
    setStatus(value: cs3_tx_v1beta1_resources_pb.Status): void;

    hasShareId(): boolean;
    clearShareId(): void;
    getShareId(): cs3_sharing_ocm_v1beta1_resources_pb.ShareId | undefined;
    setShareId(value?: cs3_sharing_ocm_v1beta1_resources_pb.ShareId): void;

    hasTxId(): boolean;
    clearTxId(): void;
    getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
    setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

    getTermCase(): Filter.TermCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      type: ListTransfersRequest.Filter.Type,
      status: cs3_tx_v1beta1_resources_pb.Status,
      shareId?: cs3_sharing_ocm_v1beta1_resources_pb.ShareId.AsObject,
      txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_STATUS = 1,
      TYPE_SHARE_ID = 2,
      TYPE_TX_ID = 3,
    }

    export enum TermCase {
      TERM_NOT_SET = 0,
      STATUS = 2,
      SHARE_ID = 3,
      TX_ID = 4,
    }
  }
}

export class ListTransfersResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  clearTransfersList(): void;
  getTransfersList(): Array<cs3_tx_v1beta1_resources_pb.TxInfo>;
  setTransfersList(value: Array<cs3_tx_v1beta1_resources_pb.TxInfo>): void;
  addTransfers(value?: cs3_tx_v1beta1_resources_pb.TxInfo, index?: number): cs3_tx_v1beta1_resources_pb.TxInfo;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransfersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransfersResponse): ListTransfersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransfersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransfersResponse;
  static deserializeBinaryFromReader(message: ListTransfersResponse, reader: jspb.BinaryReader): ListTransfersResponse;
}

export namespace ListTransfersResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    transfersList: Array<cs3_tx_v1beta1_resources_pb.TxInfo.AsObject>,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class RetryTransferRequest extends jspb.Message {
  hasTxId(): boolean;
  clearTxId(): void;
  getTxId(): cs3_tx_v1beta1_resources_pb.TxId | undefined;
  setTxId(value?: cs3_tx_v1beta1_resources_pb.TxId): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryTransferRequest): RetryTransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryTransferRequest;
  static deserializeBinaryFromReader(message: RetryTransferRequest, reader: jspb.BinaryReader): RetryTransferRequest;
}

export namespace RetryTransferRequest {
  export type AsObject = {
    txId?: cs3_tx_v1beta1_resources_pb.TxId.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class RetryTransferResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): cs3_tx_v1beta1_resources_pb.TxInfo | undefined;
  setTxInfo(value?: cs3_tx_v1beta1_resources_pb.TxInfo): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetryTransferResponse): RetryTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetryTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryTransferResponse;
  static deserializeBinaryFromReader(message: RetryTransferResponse, reader: jspb.BinaryReader): RetryTransferResponse;
}

export namespace RetryTransferResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    txInfo?: cs3_tx_v1beta1_resources_pb.TxInfo.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

