function AudioPlayer() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Meeting Recording
      </h2>

      <audio controls className="w-full">
        <source src="" type="audio/mpeg" />
      </audio>

      <button className="mt-5 bg-red-600 text-white px-6 py-3 rounded">
        Start Recording
      </button>

    </div>
  );
}

export default AudioPlayer;