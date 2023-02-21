// package: cs3.sharing.ocm.v1beta1
// file: cs3/sharing/ocm/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_app_provider_v1beta1_resources_pb from '../../../../cs3/app/provider/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

export class Share extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ShareId | undefined;
  setId(value?: ShareId): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  getName(): string;
  setName(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setCreator(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCtime(): boolean;
  clearCtime(): void;
  getCtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setMtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getShareType(): ShareType;
  setShareType(value: ShareType): void;

  clearAccessMethodsList(): void;
  getAccessMethodsList(): Array<AccessMethod>;
  setAccessMethodsList(value: Array<AccessMethod>): void;
  addAccessMethods(value?: AccessMethod, index?: number): AccessMethod;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Share.AsObject;
  static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Share;
  static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
  export type AsObject = {
    id?: ShareId.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    name: string,
    token: string,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    shareType: ShareType,
    accessMethodsList: Array<AccessMethod.AsObject>,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }
}

export class SharePermissions extends jspb.Message {
  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions | undefined;
  setPermissions(value?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions): void;

  getReshare(): boolean;
  setReshare(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: SharePermissions): SharePermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePermissions;
  static deserializeBinaryFromReader(message: SharePermissions, reader: jspb.BinaryReader): SharePermissions;
}

export namespace SharePermissions {
  export type AsObject = {
    permissions?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions.AsObject,
    reshare: boolean,
  }
}

export class ReceivedShare extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ShareId | undefined;
  setId(value?: ShareId): void;

  getName(): string;
  setName(value: string): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setCreator(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasCtime(): boolean;
  clearCtime(): void;
  getCtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setCtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setMtime(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): cs3_types_v1beta1_types_pb.Timestamp | undefined;
  setExpiration(value?: cs3_types_v1beta1_types_pb.Timestamp): void;

  getShareType(): ShareType;
  setShareType(value: ShareType): void;

  clearProtocolsList(): void;
  getProtocolsList(): Array<Protocol>;
  setProtocolsList(value: Array<Protocol>): void;
  addProtocols(value?: Protocol, index?: number): Protocol;

  getState(): ShareState;
  setState(value: ShareState): void;

  hasOpaque(): boolean;
  clearOpaque(): void;
  getOpaque(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setOpaque(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getResourceType(): cs3_storage_provider_v1beta1_resources_pb.ResourceType;
  setResourceType(value: cs3_storage_provider_v1beta1_resources_pb.ResourceType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedShare.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedShare): ReceivedShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceivedShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedShare;
  static deserializeBinaryFromReader(message: ReceivedShare, reader: jspb.BinaryReader): ReceivedShare;
}

export namespace ReceivedShare {
  export type AsObject = {
    id?: ShareId.AsObject,
    name: string,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    creator?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    ctime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    mtime?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    expiration?: cs3_types_v1beta1_types_pb.Timestamp.AsObject,
    shareType: ShareType,
    protocolsList: Array<Protocol.AsObject>,
    state: ShareState,
    opaque?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
    resourceType: cs3_storage_provider_v1beta1_resources_pb.ResourceType,
  }
}

export class ShareKey extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setOwner(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): cs3_storage_provider_v1beta1_resources_pb.ResourceId | undefined;
  setResourceId(value?: cs3_storage_provider_v1beta1_resources_pb.ResourceId): void;

  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareKey.AsObject;
  static toObject(includeInstance: boolean, msg: ShareKey): ShareKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareKey;
  static deserializeBinaryFromReader(message: ShareKey, reader: jspb.BinaryReader): ShareKey;
}

export namespace ShareKey {
  export type AsObject = {
    owner?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    resourceId?: cs3_storage_provider_v1beta1_resources_pb.ResourceId.AsObject,
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
  }
}

export class ShareId extends jspb.Message {
  getOpaqueId(): string;
  setOpaqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareId.AsObject;
  static toObject(includeInstance: boolean, msg: ShareId): ShareId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareId;
  static deserializeBinaryFromReader(message: ShareId, reader: jspb.BinaryReader): ShareId;
}

export namespace ShareId {
  export type AsObject = {
    opaqueId: string,
  }
}

export class ShareReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ShareId | undefined;
  setId(value?: ShareId): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): ShareKey | undefined;
  setKey(value?: ShareKey): void;

  getSpecCase(): ShareReference.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareReference.AsObject;
  static toObject(includeInstance: boolean, msg: ShareReference): ShareReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareReference;
  static deserializeBinaryFromReader(message: ShareReference, reader: jspb.BinaryReader): ShareReference;
}

