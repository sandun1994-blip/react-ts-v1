import { useContext } from "react";
import ProductsContext, { UseProductsContextType } from "../context/ProductProvider";

const useProducts=():UseProductsContextType=>{
    return useContext(ProductsContext)
}


export default useProducts