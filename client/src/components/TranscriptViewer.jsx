function TranscriptViewer() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Meeting Transcript
      </h2>

      <textarea
        className="w-full h-60 border rounded-lg p-4"
        placeholder="Speech to text transcript..."
      />

      <button className="mt-5 bg-blue-700 text-white px-5 py-3 rounded">
        Save Transcript
      </button>

    </div>
  );
}

export default TranscriptViewer;