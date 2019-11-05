class Storage {
    constructor() {
        this._repositoriesNames = this.recoverRepositoriesNames();
        this._repositoriesList = this.recoverRepositoriesList();
    }

    storeRepositories(names, list) {
        this.repositoriesNames = names;
        this.repositoriesList = list;
        localStorage.setItem("gitcompare/repositoriesNames", JSON.stringify(this.repositoriesNames));
        localStorage.setItem("gitcompare/repositoriesList", JSON.stringify(this.repositoriesList));
    }

    recoverRepositoriesNames() {
        this.repositoriesNames = JSON.parse(localStorage.getItem("gitcompare/repositoriesNames"));
        return this.repositoriesNames || [];
    }

    recoverRepositoriesList() {
        this.repositoriesList = JSON.parse(localStorage.getItem("gitcompare/repositoriesList"));
        return this.repositoriesList || [];
    }

    get repositoriesList() {
        return this._repositoriesList
    }
    set repositoriesList(list) {
        this._repositoriesList = list;
    }

    get repositoriesNames() {
        return this._repositoriesNames;
    }
    set repositoriesNames(names) {
        this._repositoriesNames = names;
    }
}

export default new Storage();