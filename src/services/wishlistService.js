export const fetchWishlist = async () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  };
  
  export const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  