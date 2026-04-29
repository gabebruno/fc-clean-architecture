import request from "supertest";
import Product from "../../../domain/product/entity/product";
import ProductRepository from "../../product/repository/sequelize/product.repository";
import { app, sequelize } from "../express";

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should list all products in json", async () => {
    const productRepository = new ProductRepository();
    await productRepository.create(new Product("1", "Product 1", 100));
    await productRepository.create(new Product("2", "Product 2", 200));

    const response = await request(app).get("/product").send();

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      products: [
        {
          id: "1",
          name: "Product 1",
          price: 100,
        },
        {
          id: "2",
          name: "Product 2",
          price: 200,
        },
      ],
    });
  });
});
