exports.successResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    count: Array.isArray(data) ? data.length : 1,
    data,
  });
};

exports.errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
