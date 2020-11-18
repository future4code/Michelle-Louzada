import { connection } from "..";
import { Unfollow } from "../types/types";

export const removeFollow = async (data: Unfollow): Promise<void> => {
  const {id, unfollowerId } = data;
  await connection ("follows_cookenu")

      .where (`user_to_follow_id`, id)
      .del()

}