// package: cs3.storage.provider.v1beta1
// file: cs3/storage/provider/v1beta1/spaces_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_storage_provider_v1beta1_spaces_api_pb from '../../../../cs3/storage/provider/v1beta1/spaces_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

interface ISpacesAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createStorageSpace: ISpacesAPIService_ICreateStorageSpace;
  listStorageSpaces: ISpacesAPIService_IListStorageSpaces;
  updateStorageSpace: ISpacesAPIService_IUpdateStorageSpace;
  deleteStorageSpace: ISpacesAPIService_IDeleteStorageSpace;
}

interface ISpacesAPIService_ICreateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.SpacesAPI/CreateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse>;
}

interface ISpacesAPIService_IListStorageSpaces extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse> {
  path: '/cs3.storage.provider.v1beta1.SpacesAPI/ListStorageSpaces'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse>;
}

interface ISpacesAPIService_IUpdateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.SpacesAPI/UpdateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse>;
}

interface ISpacesAPIService_IDeleteStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.SpacesAPI/DeleteStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse>;
}

export const SpacesAPIService: ISpacesAPIService;
export interface ISpacesAPIServer extends grpc.UntypedServiceImplementation {
  createStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse>;
  listStorageSpaces: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse>;
  updateStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse>;
  deleteStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse>;
}

export interface ISpacesAPIClient {
  createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
}

export class SpacesAPIClient extends grpc.Client implements ISpacesAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public createStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_spaces_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
}

