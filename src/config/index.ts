import "dotenv/config"
export const config = {
  secretKey: process.env.DISCORD_SECRET_TOKEN,
  warframeEndpoint: "https://api.warframestat.us/pc/?language=pt"
}  