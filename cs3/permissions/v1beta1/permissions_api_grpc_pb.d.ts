// package: cs3.permissions.v1beta1
// file: cs3/permissions/v1beta1/permissions_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_permissions_v1beta1_permissions_api_pb from '../../../cs3/permissions/v1beta1/permissions_api_pb';
import * as cs3_permissions_v1beta1_resources_pb from '../../../cs3/permissions/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';

interface IPermissionsAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  checkPermission: IPermissionsAPIService_ICheckPermission;
}

interface IPermissionsAPIService_ICheckPermission extends grpc.MethodDefinition<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse> {
  path: '/cs3.permissions.v1beta1.PermissionsAPI/CheckPermission'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest>;
  requestDeserialize: grpc.deserialize<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest>;
  responseSerialize: grpc.serialize<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse>;
  responseDeserialize: grpc.deserialize<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse>;
}

export const PermissionsAPIService: IPermissionsAPIService;
export interface IPermissionsAPIServer extends grpc.UntypedServiceImplementation {
  checkPermission: grpc.handleUnaryCall<cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse>;
}

export interface IPermissionsAPIClient {
  checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
  checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
  checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
}

export class PermissionsAPIClient extends grpc.Client implements IPermissionsAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
  public checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
  public checkPermission(request: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse) => void): grpc.ClientUnaryCall;
}

