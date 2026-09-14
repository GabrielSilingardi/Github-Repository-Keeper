import React from 'react'
import './styles.css';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <div className="item-container" onClick={handleRemove}>
        <div className="container">
          <div className='image'>
            <img src={repo.owner.avatar_url} alt="test" />
            <div className="userName">
                {repo.owner.login}
            </div>
          </div>
          <div className='dados'>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <p>{repo.description}</p>
          </div>
          <div className="buttons">
            <a href={repo.html_url} rel="noreferrer" target="_blank">
                <button className='VerRepositorio'>Ver repositório</button>
            </a>
            <a href="#" rel="noreferrer">
                <button className="Remover">Remover</button>
            </a>
          </div>
        </div>
        <hr />
    </div>
  )
}

export default ItemRepo;
