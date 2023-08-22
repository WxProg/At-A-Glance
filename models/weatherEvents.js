const weatherEvents = [
  {
    id: 1,
    type: "Hurricane",
    name: "Katrina",
    category: 5,
    affectedAreas: ["Florida", "New Orleans", "Louisiana", "Mississippi"],
    startDate: "2005-08-25",
    endDate: "2005-08-31",
  },
  {
    id: 2,
    type: "Wildfire",
    name: "Katrina",
    category: 5,
    affectedAreas: ["Florida", "New Orleans", "Louisiana", "Mississippi"],
    startDate: "2005-08-25",
    endDate: "2005-08-31",
  },
  {
    id: 3,
    type: "Hurricane",
    name: "Irma",
    category: 5,
    affectedAreas: [
      "Florida",
      "Cape Verde",
      "Leeward Islands",
      "Jamaica",
      "The Bahamas",
      "Cuba",
      "Puerto Rico",
    ],
    startDate: "2017-08-30",
    endDate: "2017-09-13",
  },
  {
    id: 4,
    type: "Tornado",
    name: "Moore Tornado",
    efRating: "EF5",
    affectedAreas: ["Moore OK", "Cleveland OK"],
    startDate: "2013-05-20",
    endDate: "2013-05-20",
  },
];

module.exports = weatherEvents;
