function TeamsMeetingCard() {
  return (
    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Microsoft Teams Meeting
      </h2>

      <p className="text-gray-600 mb-4">
        Meeting Link
      </p>

      <input
        className="w-full border rounded-lg p-3"
        value="https://teams.microsoft.com/meeting/12345"
        readOnly
      />

      <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
        Join Meeting
      </button>

    </div>
  );
}

export default TeamsMeetingCard;