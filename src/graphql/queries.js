/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPodcast = /* GraphQL */ `
  query GetPodcast($id: ID!) {
    getPodcast(id: $id) {
      id
      title
      description
      blogUrl
      imageUrl
      time
      date
      user
      s3Url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPodcasts = /* GraphQL */ `
  query ListPodcasts(
    $filter: ModelPodcastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPodcasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        blogUrl
        imageUrl
        time
        date
        user
        s3Url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPodcasts = /* GraphQL */ `
  query SyncPodcasts(
    $filter: ModelPodcastFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPodcasts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        blogUrl
        imageUrl
        time
        date
        user
        s3Url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
