import { RawClientSideBasePluginConfig } from "@graphql-codegen/visitor-plugin-common";

/**
 * @description This plugin generates React Apollo components and HOC with TypeScript typings.
 *
 * It extends the basic TypeScript plugins: `@graphql-codegen/typescript`, `@graphql-codegen/typescript-operations` - and thus shares a similar configuration.
 */
export interface ApolloCacheRawPluginConfig
  extends RawClientSideBasePluginConfig {
  /**
   * @description Customized the output by enabling/disabling the generated React Hooks.
   * @default false
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-react-apollo
   *  config:
   *    withHooks: false
   * ```
   */
  withHooks?: boolean;

  /**
   * @description Customize the package where apollo-react common lib is loaded from.
   * @default "@apollo/react-common"
   */
  apolloReactCommonImportFrom?: string;

  /**
   * @description Customize the package where apollo-client lib is loaded from.
   * @default "apollo-client"
   */
  apolloImportFrom?: string;

  /**
   * @description Customize the package where apollo-cache-inmemory lib is loaded from.
   * @default "apollo-cache-inmemory"
   */
  apolloCacheImportFrom?: string;

  /**
   * @description Customize the package where apollo-react hooks lib is loaded from.
   * @default "@apollo/react-hooks"
   */
  apolloReactHooksImportFrom?: string;

  /**
   * @description Sets the version of react-apollo.
   * @default 2
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-react-apollo
   *  config:
   *    reactApolloVersion: 3
   * ```
   */
  apolloVersion?: 2 | 3;
  /**
   * @description Regexp to exclude a certain operation name
   */
  excludePatterns?: string;
  /**
   * @description Regexp options to exclude a certain operation name
   */
  excludePatternsOptions?: string;
  /**
   * @description Path to custom DataIdFromObject import
   */
  dataIdFromObjectImport?: string;
  /**
   * @description Path to custom DataIdFromObject function
   */
  dataIdFromObjectName?: string;
  generateFragmentsRead?: boolean;
  generateFragmentsWrite?: boolean;
  generateQueriesRead?: boolean;
  generateQueriesWrite?: boolean;
}
