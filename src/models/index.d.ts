import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PodcastMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Podcast {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly blogUrl?: string | null;
  readonly imageUrl?: string | null;
  readonly time?: string | null;
  readonly date?: string | null;
  readonly user: string;
  readonly s3Url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Podcast, PodcastMetaData>);
  static copyOf(source: Podcast, mutator: (draft: MutableModel<Podcast, PodcastMetaData>) => MutableModel<Podcast, PodcastMetaData> | void): Podcast;
}