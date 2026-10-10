import { z } from 'zod';

const updateTicketStatus = z.object({
  status: z.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED']),
});

export const supportValidation = {
  updateTicketStatus,
};

export type TUpdateTicketStatus = z.infer<typeof supportValidation.updateTicketStatus>;
