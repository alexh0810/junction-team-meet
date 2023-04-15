import connect, { MongodHelper } from "../db_helpers";
import { Team } from "../../src/model/Team.js";
import { createApplication } from "../../src/services/ApplicationService";
import { Application } from "../../src/model/Application";

async function createNewApplication() {
  const newApplication = new Application({
    user_id: 10,
    message: "I want to apply for this role",
  });
  return await createApplication(newApplication);
}

describe("application service", () => {
  let mongodHelper = MongodHelper;
  beforeAll(async () => {
    mongodHelper = await connect();
  });
  afterEach(async () => {
    await mongodHelper.clearDatabase();
  });

  afterAll(async () => {
    await mongodHelper.closeDatabase();
  });
  it("Should create new application", async () => {
    const application = await createNewApplication();
    expect(application).toHaveProperty("user_id", "10");
    expect(application).toHaveProperty(
      "message",
      "I want to apply for this role"
    );
  });
});
