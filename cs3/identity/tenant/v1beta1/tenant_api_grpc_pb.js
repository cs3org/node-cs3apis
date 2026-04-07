// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2026 CERN
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
var grpc = require('grpc');
var cs3_identity_tenant_v1beta1_tenant_api_pb = require('../../../../cs3/identity/tenant/v1beta1/tenant_api_pb.js');
var cs3_identity_tenant_v1beta1_resources_pb = require('../../../../cs3/identity/tenant/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_identity_tenant_v1beta1_GetTenantByClaimRequest(arg) {
  if (!(arg instanceof cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimRequest)) {
    throw new Error('Expected argument of type cs3.identity.tenant.v1beta1.GetTenantByClaimRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_tenant_v1beta1_GetTenantByClaimRequest(buffer_arg) {
  return cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_tenant_v1beta1_GetTenantByClaimResponse(arg) {
  if (!(arg instanceof cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimResponse)) {
    throw new Error('Expected argument of type cs3.identity.tenant.v1beta1.GetTenantByClaimResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_tenant_v1beta1_GetTenantByClaimResponse(buffer_arg) {
  return cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_tenant_v1beta1_GetTenantRequest(arg) {
  if (!(arg instanceof cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantRequest)) {
    throw new Error('Expected argument of type cs3.identity.tenant.v1beta1.GetTenantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_tenant_v1beta1_GetTenantRequest(buffer_arg) {
  return cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_tenant_v1beta1_GetTenantResponse(arg) {
  if (!(arg instanceof cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantResponse)) {
    throw new Error('Expected argument of type cs3.identity.tenant.v1beta1.GetTenantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_tenant_v1beta1_GetTenantResponse(buffer_arg) {
  return cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// TenantProvider API.
//
// The TenantProvider API is responsible for providing
// methods to retrieve information about Tenants.
//
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
//
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a successful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
//
// Provides an API for managing users.
var TenantAPIService = exports.TenantAPIService = {
  // Gets the information about a Tenant by the tenant id.
getTenant: {
    path: '/cs3.identity.tenant.v1beta1.TenantAPI/GetTenant',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantRequest,
    responseType: cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantResponse,
    requestSerialize: serialize_cs3_identity_tenant_v1beta1_GetTenantRequest,
    requestDeserialize: deserialize_cs3_identity_tenant_v1beta1_GetTenantRequest,
    responseSerialize: serialize_cs3_identity_tenant_v1beta1_GetTenantResponse,
    responseDeserialize: deserialize_cs3_identity_tenant_v1beta1_GetTenantResponse,
  },
  // Gets the information about a Tenant based on a specified claim.
getTenantByClaim: {
    path: '/cs3.identity.tenant.v1beta1.TenantAPI/GetTenantByClaim',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimRequest,
    responseType: cs3_identity_tenant_v1beta1_tenant_api_pb.GetTenantByClaimResponse,
    requestSerialize: serialize_cs3_identity_tenant_v1beta1_GetTenantByClaimRequest,
    requestDeserialize: deserialize_cs3_identity_tenant_v1beta1_GetTenantByClaimRequest,
    responseSerialize: serialize_cs3_identity_tenant_v1beta1_GetTenantByClaimResponse,
    responseDeserialize: deserialize_cs3_identity_tenant_v1beta1_GetTenantByClaimResponse,
  },
};

exports.TenantAPIClient = grpc.makeGenericClientConstructor(TenantAPIService);
