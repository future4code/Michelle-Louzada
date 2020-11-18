import { connection } from "..";
import { Follow } from "../types/types";

export const insertFollows = async (data: Follow): Promise<void> => {
  const {id, followerId } = data;
  await connection ("follows_cookenu")
    .insert({
      user_to_follow_id: id,
      follower_id: followerId
    })
}