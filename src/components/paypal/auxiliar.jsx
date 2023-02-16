import axios from "axios";


const guardarCompra = async (productos,quantity,price) => {
  try {
    const token = sessionStorage.getItem("token");

    const data = {quantity:quantity,price:price};

    const salida = await axios.post(
      `${import.meta.env.VITE_BASE_URL}comprar/buy/${productos}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return salida;
  } catch (e) {
    console.log(e);
  }
};


const getCompras = async (token,id) => {
  try {
    

    // console.log(token);
    // console.log(id);
    const salida = await axios.get(
      `${import.meta.env.VITE_BASE_URL}comprar/compras/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return salida.data.compras  ;
  } catch (e) {
    console.log(e);
  }
};
export {guardarCompra,getCompras};
