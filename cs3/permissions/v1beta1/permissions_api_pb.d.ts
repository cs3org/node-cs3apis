// package: cs3.permissions.v1beta1
// file: cs3/permissions/v1beta1/permissions_api.proto

import * as jspb from 'google-protobuf';
import * as cs3_permissions_v1beta1_resources_pb from '../../../cs3/permissions/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';

export class CheckPermissionRequest extends jspb.Message {
  getPermission(): string;
  setPermission(value: string): void;

  hasSubjectRef(): boolean;
  clearSubjectRef(): void;
  getSubjectRef(): cs3_permissions_v1beta1_resources_pb.SubjectReference | undefined;
  setSubjectRef(value?: cs3_permissions_v1beta1_resources_pb.SubjectReference): void;

  hasRef(): boolean;
  clearRef(): void;
  getRef(): cs3_storage_provider_v1beta1_resources_pb.Reference | undefined;
  setRef(value?: cs3_storage_provider_v1beta1_resources_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionRequest): CheckPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionRequest;
  static deserializeBinaryFromReader(message: CheckPermissionRequest, reader: jspb.BinaryReader): CheckPermissionRequest;
}

export namespace CheckPermissionRequest {
  export type AsObject = {
    permission: string,
    subjectRef?: cs3_permissions_v1beta1_resources_pb.SubjectReference.AsObject,
    ref?: cs3_storage_provider_v1beta1_resources_pb.Reference.AsObject,
  }
}

export class CheckPermissionResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): cs3_rpc_v1beta1_status_pb.Status | undefined;
  setStatus(value?: cs3_rpc_v1beta1_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionResponse): CheckPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionResponse;
  static deserializeBinaryFromReader(message: CheckPermissionResponse, reader: jspb.BinaryReader): CheckPermissionResponse;
}

export namespace CheckPermissionResponse {
  export type AsObject = {
    status?: cs3_rpc_v1beta1_status_pb.Status.AsObject,
  }
}

