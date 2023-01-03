import { BeersType } from "../types/beers";
import { getRequestBuilder, processCall } from "./common/callApi";

export const getbeers = async(
    url: string,
  ): Promise<BeersType[]> => {
    const response = await processCall(
      getRequestBuilder({
        url,
      })
    );
    return response?.data;
  };