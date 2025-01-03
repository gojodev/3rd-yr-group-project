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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiQUlDb2RlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJhc3luYyBmdW5jdGlvbiBydW5DcmV3QUkoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcnVucHl0aG9uc2NyaXB0LWllZXZ1Zzd1bHEtbncuYS5ydW4uYXBwJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IgfHwgJ0ZhaWxlZCB0byBleGVjdXRlIENyZXdBSScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZXdBSSBvdXRwdXQ6JywgZGF0YS5vdXRwdXQpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVzZSBpdFxyXG5ydW5DcmV3QUkoKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHJlc3VsdCkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRmFpbGVkOicsIGVycm9yKSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLGVBQWUsWUFBWTtBQUN2QixNQUFJO0FBQ0EsVUFBTSxXQUFXLE1BQU0sTUFBTSxtREFBbUQ7QUFBQSxNQUM1RSxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDTCxnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLElBQ0osQ0FBQztBQUVELFVBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyxRQUFJLENBQUMsU0FBUyxJQUFJO0FBQ2QsWUFBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLDBCQUEwQjtBQUFBLElBQzVEO0FBRUEsWUFBUSxJQUFJLGtCQUFrQixLQUFLLE1BQU07QUFDekMsV0FBTztBQUFBLEVBQ1gsU0FBUyxPQUFPO0FBQ1osWUFBUSxNQUFNLFVBQVUsS0FBSztBQUM3QixVQUFNO0FBQUEsRUFDVjtBQUNKO0FBR0EsVUFBVSxFQUNMLEtBQUssWUFBVSxRQUFRLElBQUksWUFBWSxNQUFNLENBQUMsRUFDOUMsTUFBTSxXQUFTLFFBQVEsTUFBTSxXQUFXLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
