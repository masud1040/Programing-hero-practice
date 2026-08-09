function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants)==false || restaurants.length == 0) {
    return "Invalid"
  }

  let topRes = restaurants[0];

  for (const restaurant of restaurants) {
    if (restaurant.rating > topRes.rating) {
      topRes = restaurant
    }
  }

  return topRes.name.toUpperCase()
}

console.log(
  topRatedRestaurant([
    { name: "Chillox", rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
);
