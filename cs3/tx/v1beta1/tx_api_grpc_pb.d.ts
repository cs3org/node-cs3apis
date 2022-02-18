// package: cs3.tx.v1beta1
// file: cs3/tx/v1beta1/tx_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_tx_v1beta1_tx_api_pb from '../../../cs3/tx/v1beta1/tx_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_ocm_v1beta1_resources_pb from '../../../cs3/sharing/ocm/v1beta1/resources_pb';
import * as cs3_tx_v1beta1_resources_pb from '../../../cs3/tx/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

interface ITxAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  pullTransfer: ITxAPIService_IPullTransfer;
  getTransferStatus: ITxAPIService_IGetTransferStatus;
  cancelTransfer: ITxAPIService_ICancelTransfer;
  listTransfers: ITxAPIService_IListTransfers;
  retryTransfer: ITxAPIService_IRetryTransfer;
}

interface ITxAPIService_IPullTransfer extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, cs3_tx_v1beta1_tx_api_pb.PullTransferResponse> {
  path: '/cs3.tx.v1beta1.TxAPI/PullTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.PullTransferRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.PullTransferRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.PullTransferResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.PullTransferResponse>;
}

interface ITxAPIService_IGetTransferStatus extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse> {
  path: '/cs3.tx.v1beta1.TxAPI/GetTransferStatus'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
}

interface ITxAPIService_ICancelTransfer extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse> {
  path: '/cs3.tx.v1beta1.TxAPI/CancelTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
}

interface ITxAPIService_IListTransfers extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse> {
  path: '/cs3.tx.v1beta1.TxAPI/ListTransfers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse>;
}

interface ITxAPIService_IRetryTransfer extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse> {
  path: '/cs3.tx.v1beta1.TxAPI/RetryTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse>;
}

export const TxAPIService: ITxAPIService;
export interface ITxAPIServer extends grpc.UntypedServiceImplementation {
  pullTransfer: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, cs3_tx_v1beta1_tx_api_pb.PullTransferResponse>;
  getTransferStatus: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
  cancelTransfer: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
  listTransfers: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse>;
  retryTransfer: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse>;
}

export interface ITxAPIClient {
  pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
  retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
  retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
}

export class TxAPIClient extends grpc.Client implements ITxAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  public pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  public pullTransfer(request: cs3_tx_v1beta1_tx_api_pb.PullTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.PullTransferResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  public listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  public listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  public listTransfers(request: cs3_tx_v1beta1_tx_api_pb.ListTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.ListTransfersResponse) => void): grpc.ClientUnaryCall;
  public retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
  public retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
  public retryTransfer(request: cs3_tx_v1beta1_tx_api_pb.RetryTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.RetryTransferResponse) => void): grpc.ClientUnaryCall;
}

