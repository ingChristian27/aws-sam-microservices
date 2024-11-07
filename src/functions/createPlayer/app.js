const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.createPlayer = async (event) => {
  try {
    const { name, age, position, team } = JSON.parse(event.body);

    const params = {
      TableName: process.env.PLAYER_TABLE,
      Item: {
        playerId: uuidv4(),
        name,
        age,
        position,
        team,
      },
    };

    await dynamoDb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        response: "Player created successfully",
        params,
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
