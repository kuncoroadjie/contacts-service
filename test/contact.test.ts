import { ContactTest, UserTest } from "./test-utils";
import supertest from "supertest";
import { web } from "../src/application/web"
import { logger } from "../src/application/logging";

describe('POST /api/contacts', () => {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await ContactTest.deleteAll();
    await UserTest.delete();
  });

  it('should create new contact', async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "kuncoro",
        last_name: "adji",
        email: "kuncoroadji@gmail.com",
        phone: "087123123123",
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.first_name).toBe("kuncoro");
    expect(response.body.data.last_name).toBe("adji");
    expect(response.body.data.email).toBe("kuncoroadji@gmail.com");
    expect(response.body.data.phone).toBe("087123123123");
  });

  it('should reject create new contact if data is invalid', async () => {
    const response = await supertest(web)
      .post("/api/contacts")
      .set("X-API-TOKEN", "test")
      .send({
        first_name: "",
        last_name: "",
        email: "",
        phone: "087123123123123123123",
      });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
})