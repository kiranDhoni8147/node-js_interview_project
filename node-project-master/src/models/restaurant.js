const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// first api to create a restaurant (testing the connection)
// exports.createRestaurant = async (req, res) => {
//   try {
//     const newRestaurant = await prisma.restaurant.create({
//       data: {
//         restaurant_name: "Example Restaurant",
//         address: "123 Example Street",
//         vegOnly: true,
//         cost: "Medium",
//         cuisineTypes: ["south indian", "italian", "french", "north indian"],
//       },
//     });
//     console.log("New restaurant created:", newRestaurant);
//   } catch (error) {
//     console.error("Error creating restaurant:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// Create a new restaurant(CREATE)
exports.createRestaurant = async (req, res) => {
  try {
    const newRestaurant = await prisma.restaurant.create({
      data: {
        restaurant_name: req.body.restaurant_name,
        address: req.body.address,
        vegOnly: req.body.vegOnly,
        cost: req.body.cost,
        cuisineTypes: req.body.cuisineTypes,
      },
    });
    res.json(newRestaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ error: "Error creating restaurant" });
  }
};

// To get all restaurants (READ).
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    res.json(restaurants);
  } catch (error) {
    console.error("Error retrieving restaurants:", error);
    res.status(500).json({ error: "Error retrieving restaurants" });
  }
};

// To get a specific restaurant (READ).
exports.findUniqueRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { restaurant_id: id },
    });
    if (!restaurant) {
      res.status(404).json({ error: "Restaurant not found" });
      return;
    }
    res.json(restaurant);
  } catch (error) {
    console.error("Error retrieving restaurant:", error);
    res.status(500).json({ error: "Error retrieving restaurant" });
  }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRestaurant = await prisma.restaurant.update({
      where: { restaurant_id: id },
      data: {
        restaurant_name: req.body.restaurant_name,
        address: req.body.address,
        vegOnly: req.body.vegOnly,
        cost: req.body.cost,
        cuisineTypes: req.body.cuisineTypes,
      },
    });
    res.json(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ error: "Error updating restaurant" });
  }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRestaurant = await prisma.restaurant.delete({
      where: { restaurant_id: id },
    });
    res.json(deletedRestaurant);
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    res.status(500).json({ error: "Error deleting restaurant" });
  }
};
