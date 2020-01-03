
function getHouses(req, res) {
    const db = req.app.get("db");
  
    db.get_Houses().then(response => {
      res.status(200).json(response).catch(console.log("Error in Get Houses!"));
    });
  }

  function addHouse(req, res) {
    const db = req.app.get("db");
    const { house_name, house_address, city, zip, house_state, img, mortgage, rent } = req.body;
  
    db.add_House(house_name, house_address, city, zip, house_state, img, mortgage, rent).then(
      response => {
        res.status(200).json(response).catch(console.log("Error in add house!"));
      }
    );
  }
  
  function deleteHouse(req, res) {
    const db = req.app.get("db");
    const id = +req.params.id;
  
    db.delete_House(id).then(() => {
      res.sendStatus(200).catch(console.log("Error in Delete Houses!"));
    }
    )
    forceUpdate();
  }

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}