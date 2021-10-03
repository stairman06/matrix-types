import { MatrixEventBase } from '../../events';
import { RoomVersions } from '../rooms';

export type Events = MembershipEvent | RoomCreateEvent | JoinRulesEvent;

export type EventContents =
  | MembershipEventContent
  | RoomCreateEventContent
  | JoinRulesEventContent;

export type MembershipEvent = MatrixEventBase<
  'm.room.member',
  MembershipEventContent
>;

export interface MembershipEventContent {
  avatar_url?: string;
  displayname?: string;
  is_direct?: boolean;
  membership: 'invite' | 'join' | 'knock' | 'leave' | 'ban';
  reason?: string;
  third_party_invite?: ThreePidInvite;
}

interface ThreePidInvite {
  display_name: string;
  signed: InviteSigned;
}

interface InviteSigned {
  mxid: string;
  signatures: Signatures;
  token: string;
}

// TODO move somewhere else
interface Signatures {
  [h: string]: {
    [alg: string]: string;
  };
}

export type RoomCreateEvent = MatrixEventBase<
  'm.room.create',
  RoomCreateEventContent
>;

export interface RoomCreateEventContent {
  creator: string;
  'm.federate'?: boolean;
  predecessor?: Predecessor;
  room_version?: RoomVersions;
}

interface Predecessor {
  event_id: string;
  room_id: string;
}

export type JoinRulesEvent = MatrixEventBase<
  'm.room.join_rules',
  JoinRulesEventContent
>;

export interface JoinRulesEventContent {
  join_rule: JoinRule;
}

export type JoinRule = 'public' | 'knock' | 'invite' | 'private';
