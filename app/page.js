import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <div>
      <Navbar />

      <main>
        <h1>Workout Library</h1>

        <p>Total Workouts: {workouts.length}</p>

      {workouts.map((workout) => (
        <div key={workout.id}>
            <h2>{workout.name}</h2>
            <p>{workout.muscleGroups.join(", ")}</p>
        </div>
      ))}
      </main>

      <Footer />
    </div>
  );
}