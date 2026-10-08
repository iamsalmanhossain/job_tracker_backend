import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { dashboardService } from './dashboard.service.js';
const getUserDashboardData = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await dashboardService.getUserDashboardData(userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Dashboard data retrieved successfully',
        data: result,
    });
});
export const dashboardController = {
    getUserDashboardData,
};
//# sourceMappingURL=dashboard.controller.js.map