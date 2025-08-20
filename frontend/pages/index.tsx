import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aegis-ICS</title>
      </Head>
      <main>
        <h1>Aegis-ICS Dashboard</h1>
        <p>Adversarially Robust Anomaly Detection for ICS/IoT Systems.</p>
        <p>
          Backend API Health:{" "}
          <a href="https://your-backend-url/health">Check here</a>
        </p>
      </main>
    </div>
  );
}