export namespace ShareReference {
  export type AsObject = {
    id?: ShareId.AsObject,
    key?: ShareKey.AsObject,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    ID = 1,
    KEY = 2,
  }
}

export class ShareGrant extends jspb.Message {
  hasGrantee(): boolean;
  clearGrantee(): void;
  getGrantee(): cs3_storage_provider_v1beta1_resources_pb.Grantee | undefined;
  setGrantee(value?: cs3_storage_provider_v1beta1_resources_pb.Grantee): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): SharePermissions | undefined;
  setPermissions(value?: SharePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareGrant.AsObject;
  static toObject(includeInstance: boolean, msg: ShareGrant): ShareGrant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareGrant;
  static deserializeBinaryFromReader(message: ShareGrant, reader: jspb.BinaryReader): ShareGrant;
}

export namespace ShareGrant {
  export type AsObject = {
    grantee?: cs3_storage_provider_v1beta1_resources_pb.Grantee.AsObject,
    permissions?: SharePermissions.AsObject,
  }
}

export class Protocol extends jspb.Message {
  hasWebdavOptions(): boolean;
  clearWebdavOptions(): void;
  getWebdavOptions(): WebDAVProtocol | undefined;
  setWebdavOptions(value?: WebDAVProtocol): void;

  hasWebappOptions(): boolean;
  clearWebappOptions(): void;
  getWebappOptions(): WebappProtocol | undefined;
  setWebappOptions(value?: WebappProtocol): void;

  hasTransferOptions(): boolean;
  clearTransferOptions(): void;
  getTransferOptions(): TransferProtocol | undefined;
  setTransferOptions(value?: TransferProtocol): void;

  hasGenericOptions(): boolean;
  clearGenericOptions(): void;
  getGenericOptions(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setGenericOptions(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getTermCase(): Protocol.TermCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Protocol.AsObject;
  static toObject(includeInstance: boolean, msg: Protocol): Protocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Protocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Protocol;
  static deserializeBinaryFromReader(message: Protocol, reader: jspb.BinaryReader): Protocol;
}

export namespace Protocol {
  export type AsObject = {
    webdavOptions?: WebDAVProtocol.AsObject,
    webappOptions?: WebappProtocol.AsObject,
    transferOptions?: TransferProtocol.AsObject,
    genericOptions?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }

  export enum TermCase {
    TERM_NOT_SET = 0,
    WEBDAV_OPTIONS = 1,
    WEBAPP_OPTIONS = 2,
    TRANSFER_OPTIONS = 3,
    GENERIC_OPTIONS = 4,
  }
}

export class WebDAVProtocol extends jspb.Message {
  getSharedSecret(): string;
  setSharedSecret(value: string): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): SharePermissions | undefined;
  setPermissions(value?: SharePermissions): void;

  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDAVProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: WebDAVProtocol): WebDAVProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebDAVProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDAVProtocol;
  static deserializeBinaryFromReader(message: WebDAVProtocol, reader: jspb.BinaryReader): WebDAVProtocol;
}

export namespace WebDAVProtocol {
  export type AsObject = {
    sharedSecret: string,
    permissions?: SharePermissions.AsObject,
    uri: string,
  }
}

export class WebappProtocol extends jspb.Message {
  getUriTemplate(): string;
  setUriTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebappProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: WebappProtocol): WebappProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebappProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebappProtocol;
  static deserializeBinaryFromReader(message: WebappProtocol, reader: jspb.BinaryReader): WebappProtocol;
}

export namespace WebappProtocol {
  export type AsObject = {
    uriTemplate: string,
  }
}

export class TransferProtocol extends jspb.Message {
  getSharedSecret(): string;
  setSharedSecret(value: string): void;

