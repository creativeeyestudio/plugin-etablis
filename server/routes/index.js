module.exports = [
  // Etablissement
  {
    method: 'GET',
    path: '/etablissement',
    handler: 'etablissement.find',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/etablissement",
    handler: "etablissement.update",
    config: { 
      auth: false,
      policies: [] 
    },
  },
];
