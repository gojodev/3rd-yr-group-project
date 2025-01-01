(() => {
  // public/javascripts/AICode.js
  async function runCrewAI() {
    try {
      const response = await fetch("https://runpythonscript-ieevug7ulq-nw.a.run.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to execute CrewAI");
      }
      console.log("CrewAI output:", data.output);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  runCrewAI().then((result) => console.log("Success:", result)).catch((error) => console.error("Failed:", error));
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiQUlDb2RlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJhc3luYyBmdW5jdGlvbiBydW5DcmV3QUkoKSB7XHJcbiAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ydW5weXRob25zY3JpcHQtaWVldnVnN3VscS1udy5hLnJ1bi5hcHAnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yIHx8ICdGYWlsZWQgdG8gZXhlY3V0ZSBDcmV3QUknKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0NyZXdBSSBvdXRwdXQ6JywgZGF0YS5vdXRwdXQpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVXNlIGl0XHJcbnJ1bkNyZXdBSSgpXHJcbiAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHJlc3VsdCkpXHJcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZDonLCBlcnJvcikpOyJdLAogICJtYXBwaW5ncyI6ICI7O0FBQUEsaUJBQWUsWUFBWTtBQUN6QixRQUFJO0FBQ0EsWUFBTSxXQUFXLE1BQU0sTUFBTSxtREFBbUQ7QUFBQSxRQUM1RSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0osQ0FBQztBQUVELFlBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyxVQUFJLENBQUMsU0FBUyxJQUFJO0FBQ2QsY0FBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLDBCQUEwQjtBQUFBLE1BQzVEO0FBRUEsY0FBUSxJQUFJLGtCQUFrQixLQUFLLE1BQU07QUFDekMsYUFBTztBQUFBLElBQ1gsU0FBUyxPQUFPO0FBQ1osY0FBUSxNQUFNLFVBQVUsS0FBSztBQUM3QixZQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFHQSxZQUFVLEVBQ1AsS0FBSyxZQUFVLFFBQVEsSUFBSSxZQUFZLE1BQU0sQ0FBQyxFQUM5QyxNQUFNLFdBQVMsUUFBUSxNQUFNLFdBQVcsS0FBSyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
