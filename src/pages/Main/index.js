import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, Form, Error } from "./styles";
import CompareList from "../../components/CompareList/index";
import Api from "../../services/api";
import moment from "moment";
import Storage from "../../storage/index";

class Main extends Component {

  state = {
    repositories: [],
    repositoryInput: "",
    repositoryError: false,
    repositoriesAdded: [],
    msgError: "",
    loading: false
  }

  addNewRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { repositoryInput, repositoriesAdded, repositories } = this.state;

    try {

      if (!repositoryInput) {
        this.setState({ repositoryError: true, msgError: "Necessário inserir o endereço do repositório" });
      }
      else if (repositoriesAdded.includes(repositoryInput)) {
        this.setState({ repositoryError: true, msgError: "O repositório informado já está cadastrado na lista" });
      } else {

        const { data: repository } = await Api.get(`/repos/${repositoryInput}`);
        repository.lastCommit = moment(repository.pushed_at).fromNow();

        await this.setState({
          repositories: [...repositories, repository],
          repositoryInput: "",
          repositoryError: false,
          repositoriesAdded: [...repositoriesAdded, repositoryInput],
          msgError: "",
          loading: false
        });

        Storage.storeRepositories(this.state.repositoriesAdded, this.state.repositories);

      }
    } catch (error) {
      console.log("Erro na busca do repositório: ", error);
      this.setState({ repositoryError: true, msgError: "O repositório informado não foi encontrado" });
    } finally {
      this.setState({ loading: false });
    }
  }

  removeRepository = async (name) => {
    const { repositories, repositoriesAdded } = this.state;
    const repositoriesAddedClean = repositoriesAdded.filter(rep => `${rep}` !== `${name}`);
    const repositoriesClean = repositories.filter(rep => `${rep.full_name}` !== `${name}`);

    await this.setState({
      repositories: repositoriesClean,
      repositoryInput: "",
      repositoryError: false,
      repositoriesAdded: repositoriesAddedClean,
      msgError: "",
      loading: false
    });

    Storage.storeRepositories(this.state.repositoriesAdded, this.state.repositories);

  }

  async componentDidMount() {
    const repositories = await Storage.recoverRepositoriesList();
    const repositoriesAdded = await Storage.recoverRepositoriesNames();
    this.setState({ repositories, repositoriesAdded });
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={this.state.repositoryError} onSubmit={this.addNewRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {
              this.state.loading ?
                (<i className="fa fa-spinner fa-pulse fa-lg" />)
                :
                ("OK")
            }
          </button>
        </Form>
        {
          this.state.repositoryError ?
            (<Error><i className="fa fa-exclamation-triangle"></i> &nbsp;&nbsp;{this.state.msgError}</Error>)
            :
            ("")
        }
        <CompareList repositories={this.state.repositories} remove={this.removeRepository} />
      </Container>
    );
  }
}

export default Main;
