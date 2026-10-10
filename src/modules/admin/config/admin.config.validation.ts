import { z } from 'zod';

const updateConfig = z.object({
  value: z.string({
    message: 'Config value is required',
  }),
});

export const configValidation = {
  updateConfig,
};

export type TUpdateConfig = z.infer<typeof configValidation.updateConfig>;
