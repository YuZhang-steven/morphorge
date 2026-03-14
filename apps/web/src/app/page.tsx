import Gallery from "./components/Gallery";
import HomePageInit from "./components/HomePageInit";



export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-400 font-sans gap-5">
      <HomePageInit />
      <Gallery />
    </div>
  );
}
