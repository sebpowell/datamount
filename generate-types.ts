require("dotenv").config({ path: ".env.local" });

const { exec } = require("child_process");

const spaceId = process.env.CONTENTFUL_SPACE_ID || "";

const accessToken = process.env.CONTENTFUL_MANAGEMENT_API_TOKEN || "";

exec(
  `npx cf-content-types-generator -s ${spaceId} -t ${accessToken} --v10 --typeguard -o ./src/packages/interfaces`,
  (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);
