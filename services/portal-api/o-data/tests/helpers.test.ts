import { ODataQueryHelper } from '../../base/queryHelper';
import { QueryOptions } from '../queryOptions';

describe('queryOptions are formatted correctly to an odata query', () => {
  test('complete query options formats correctly to odata query options', () => {
    const queryOptions: QueryOptions = {
      expandQuery: '$expand=accountGroup',
      filterQuery: "$filter=contains(number, '0')",
      includeCount: true,
      orderbyQuery: '$orderby=number asc',
      selectQuery: '$select=id,name,number',
      skip: 5,
      top: 5
    };

    const odataQuery: string =
      ODataQueryHelper.formatQueryOptionsToOdataQueryOptions(queryOptions);
    // tslint:disable-next-line:no-console
    console.debug(odataQuery);
    expect(odataQuery.length > 0).toBe(true);
  });
});
