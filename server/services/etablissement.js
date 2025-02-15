module.exports = ({ strapi }) => ({
    async find(ctx) {
        const etablissement = await strapi.entityService.findOne("plugin::etablis.etablissement", 1, {
            populate: { category: true },
        });

        return etablissement || {};
    },

    async update(ctx) {
        const { nom, type, adresse, code_postal, ville, telephone, email } = ctx.request.body;

        try {
            if (!ctx.state.user) {
                return ctx.unauthorized("Vous devez être authentifié pour effectuer cette action.");
            }
            
            const currData = await strapi.entityService.findOne('plugin::etablis.etablissement', 1);

            if (!currData) {
                return ctx.throw(404, 'Infos non trouvées');
            }

            const data = await strapi.entityService.update('plugin::etablis.etablissement', 1, {
                data: {
                    nom, type, adresse, code_postal, ville, telephone, email
                },
            });
    
            return ctx.send(data);
        } catch (error) {
            console.error("Erreur dans update:", error); // Ajout d'un log pour le debug
            ctx.throw(500, error.message);
        }
    },
});
