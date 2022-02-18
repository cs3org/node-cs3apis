// package: cs3.permissions.v1beta1
// file: cs3/permissions/v1beta1/resources.proto

import * as jspb from 'google-protobuf';
import * as cs3_identity_group_v1beta1_resources_pb from '../../../cs3/identity/group/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../cs3/identity/user/v1beta1/resources_pb';

export class SubjectReference extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): cs3_identity_user_v1beta1_resources_pb.UserId | undefined;
  setUserId(value?: cs3_identity_user_v1beta1_resources_pb.UserId): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): cs3_identity_group_v1beta1_resources_pb.GroupId | undefined;
  setGroupId(value?: cs3_identity_group_v1beta1_resources_pb.GroupId): void;

  getSpecCase(): SubjectReference.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectReference.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectReference): SubjectReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubjectReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectReference;
  static deserializeBinaryFromReader(message: SubjectReference, reader: jspb.BinaryReader): SubjectReference;
}

export namespace SubjectReference {
  export type AsObject = {
    userId?: cs3_identity_user_v1beta1_resources_pb.UserId.AsObject,
    groupId?: cs3_identity_group_v1beta1_resources_pb.GroupId.AsObject,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    USER_ID = 1,
    GROUP_ID = 2,
  }
}

