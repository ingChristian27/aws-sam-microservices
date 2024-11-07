const AWS = require("aws-sdk");

// AWS.config.update({ region: "sa-east-1" });
const dynamoDb = new AWS.DynamoDB.DocumentClient({});

exports.deletePlayer = async (event) => {
  try {
    const tableName = process.env.PLAYER_TABLE;

    const playerId = event.pathParameters.playerId;

    const params = {
      TableName: tableName,
      Key: {
        playerId: playerId,
      },
    };

    await dynamoDb.delete(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Player with ID ${playerId} deleted successfully.`,
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
