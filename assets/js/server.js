// const baseURL = "http://localhost:3000/products";
const baseURL = "https://64c7a82fa1fe0128fbd51998.mockapi.io/api/v1/products";

async function listAllProducts() {
  try {
    const connection = await fetch(baseURL);
    const getProducts = await connection.json();
    if (!connection.ok) {
      throw new Error("Não foi possível listar os produtos!");
    }
    return getProducts;
  } catch (error) {
    console.log(error);
  }
}
async function listProduct(id) {
  const connection = await fetch(`${baseURL}/${id}`);
  const getProduct = await connection.json();
  if (!connection.ok) {
    throw new Error("Não foi possível listar o produto!");
  }
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
  try {
    const create = await connection.json();
    if (!connection.ok) {
      throw new Error("Não foi possível cadastrar o novo produto!");
    }
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
    throw new Error("Erro ao tentar excluir o produto.");
  }
}

async function listProductsPerCategories(category) {
  try {
    const connection = await fetch(`${baseURL}?category=${category}`);
    const getCategory = await connection.json();
    if (!connection.ok) {
      throw new Error("Não foi possível conectar a api!");
    }
    return getCategory;
  } catch (error) {
    console.log(error);
  }
}

async function search(termSearch) {
  const url = new URL(baseURL);
  url.searchParams.append("name", termSearch);

  try {
    const connection = await fetch(url.toString());
    const searchResult = await connection.json();
    return searchResult;
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
  search,
};
