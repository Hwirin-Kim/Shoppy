import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { addNewProduct, getAllProducts } from "../Firebase";

export default function useProducts() {
  const queryClient = useQueryClient;

  const getProduct = useQuery(["getAllProducts"], getAllProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    { onSuccess: () => queryClient.invalidateQueries(["getAllProducts"]) }
  );

  return { getProduct, addProduct };
}
