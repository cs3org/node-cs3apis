// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2025 CERN
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
var cs3_ocm_invite_v1beta1_invite_api_pb = require('../../../../cs3/ocm/invite/v1beta1/invite_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_ocm_invite_v1beta1_resources_pb = require('../../../../cs3/ocm/invite/v1beta1/resources_pb.js');
var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.DeleteAcceptedUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.DeleteAcceptedUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetAcceptedUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetAcceptedUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ListInviteTokensRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ListInviteTokensRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ListInviteTokensRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ListInviteTokensResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ListInviteTokensResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ListInviteTokensResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Invite API
//
// The Invite API is meant to invite users and groups belonging to other
// sync'n'share systems, so that collaboration of resources can be enabled.
//
// The following APIs match the OCM v1.1 spec for the /invite-accepted endpoint.
//
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
//
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a succesful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
var InviteAPIService = exports.InviteAPIService = {
  // Generates a new token for the user with a validity of 24 hours.
generateInviteToken: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
  },
  // Lists the valid tokens generated by the user.
listInviteTokens: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/ListInviteTokens',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.ListInviteTokensResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_ListInviteTokensRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_ListInviteTokensRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_ListInviteTokensResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_ListInviteTokensResponse,
  },
  // Forwards a received invite to the remote sync'n'share system provider. The remote
// system SHALL get an `invite-accepted` call as follows:
// https://cs3org.github.io/OCM-API/docs.html?branch=v1.2.0&repo=OCM-API&user=cs3org#/paths/~1invite-accepted/post
// MUST return CODE_NOT_FOUND if the token does not exist.
// MUST return CODE_INVALID_ARGUMENT if the token expired.
// MUST return CODE_ALREADY_EXISTS if the user already accepted an invite.
// MUST return CODE_PERMISSION_DENIED if the remote service is not trusted to accept invitations.
forwardInvite: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
  },
  // Completes an invitation acceptance.
// MUST return CODE_NOT_FOUND if the token does not exist.
// MUST return CODE_INVALID_ARGUMENT if the token expired.
// MUST return CODE_ALREADY_EXISTS if the user already accepted an invite.
acceptInvite: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
  },
  // Retrieves details about a remote user who has accepted an invite to share.
// MUST return CODE_NOT_FOUND if the user does not exist.
getAcceptedUser: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse,
  },
  // Finds users who accepted invite tokens by their attributes.
findAcceptedUsers: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse,
  },
  // Delete a previously accepted remote user, that is unfriend that user.
// MUST return CODE_NOT_FOUND if the user does not exist.
deleteAcceptedUser: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/DeleteAcceptedUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.DeleteAcceptedUserResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_DeleteAcceptedUserResponse,
  },
};

exports.InviteAPIClient = grpc.makeGenericClientConstructor(InviteAPIService);