  getSourceUri(): string;
  setSourceUri(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferProtocol.AsObject;
  static toObject(includeInstance: boolean, msg: TransferProtocol): TransferProtocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferProtocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferProtocol;
  static deserializeBinaryFromReader(message: TransferProtocol, reader: jspb.BinaryReader): TransferProtocol;
}

export namespace TransferProtocol {
  export type AsObject = {
    sharedSecret: string,
    sourceUri: string,
    size: number,
  }
}

export class AccessMethod extends jspb.Message {
  hasWebdavOptions(): boolean;
  clearWebdavOptions(): void;
  getWebdavOptions(): WebDAVAccessMethod | undefined;
  setWebdavOptions(value?: WebDAVAccessMethod): void;

  hasWebappOptions(): boolean;
  clearWebappOptions(): void;
  getWebappOptions(): WebappAccessMethod | undefined;
  setWebappOptions(value?: WebappAccessMethod): void;

  hasTransferOptions(): boolean;
  clearTransferOptions(): void;
  getTransferOptions(): TransferAccessMethod | undefined;
  setTransferOptions(value?: TransferAccessMethod): void;

  hasGenericOptions(): boolean;
  clearGenericOptions(): void;
  getGenericOptions(): cs3_types_v1beta1_types_pb.Opaque | undefined;
  setGenericOptions(value?: cs3_types_v1beta1_types_pb.Opaque): void;

  getTermCase(): AccessMethod.TermCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessMethod.AsObject;
  static toObject(includeInstance: boolean, msg: AccessMethod): AccessMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessMethod;
  static deserializeBinaryFromReader(message: AccessMethod, reader: jspb.BinaryReader): AccessMethod;
}

export namespace AccessMethod {
  export type AsObject = {
    webdavOptions?: WebDAVAccessMethod.AsObject,
    webappOptions?: WebappAccessMethod.AsObject,
    transferOptions?: TransferAccessMethod.AsObject,
    genericOptions?: cs3_types_v1beta1_types_pb.Opaque.AsObject,
  }

  export enum TermCase {
    TERM_NOT_SET = 0,
    WEBDAV_OPTIONS = 1,
    WEBAPP_OPTIONS = 2,
    TRANSFER_OPTIONS = 3,
    GENERIC_OPTIONS = 4,
  }
}

export class WebDAVAccessMethod extends jspb.Message {
  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions | undefined;
  setPermissions(value?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDAVAccessMethod.AsObject;
  static toObject(includeInstance: boolean, msg: WebDAVAccessMethod): WebDAVAccessMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebDAVAccessMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDAVAccessMethod;
  static deserializeBinaryFromReader(message: WebDAVAccessMethod, reader: jspb.BinaryReader): WebDAVAccessMethod;
}

export namespace WebDAVAccessMethod {
  export type AsObject = {
    permissions?: cs3_storage_provider_v1beta1_resources_pb.ResourcePermissions.AsObject,
  }
}

export class WebappAccessMethod extends jspb.Message {
  getViewMode(): cs3_app_provider_v1beta1_resources_pb.ViewMode;
  setViewMode(value: cs3_app_provider_v1beta1_resources_pb.ViewMode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebappAccessMethod.AsObject;
  static toObject(includeInstance: boolean, msg: WebappAccessMethod): WebappAccessMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebappAccessMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebappAccessMethod;
  static deserializeBinaryFromReader(message: WebappAccessMethod, reader: jspb.BinaryReader): WebappAccessMethod;
}

export namespace WebappAccessMethod {
  export type AsObject = {
    viewMode: cs3_app_provider_v1beta1_resources_pb.ViewMode,
  }
}

export class TransferAccessMethod extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferAccessMethod.AsObject;
  static toObject(includeInstance: boolean, msg: TransferAccessMethod): TransferAccessMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferAccessMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferAccessMethod;
  static deserializeBinaryFromReader(message: TransferAccessMethod, reader: jspb.BinaryReader): TransferAccessMethod;
}

export namespace TransferAccessMethod {
  export type AsObject = {
  }
}

export enum ShareState {
  SHARE_STATE_INVALID = 0,
  SHARE_STATE_PENDING = 1,
  SHARE_STATE_ACCEPTED = 2,
  SHARE_STATE_REJECTED = 3,
}

export enum ShareType {
  SHARE_TYPE_INVALID = 0,
  SHARE_TYPE_USER = 1,
  SHARE_TYPE_GROUP = 2,
}

