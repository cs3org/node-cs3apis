// package: cs3.storage.provider.v1beta1
// file: cs3/storage/provider/v1beta1/spaces_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class CreateStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.User | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.User): void;

  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasQuota(): boolean;
  clearQuota(): void;
  getQuota(): cs3_storage_provider_v1beta1_resources_pb.Quota | undefined;
  setQuota(value?: cs3_storage_provider_v1beta1_resources_pb.Quota): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStorageSpaceRequest): CreateStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStorageSpaceRequest;
  static deserializeBinaryFromReader(message: CreateStorageSpaceRequest, reader: jspb.BinaryReader): CreateStorageSpaceRequest;
}

export namespace CreateStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.User.AsObject,
    type: string,
    name: string,
    quota?: cs3_storage_provider_v1beta1_resources_pb.Quota.AsObject,
  }
}

export class CreateStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStorageSpaceResponse): CreateStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStorageSpaceResponse;
  static deserializeBinaryFromReader(message: CreateStorageSpaceResponse, reader: jspb.BinaryReader): CreateStorageSpaceResponse;
}

export namespace CreateStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class ListStorageSpacesRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  clearFiltersList(): void;
  getFiltersList(): Array<ListStorageSpacesRequest.Filter>;
  setFiltersList(value: Array<ListStorageSpacesRequest.Filter>): void;
  addFilters(value?: ListStorageSpacesRequest.Filter, index?: number): ListStorageSpacesRequest.Filter;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageSpacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageSpacesRequest): ListStorageSpacesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageSpacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageSpacesRequest;
  static deserializeBinaryFromReader(message: ListStorageSpacesRequest, reader: jspb.BinaryReader): ListStorageSpacesRequest;
}

export namespace ListStorageSpacesRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    filtersList: Array<ListStorageSpacesRequest.Filter.AsObject>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    pageSize: number,
    pageToken: string,
  }

  export class Filter extends jspb.Message {
    getType(): ListStorageSpacesRequest.Filter.Type;
    setType(value: ListStorageSpacesRequest.Filter.Type): void;

    hasId(): boolean;
    clearId(): void;
    getId(): cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId | undefined;
    setId(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId): void;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
    setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

    hasSpaceType(): boolean;
    clearSpaceType(): void;
    getSpaceType(): string;
    setSpaceType(value: string): void;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): string;
    setPath(value: string): void;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
    setUser(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

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
      type: ListStorageSpacesRequest.Filter.Type,
      id?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId.AsObject,
      owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
      spaceType: string,
      path: string,
      user?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    }

    export enum Type {
      TYPE_INVALID = 0,
      TYPE_NO = 1,
      TYPE_ID = 2,
      TYPE_OWNER = 3,
      TYPE_SPACE_TYPE = 4,
      TYPE_PATH = 5,
      TYPE_USER = 6,
    }

    export enum TermCase {
      TERM_NOT_SET = 0,
      ID = 2,
      OWNER = 3,
      SPACE_TYPE = 4,
      PATH = 5,
      USER = 6,
    }
  }
}

export class ListStorageSpacesResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  clearStorageSpacesList(): void;
  getStorageSpacesList(): Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace>;
  setStorageSpacesList(value: Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace>): void;
  addStorageSpaces(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace, index?: number): cs3_storage_provider_v1beta1_resources_pb.StorageSpace;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStorageSpacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStorageSpacesResponse): ListStorageSpacesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStorageSpacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStorageSpacesResponse;
  static deserializeBinaryFromReader(message: ListStorageSpacesResponse, reader: jspb.BinaryReader): ListStorageSpacesResponse;
}

export namespace ListStorageSpacesResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpacesList: Array<cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStorageSpaceRequest): UpdateStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStorageSpaceRequest;
  static deserializeBinaryFromReader(message: UpdateStorageSpaceRequest, reader: jspb.BinaryReader): UpdateStorageSpaceRequest;
}

export namespace UpdateStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class UpdateStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  hasStorageSpace(): boolean;
  clearStorageSpace(): void;
  getStorageSpace(): cs3_storage_provider_v1beta1_resources_pb.StorageSpace | undefined;
  setStorageSpace(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStorageSpaceResponse): UpdateStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStorageSpaceResponse;
  static deserializeBinaryFromReader(message: UpdateStorageSpaceResponse, reader: jspb.BinaryReader): UpdateStorageSpaceResponse;
}

export namespace UpdateStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
    storageSpace?: cs3_storage_provider_v1beta1_resources_pb.StorageSpace.AsObject,
  }
}

export class DeleteStorageSpaceRequest extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasId(): boolean;
  clearId(): void;
  getId(): cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId | undefined;
  setId(value?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStorageSpaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStorageSpaceRequest): DeleteStorageSpaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStorageSpaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStorageSpaceRequest;
  static deserializeBinaryFromReader(message: DeleteStorageSpaceRequest, reader: jspb.BinaryReader): DeleteStorageSpaceRequest;
}

export namespace DeleteStorageSpaceRequest {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    id?: cs3_storage_provider_v1beta1_resources_pb.StorageSpaceId.AsObject,
  }
}

export class DeleteStorageSpaceResponse extends jspb.Message {
  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStorageSpaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStorageSpaceResponse): DeleteStorageSpaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStorageSpaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStorageSpaceResponse;
  static deserializeBinaryFromReader(message: DeleteStorageSpaceResponse, reader: jspb.BinaryReader): DeleteStorageSpaceResponse;
}

export namespace DeleteStorageSpaceResponse {
  export type AsObject = {
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
  }
}

