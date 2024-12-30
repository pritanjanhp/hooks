export function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log("connection to " + roomId + "room at " + serverUrl + "...");
    },
    disconnect() {
      console.log(
        "disconnected from " + roomId + "room at " + serverUrl + "...."
      );
    }
  };
}
