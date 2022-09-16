import { millisToMinutesAndSeconds, seconds } from './../utils/index';
import { WarframeCachedDataService } from './WarframeCachedDataService';
import { Client } from 'discord.js';
import { config } from '../config';
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { isDefined } from '../utils';
import "dotenv/config"
dayjs.extend(relativeTime)


export class DiscordClient {
  private activity = { name: "PLAYING" }
  private static instance: DiscordClient
  public client: Client<boolean>

  private constructor(private service: WarframeCachedDataService) {
    this.client = new Client({ intents: [] });
  }

  public async setupSetActivityIntervals() {
    const self = this;

    await self.client.login(config.secretKey);
    self.client.on("ready", () => {
      setTimeout(() => self.setActivity(self), seconds(1))
      setInterval(() => self.setActivity(self), seconds(5))
    })
  }
  private async setActivity(self: DiscordClient) {
    const { expiry, state } = self.service.cachedCetus
    if (isDefined(expiry)) {
      const now = new Date()
      const expiryDate = new Date(expiry)
      const relativeTimeFromNow = millisToMinutesAndSeconds(expiryDate.getTime() - now.getTime())
      const thisState = state === "day" ? " to 🌚" : " to 🌞";
      self.client.user?.setActivity(relativeTimeFromNow + thisState, self.activity);
    }
  }

  public static getInstance(service: WarframeCachedDataService) {
    if (!DiscordClient.instance) {
      DiscordClient.instance = new DiscordClient(service);
    }
    return DiscordClient.instance
  };




}