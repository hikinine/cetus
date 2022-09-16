import { CetusCycle, WarframeData } from './../interface/WarframeData';
import { config } from './../config/index';
import axios from "axios"
export class WarframeCachedDataService {

  private endpoint = config.warframeEndpoint
  private static instance: WarframeCachedDataService

  public cachedCetus: CetusCycle = {} as CetusCycle

  private constructor() {
    const self = this;
    setTimeout(() => self.fetchData(self), 0)
    setInterval(() => self.fetchData(self), 1000 * 30)
  }

  public async fetchData(self: WarframeCachedDataService) {
    const { data } = await axios.get<WarframeData>(this.endpoint);
    self.cachedCetus = data.cetusCycle
  }

  public static getInstance() {
    if (!WarframeCachedDataService.instance) {
      WarframeCachedDataService.instance = new WarframeCachedDataService();
    }
    return WarframeCachedDataService.instance
  };

}