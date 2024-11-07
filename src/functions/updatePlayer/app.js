const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient({});

exports.updatePlayer = async (event) => {
  try {
    const tableName = process.env.PLAYER_TABLE;

    const playerId = event.pathParameters.playerId;
    const { name, position, team } = JSON.parse(event.body);

    const params = {
      TableName: tableName,
      Key: { playerId },
      UpdateExpression:
        "SET #name = :name, #position = :position, #team = :team",
      ExpressionAttributeNames: {
        "#name": "name",
        "#position": "position",
        "#team": "team",
      },
      ExpressionAttributeValues: {
        ":name": name,
        ":position": position,
        ":team": team,
      },
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDb.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Player updated successfully",
        player: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("***** Error updating player:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred updating the player" }),
    };
  }
};
