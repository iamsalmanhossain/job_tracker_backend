import type { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync.js';
import { adminExportService } from './admin.export.service.js';

const exportUsersToCSV = catchAsync(async (req: Request, res: Response) => {
  const csv = await adminExportService.exportUsersToCSV();

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="users_export.csv"');
  
  res.status(200).send(csv);
});

export const adminExportController = {
  exportUsersToCSV,
};
