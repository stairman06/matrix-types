// TODO: Spaces are not fully specced,
// content comes from the MSC
// https://github.com/matrix-org/matrix-doc/blob/main/proposals/1772-groups-as-rooms.md
import { EventsHolder, MatrixStateEventBase } from '../events';

export type Events = EventsHolder<never, SpaceChildEvent | SpaceParentEvent>;

export type SpaceChildEvent = MatrixStateEventBase<
  'm.space.child',
  SpaceChildEventContent
>;

export interface SpaceChildEventContent {
  via: string[];
  order?: string;
  suggested?: boolean;
}

export type SpaceParentEvent = MatrixStateEventBase<
  'm.space.parent',
  SpaceParentEventContent
>;

export interface SpaceParentEventContent {
  via: string[];
  canonical?: boolean;
}
