import {
  EventsHolder,
  MatrixEventBase,
  MatrixEventType,
  MatrixStateEventBase,
  Signatures,
} from '../../events';
import { RoomType, RoomVersion } from '../../rooms';

export type Events = EventsHolder<
  never,
  MembershipEvent | RoomCreateEvent | JoinRulesEvent | PowerLevelsEvent
>;

export type MembershipEvent = MatrixStateEventBase<
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

export type RoomCreateEvent = MatrixStateEventBase<
  'm.room.create',
  RoomCreateEventContent
>;

export interface RoomCreateEventContent {
  creator: string;
  type?: RoomType;
  'm.federate'?: boolean;
  predecessor?: Predecessor;
  room_version?: RoomVersion;
}

interface Predecessor {
  event_id: string;
  room_id: string;
}

export type JoinRulesEvent = MatrixStateEventBase<
  'm.room.join_rules',
  JoinRulesEventContent
>;

interface BasicJoinRule {
  join_rule: 'public' | 'knock' | 'invite' | 'private';
}

// TODO: Restricted rules are specified via
// https://github.com/matrix-org/matrix-doc/blob/main/proposals/3083-restricted-rooms.md
interface RestrictedJoinRule {
  join_rule: 'restricted';
  allow?: RestrictedRule[];
}

interface RestrictedRule {
  type: 'm.room_membership';
  room_id: string;
}

export type JoinRulesEventContent = BasicJoinRule | RestrictedJoinRule;

export type JoinRule = 'public' | 'knock' | 'invite' | 'private';

export type PowerLevelsEvent = MatrixStateEventBase<
  'm.room.power_levels',
  PowerLevelsEventContent
>;

export interface PowerLevelsEventContent {
  ban?: number;
  events?: PowerLevelsEventMap;
  events_default?: number;
  invite?: number;
  kick?: number;
  notifications?: {
    room?: number;
  };
  redact?: number;
  state_default?: number;
  users?: Record<string, number>;
  users_default?: number;
}

type PowerLevelsEventMap = {
  [t in MatrixEventType]?: number;
};
