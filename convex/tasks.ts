import { ConvexError, v } from "convex/values";

import { internalMutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("").collect();
  },
});
