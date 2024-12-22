export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Welcome to Life Portrait</h1>
      <div className="mt-5">
        <button className="mr-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">Login</button>
        <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded">Signup</button>
      </div>
    </div>
  );
}
