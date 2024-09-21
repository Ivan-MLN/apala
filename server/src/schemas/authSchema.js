const { z } = require("zod");

const authSchema = z.object({
    name: z.string().min(3).max(12),
    id: z.string().min(3),
    phone: z.string()
});

module.exports = authSchema;