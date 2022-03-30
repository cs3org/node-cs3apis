// package: cs3.preferences.v1beta1
// file: cs3/preferences/v1beta1/resources.proto

import * as jspb from 'google-protobuf';

export class PreferenceKey extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferenceKey.AsObject;
  static toObject(includeInstance: boolean, msg: PreferenceKey): PreferenceKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreferenceKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferenceKey;
  static deserializeBinaryFromReader(message: PreferenceKey, reader: jspb.BinaryReader): PreferenceKey;
}

export namespace PreferenceKey {
  export type AsObject = {
    namespace: string,
    key: string,
  }
}

