import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList/index";
import Api from "../../services/api";
import moment from "moment";

class Main extends Component {

  state = {
    repositories: [],
    repositoryInput: "",
    repositoryNotFound: false
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    try {

      const { data: repository } = await Api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryInput: "",
        repositoryNotFound: false,
        loading: false
      });

    } catch (error) {
      console.log("Erro na busca do repositório: ", error);
      this.setState({
        repositoryNotFound: true
      });
    } finally {

      this.setState({
        loading: false
      });

    }

  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={this.state.repositoryNotFound} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {
              this.state.loading ? (<i className="fa fa-spinner fa-pulse" />) : ("OK")
            }
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
