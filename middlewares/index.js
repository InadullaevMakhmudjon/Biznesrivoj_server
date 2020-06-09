const executer = (promise) => (req, res) => {
      promise(req)
      .then(({data, status}) => res.status(status).json(data))
      .catch(({ response }) => res.status(response.status).json(response.data))
}

const validate = (roleId) => (req, res, next) => {
    if (req.user.roleId !== roleId) next();
    else res.status(400).json({ message: 'Not permitted' });
};

const isNotUser = validate(3);
  
export {
    executer,
    isNotUser
}