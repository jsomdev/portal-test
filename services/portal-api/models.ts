import { FlaggedEnum } from './flaggedEnum';
import { Attribute } from './models/Attribute';
import { AttributeSettings } from './models/AttributeSettingsFlags';
import { Model } from './models/Model';
import { Resource } from './models/Resource';
import { OdataCollection } from './o-data/oData';
import { QueryOptions } from './o-data/queryOptions';
import { ModelsResource } from './resources/ModelsResource';
/**
 * Function that retrieves information about the Models that need to be globally available
 * @returns Collection of Models that will be referenced throughout the application  (e.g Alternative Models, Model information)
 */
export async function fetchGlobalModels(): Promise<OdataCollection<Model>> {
  try {
    const modelsResource: ModelsResource = new ModelsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id,name,seriesId,number,description,seoPath`,
      expandQuery: `image($select=id,url,thumbnail)`,
    };

    const data:
      | OdataCollection<Model>
      | undefined = await modelsResource.getEntities(queryOptions);
    return data;
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the visual resources of a model that will be displayed on the top section of a model page.
 * @param id Guid of the Model
 * @returns Array of Resource
 */
export async function fetchModelResources(id: string): Promise<Resource[]> {
  try {
    const modelsResource: ModelsResource = new ModelsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `resources($select=id,type,variation,caption,url,thumbnail)`,
    };
    const data: Model | undefined = await modelsResource.getEntity(
      id,
      queryOptions
    );
    return data.resources || [];
  } catch (e) {
    throw e;
  }
}

/**
 * Function that retrieves the necessary attributes of a model that are to be displayed as (key) characteristics. (Specification Summary)
 * @param id Guid of the Model
 * @returns Array of Attributes that represent the Key Specifications of a Product Model
 */
export async function fetchModelKeySpecifications(
  id: string
): Promise<Attribute[]> {
  try {
    const modelsResource: ModelsResource = new ModelsResource();

    const queryOptions: Partial<QueryOptions> = {
      selectQuery: `id`,
      expandQuery: `attributes($select=typeCode,value,settings,conditions,displays,sortIndex,id;$filter=settings has SSCo.DigitalHighway.Portal.Data.Enumerations.AttributeSettings'${FlaggedEnum.toString(
        AttributeSettings,
        AttributeSettings.DisplayOnProductCharacteristics
      )}')`,
    };

    const data: Model | undefined = await modelsResource.getEntity(
      id,
      queryOptions
    );
    return data.attributes || [];
  } catch (e) {
    throw e;
  }
}
