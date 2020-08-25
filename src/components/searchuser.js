import React from 'react';

const SearchUser = () => {
  return (
    <form className="px-3 mb-3">
      <div className="form-row align-items-between px-0">
        <div className="col-12">
          <label className="sr-only" htmlFor="inlineFormInputGroup">buscador</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text border-0 mx-0 px-0 border-rounded-10 red-input-search-icon"><i className="fas fa-search px-2"></i></div>
            </div>
            <input type="text" className="form-control border-0 shadow-none fs-09 border-rounded-10 red-input-search" id="inlineFormInputGroup" placeholder="Buscar en mi red de contactos"/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SearchUser;

