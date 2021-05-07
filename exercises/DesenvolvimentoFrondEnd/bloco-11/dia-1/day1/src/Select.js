import React from 'react';

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
    <label>
    Escolha seu sabor favorito:
    <select name="palavraChave" value={value} onChange={handleChange}>
      <option value="laranja">Laranja</option>
      <option value="limao">Limão</option>
      <option value="coco">Coco</option>
      <option value="manga">Manga</option>
    </select>
  </label>
  )
  }
}

export default Select;