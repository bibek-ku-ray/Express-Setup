const { Logger } = require("../config");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) { 
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data,
                },
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo: Destroy");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo: get");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo: update");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo: getAll");
            throw error;
        }
    }
}

module.exports = CrudRepository