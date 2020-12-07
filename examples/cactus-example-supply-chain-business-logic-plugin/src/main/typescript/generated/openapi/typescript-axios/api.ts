/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Example - Supply Chain App
 * Demonstrates how a business use case can be satisifedwith Cactus when multiple distinct ledgers are involved.
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BambooHarvest
 */
export interface BambooHarvest {
    /**
     * 
     * @type {string}
     * @memberof BambooHarvest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BambooHarvest
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof BambooHarvest
     */
    startedAt: string;
    /**
     * 
     * @type {string}
     * @memberof BambooHarvest
     */
    endedAt: string;
    /**
     * 
     * @type {string}
     * @memberof BambooHarvest
     */
    harvester: string;
}
/**
 * 
 * @export
 * @interface Bookshelf
 */
export interface Bookshelf {
    /**
     * 
     * @type {string}
     * @memberof Bookshelf
     */
    id: string;
    /**
     * The number of shelves the bookshelf comes with.
     * @type {number}
     * @memberof Bookshelf
     */
    shelfCount: number;
    /**
     * The foreign key ID referencing the bamboo harvest that yielded the wood material for the construction of the bookshelf.
     * @type {string}
     * @memberof Bookshelf
     */
    bambooHarvestId: string;
}
/**
 * 
 * @export
 * @interface InsertBambooHarvestRequest
 */
export interface InsertBambooHarvestRequest {
    /**
     * 
     * @type {BambooHarvest}
     * @memberof InsertBambooHarvestRequest
     */
    bambooHarvest: BambooHarvest;
}
/**
 * 
 * @export
 * @interface InsertBambooHarvestResponse
 */
export interface InsertBambooHarvestResponse {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof InsertBambooHarvestResponse
     */
    callOutput?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof InsertBambooHarvestResponse
     */
    transactionReceipt?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface InsertBookshelfRequest
 */
export interface InsertBookshelfRequest {
    /**
     * 
     * @type {Bookshelf}
     * @memberof InsertBookshelfRequest
     */
    bookshelf: Bookshelf;
}
/**
 * 
 * @export
 * @interface InsertBookshelfResponse
 */
export interface InsertBookshelfResponse {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof InsertBookshelfResponse
     */
    callOutput?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof InsertBookshelfResponse
     */
    transactionReceipt?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface ListBambooHarvestResponse
 */
export interface ListBambooHarvestResponse {
    /**
     * 
     * @type {Array<BambooHarvest>}
     * @memberof ListBambooHarvestResponse
     */
    data: Array<BambooHarvest>;
}
/**
 * 
 * @export
 * @interface ListBookshelfResponse
 */
export interface ListBookshelfResponse {
    /**
     * 
     * @type {Array<Bookshelf>}
     * @memberof ListBookshelfResponse
     */
    data: Array<Bookshelf>;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Inserts the provided BambooHarvest entity to the ledger.
         * @param {InsertBambooHarvestRequest} [insertBambooHarvestRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1InsertBambooHarvest: async (insertBambooHarvestRequest?: InsertBambooHarvestRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/insert-bamboo-harvest`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof insertBambooHarvestRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(insertBambooHarvestRequest !== undefined ? insertBambooHarvestRequest : {}) : (insertBambooHarvestRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Inserts the provided Bookshelf entity to the ledger.
         * @param {InsertBookshelfRequest} [insertBookshelfRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1InsertBookshelf: async (insertBookshelfRequest?: InsertBookshelfRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/insert-bookshelf`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof insertBookshelfRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(insertBookshelfRequest !== undefined ? insertBookshelfRequest : {}) : (insertBookshelfRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ListBambooHarvest: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-bamboo-harvest`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists all the Bookshelf entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ListBookshelf: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-bookshelf`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Inserts the provided BambooHarvest entity to the ledger.
         * @param {InsertBambooHarvestRequest} [insertBambooHarvestRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1InsertBambooHarvest(insertBambooHarvestRequest?: InsertBambooHarvestRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InsertBambooHarvestResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1InsertBambooHarvest(insertBambooHarvestRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Inserts the provided Bookshelf entity to the ledger.
         * @param {InsertBookshelfRequest} [insertBookshelfRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1InsertBookshelf(insertBookshelfRequest?: InsertBookshelfRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InsertBookshelfResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1InsertBookshelf(insertBookshelfRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ListBambooHarvest(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListBambooHarvestResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1ListBambooHarvest(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists all the Bookshelf entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ListBookshelf(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListBookshelfResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).apiV1ListBookshelf(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Inserts the provided BambooHarvest entity to the ledger.
         * @param {InsertBambooHarvestRequest} [insertBambooHarvestRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1InsertBambooHarvest(insertBambooHarvestRequest?: InsertBambooHarvestRequest, options?: any): AxiosPromise<InsertBambooHarvestResponse> {
            return DefaultApiFp(configuration).apiV1InsertBambooHarvest(insertBambooHarvestRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Inserts the provided Bookshelf entity to the ledger.
         * @param {InsertBookshelfRequest} [insertBookshelfRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1InsertBookshelf(insertBookshelfRequest?: InsertBookshelfRequest, options?: any): AxiosPromise<InsertBookshelfResponse> {
            return DefaultApiFp(configuration).apiV1InsertBookshelf(insertBookshelfRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ListBambooHarvest(options?: any): AxiosPromise<ListBambooHarvestResponse> {
            return DefaultApiFp(configuration).apiV1ListBambooHarvest(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists all the Bookshelf entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ListBookshelf(options?: any): AxiosPromise<ListBookshelfResponse> {
            return DefaultApiFp(configuration).apiV1ListBookshelf(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Inserts the provided BambooHarvest entity to the ledger.
     * @param {InsertBambooHarvestRequest} [insertBambooHarvestRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1InsertBambooHarvest(insertBambooHarvestRequest?: InsertBambooHarvestRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1InsertBambooHarvest(insertBambooHarvestRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Inserts the provided Bookshelf entity to the ledger.
     * @param {InsertBookshelfRequest} [insertBookshelfRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1InsertBookshelf(insertBookshelfRequest?: InsertBookshelfRequest, options?: any) {
        return DefaultApiFp(this.configuration).apiV1InsertBookshelf(insertBookshelfRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists all the BambooHarvest entities stored on the ledger.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1ListBambooHarvest(options?: any) {
        return DefaultApiFp(this.configuration).apiV1ListBambooHarvest(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists all the Bookshelf entities stored on the ledger.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiV1ListBookshelf(options?: any) {
        return DefaultApiFp(this.configuration).apiV1ListBookshelf(options).then((request) => request(this.axios, this.basePath));
    }
}


