const baseURL = "http://localhost:3000/products";
const baseURLDeploy = "https://64b52385f3dbab5a95c6c6ad.mockapi.io/products";

async function listAllProducts() {
  try {
    const connection = await fetch(baseURL);
    const getProducts = await connection.json();
    return getProducts;
  } catch (error) {
    console.log(error);
  }
}
async function listProduct(id) {
  try {
    const connection = await fetch(`${baseURL}/${id}`);
    const getProduct = await connection.json();
    return getProduct;
  } catch (error) {
    console.log(error);
  }
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
  try {
    if (!connection.ok) {
      throw new Error("Não foi possível cadastrar o novo produto!");
    }
    const create = await connection.json();
    return create;
  } catch (error) {
    console.log(error);
  }
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
  try {
    if (!connection.ok) {
      throw new Error("Não foi possível atualizar o produto!");
    }
    const updateProduct = await connection.json();
    return updateProduct;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const connection = await fetch(`${baseURL}?category=${category}`);
    const getCategory = await connection.json();
    return getCategory;
  } catch (error) {
    console.log(error);
  }
}

export const data = {
  listAllProducts,
  listProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  listProductsPerCategories,
};
