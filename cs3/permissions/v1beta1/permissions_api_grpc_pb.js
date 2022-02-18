// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2021 CERN
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// In applying this license, CERN does not waive the privileges and immunities
// granted to it by virtue of its status as an Intergovernmental Organization
// or submit itself to any jurisdiction.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var cs3_permissions_v1beta1_permissions_api_pb = require('../../../cs3/permissions/v1beta1/permissions_api_pb.js');
var cs3_permissions_v1beta1_resources_pb = require('../../../cs3/permissions/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js');

function serialize_cs3_permissions_v1beta1_CheckPermissionRequest(arg) {
  if (!(arg instanceof cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest)) {
    throw new Error('Expected argument of type cs3.permissions.v1beta1.CheckPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_permissions_v1beta1_CheckPermissionRequest(buffer_arg) {
  return cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_permissions_v1beta1_CheckPermissionResponse(arg) {
  if (!(arg instanceof cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse)) {
    throw new Error('Expected argument of type cs3.permissions.v1beta1.CheckPermissionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_permissions_v1beta1_CheckPermissionResponse(buffer_arg) {
  return cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// PermissionsAPI defines a service for permissions.
var PermissionsAPIService = exports.PermissionsAPIService = {
  // CheckPermission defines a method to check permission/role.
checkPermission: {
    path: '/cs3.permissions.v1beta1.PermissionsAPI/CheckPermission',
    requestStream: false,
    responseStream: false,
    requestType: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionRequest,
    responseType: cs3_permissions_v1beta1_permissions_api_pb.CheckPermissionResponse,
    requestSerialize: serialize_cs3_permissions_v1beta1_CheckPermissionRequest,
    requestDeserialize: deserialize_cs3_permissions_v1beta1_CheckPermissionRequest,
    responseSerialize: serialize_cs3_permissions_v1beta1_CheckPermissionResponse,
    responseDeserialize: deserialize_cs3_permissions_v1beta1_CheckPermissionResponse,
  },
};

exports.PermissionsAPIClient = grpc.makeGenericClientConstructor(PermissionsAPIService);
