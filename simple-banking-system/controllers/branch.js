const db = require("../models");

const getAllBranches = async (req, res) => {
  const allBranches = await db.Branch.findAll({
    include: [
      {
        model: db.Manager,
      },
    ],
  });
  res.status(200).send(allBranches);
};

const createBranchAndManager = async (req, res) => {
  const newManager = await db.Manager.create({
    name: req.body.manager_name,
    experience: req.body.manager_experience,
  });

  const newBranch = await db.Branch.create({
    name: req.body.branch_name,
    size: req.body.branch_size,
    manager_id: newManager.id,
  });
  res.status(201).send(newBranch);
};

module.exports = {
  getAllBranches,
  createBranchAndManager,
};
