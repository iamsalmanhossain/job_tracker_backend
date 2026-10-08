import httpStatus from 'http-status';
import { catchAsync } from '../../shared/catchAsync.js';
import { sendResponse } from '../../shared/sendResponse.js';
import { followUpService } from './follow-up.service.js';
const createFollowUp = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await followUpService.createFollowUp(userId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Follow-up task created successfully',
        data: result,
    });
});
const getAllFollowUps = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const result = await followUpService.getAllFollowUps(userId, req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Follow-up tasks retrieved successfully',
        data: result,
    });
});
const updateFollowUp = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    const result = await followUpService.updateFollowUp(userId, id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Follow-up task updated successfully',
        data: result,
    });
});
const deleteFollowUp = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const id = req.params.id;
    const result = await followUpService.deleteFollowUp(userId, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Follow-up task deleted successfully',
        data: result,
    });
});
export const followUpController = {
    createFollowUp,
    getAllFollowUps,
    updateFollowUp,
    deleteFollowUp,
};
//# sourceMappingURL=follow-up.controller.js.map