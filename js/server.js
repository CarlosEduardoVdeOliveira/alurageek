const baseURL = "http://localhost:3000/products";

async function listAllProducts() {
  const connection = await fetch(baseURL);
  const getProducts = await connection.json();
  return getProducts;
}
async function listProduct(id) {
  const connection = await fetch(`${baseURL}/${id}`);
  const getProduct = await connection.json();
  return getProduct;
}

async function createProduct(name, description, imageURL, price, category) {
  const connection = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      imageURL: imageURL,
      price: price,
      category: category,
    }),
  });
  if (!connection.ok) {
    throw new Error("Não foi possível cadastrar o novo produto!");
  }
  const create = await connection.json();
  return create;
}

async function updateProduct(id, name, description, imageURL, price, category) {
  const connection = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      imageURL: imageURL,
      price: price,
      category: category,
    }),
  });
  if (!connection.ok) {
    throw new Error("Não foi possível atualizar o produto!");
  }
  const updateProduct = await connection.json();
  return updateProduct;
}

async function deleteProduct(id) {
  const connection = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    if (connection.ok) {
      return { success: true };
    }
  } catch {
    throw new Error("Erro ao excluir o produto.");
  }
}

async function listProductsPerCategories(category) {
  const connection = await fetch(`${baseURL}?category=${category}`);
  const getCategory = await connection.json();
  return getCategory;
}

export const data = {
  listAllProducts,
  listProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  listProductsPerCategories,
};
