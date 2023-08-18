import { findOrCreateOne, ensureIdProperty, ensureModelProperty } from "../../utils/osmFunctions/modelHandlers";
import { isGeoJSONFormat } from "../../utils/osmFunctions/dataFormatters";

export const postSingleGeoJSONService = async (geojson) => {
    if (!geojson || !isGeoJSONFormat(geojson)) {
      throw new Error("Invalid or missing geoJSON");
    }
  
    const processedElement = ensureIdProperty(geojson);
    const Model:any = ensureModelProperty(processedElement);
    const newInstance = await findOrCreateOne(Model, processedElement);
    return newInstance;
  };