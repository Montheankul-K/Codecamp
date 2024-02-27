const db = require("../models");
const { sequelize, Sequelize } = require("../models");

const Op = Sequelize.Op;

const getAllManagers = async (req, res) => {
  const allManagers = await db.Manager.findAll();
  res.status(200).send(allManagers);
};

const getAllManagerExperienceMoreThan3Years = async (req, res) => {
  const allManagers = await db.Manager.findAll({
    where: { experience: { [Op.gt]: 3 } },
  });
  res.status(200).send(allManagers);
};

const getManagerById = async (req, res) => {
  const targetManager = await db.Manager.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(targetManager);
};

const createManager = async (req, res) => {
  const newManager = await db.Manager.create({
    name: req.body.name,
    experience: req.body.experience,
  });
  console.log(req.body.name);
  console.log(req.body.experience);
  res.status(201).send(newManager);
};

const updateManager = async (req, res) => {
  await db.Manager.update(
    {
      name: req.body.name,
      experience: req.body.experience,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).send(`updated manager id: ${req.params.id} successfully`);
};

const deleteManager = async (req, res) => {
  await db.Manager.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`deleted manager id: ${req.params.id} successfully`);
};

module.exports = {
  getAllManagers,
  getAllManagerExperienceMoreThan3Years,
  getManagerById,
  createManager,
  updateManager,
  deleteManager,
};
