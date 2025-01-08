import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axioxSecure = useAxiosSecure();
  const { data: cart = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () =>{
      const res = await axioxSecure.get('/carts');
      return res.data;
    }
  })
  return [cart];

};

export default useCart;