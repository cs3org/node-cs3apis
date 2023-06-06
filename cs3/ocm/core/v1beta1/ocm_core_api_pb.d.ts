// package: cs3.ocm.core.v1beta1
// file: cs3/ocm/core/v1beta1/ocm_core_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_ocm_v1beta1_resources_pb from '../../../../cs3/sharing/ocm/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class CreateOCMCoreShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getDescription(): string;
  setDescription(value: string): void;

  getName(): string;
  setName(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setSender(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasShareWith(): boolean;
  clearShareWith(): void;
  getShareWith(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setShareWith(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  getResourceType(): cs3_storage_provider_v1beta1_resources_pb.ResourceType;
  setResourceType(value: cs3_storage_provider_v1beta1_resources_pb.ResourceType): void;

  getShareType(): cs3_sharing_ocm_v1beta1_resources_pb.ShareType;
  setShareType(value: cs3_sharing_ocm_v1beta1_resources_pb.ShareType): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol>;
  setProtocolsList(value: Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol>): void;
  addProtocols(value?: cs3_sharing_ocm_v1beta1_resources_pb.Protocol, index?: number): cs3_sharing_ocm_v1beta1_resources_pb.Protocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMCoreShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMCoreShareRequest): CreateOCMCoreShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMCoreShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMCoreShareRequest;
  static deserializeBinaryFromReader(message: CreateOCMCoreShareRequest, reader: jspb.BinaryReader): CreateOCMCoreShareRequest;
}

export namespace CreateOCMCoreShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    description: string,
    name: string,
    resourceId: string,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    sender?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    shareWith?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    resourceType: cs3_storage_provider_v1beta1_resources_pb.ResourceType,
    shareType: cs3_sharing_ocm_v1beta1_resources_pb.ShareType,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    protocolsList: Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol.AsObject>,
  }
}

export class CreateOCMCoreShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getId(): string;
  setId(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCreated(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOCMCoreShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOCMCoreShareResponse): CreateOCMCoreShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOCMCoreShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOCMCoreShareResponse;
  static deserializeBinaryFromReader(message: CreateOCMCoreShareResponse, reader: jspb.BinaryReader): CreateOCMCoreShareResponse;
}

export namespace CreateOCMCoreShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    id: string,
    created?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
  }
}

export class UpdateOCMCoreShareRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getOcmShareId(): string;
  setOcmShareId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getShareType(): cs3_sharing_ocm_v1beta1_resources_pb.ShareType;
  setShareType(value: cs3_sharing_ocm_v1beta1_resources_pb.ShareType): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol>;
  setProtocolsList(value: Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol>): void;
  addProtocols(value?: cs3_sharing_ocm_v1beta1_resources_pb.Protocol, index?: number): cs3_sharing_ocm_v1beta1_resources_pb.Protocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOCMCoreShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOCMCoreShareRequest): UpdateOCMCoreShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOCMCoreShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOCMCoreShareRequest;
  static deserializeBinaryFromReader(message: UpdateOCMCoreShareRequest, reader: jspb.BinaryReader): UpdateOCMCoreShareRequest;
}

export namespace UpdateOCMCoreShareRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    ocmShareId: string,
    description: string,
    shareType: cs3_sharing_ocm_v1beta1_resources_pb.ShareType,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    protocolsList: Array<cs3_sharing_ocm_v1beta1_resources_pb.Protocol.AsObject>,
  }
}

export class UpdateOCMCoreShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOCMCoreShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOCMCoreShareResponse): UpdateOCMCoreShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOCMCoreShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOCMCoreShareResponse;
  static deserializeBinaryFromReader(message: UpdateOCMCoreShareResponse, reader: jspb.BinaryReader): UpdateOCMCoreShareResponse;
}

export namespace UpdateOCMCoreShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class DeleteOCMCoreShareRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOCMCoreShareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOCMCoreShareRequest): DeleteOCMCoreShareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOCMCoreShareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOCMCoreShareRequest;
  static deserializeBinaryFromReader(message: DeleteOCMCoreShareRequest, reader: jspb.BinaryReader): DeleteOCMCoreShareRequest;
}

export namespace DeleteOCMCoreShareRequest {
  export type AsObject = {
    id: string,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class DeleteOCMCoreShareResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOCMCoreShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOCMCoreShareResponse): DeleteOCMCoreShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOCMCoreShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOCMCoreShareResponse;
  static deserializeBinaryFromReader(message: DeleteOCMCoreShareResponse, reader: jspb.BinaryReader): DeleteOCMCoreShareResponse;
}

export namespace DeleteOCMCoreShareResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

