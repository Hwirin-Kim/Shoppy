import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { useAuthContext } from "../components/context/AuthContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "../Firebase";

export default function useCarts() {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(
    ["carts", user.uid || ""],
    () => getCart(user.uid),
    {
      enabled: !!user.uid,
    }
  );

  const addCart = useMutation(
    (product) => addOrUpdateToCart(user.uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", user.uid]);
      },
    }
  );

  const removeCart = useMutation(
    (productId) => removeFromCart(user.uid, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", user.uid]);
      },
    }
  );
  return { cartsQuery, addCart, removeCart };
}
