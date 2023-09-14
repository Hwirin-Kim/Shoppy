import React, { useCallback, useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const onChangeHandler = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
    }
    setProduct((product) => ({ ...product, [name]: value }));
  }, []);

  const { addProduct } = useProducts();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 3500);
            },
          }
        );
      })

      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">✅{success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={onSubmitHandler}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          onChange={onChangeHandler}
          placeholder="제품명"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price ?? 0}
          onChange={onChangeHandler}
          placeholder="가격"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          onChange={onChangeHandler}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          onChange={onChangeHandler}
          placeholder="제품설명"
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          onChange={onChangeHandler}
          placeholder="옵션"
          required
        />
        <Button disabled={isUploading}>
          {isUploading ? "업로드중..." : "제품 등록하기"}
        </Button>
      </form>
    </section>
  );
}
