import MainLayout from "../layouts/MainLayout";
import VacancyMatrix from "../components/VacancyMatrix";

function BookingPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Book Conference Room
      </h1>

      <p className="text-gray-600 mb-6">
        Select an available room and time slot to create a booking.
      </p>

      <VacancyMatrix />
    </MainLayout>
  );
}

export default BookingPage;