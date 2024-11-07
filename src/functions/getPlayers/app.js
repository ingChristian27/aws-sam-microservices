const AWS = require("aws-sdk");

// AWS.config.update({ region: "sa-east-1" });
const dynamoDb = new AWS.DynamoDB.DocumentClient({});

exports.getPlayers = async (event) => {
  try {
    const params = {
      TableName: process.env.PLAYER_TABLE,
    };

    const result = await dynamoDb.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        response: result.Items,
      }),
    };
  } catch (error) {
    console.error("Error creating player:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred creating the player" }),
    };
  }
};
