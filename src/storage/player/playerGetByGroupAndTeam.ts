import { playersGetByGroup } from "./playersGetByGroup"

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const playersByGroup = await playersGetByGroup(group)

    const players = playersByGroup.filter(player => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}