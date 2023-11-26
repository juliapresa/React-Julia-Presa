import React from 'react';

const TheForm = ({ form, formForm, finalOrder }) => {
  return (
    <>
    <div className='divForm col-md-6 col-sm-12'>
    <form className='form' onSubmit={finalOrder}>
      <label>Nombre:</label>
      <input type="text" name="names" onChange={formForm} required value={form.names}/>
      <label>Numero:</label>
      <input type="text" name="phone" onChange={formForm} required value={form.phone}/>
      <label>Mail:</label>
      <input type="text" name="mail" onChange={formForm} required value={form.mail}/>
      <button className='buttonCheckout' type="submit">Terminar compra</button>
    </form>
    </div>
    </>
  );
}

export default TheForm;
