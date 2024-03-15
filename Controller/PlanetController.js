const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const { name, positon } = req.body;

    const planet = await Planet.create({ name, positon });
    return res.json(planet);
  },

  async index(req, res) {
    const planets = await Planet.findAll();

    return res.json(planets);
  },

  async put(req, res) {
    const { name, size, positon } = req.body;
    await Planet.update(
      { name, size, positon },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.send("Planeta atualizado com sucesso!");
  },

  async delete(req, res) {
    await Planet.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Planeta Deletado Com Sucesso!");
  },
};
