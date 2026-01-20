const requestCounts = {};
const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 15;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  const timePassed = currentTime - requestCounts[ip].startTime;

  if (timePassed > WINDOW_SIZE) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  if (requestCounts[ip].count >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestCounts[ip].count++;
  next();
};

export default rateLimiter;
