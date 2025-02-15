module.exports = {
  'pass-data': {
    type: 'content-api',
    routes: [
      // Etablissement
      {
        method: 'GET',
        path: '/etablissement',
        handler: 'etablissement.find',
        config: {
          policies: [],
        },
      },
      
      {
        method: "PUT",
        path: "/etablissement",
        handler: "etablissement.update",
        config: {
          policies: [] 
        },
      },
    ]
  }
};