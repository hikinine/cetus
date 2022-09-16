import { DiscordClient } from './modules/DiscordClient';
import { WarframeCachedDataService } from './modules/WarframeCachedDataService';
const service = WarframeCachedDataService.getInstance()
const discord = DiscordClient.getInstance(service)

discord.setupSetActivityIntervals()
  .then(() => { console.log("setupSetActivityIntervals up") })