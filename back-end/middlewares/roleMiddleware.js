const isFarmer = (req, res, next) => {
    if (req.user && req.user.role === 'Seller') {
      next();
    } else {
      res.status(403);
      throw new Error('Access denied. Only farmers are allowed.');
    }
  };
  
  const isBuyer = (req, res, next) => {
    if (req.user && req.user.role === 'Buyer') {
      next();
    } else {
      res.status(403);
      throw new Error('Access denied. Only buyers are allowed.');
    }
  };
  
  export { isFarmer, isBuyer };