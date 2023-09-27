export const cart = [];

export function addToCart(productId){
    let matchingitem;
        
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingitem = cartItem;
      }
    })
    if(matchingitem){
      matchingitem.quantity += 1;
  
    }else{
      cart.push({
        productId: productId,
        quantity: 1
      })
    }
  }