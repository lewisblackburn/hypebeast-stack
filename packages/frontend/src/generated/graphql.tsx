import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type LoginInput = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  upload: Scalars['Boolean'];
  create: Post;
  changePassword: User;
  confirm: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  UserId = 'userId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  password: Scalars['String'];
  email: Scalars['String'];
  displayname: Scalars['String'];
  username: Scalars['String'];
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  confirmed: Scalars['Boolean'];
  email: Scalars['String'];
  username: Scalars['String'];
  displayname: Scalars['String'];
  role: Role;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
  dob: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  posts: Array<Post>;
  following: Array<User>;
  followers: Array<User>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type UserFollowingArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type UserFollowersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  confirmed?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  displayname?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  bio?: Maybe<SortOrder>;
  location?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  dob?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Confirmed = 'confirmed',
  Email = 'email',
  Username = 'username',
  Displayname = 'displayname',
  Password = 'password',
  Role = 'role',
  Avatar = 'avatar',
  Bio = 'bio',
  Location = 'location',
  Website = 'website',
  Dob = 'dob',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  confirmed?: Maybe<BoolFilter>;
  email?: Maybe<StringFilter>;
  username?: Maybe<StringFilter>;
  displayname?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  avatar?: Maybe<StringFilter>;
  bio?: Maybe<StringFilter>;
  location?: Maybe<StringFilter>;
  website?: Maybe<StringFilter>;
  dob?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  followers?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'username' | 'displayname' | 'avatar'>
);

export type ConfirmMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirm'>
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export type UploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'upload'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
  displayname
  avatar
}
    `;
export const ConfirmDocument = gql`
    mutation Confirm($token: String!) {
  confirm(token: $token)
}
    `;
export type ConfirmMutationFn = Apollo.MutationFunction<ConfirmMutation, ConfirmMutationVariables>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options);
      }
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadDocument = gql`
    mutation Upload($file: Upload!) {
  upload(file: $file)
}
    `;
export type UploadMutationFn = Apollo.MutationFunction<UploadMutation, UploadMutationVariables>;

/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMutation(baseOptions?: Apollo.MutationHookOptions<UploadMutation, UploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMutation, UploadMutationVariables>(UploadDocument, options);
      }
export type UploadMutationHookResult = ReturnType<typeof useUploadMutation>;
export type UploadMutationResult = Apollo.MutationResult<UploadMutation>;
export type UploadMutationOptions = Apollo.BaseMutationOptions<UploadMutation, UploadMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;