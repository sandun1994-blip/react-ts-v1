export type CartItemType={
    sku:string,
    name:string,
    price:number,
    qty:number
}
type CartStateType ={cart:CartItemType[]}

const initCarState:CartStateType={

    cart:[]

}


const REDUCER_ACTION_TYPE={
    ADD:"ADD",
    REMOVE:"REMOVE",
    QUANTITY:"QUANTITY",
    SUBMIT:"SUBMIT"
}

export type ReducerActionType =typeof REDUCER_ACTION_TYPE

export type ReducerAction={
    type:string,
    payload?:CartItemType
}


const reducer =(state:CartStateType,action:ReducerAction):CartStateType=>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD:{
              if (!action.payload) {
                throw new Error('action.payload missing in ADD action') 
              }

              const {sku,name,price}=action.payload
              const filteredCart:CartItemType[]=state.cart.filter(item=>item.sku!= sku)

              const itemExists:CartItemType| undefined =state.cart.find(item=>item.sku===sku)
              const qty:number =itemExists?itemExists.qty+1:1

              return {...state,cart:[...filteredCart,{sku,name,price,qty}]}
        }
        // eslint-disable-next-line no-fallthrough
        case REDUCER_ACTION_TYPE.REMOVE:{
            if (!action.payload) {
                throw new Error('action.payload missing in REMOVE action') 
              }

              const {sku,name,price}=action.payload

        }
        // eslint-disable-next-line no-fallthrough
        case REDUCER_ACTION_TYPE.QUANTITY:{
            if (!action.payload) {
                throw new Error('action.payload missing in QUANTITY action') 
              }

        }
        // eslint-disable-next-line no-fallthrough
        case REDUCER_ACTION_TYPE.SUBMIT:{
          return {...state,cart:[]}
        }   
        default:
            throw new Error('undefine reducer type') ;
    }
}