import React, { Component } from "react";
import { Container, Repository, Delete } from "./styles";

class CompareList extends Component {

  removeRepository = (e) => {
    this.props.remove(e.target.value);
  }

  render() {
    return (
      <Container>
        {
          this.props.repositories.map(repository => (
            <Repository key={repository.id}>
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
              <Delete
                value={repository.full_name}
                title="Clique para excluir o repositório"
                onClick={this.removeRepository}
              >Delete</Delete>
            </Repository>
          ))
        }
      </Container>
    );
  }

}

export default CompareList;
