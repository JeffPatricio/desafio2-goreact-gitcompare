import React, { Component } from "react";
import { Container, Repository, Delete, Update } from "./styles";

class CompareList extends Component {

  removeRepository = (e) => {
    this.props.remove(e.target.value);
  }

  updateRepository = (e) => {
    this.props.update(e.target.value);
  }

  render() {
    return (
      <Container>
        {
          this.props.repositories.map(repository => (
            <Repository key={repository.id}>
              {
                this.props.updating.includes(repository.full_name) ?
                  (
                    <Update
                      className="fa fa-refresh fa-pulse"
                      title="Atualizando repositório..."
                    />
                  )
                  :
                  (
                    <Update
                      className="fa fa-refresh"
                      value={repository.full_name}
                      onClick={this.updateRepository}
                      title="Clique para atualizar o repositório"
                    />
                  )
              }
              <header>
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                <strong>{repository.name}</strong>
                <small>{repository.owner.login}</small>
              </header>
              <ul>
                <li>
                  {repository.stargazers_count} <small>Stars</small>
                </li>
                <li>
                  {repository.forks_count} <small>Forks</small>
                </li>
                <li>
                  {repository.open_issues_count} <small>Issues</small>
                </li>
                <li>
                  {repository.lastCommit} <small>Last Commit</small>
                </li>
              </ul>
              {
                this.props.updating.includes(repository.full_name) ?
                  (
                    <Delete
                      value={repository.full_name}
                      title="Atualizando o repositório..."
                    ><i className="fa fa-spinner fa-pulse" /></Delete>
                  )
                  :
                  (
                    <Delete
                      className="fa fa-trash fa-lg"
                      value={repository.full_name}
                      title="Clique para excluir o repositório"
                      onClick={this.removeRepository}
                    />
                  )
              }
            </Repository>
          ))
        }
      </Container>
    );
  }

}

export default CompareList;
